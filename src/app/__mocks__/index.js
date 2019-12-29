export const mockListen = jest.fn().mockImplementation((port, callback) => callback());
export default jest.fn().mockImplementation(() => ({ listen: mockListen }));
