import path from 'path';
import sass from 'sass-true';

const SASS_TEST_INDEX = 'sass/index.scss';
const file = path.join(__dirname, SASS_TEST_INDEX);

sass.runSass({ file }, describe, it);
