const Example = () => {
  // 練習用
  let strOrNum: string | number = 'Hello';
  strOrNum = 123;
  console.log(strOrNum);

  type helloOrNum = 'Hello' | number;
  const hello: helloOrNum = 'Hello';
  console.log(hello);
  
};

export default Example;
