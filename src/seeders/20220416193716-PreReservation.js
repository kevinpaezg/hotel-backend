'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    let preReservations = [
      { name: 'Kevin', lastName: 'Paez', cellphone: '2211169762', email: 'kevin.paez@gmail.com', dateReservation: '2022-04-16', checkin: '2022-04-16', checkout: '2022-04-20', numRooms: 2, totalPayment: 2500, PaymentMethodId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Carlos', lastName: 'Vazquez', cellphone: '2211445577', email: 'carlos@gmail.com', dateReservation: '2022-04-16', checkin: '2022-04-16', checkout: '2022-04-17', numRooms: 1, totalPayment: 1500, PaymentMethodId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Juan', lastName: 'Tamal', cellphone: '2211449977', email: 'juan@gmail.com', dateReservation: '2022-04-16', checkin: '2022-04-16', checkout: '2022-04-21', numRooms: 1, totalPayment: 2000, PaymentMethodId: 2, createdAt: new Date(), updatedAt: new Date() },
    ];
    await queryInterface.bulkInsert('PreReservations', preReservations, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PreReservations', null, {});
  }
};
