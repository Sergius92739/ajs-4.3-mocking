import fetchData from '../js/http';
import getLevel from '../js/app';

jest.mock('../js/http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call fetchData once', () => {
  fetchData.mockReturnValue({});
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('if the request is ok', () => {
  fetchData.mockReturnValue({
    status: 'ok',
    level: 5,
  });
  expect(getLevel(1)).toBe('Ваш текущий уровень: 5');
});

test('if the request is not ok', () => {
  fetchData.mockReturnValue({
    status: 'error',
  });
  expect(getLevel(1)).toBe('Информация об уровне временно недоступна');
});
