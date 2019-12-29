// eslint-disable-next-line import/named
import app, { mockListen } from '../app';
import '../index';

jest.mock('../app');

describe('App test suite', () => {
  it('Should create app', () => {
    expect(app).toHaveBeenCalledTimes(1);
  });

  it('Should start listening by provided port', () => {
    expect(mockListen).toHaveBeenCalledWith(8081, expect.any(Function));
  });
});
