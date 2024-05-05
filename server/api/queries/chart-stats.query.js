const { connection } = require('../../config/db');
const { ObjectId } = require('mongodb');

async function getOrderCounts() {
  try {
    const db = await connection();
    const collection = db.collection("orders");

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0');
    const daysInMonth = new Date(currentYear, currentDate.getMonth() + 1, 0).getDate(); // Количество дней в текущем месяце

    const yearCountPipeline = [
      {
        $match: {
          "orderDate": {
            $regex: `^${currentYear}`,
          }
        }
      },
      {
        $group: {
          _id: { $substr: ["$orderDate", 5, 2] },
          count: { $sum: 1 }
        }
      }
    ];

    const monthCountPipeline = [
      {
        $match: {
          "orderDate": {
            $regex: `^${currentYear}-${currentMonth}`,
          }
        }
      },
      {
        $group: {
          _id: { $substr: ["$orderDate", 8, 2] },
          count: { $sum: 1 }
        }
      }
    ];

    const [yearCounts, monthCounts] = await Promise.all([
      collection.aggregate(yearCountPipeline).toArray(),
      collection.aggregate(monthCountPipeline).toArray()
    ]);

    const yearCountsArray = Array(12).fill(0); // Создаем массив из 12 элементов, заполненный нулями
    const monthCountsArray = Array(daysInMonth).fill(0); // Создаем массив из числа дней текущего месяца, заполненный нулями

    yearCounts.forEach(item => {
      yearCountsArray[parseInt(item._id) - 1] = item.count; // Записываем количество заказов в соответствующий месяц
    });

    monthCounts.forEach(item => {
      monthCountsArray[parseInt(item._id) - 1] = item.count; // Записываем количество заказов в соответствующий день
    });

    return { yearCounts: yearCountsArray, monthCounts: monthCountsArray };
  } catch (error) {
    console.error("Произошла ошибка:", error);
    return { yearCounts: Array(12).fill(0), monthCounts: Array(31).fill(0) }; // Возвращаем массивы из нулей в случае ошибки
  }
}

module.exports = { getOrderCounts };
