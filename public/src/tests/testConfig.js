import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv'; 
DotEnv.config({path: '.env.tests'});
Enzyme.configure({ adapter: new Adapter() });