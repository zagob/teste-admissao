export interface IPackageRepository {
  create(
    id_operation: string,
    type_note: number,
    closed_at?: Date
  ): Promise<Object>;

  findMany(id_operation: string): Promise<
    {
      type_note: number;
    }[]
  >;
}
