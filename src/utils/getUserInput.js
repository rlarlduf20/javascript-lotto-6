import { checkValueIsInteger, checkValueIsNumber } from './checkValue';

export const getLottoCntFromInputMoney = (inputMoney) => {
  if (!checkValueIsNumber(inputMoney)) {
    throw new Error('[ERROR] 구입금액은 숫자만 입력 가능합니다.');
  }

  const lottoCnt = Number(inputMoney) / 1000;
  if (!checkValueIsInteger(lottoCnt)) {
    throw new Error(
      '[ERROR] 잔돈 반환이 불가능합니다. 로또 수의 딱 맞는 금액을 입력해주세요.'
    );
  }

  return lottoCnt;
};

export const getWinningNumberArray = (inputWinningStr) => {
  const winningNumberArr = inputWinningStr.split(',').map((item) => {
    return Number(item);
  });

  return winningNumberArr;
};
