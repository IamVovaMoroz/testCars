async function fetchCarData() {
    try {
      const response = await fetch("https://650b33cedfd73d1fab09c43c.mockapi.io/cars");
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
  