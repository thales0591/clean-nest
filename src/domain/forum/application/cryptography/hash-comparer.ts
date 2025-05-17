export abstract class HashComparer {
  abstract compare(lain: string, hash: string): Promise<boolean>
}
