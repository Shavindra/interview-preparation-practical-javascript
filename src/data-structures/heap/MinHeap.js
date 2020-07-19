import { Heap } from "./Heap";

export class MinHeap extends Heap {
  /**
   * @description Checks if pair of heap elements is in correct order.
   *              For MinHeap the first element must be always smaller or equal.
   *              For MaxHeap the first element must be always bigger or equal.
   *
   * @param {*} firstElement
   * @param {*} secondElement
   * @return {boolean}
   */
  pairIsInCorrectOrder(firstElement, secondElement) {
    return this.comparator.lessThanOrEqual(firstElement, secondElement);
  }
}