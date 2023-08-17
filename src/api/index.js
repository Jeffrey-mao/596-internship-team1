//The api to manage frontend
import mockRequests from './mockRequests';
export const reqQues = () => mockRequests({ url: '/ques', method: 'get' });