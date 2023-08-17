import Mock from 'mockjs';
import ques from './ques.json';

Mock.mock("/mock/ques", { code: 200, data: ques });