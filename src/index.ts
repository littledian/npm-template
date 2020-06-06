import lodash from 'lodash';

async function equal() {
  const res = await new Promise((resolve) => resolve({}));
  console.log(lodash.equal({}, res));
}

equal().then(() => {
  console.log(123);
});
