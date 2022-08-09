import MockAdapter from "axios-mock-adapter";
import mockAuth from "../../app/modules/Auth/__mocks__/mockAuth";
import mockCustomers from "../../app/modules/ECommerce/__mocks__/mockCustomer"; 

export default function mockAxios(axios) {
  const mock = new MockAdapter(axios, { delayResponse: 300 });
  mockAuth(mock);
  mockCustomers(mock); 
  return mock;
}
