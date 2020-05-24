/**
 * 分数オブジェクト
 *
 * @export
 * @class Fraction
 */
export class Fraction {
  // 分子
  public numerator: number;
  // 分母
  public denominator: number;

  constructor(numerator?: number, denominator?: number) {
    this.numerator = numerator;
    this.denominator = denominator;
  }
}
