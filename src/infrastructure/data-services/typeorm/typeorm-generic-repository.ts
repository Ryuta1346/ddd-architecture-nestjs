
export class TypeORMGenericRepository<T> {
    @InjectRepository()
  private _repository: Reposito<T>;

  constructor(repository: Repository<T>) {
    this._repository = repository;
  }

  // getAll(): Promise<T[]> {
  //   return this._repository.find().populate(this._populateOnFind).exec();
  // }

  // get(id: any): Promise<T> {
  //   return this._repository.findById(id).populate(this._populateOnFind).exec();
  // }

  // create(item: T): Promise<T> {
  //   return this._repository.create(item);
  // }

  // update(id: string, item: T) {
  //   return this._repository.findByIdAndUpdate(id, item);
  // }
}
