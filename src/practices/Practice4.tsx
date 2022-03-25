export const Practice4 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => calcTotalFee(1000);
  return (
    <div>
      <p>設定ファイルを触る</p>
      <button onClick={onClickPractice}>4実行</button>
    </div>
  );
};
