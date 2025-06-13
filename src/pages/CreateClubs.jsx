import React from "react";
import image from "../assets/imageclub.png"

export default function CreateClubs() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-cyan-500 text-white text-center py-4 text-xl font-bold">
        ОТКРЫТЬ КЛУБ ВМЕСТЕ С TRUE
      </div>

      <div className="flex justify-center bg-white py-4">
        <img
          src={image}
          alt="Club Layout"
          className="w-full max-w-4xl rounded shadow"
        />
      </div>

      <div className="bg-gray-200 py-8 px-4 md:px-20">
        <h2 className="text-center text-2xl font-semibold mb-6">ОТПРАВИТЬ ЗАЯВКУ</h2>
        <form className="max-w-3xl mx-auto space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">ВАШЕ ИМЯ</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="Имя" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">E-MAIL:</label>
            <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="E-mail" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">НОМЕР ТЕЛЕФОНА</label>
            <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="+998 (99)-999-99-99" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">ГОРОД</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="Город" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">ХОТИТЕ ОТКРЫТЬ:</label>
            <div className="space-y-1">
              {['Фитнес-студия', 'Фитнес-клуб', 'Оздоровительный Спортзал', 'Тренажерный Зал В Отеле/Санатории', 'Корпоративный спортзал'].map(option => (
                <div key={option} className="flex items-center">
                  <input type="radio" name="openType" className="mr-2" />
                  <span>{option}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">ПЛАНИРУЕМЫЙ СРОК ЗАПУСКА ПРОЕКТА:</label>
            <div className="space-y-1">
              {['Через 1 месяц', 'Через 3 месяца', 'Через 6 месяцев', 'В течение года'].map(option => (
                <div key={option} className="flex items-center">
                  <input type="radio" name="launchTime" className="mr-2" />
                  <span>{option}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">КАКИЕ УСЛУГИ ВАС ИНТЕРЕСУЮТ:</label>
            <div className="space-y-1">
              {['Проектирование', 'Поставка Оборудования', 'Расчет и Тренировка На Площадке'].map(option => (
                <div key={option} className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>{option}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">ЗАГРУЗИТЬ ПЛАН ПОМЕЩЕНИЯ</label>
            <input type="file" className="block w-full text-sm text-gray-500" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">КОММЕНТАРИЙ</label>
            <textarea className="w-full px-3 py-2 border border-gray-300 rounded" rows="4"></textarea>
          </div>

          <div className="flex justify-center">
            <button type="submit" className="bg-cyan-500 text-white px-6 py-2 rounded hover:bg-cyan-600">
              ОТПРАВИТЬ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
