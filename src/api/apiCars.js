// async function fetchCarData() {
//     try {
//       const response = await fetch("http://localhost:1337/api/tests?populate=*");
//       if (!response.ok) {
//         throw new Error("Ошибка при получении данных");
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error(error);
//       return [];
//     }
//   }
  
//   // Функция для выполнения операций с полученными данными
//   function processData(carData) {
//     // Выводим данные в консоль, чтобы увидеть их структуру
//     console.log("Полученные данные:", carData);
  
//     // Пример: вывод информации о первом автомобиле
//     if (carData.length > 0) {
//       const firstCar = carData[0];
//       console.log("ID:", firstCar.id);
//       console.log("Make:", firstCar.make);
//       console.log("Model:", firstCar.model);
//       // Добавьте здесь дополнительные операции с данными, если это необходимо
//     } else {
//       console.log("Получены пустые данные");
//     }
//   }
  
//   // Пример использования функции для получения данных и их обработки
//   fetchCarData()
//     .then((carData) => {
//       processData(carData);
//     })
//     .catch((error) => {
//       console.error(error);
//     });

async function fetchCarData() {
  try {
    const reqOptions = {
      headers: {
        Authorization: "Bearer 89c12a367b7fd6ff6b9c9f7a3789080b8d33e55b36936b4b7bc0ff9f47d7be41aaa6c3aa0ad43b2a5d226f5a6dec28d0842998b6653565ca8323c9c71e6896c8b4a7424e9bba46f94fbac402c02ebb92b13ce17e819c3935b45160e913dcfc6710e865407bea975b7cdcd7a2246f8634c164a65db4dd04e9f9a07a0370a4ce97"
      }
    };

    const response = await fetch("http://localhost:1337/api/tests?populate=*", reqOptions);

    if (!response.ok) {
      throw new Error("Ошибка при получении данных");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Функция для выполнения операций с полученными данными
function processData(carData) {
  // Выводим данные в консоль, чтобы увидеть их структуру
  console.log("Полученные данные:", carData);

  // Пример: вывод информации о первом автомобиле
  if (carData.length > 0) {
    const firstCar = carData[0];
    console.log("ID:", firstCar.id);
    console.log("Make:", firstCar.make);
    console.log("Model:", firstCar.model);
    // Добавьте здесь дополнительные операции с данными, если это необходимо
  } else {
    console.log("Получены пустые данные");
  }
}

// Пример использования функции для получения данных и их обработки
fetchCarData()
  .then((carData) => {
    processData(carData);
  })
  .catch((error) => {
    console.error(error);
  });
