require('dotenv').config();
const request = require('supertest');
const baseURL = 'https://restful-booker.herokuapp.com';

describe('Booking API', () => {
  let bookingId;
  const authHeader = process.env.AUTH_HEADER;

  // Test for GetBookingIds
  it('should get all booking ids', async () => {
    const response = await request(baseURL)
      .get('/booking')
      .set('Accept', 'application/json');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });

  it('Get a specific booking by ID', async () => {
    const bookingId = 36;
    const response = await request(baseURL)
      .get(`/booking/${bookingId}`)
      .set('Accept', 'application/json');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('firstname');
      expect(response.body).toHaveProperty('lastname');
      expect(response.body).toHaveProperty('totalprice');
      expect(response.body).toHaveProperty('depositpaid');
      expect(response.body).toHaveProperty('bookingdates');
      expect(response.body).toHaveProperty('additionalneeds')
  });

  // Test for CreateBooking
  it('should create a new booking', async () => {
    const newBooking = {
      firstname: 'Jim',
      lastname: 'Chales',
      totalprice: 120,
      depositpaid: true,
      bookingdates: {
        checkin: '2018-01-01',
        checkout: '2019-01-01'
      },
      additionalneeds: 'Breakfast'
    };

    const response = await request(baseURL)
      .post('/booking')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .send(newBooking);

    console.log('Status:', response.status);
    console.log('Body:', response.body);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('bookingid');
    expect(response.body.booking).toMatchObject(newBooking);
    bookingId = response.body.bookingid; // Save the booking ID for later tests
  });

  // Test for GetBooking
  it('should get a specific booking by ID', async () => {
    const response = await request(baseURL)
      .get(`/booking/${bookingId}`)
      .set('Accept', 'application/json');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('firstname', 'Jim');
  });

  // Test for UpdateBooking
  it('should update a booking', async () => {
    const updatedBooking = {
      firstname: 'James',
      lastname: 'Brown',
      totalprice: 150,
      depositpaid: false,
      bookingdates: {
        checkin: '2018-01-01',
        checkout: '2019-01-01'
      },
      additionalneeds: 'Lunch'
    };

    const response = await request(baseURL)
      .put(`/booking/${bookingId}`)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', authHeader)
      .send(updatedBooking);

    console.log('Status:', response.status);
    console.log('Body:', response.body);

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(updatedBooking);
  });

  // Test for PartialUpdateBooking
  it('should partially update a booking', async () => {
    const partialUpdate = {
      firstname: 'Jimmy'
    };

    const response = await request(baseURL)
      .patch(`/booking/${bookingId}`)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', authHeader)
      .send(partialUpdate);

    console.log('Status:', response.status);
    console.log('Body:', response.body);

    expect(response.status).toBe(200);
    expect(response.body.firstname).toBe(partialUpdate.firstname);
  });

  // Test for DeleteBooking
  it('should delete a booking', async () => {
    const response = await request(baseURL)
      .delete(`/booking/${bookingId}`)
      .set('Content-Type', 'application/json')
      .set('Authorization', authHeader);

    console.log('Status:', response.status);

    expect(response.status).toBe(201); // Verify this with the API documentation, typically 204 No Content is used
  });
});
