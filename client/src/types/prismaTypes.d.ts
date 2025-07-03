
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Alojamiento
 * 
 */
export type Alojamiento = $Result.DefaultSelection<Prisma.$AlojamientoPayload>
/**
 * Model Propietario
 * 
 */
export type Propietario = $Result.DefaultSelection<Prisma.$PropietarioPayload>
/**
 * Model Inquilino
 * 
 */
export type Inquilino = $Result.DefaultSelection<Prisma.$InquilinoPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model Solicitud
 * 
 */
export type Solicitud = $Result.DefaultSelection<Prisma.$SolicitudPayload>
/**
 * Model Lease
 * 
 */
export type Lease = $Result.DefaultSelection<Prisma.$LeasePayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Highlight: {
  HighSpeedInternetAccess: 'HighSpeedInternetAccess',
  WasherDryer: 'WasherDryer',
  AirConditioning: 'AirConditioning',
  Heating: 'Heating',
  SmokeFree: 'SmokeFree',
  CableReady: 'CableReady',
  SatelliteTV: 'SatelliteTV',
  DoubleVanities: 'DoubleVanities',
  TubShower: 'TubShower',
  Intercom: 'Intercom',
  SprinklerSystem: 'SprinklerSystem',
  RecentlyRenovated: 'RecentlyRenovated',
  CloseToTransit: 'CloseToTransit',
  GreatView: 'GreatView',
  QuietNeighborhood: 'QuietNeighborhood'
};

export type Highlight = (typeof Highlight)[keyof typeof Highlight]


export const Amenity: {
  WasherDryer: 'WasherDryer',
  AirConditioning: 'AirConditioning',
  Dishwasher: 'Dishwasher',
  HighSpeedInternet: 'HighSpeedInternet',
  HardwoodFloors: 'HardwoodFloors',
  WalkInClosets: 'WalkInClosets',
  Microwave: 'Microwave',
  Refrigerator: 'Refrigerator',
  Pool: 'Pool',
  Gym: 'Gym',
  Parking: 'Parking',
  PetsAllowed: 'PetsAllowed',
  WiFi: 'WiFi'
};

export type Amenity = (typeof Amenity)[keyof typeof Amenity]


export const TipoAlojamiento: {
  ColegioMayor: 'ColegioMayor',
  Piso: 'Piso',
  PisoCompartido: 'PisoCompartido',
  ResidenciaFamiliar: 'ResidenciaFamiliar',
  ResidenciaUniversitaria: 'ResidenciaUniversitaria'
};

export type TipoAlojamiento = (typeof TipoAlojamiento)[keyof typeof TipoAlojamiento]


export const EstadoSolicitud: {
  Pendiente: 'Pendiente',
  Denegada: 'Denegada',
  Aprobada: 'Aprobada'
};

export type EstadoSolicitud = (typeof EstadoSolicitud)[keyof typeof EstadoSolicitud]


export const PaymentStatus: {
  Pending: 'Pending',
  Paid: 'Paid',
  PartiallyPaid: 'PartiallyPaid',
  Overdue: 'Overdue'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type Highlight = $Enums.Highlight

export const Highlight: typeof $Enums.Highlight

export type Amenity = $Enums.Amenity

export const Amenity: typeof $Enums.Amenity

export type TipoAlojamiento = $Enums.TipoAlojamiento

export const TipoAlojamiento: typeof $Enums.TipoAlojamiento

export type EstadoSolicitud = $Enums.EstadoSolicitud

export const EstadoSolicitud: typeof $Enums.EstadoSolicitud

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Alojamientos
 * const alojamientos = await prisma.alojamiento.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Alojamientos
   * const alojamientos = await prisma.alojamiento.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.alojamiento`: Exposes CRUD operations for the **Alojamiento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alojamientos
    * const alojamientos = await prisma.alojamiento.findMany()
    * ```
    */
  get alojamiento(): Prisma.AlojamientoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propietario`: Exposes CRUD operations for the **Propietario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Propietarios
    * const propietarios = await prisma.propietario.findMany()
    * ```
    */
  get propietario(): Prisma.PropietarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inquilino`: Exposes CRUD operations for the **Inquilino** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inquilinos
    * const inquilinos = await prisma.inquilino.findMany()
    * ```
    */
  get inquilino(): Prisma.InquilinoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.solicitud`: Exposes CRUD operations for the **Solicitud** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Solicituds
    * const solicituds = await prisma.solicitud.findMany()
    * ```
    */
  get solicitud(): Prisma.SolicitudDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lease`: Exposes CRUD operations for the **Lease** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leases
    * const leases = await prisma.lease.findMany()
    * ```
    */
  get lease(): Prisma.LeaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.4.1
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Alojamiento: 'Alojamiento',
    Propietario: 'Propietario',
    Inquilino: 'Inquilino',
    Location: 'Location',
    Solicitud: 'Solicitud',
    Lease: 'Lease',
    Payment: 'Payment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "alojamiento" | "propietario" | "inquilino" | "location" | "solicitud" | "lease" | "payment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Alojamiento: {
        payload: Prisma.$AlojamientoPayload<ExtArgs>
        fields: Prisma.AlojamientoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlojamientoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlojamientoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlojamientoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlojamientoPayload>
          }
          findFirst: {
            args: Prisma.AlojamientoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlojamientoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlojamientoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlojamientoPayload>
          }
          findMany: {
            args: Prisma.AlojamientoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlojamientoPayload>[]
          }
          create: {
            args: Prisma.AlojamientoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlojamientoPayload>
          }
          createMany: {
            args: Prisma.AlojamientoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlojamientoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlojamientoPayload>[]
          }
          delete: {
            args: Prisma.AlojamientoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlojamientoPayload>
          }
          update: {
            args: Prisma.AlojamientoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlojamientoPayload>
          }
          deleteMany: {
            args: Prisma.AlojamientoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlojamientoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlojamientoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlojamientoPayload>[]
          }
          upsert: {
            args: Prisma.AlojamientoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlojamientoPayload>
          }
          aggregate: {
            args: Prisma.AlojamientoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlojamiento>
          }
          groupBy: {
            args: Prisma.AlojamientoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlojamientoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlojamientoCountArgs<ExtArgs>
            result: $Utils.Optional<AlojamientoCountAggregateOutputType> | number
          }
        }
      }
      Propietario: {
        payload: Prisma.$PropietarioPayload<ExtArgs>
        fields: Prisma.PropietarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropietarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropietarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropietarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropietarioPayload>
          }
          findFirst: {
            args: Prisma.PropietarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropietarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropietarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropietarioPayload>
          }
          findMany: {
            args: Prisma.PropietarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropietarioPayload>[]
          }
          create: {
            args: Prisma.PropietarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropietarioPayload>
          }
          createMany: {
            args: Prisma.PropietarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropietarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropietarioPayload>[]
          }
          delete: {
            args: Prisma.PropietarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropietarioPayload>
          }
          update: {
            args: Prisma.PropietarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropietarioPayload>
          }
          deleteMany: {
            args: Prisma.PropietarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropietarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropietarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropietarioPayload>[]
          }
          upsert: {
            args: Prisma.PropietarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropietarioPayload>
          }
          aggregate: {
            args: Prisma.PropietarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropietario>
          }
          groupBy: {
            args: Prisma.PropietarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropietarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropietarioCountArgs<ExtArgs>
            result: $Utils.Optional<PropietarioCountAggregateOutputType> | number
          }
        }
      }
      Inquilino: {
        payload: Prisma.$InquilinoPayload<ExtArgs>
        fields: Prisma.InquilinoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InquilinoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquilinoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InquilinoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquilinoPayload>
          }
          findFirst: {
            args: Prisma.InquilinoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquilinoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InquilinoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquilinoPayload>
          }
          findMany: {
            args: Prisma.InquilinoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquilinoPayload>[]
          }
          create: {
            args: Prisma.InquilinoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquilinoPayload>
          }
          createMany: {
            args: Prisma.InquilinoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InquilinoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquilinoPayload>[]
          }
          delete: {
            args: Prisma.InquilinoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquilinoPayload>
          }
          update: {
            args: Prisma.InquilinoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquilinoPayload>
          }
          deleteMany: {
            args: Prisma.InquilinoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InquilinoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InquilinoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquilinoPayload>[]
          }
          upsert: {
            args: Prisma.InquilinoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquilinoPayload>
          }
          aggregate: {
            args: Prisma.InquilinoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInquilino>
          }
          groupBy: {
            args: Prisma.InquilinoGroupByArgs<ExtArgs>
            result: $Utils.Optional<InquilinoGroupByOutputType>[]
          }
          count: {
            args: Prisma.InquilinoCountArgs<ExtArgs>
            result: $Utils.Optional<InquilinoCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      Solicitud: {
        payload: Prisma.$SolicitudPayload<ExtArgs>
        fields: Prisma.SolicitudFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SolicitudFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SolicitudFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>
          }
          findFirst: {
            args: Prisma.SolicitudFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SolicitudFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>
          }
          findMany: {
            args: Prisma.SolicitudFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>[]
          }
          create: {
            args: Prisma.SolicitudCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>
          }
          createMany: {
            args: Prisma.SolicitudCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SolicitudCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>[]
          }
          delete: {
            args: Prisma.SolicitudDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>
          }
          update: {
            args: Prisma.SolicitudUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>
          }
          deleteMany: {
            args: Prisma.SolicitudDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SolicitudUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SolicitudUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>[]
          }
          upsert: {
            args: Prisma.SolicitudUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>
          }
          aggregate: {
            args: Prisma.SolicitudAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSolicitud>
          }
          groupBy: {
            args: Prisma.SolicitudGroupByArgs<ExtArgs>
            result: $Utils.Optional<SolicitudGroupByOutputType>[]
          }
          count: {
            args: Prisma.SolicitudCountArgs<ExtArgs>
            result: $Utils.Optional<SolicitudCountAggregateOutputType> | number
          }
        }
      }
      Lease: {
        payload: Prisma.$LeasePayload<ExtArgs>
        fields: Prisma.LeaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          findFirst: {
            args: Prisma.LeaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          findMany: {
            args: Prisma.LeaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>[]
          }
          create: {
            args: Prisma.LeaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          createMany: {
            args: Prisma.LeaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>[]
          }
          delete: {
            args: Prisma.LeaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          update: {
            args: Prisma.LeaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          deleteMany: {
            args: Prisma.LeaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>[]
          }
          upsert: {
            args: Prisma.LeaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          aggregate: {
            args: Prisma.LeaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLease>
          }
          groupBy: {
            args: Prisma.LeaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaseCountArgs<ExtArgs>
            result: $Utils.Optional<LeaseCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    alojamiento?: AlojamientoOmit
    propietario?: PropietarioOmit
    inquilino?: InquilinoOmit
    location?: LocationOmit
    solicitud?: SolicitudOmit
    lease?: LeaseOmit
    payment?: PaymentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AlojamientoCountOutputType
   */

  export type AlojamientoCountOutputType = {
    leases: number
    solicitudes: number
    favoritedBy: number
    inquilinos: number
  }

  export type AlojamientoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leases?: boolean | AlojamientoCountOutputTypeCountLeasesArgs
    solicitudes?: boolean | AlojamientoCountOutputTypeCountSolicitudesArgs
    favoritedBy?: boolean | AlojamientoCountOutputTypeCountFavoritedByArgs
    inquilinos?: boolean | AlojamientoCountOutputTypeCountInquilinosArgs
  }

  // Custom InputTypes
  /**
   * AlojamientoCountOutputType without action
   */
  export type AlojamientoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlojamientoCountOutputType
     */
    select?: AlojamientoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlojamientoCountOutputType without action
   */
  export type AlojamientoCountOutputTypeCountLeasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseWhereInput
  }

  /**
   * AlojamientoCountOutputType without action
   */
  export type AlojamientoCountOutputTypeCountSolicitudesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolicitudWhereInput
  }

  /**
   * AlojamientoCountOutputType without action
   */
  export type AlojamientoCountOutputTypeCountFavoritedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InquilinoWhereInput
  }

  /**
   * AlojamientoCountOutputType without action
   */
  export type AlojamientoCountOutputTypeCountInquilinosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InquilinoWhereInput
  }


  /**
   * Count Type PropietarioCountOutputType
   */

  export type PropietarioCountOutputType = {
    managedProperties: number
  }

  export type PropietarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    managedProperties?: boolean | PropietarioCountOutputTypeCountManagedPropertiesArgs
  }

  // Custom InputTypes
  /**
   * PropietarioCountOutputType without action
   */
  export type PropietarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropietarioCountOutputType
     */
    select?: PropietarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropietarioCountOutputType without action
   */
  export type PropietarioCountOutputTypeCountManagedPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlojamientoWhereInput
  }


  /**
   * Count Type InquilinoCountOutputType
   */

  export type InquilinoCountOutputType = {
    alojamientos: number
    favoritos: number
    solicitudes: number
    leases: number
  }

  export type InquilinoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alojamientos?: boolean | InquilinoCountOutputTypeCountAlojamientosArgs
    favoritos?: boolean | InquilinoCountOutputTypeCountFavoritosArgs
    solicitudes?: boolean | InquilinoCountOutputTypeCountSolicitudesArgs
    leases?: boolean | InquilinoCountOutputTypeCountLeasesArgs
  }

  // Custom InputTypes
  /**
   * InquilinoCountOutputType without action
   */
  export type InquilinoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquilinoCountOutputType
     */
    select?: InquilinoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InquilinoCountOutputType without action
   */
  export type InquilinoCountOutputTypeCountAlojamientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlojamientoWhereInput
  }

  /**
   * InquilinoCountOutputType without action
   */
  export type InquilinoCountOutputTypeCountFavoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlojamientoWhereInput
  }

  /**
   * InquilinoCountOutputType without action
   */
  export type InquilinoCountOutputTypeCountSolicitudesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolicitudWhereInput
  }

  /**
   * InquilinoCountOutputType without action
   */
  export type InquilinoCountOutputTypeCountLeasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseWhereInput
  }


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    alojamientos: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alojamientos?: boolean | LocationCountOutputTypeCountAlojamientosArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountAlojamientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlojamientoWhereInput
  }


  /**
   * Count Type LeaseCountOutputType
   */

  export type LeaseCountOutputType = {
    payments: number
  }

  export type LeaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | LeaseCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * LeaseCountOutputType without action
   */
  export type LeaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseCountOutputType
     */
    select?: LeaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeaseCountOutputType without action
   */
  export type LeaseCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Alojamiento
   */

  export type AggregateAlojamiento = {
    _count: AlojamientoCountAggregateOutputType | null
    _avg: AlojamientoAvgAggregateOutputType | null
    _sum: AlojamientoSumAggregateOutputType | null
    _min: AlojamientoMinAggregateOutputType | null
    _max: AlojamientoMaxAggregateOutputType | null
  }

  export type AlojamientoAvgAggregateOutputType = {
    id: number | null
    precio: number | null
    habitaciones: number | null
    banos: number | null
    superficie: number | null
    plazasLibres: number | null
    averageRating: number | null
    numberOfReviews: number | null
    locationId: number | null
  }

  export type AlojamientoSumAggregateOutputType = {
    id: number | null
    precio: number | null
    habitaciones: number | null
    banos: number | null
    superficie: number | null
    plazasLibres: number | null
    averageRating: number | null
    numberOfReviews: number | null
    locationId: number | null
  }

  export type AlojamientoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio: number | null
    habitaciones: number | null
    banos: number | null
    superficie: number | null
    plazasLibres: number | null
    tipoAlojamiento: $Enums.TipoAlojamiento | null
    hayTelevision: boolean | null
    hayTelefono: boolean | null
    hayInternet: boolean | null
    hayTerraza: boolean | null
    hayAscensor: boolean | null
    hayGaraje: boolean | null
    hayLavavajillas: boolean | null
    hayHorno: boolean | null
    hayMicroondas: boolean | null
    hayNevera: boolean | null
    hayLavadora: boolean | null
    haySecadora: boolean | null
    hayPortero: boolean | null
    hayMuebles: boolean | null
    hayCalefaccion: boolean | null
    hayAireAcondicionado: boolean | null
    hayGas: boolean | null
    hayPiscina: boolean | null
    hayZonaComunitaria: boolean | null
    hayGimnasio: boolean | null
    aguaIncluido: boolean | null
    gasIncluido: boolean | null
    electricidadIncluido: boolean | null
    internetIncluido: boolean | null
    postedDate: Date | null
    averageRating: number | null
    numberOfReviews: number | null
    locationId: number | null
    managerCognitoId: string | null
  }

  export type AlojamientoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio: number | null
    habitaciones: number | null
    banos: number | null
    superficie: number | null
    plazasLibres: number | null
    tipoAlojamiento: $Enums.TipoAlojamiento | null
    hayTelevision: boolean | null
    hayTelefono: boolean | null
    hayInternet: boolean | null
    hayTerraza: boolean | null
    hayAscensor: boolean | null
    hayGaraje: boolean | null
    hayLavavajillas: boolean | null
    hayHorno: boolean | null
    hayMicroondas: boolean | null
    hayNevera: boolean | null
    hayLavadora: boolean | null
    haySecadora: boolean | null
    hayPortero: boolean | null
    hayMuebles: boolean | null
    hayCalefaccion: boolean | null
    hayAireAcondicionado: boolean | null
    hayGas: boolean | null
    hayPiscina: boolean | null
    hayZonaComunitaria: boolean | null
    hayGimnasio: boolean | null
    aguaIncluido: boolean | null
    gasIncluido: boolean | null
    electricidadIncluido: boolean | null
    internetIncluido: boolean | null
    postedDate: Date | null
    averageRating: number | null
    numberOfReviews: number | null
    locationId: number | null
    managerCognitoId: string | null
  }

  export type AlojamientoCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    precio: number
    habitaciones: number
    banos: number
    superficie: number
    plazasLibres: number
    tipoAlojamiento: number
    hayTelevision: number
    hayTelefono: number
    hayInternet: number
    hayTerraza: number
    hayAscensor: number
    hayGaraje: number
    hayLavavajillas: number
    hayHorno: number
    hayMicroondas: number
    hayNevera: number
    hayLavadora: number
    haySecadora: number
    hayPortero: number
    hayMuebles: number
    hayCalefaccion: number
    hayAireAcondicionado: number
    hayGas: number
    hayPiscina: number
    hayZonaComunitaria: number
    hayGimnasio: number
    aguaIncluido: number
    gasIncluido: number
    electricidadIncluido: number
    internetIncluido: number
    photoUrls: number
    postedDate: number
    averageRating: number
    numberOfReviews: number
    locationId: number
    managerCognitoId: number
    _all: number
  }


  export type AlojamientoAvgAggregateInputType = {
    id?: true
    precio?: true
    habitaciones?: true
    banos?: true
    superficie?: true
    plazasLibres?: true
    averageRating?: true
    numberOfReviews?: true
    locationId?: true
  }

  export type AlojamientoSumAggregateInputType = {
    id?: true
    precio?: true
    habitaciones?: true
    banos?: true
    superficie?: true
    plazasLibres?: true
    averageRating?: true
    numberOfReviews?: true
    locationId?: true
  }

  export type AlojamientoMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    habitaciones?: true
    banos?: true
    superficie?: true
    plazasLibres?: true
    tipoAlojamiento?: true
    hayTelevision?: true
    hayTelefono?: true
    hayInternet?: true
    hayTerraza?: true
    hayAscensor?: true
    hayGaraje?: true
    hayLavavajillas?: true
    hayHorno?: true
    hayMicroondas?: true
    hayNevera?: true
    hayLavadora?: true
    haySecadora?: true
    hayPortero?: true
    hayMuebles?: true
    hayCalefaccion?: true
    hayAireAcondicionado?: true
    hayGas?: true
    hayPiscina?: true
    hayZonaComunitaria?: true
    hayGimnasio?: true
    aguaIncluido?: true
    gasIncluido?: true
    electricidadIncluido?: true
    internetIncluido?: true
    postedDate?: true
    averageRating?: true
    numberOfReviews?: true
    locationId?: true
    managerCognitoId?: true
  }

  export type AlojamientoMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    habitaciones?: true
    banos?: true
    superficie?: true
    plazasLibres?: true
    tipoAlojamiento?: true
    hayTelevision?: true
    hayTelefono?: true
    hayInternet?: true
    hayTerraza?: true
    hayAscensor?: true
    hayGaraje?: true
    hayLavavajillas?: true
    hayHorno?: true
    hayMicroondas?: true
    hayNevera?: true
    hayLavadora?: true
    haySecadora?: true
    hayPortero?: true
    hayMuebles?: true
    hayCalefaccion?: true
    hayAireAcondicionado?: true
    hayGas?: true
    hayPiscina?: true
    hayZonaComunitaria?: true
    hayGimnasio?: true
    aguaIncluido?: true
    gasIncluido?: true
    electricidadIncluido?: true
    internetIncluido?: true
    postedDate?: true
    averageRating?: true
    numberOfReviews?: true
    locationId?: true
    managerCognitoId?: true
  }

  export type AlojamientoCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    habitaciones?: true
    banos?: true
    superficie?: true
    plazasLibres?: true
    tipoAlojamiento?: true
    hayTelevision?: true
    hayTelefono?: true
    hayInternet?: true
    hayTerraza?: true
    hayAscensor?: true
    hayGaraje?: true
    hayLavavajillas?: true
    hayHorno?: true
    hayMicroondas?: true
    hayNevera?: true
    hayLavadora?: true
    haySecadora?: true
    hayPortero?: true
    hayMuebles?: true
    hayCalefaccion?: true
    hayAireAcondicionado?: true
    hayGas?: true
    hayPiscina?: true
    hayZonaComunitaria?: true
    hayGimnasio?: true
    aguaIncluido?: true
    gasIncluido?: true
    electricidadIncluido?: true
    internetIncluido?: true
    photoUrls?: true
    postedDate?: true
    averageRating?: true
    numberOfReviews?: true
    locationId?: true
    managerCognitoId?: true
    _all?: true
  }

  export type AlojamientoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alojamiento to aggregate.
     */
    where?: AlojamientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alojamientos to fetch.
     */
    orderBy?: AlojamientoOrderByWithRelationInput | AlojamientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlojamientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alojamientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alojamientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alojamientos
    **/
    _count?: true | AlojamientoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlojamientoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlojamientoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlojamientoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlojamientoMaxAggregateInputType
  }

  export type GetAlojamientoAggregateType<T extends AlojamientoAggregateArgs> = {
        [P in keyof T & keyof AggregateAlojamiento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlojamiento[P]>
      : GetScalarType<T[P], AggregateAlojamiento[P]>
  }




  export type AlojamientoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlojamientoWhereInput
    orderBy?: AlojamientoOrderByWithAggregationInput | AlojamientoOrderByWithAggregationInput[]
    by: AlojamientoScalarFieldEnum[] | AlojamientoScalarFieldEnum
    having?: AlojamientoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlojamientoCountAggregateInputType | true
    _avg?: AlojamientoAvgAggregateInputType
    _sum?: AlojamientoSumAggregateInputType
    _min?: AlojamientoMinAggregateInputType
    _max?: AlojamientoMaxAggregateInputType
  }

  export type AlojamientoGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string
    precio: number
    habitaciones: number
    banos: number
    superficie: number
    plazasLibres: number
    tipoAlojamiento: $Enums.TipoAlojamiento
    hayTelevision: boolean
    hayTelefono: boolean
    hayInternet: boolean
    hayTerraza: boolean
    hayAscensor: boolean
    hayGaraje: boolean
    hayLavavajillas: boolean
    hayHorno: boolean
    hayMicroondas: boolean
    hayNevera: boolean
    hayLavadora: boolean
    haySecadora: boolean
    hayPortero: boolean
    hayMuebles: boolean
    hayCalefaccion: boolean
    hayAireAcondicionado: boolean
    hayGas: boolean
    hayPiscina: boolean
    hayZonaComunitaria: boolean
    hayGimnasio: boolean
    aguaIncluido: boolean
    gasIncluido: boolean
    electricidadIncluido: boolean
    internetIncluido: boolean
    photoUrls: string[]
    postedDate: Date
    averageRating: number | null
    numberOfReviews: number | null
    locationId: number
    managerCognitoId: string
    _count: AlojamientoCountAggregateOutputType | null
    _avg: AlojamientoAvgAggregateOutputType | null
    _sum: AlojamientoSumAggregateOutputType | null
    _min: AlojamientoMinAggregateOutputType | null
    _max: AlojamientoMaxAggregateOutputType | null
  }

  type GetAlojamientoGroupByPayload<T extends AlojamientoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlojamientoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlojamientoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlojamientoGroupByOutputType[P]>
            : GetScalarType<T[P], AlojamientoGroupByOutputType[P]>
        }
      >
    >


  export type AlojamientoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    habitaciones?: boolean
    banos?: boolean
    superficie?: boolean
    plazasLibres?: boolean
    tipoAlojamiento?: boolean
    hayTelevision?: boolean
    hayTelefono?: boolean
    hayInternet?: boolean
    hayTerraza?: boolean
    hayAscensor?: boolean
    hayGaraje?: boolean
    hayLavavajillas?: boolean
    hayHorno?: boolean
    hayMicroondas?: boolean
    hayNevera?: boolean
    hayLavadora?: boolean
    haySecadora?: boolean
    hayPortero?: boolean
    hayMuebles?: boolean
    hayCalefaccion?: boolean
    hayAireAcondicionado?: boolean
    hayGas?: boolean
    hayPiscina?: boolean
    hayZonaComunitaria?: boolean
    hayGimnasio?: boolean
    aguaIncluido?: boolean
    gasIncluido?: boolean
    electricidadIncluido?: boolean
    internetIncluido?: boolean
    photoUrls?: boolean
    postedDate?: boolean
    averageRating?: boolean
    numberOfReviews?: boolean
    locationId?: boolean
    managerCognitoId?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    propietario?: boolean | PropietarioDefaultArgs<ExtArgs>
    leases?: boolean | Alojamiento$leasesArgs<ExtArgs>
    solicitudes?: boolean | Alojamiento$solicitudesArgs<ExtArgs>
    favoritedBy?: boolean | Alojamiento$favoritedByArgs<ExtArgs>
    inquilinos?: boolean | Alojamiento$inquilinosArgs<ExtArgs>
    _count?: boolean | AlojamientoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alojamiento"]>

  export type AlojamientoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    habitaciones?: boolean
    banos?: boolean
    superficie?: boolean
    plazasLibres?: boolean
    tipoAlojamiento?: boolean
    hayTelevision?: boolean
    hayTelefono?: boolean
    hayInternet?: boolean
    hayTerraza?: boolean
    hayAscensor?: boolean
    hayGaraje?: boolean
    hayLavavajillas?: boolean
    hayHorno?: boolean
    hayMicroondas?: boolean
    hayNevera?: boolean
    hayLavadora?: boolean
    haySecadora?: boolean
    hayPortero?: boolean
    hayMuebles?: boolean
    hayCalefaccion?: boolean
    hayAireAcondicionado?: boolean
    hayGas?: boolean
    hayPiscina?: boolean
    hayZonaComunitaria?: boolean
    hayGimnasio?: boolean
    aguaIncluido?: boolean
    gasIncluido?: boolean
    electricidadIncluido?: boolean
    internetIncluido?: boolean
    photoUrls?: boolean
    postedDate?: boolean
    averageRating?: boolean
    numberOfReviews?: boolean
    locationId?: boolean
    managerCognitoId?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    propietario?: boolean | PropietarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alojamiento"]>

  export type AlojamientoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    habitaciones?: boolean
    banos?: boolean
    superficie?: boolean
    plazasLibres?: boolean
    tipoAlojamiento?: boolean
    hayTelevision?: boolean
    hayTelefono?: boolean
    hayInternet?: boolean
    hayTerraza?: boolean
    hayAscensor?: boolean
    hayGaraje?: boolean
    hayLavavajillas?: boolean
    hayHorno?: boolean
    hayMicroondas?: boolean
    hayNevera?: boolean
    hayLavadora?: boolean
    haySecadora?: boolean
    hayPortero?: boolean
    hayMuebles?: boolean
    hayCalefaccion?: boolean
    hayAireAcondicionado?: boolean
    hayGas?: boolean
    hayPiscina?: boolean
    hayZonaComunitaria?: boolean
    hayGimnasio?: boolean
    aguaIncluido?: boolean
    gasIncluido?: boolean
    electricidadIncluido?: boolean
    internetIncluido?: boolean
    photoUrls?: boolean
    postedDate?: boolean
    averageRating?: boolean
    numberOfReviews?: boolean
    locationId?: boolean
    managerCognitoId?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    propietario?: boolean | PropietarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alojamiento"]>

  export type AlojamientoSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    habitaciones?: boolean
    banos?: boolean
    superficie?: boolean
    plazasLibres?: boolean
    tipoAlojamiento?: boolean
    hayTelevision?: boolean
    hayTelefono?: boolean
    hayInternet?: boolean
    hayTerraza?: boolean
    hayAscensor?: boolean
    hayGaraje?: boolean
    hayLavavajillas?: boolean
    hayHorno?: boolean
    hayMicroondas?: boolean
    hayNevera?: boolean
    hayLavadora?: boolean
    haySecadora?: boolean
    hayPortero?: boolean
    hayMuebles?: boolean
    hayCalefaccion?: boolean
    hayAireAcondicionado?: boolean
    hayGas?: boolean
    hayPiscina?: boolean
    hayZonaComunitaria?: boolean
    hayGimnasio?: boolean
    aguaIncluido?: boolean
    gasIncluido?: boolean
    electricidadIncluido?: boolean
    internetIncluido?: boolean
    photoUrls?: boolean
    postedDate?: boolean
    averageRating?: boolean
    numberOfReviews?: boolean
    locationId?: boolean
    managerCognitoId?: boolean
  }

  export type AlojamientoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "precio" | "habitaciones" | "banos" | "superficie" | "plazasLibres" | "tipoAlojamiento" | "hayTelevision" | "hayTelefono" | "hayInternet" | "hayTerraza" | "hayAscensor" | "hayGaraje" | "hayLavavajillas" | "hayHorno" | "hayMicroondas" | "hayNevera" | "hayLavadora" | "haySecadora" | "hayPortero" | "hayMuebles" | "hayCalefaccion" | "hayAireAcondicionado" | "hayGas" | "hayPiscina" | "hayZonaComunitaria" | "hayGimnasio" | "aguaIncluido" | "gasIncluido" | "electricidadIncluido" | "internetIncluido" | "photoUrls" | "postedDate" | "averageRating" | "numberOfReviews" | "locationId" | "managerCognitoId", ExtArgs["result"]["alojamiento"]>
  export type AlojamientoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    propietario?: boolean | PropietarioDefaultArgs<ExtArgs>
    leases?: boolean | Alojamiento$leasesArgs<ExtArgs>
    solicitudes?: boolean | Alojamiento$solicitudesArgs<ExtArgs>
    favoritedBy?: boolean | Alojamiento$favoritedByArgs<ExtArgs>
    inquilinos?: boolean | Alojamiento$inquilinosArgs<ExtArgs>
    _count?: boolean | AlojamientoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlojamientoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    propietario?: boolean | PropietarioDefaultArgs<ExtArgs>
  }
  export type AlojamientoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    propietario?: boolean | PropietarioDefaultArgs<ExtArgs>
  }

  export type $AlojamientoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alojamiento"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs>
      propietario: Prisma.$PropietarioPayload<ExtArgs>
      leases: Prisma.$LeasePayload<ExtArgs>[]
      solicitudes: Prisma.$SolicitudPayload<ExtArgs>[]
      favoritedBy: Prisma.$InquilinoPayload<ExtArgs>[]
      inquilinos: Prisma.$InquilinoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string
      precio: number
      habitaciones: number
      banos: number
      superficie: number
      plazasLibres: number
      tipoAlojamiento: $Enums.TipoAlojamiento
      hayTelevision: boolean
      hayTelefono: boolean
      hayInternet: boolean
      hayTerraza: boolean
      hayAscensor: boolean
      hayGaraje: boolean
      hayLavavajillas: boolean
      hayHorno: boolean
      hayMicroondas: boolean
      hayNevera: boolean
      hayLavadora: boolean
      haySecadora: boolean
      hayPortero: boolean
      hayMuebles: boolean
      hayCalefaccion: boolean
      hayAireAcondicionado: boolean
      hayGas: boolean
      hayPiscina: boolean
      hayZonaComunitaria: boolean
      hayGimnasio: boolean
      aguaIncluido: boolean
      gasIncluido: boolean
      electricidadIncluido: boolean
      internetIncluido: boolean
      photoUrls: string[]
      postedDate: Date
      averageRating: number | null
      numberOfReviews: number | null
      locationId: number
      managerCognitoId: string
    }, ExtArgs["result"]["alojamiento"]>
    composites: {}
  }

  type AlojamientoGetPayload<S extends boolean | null | undefined | AlojamientoDefaultArgs> = $Result.GetResult<Prisma.$AlojamientoPayload, S>

  type AlojamientoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlojamientoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlojamientoCountAggregateInputType | true
    }

  export interface AlojamientoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alojamiento'], meta: { name: 'Alojamiento' } }
    /**
     * Find zero or one Alojamiento that matches the filter.
     * @param {AlojamientoFindUniqueArgs} args - Arguments to find a Alojamiento
     * @example
     * // Get one Alojamiento
     * const alojamiento = await prisma.alojamiento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlojamientoFindUniqueArgs>(args: SelectSubset<T, AlojamientoFindUniqueArgs<ExtArgs>>): Prisma__AlojamientoClient<$Result.GetResult<Prisma.$AlojamientoPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Alojamiento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlojamientoFindUniqueOrThrowArgs} args - Arguments to find a Alojamiento
     * @example
     * // Get one Alojamiento
     * const alojamiento = await prisma.alojamiento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlojamientoFindUniqueOrThrowArgs>(args: SelectSubset<T, AlojamientoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlojamientoClient<$Result.GetResult<Prisma.$AlojamientoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Alojamiento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlojamientoFindFirstArgs} args - Arguments to find a Alojamiento
     * @example
     * // Get one Alojamiento
     * const alojamiento = await prisma.alojamiento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlojamientoFindFirstArgs>(args?: SelectSubset<T, AlojamientoFindFirstArgs<ExtArgs>>): Prisma__AlojamientoClient<$Result.GetResult<Prisma.$AlojamientoPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Alojamiento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlojamientoFindFirstOrThrowArgs} args - Arguments to find a Alojamiento
     * @example
     * // Get one Alojamiento
     * const alojamiento = await prisma.alojamiento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlojamientoFindFirstOrThrowArgs>(args?: SelectSubset<T, AlojamientoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlojamientoClient<$Result.GetResult<Prisma.$AlojamientoPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Alojamientos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlojamientoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alojamientos
     * const alojamientos = await prisma.alojamiento.findMany()
     * 
     * // Get first 10 Alojamientos
     * const alojamientos = await prisma.alojamiento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alojamientoWithIdOnly = await prisma.alojamiento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlojamientoFindManyArgs>(args?: SelectSubset<T, AlojamientoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlojamientoPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Alojamiento.
     * @param {AlojamientoCreateArgs} args - Arguments to create a Alojamiento.
     * @example
     * // Create one Alojamiento
     * const Alojamiento = await prisma.alojamiento.create({
     *   data: {
     *     // ... data to create a Alojamiento
     *   }
     * })
     * 
     */
    create<T extends AlojamientoCreateArgs>(args: SelectSubset<T, AlojamientoCreateArgs<ExtArgs>>): Prisma__AlojamientoClient<$Result.GetResult<Prisma.$AlojamientoPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Alojamientos.
     * @param {AlojamientoCreateManyArgs} args - Arguments to create many Alojamientos.
     * @example
     * // Create many Alojamientos
     * const alojamiento = await prisma.alojamiento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlojamientoCreateManyArgs>(args?: SelectSubset<T, AlojamientoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alojamientos and returns the data saved in the database.
     * @param {AlojamientoCreateManyAndReturnArgs} args - Arguments to create many Alojamientos.
     * @example
     * // Create many Alojamientos
     * const alojamiento = await prisma.alojamiento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alojamientos and only return the `id`
     * const alojamientoWithIdOnly = await prisma.alojamiento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlojamientoCreateManyAndReturnArgs>(args?: SelectSubset<T, AlojamientoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlojamientoPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Alojamiento.
     * @param {AlojamientoDeleteArgs} args - Arguments to delete one Alojamiento.
     * @example
     * // Delete one Alojamiento
     * const Alojamiento = await prisma.alojamiento.delete({
     *   where: {
     *     // ... filter to delete one Alojamiento
     *   }
     * })
     * 
     */
    delete<T extends AlojamientoDeleteArgs>(args: SelectSubset<T, AlojamientoDeleteArgs<ExtArgs>>): Prisma__AlojamientoClient<$Result.GetResult<Prisma.$AlojamientoPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Alojamiento.
     * @param {AlojamientoUpdateArgs} args - Arguments to update one Alojamiento.
     * @example
     * // Update one Alojamiento
     * const alojamiento = await prisma.alojamiento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlojamientoUpdateArgs>(args: SelectSubset<T, AlojamientoUpdateArgs<ExtArgs>>): Prisma__AlojamientoClient<$Result.GetResult<Prisma.$AlojamientoPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Alojamientos.
     * @param {AlojamientoDeleteManyArgs} args - Arguments to filter Alojamientos to delete.
     * @example
     * // Delete a few Alojamientos
     * const { count } = await prisma.alojamiento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlojamientoDeleteManyArgs>(args?: SelectSubset<T, AlojamientoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alojamientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlojamientoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alojamientos
     * const alojamiento = await prisma.alojamiento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlojamientoUpdateManyArgs>(args: SelectSubset<T, AlojamientoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alojamientos and returns the data updated in the database.
     * @param {AlojamientoUpdateManyAndReturnArgs} args - Arguments to update many Alojamientos.
     * @example
     * // Update many Alojamientos
     * const alojamiento = await prisma.alojamiento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alojamientos and only return the `id`
     * const alojamientoWithIdOnly = await prisma.alojamiento.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlojamientoUpdateManyAndReturnArgs>(args: SelectSubset<T, AlojamientoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlojamientoPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Alojamiento.
     * @param {AlojamientoUpsertArgs} args - Arguments to update or create a Alojamiento.
     * @example
     * // Update or create a Alojamiento
     * const alojamiento = await prisma.alojamiento.upsert({
     *   create: {
     *     // ... data to create a Alojamiento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alojamiento we want to update
     *   }
     * })
     */
    upsert<T extends AlojamientoUpsertArgs>(args: SelectSubset<T, AlojamientoUpsertArgs<ExtArgs>>): Prisma__AlojamientoClient<$Result.GetResult<Prisma.$AlojamientoPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Alojamientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlojamientoCountArgs} args - Arguments to filter Alojamientos to count.
     * @example
     * // Count the number of Alojamientos
     * const count = await prisma.alojamiento.count({
     *   where: {
     *     // ... the filter for the Alojamientos we want to count
     *   }
     * })
    **/
    count<T extends AlojamientoCountArgs>(
      args?: Subset<T, AlojamientoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlojamientoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alojamiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlojamientoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlojamientoAggregateArgs>(args: Subset<T, AlojamientoAggregateArgs>): Prisma.PrismaPromise<GetAlojamientoAggregateType<T>>

    /**
     * Group by Alojamiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlojamientoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlojamientoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlojamientoGroupByArgs['orderBy'] }
        : { orderBy?: AlojamientoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlojamientoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlojamientoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alojamiento model
   */
  readonly fields: AlojamientoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alojamiento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlojamientoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    propietario<T extends PropietarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropietarioDefaultArgs<ExtArgs>>): Prisma__PropietarioClient<$Result.GetResult<Prisma.$PropietarioPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    leases<T extends Alojamiento$leasesArgs<ExtArgs> = {}>(args?: Subset<T, Alojamiento$leasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    solicitudes<T extends Alojamiento$solicitudesArgs<ExtArgs> = {}>(args?: Subset<T, Alojamiento$solicitudesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    favoritedBy<T extends Alojamiento$favoritedByArgs<ExtArgs> = {}>(args?: Subset<T, Alojamiento$favoritedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquilinoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    inquilinos<T extends Alojamiento$inquilinosArgs<ExtArgs> = {}>(args?: Subset<T, Alojamiento$inquilinosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquilinoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Alojamiento model
   */ 
  interface AlojamientoFieldRefs {
    readonly id: FieldRef<"Alojamiento", 'Int'>
    readonly nombre: FieldRef<"Alojamiento", 'String'>
    readonly descripcion: FieldRef<"Alojamiento", 'String'>
    readonly precio: FieldRef<"Alojamiento", 'Float'>
    readonly habitaciones: FieldRef<"Alojamiento", 'Int'>
    readonly banos: FieldRef<"Alojamiento", 'Float'>
    readonly superficie: FieldRef<"Alojamiento", 'Int'>
    readonly plazasLibres: FieldRef<"Alojamiento", 'Int'>
    readonly tipoAlojamiento: FieldRef<"Alojamiento", 'TipoAlojamiento'>
    readonly hayTelevision: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayTelefono: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayInternet: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayTerraza: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayAscensor: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayGaraje: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayLavavajillas: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayHorno: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayMicroondas: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayNevera: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayLavadora: FieldRef<"Alojamiento", 'Boolean'>
    readonly haySecadora: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayPortero: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayMuebles: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayCalefaccion: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayAireAcondicionado: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayGas: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayPiscina: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayZonaComunitaria: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayGimnasio: FieldRef<"Alojamiento", 'Boolean'>
    readonly aguaIncluido: FieldRef<"Alojamiento", 'Boolean'>
    readonly gasIncluido: FieldRef<"Alojamiento", 'Boolean'>
    readonly electricidadIncluido: FieldRef<"Alojamiento", 'Boolean'>
    readonly internetIncluido: FieldRef<"Alojamiento", 'Boolean'>
    readonly photoUrls: FieldRef<"Alojamiento", 'String[]'>
    readonly postedDate: FieldRef<"Alojamiento", 'DateTime'>
    readonly averageRating: FieldRef<"Alojamiento", 'Float'>
    readonly numberOfReviews: FieldRef<"Alojamiento", 'Int'>
    readonly locationId: FieldRef<"Alojamiento", 'Int'>
    readonly managerCognitoId: FieldRef<"Alojamiento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Alojamiento findUnique
   */
  export type AlojamientoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alojamiento
     */
    select?: AlojamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alojamiento
     */
    omit?: AlojamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlojamientoInclude<ExtArgs> | null
    /**
     * Filter, which Alojamiento to fetch.
     */
    where: AlojamientoWhereUniqueInput
  }

  /**
   * Alojamiento findUniqueOrThrow
   */
  export type AlojamientoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alojamiento
     */
    select?: AlojamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alojamiento
     */
    omit?: AlojamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlojamientoInclude<ExtArgs> | null
    /**
     * Filter, which Alojamiento to fetch.
     */
    where: AlojamientoWhereUniqueInput
  }

  /**
   * Alojamiento findFirst
   */
  export type AlojamientoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alojamiento
     */
    select?: AlojamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alojamiento
     */
    omit?: AlojamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlojamientoInclude<ExtArgs> | null
    /**
     * Filter, which Alojamiento to fetch.
     */
    where?: AlojamientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alojamientos to fetch.
     */
    orderBy?: AlojamientoOrderByWithRelationInput | AlojamientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alojamientos.
     */
    cursor?: AlojamientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alojamientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alojamientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alojamientos.
     */
    distinct?: AlojamientoScalarFieldEnum | AlojamientoScalarFieldEnum[]
  }

  /**
   * Alojamiento findFirstOrThrow
   */
  export type AlojamientoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alojamiento
     */
    select?: AlojamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alojamiento
     */
    omit?: AlojamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlojamientoInclude<ExtArgs> | null
    /**
     * Filter, which Alojamiento to fetch.
     */
    where?: AlojamientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alojamientos to fetch.
     */
    orderBy?: AlojamientoOrderByWithRelationInput | AlojamientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alojamientos.
     */
    cursor?: AlojamientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alojamientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alojamientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alojamientos.
     */
    distinct?: AlojamientoScalarFieldEnum | AlojamientoScalarFieldEnum[]
  }

  /**
   * Alojamiento findMany
   */
  export type AlojamientoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alojamiento
     */
    select?: AlojamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alojamiento
     */
    omit?: AlojamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlojamientoInclude<ExtArgs> | null
    /**
     * Filter, which Alojamientos to fetch.
     */
    where?: AlojamientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alojamientos to fetch.
     */
    orderBy?: AlojamientoOrderByWithRelationInput | AlojamientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alojamientos.
     */
    cursor?: AlojamientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alojamientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alojamientos.
     */
    skip?: number
    distinct?: AlojamientoScalarFieldEnum | AlojamientoScalarFieldEnum[]
  }

  /**
   * Alojamiento create
   */
  export type AlojamientoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alojamiento
     */
    select?: AlojamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alojamiento
     */
    omit?: AlojamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlojamientoInclude<ExtArgs> | null
    /**
     * The data needed to create a Alojamiento.
     */
    data: XOR<AlojamientoCreateInput, AlojamientoUncheckedCreateInput>
  }

  /**
   * Alojamiento createMany
   */
  export type AlojamientoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alojamientos.
     */
    data: AlojamientoCreateManyInput | AlojamientoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alojamiento createManyAndReturn
   */
  export type AlojamientoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alojamiento
     */
    select?: AlojamientoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alojamiento
     */
    omit?: AlojamientoOmit<ExtArgs> | null
    /**
     * The data used to create many Alojamientos.
     */
    data: AlojamientoCreateManyInput | AlojamientoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlojamientoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alojamiento update
   */
  export type AlojamientoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alojamiento
     */
    select?: AlojamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alojamiento
     */
    omit?: AlojamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlojamientoInclude<ExtArgs> | null
    /**
     * The data needed to update a Alojamiento.
     */
    data: XOR<AlojamientoUpdateInput, AlojamientoUncheckedUpdateInput>
    /**
     * Choose, which Alojamiento to update.
     */
    where: AlojamientoWhereUniqueInput
  }

  /**
   * Alojamiento updateMany
   */
  export type AlojamientoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alojamientos.
     */
    data: XOR<AlojamientoUpdateManyMutationInput, AlojamientoUncheckedUpdateManyInput>
    /**
     * Filter which Alojamientos to update
     */
    where?: AlojamientoWhereInput
    /**
     * Limit how many Alojamientos to update.
     */
    limit?: number
  }

  /**
   * Alojamiento updateManyAndReturn
   */
  export type AlojamientoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alojamiento
     */
    select?: AlojamientoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alojamiento
     */
    omit?: AlojamientoOmit<ExtArgs> | null
    /**
     * The data used to update Alojamientos.
     */
    data: XOR<AlojamientoUpdateManyMutationInput, AlojamientoUncheckedUpdateManyInput>
    /**
     * Filter which Alojamientos to update
     */
    where?: AlojamientoWhereInput
    /**
     * Limit how many Alojamientos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlojamientoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alojamiento upsert
   */
  export type AlojamientoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alojamiento
     */
    select?: AlojamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alojamiento
     */
    omit?: AlojamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlojamientoInclude<ExtArgs> | null
    /**
     * The filter to search for the Alojamiento to update in case it exists.
     */
    where: AlojamientoWhereUniqueInput
    /**
     * In case the Alojamiento found by the `where` argument doesn't exist, create a new Alojamiento with this data.
     */
    create: XOR<AlojamientoCreateInput, AlojamientoUncheckedCreateInput>
    /**
     * In case the Alojamiento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlojamientoUpdateInput, AlojamientoUncheckedUpdateInput>
  }

  /**
   * Alojamiento delete
   */
  export type AlojamientoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alojamiento
     */
    select?: AlojamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alojamiento
     */
    omit?: AlojamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlojamientoInclude<ExtArgs> | null
    /**
     * Filter which Alojamiento to delete.
     */
    where: AlojamientoWhereUniqueInput
  }

  /**
   * Alojamiento deleteMany
   */
  export type AlojamientoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alojamientos to delete
     */
    where?: AlojamientoWhereInput
    /**
     * Limit how many Alojamientos to delete.
     */
    limit?: number
  }

  /**
   * Alojamiento.leases
   */
  export type Alojamiento$leasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    where?: LeaseWhereInput
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    cursor?: LeaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Alojamiento.solicitudes
   */
  export type Alojamiento$solicitudesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    where?: SolicitudWhereInput
    orderBy?: SolicitudOrderByWithRelationInput | SolicitudOrderByWithRelationInput[]
    cursor?: SolicitudWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SolicitudScalarFieldEnum | SolicitudScalarFieldEnum[]
  }

  /**
   * Alojamiento.favoritedBy
   */
  export type Alojamiento$favoritedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquilino
     */
    select?: InquilinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquilino
     */
    omit?: InquilinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquilinoInclude<ExtArgs> | null
    where?: InquilinoWhereInput
    orderBy?: InquilinoOrderByWithRelationInput | InquilinoOrderByWithRelationInput[]
    cursor?: InquilinoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InquilinoScalarFieldEnum | InquilinoScalarFieldEnum[]
  }

  /**
   * Alojamiento.inquilinos
   */
  export type Alojamiento$inquilinosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquilino
     */
    select?: InquilinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquilino
     */
    omit?: InquilinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquilinoInclude<ExtArgs> | null
    where?: InquilinoWhereInput
    orderBy?: InquilinoOrderByWithRelationInput | InquilinoOrderByWithRelationInput[]
    cursor?: InquilinoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InquilinoScalarFieldEnum | InquilinoScalarFieldEnum[]
  }

  /**
   * Alojamiento without action
   */
  export type AlojamientoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alojamiento
     */
    select?: AlojamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alojamiento
     */
    omit?: AlojamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlojamientoInclude<ExtArgs> | null
  }


  /**
   * Model Propietario
   */

  export type AggregatePropietario = {
    _count: PropietarioCountAggregateOutputType | null
    _avg: PropietarioAvgAggregateOutputType | null
    _sum: PropietarioSumAggregateOutputType | null
    _min: PropietarioMinAggregateOutputType | null
    _max: PropietarioMaxAggregateOutputType | null
  }

  export type PropietarioAvgAggregateOutputType = {
    id: number | null
  }

  export type PropietarioSumAggregateOutputType = {
    id: number | null
  }

  export type PropietarioMinAggregateOutputType = {
    id: number | null
    cognitoId: string | null
    nombre: string | null
    email: string | null
    telefono: string | null
  }

  export type PropietarioMaxAggregateOutputType = {
    id: number | null
    cognitoId: string | null
    nombre: string | null
    email: string | null
    telefono: string | null
  }

  export type PropietarioCountAggregateOutputType = {
    id: number
    cognitoId: number
    nombre: number
    email: number
    telefono: number
    _all: number
  }


  export type PropietarioAvgAggregateInputType = {
    id?: true
  }

  export type PropietarioSumAggregateInputType = {
    id?: true
  }

  export type PropietarioMinAggregateInputType = {
    id?: true
    cognitoId?: true
    nombre?: true
    email?: true
    telefono?: true
  }

  export type PropietarioMaxAggregateInputType = {
    id?: true
    cognitoId?: true
    nombre?: true
    email?: true
    telefono?: true
  }

  export type PropietarioCountAggregateInputType = {
    id?: true
    cognitoId?: true
    nombre?: true
    email?: true
    telefono?: true
    _all?: true
  }

  export type PropietarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Propietario to aggregate.
     */
    where?: PropietarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Propietarios to fetch.
     */
    orderBy?: PropietarioOrderByWithRelationInput | PropietarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropietarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Propietarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Propietarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Propietarios
    **/
    _count?: true | PropietarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropietarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropietarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropietarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropietarioMaxAggregateInputType
  }

  export type GetPropietarioAggregateType<T extends PropietarioAggregateArgs> = {
        [P in keyof T & keyof AggregatePropietario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropietario[P]>
      : GetScalarType<T[P], AggregatePropietario[P]>
  }




  export type PropietarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropietarioWhereInput
    orderBy?: PropietarioOrderByWithAggregationInput | PropietarioOrderByWithAggregationInput[]
    by: PropietarioScalarFieldEnum[] | PropietarioScalarFieldEnum
    having?: PropietarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropietarioCountAggregateInputType | true
    _avg?: PropietarioAvgAggregateInputType
    _sum?: PropietarioSumAggregateInputType
    _min?: PropietarioMinAggregateInputType
    _max?: PropietarioMaxAggregateInputType
  }

  export type PropietarioGroupByOutputType = {
    id: number
    cognitoId: string
    nombre: string
    email: string
    telefono: string
    _count: PropietarioCountAggregateOutputType | null
    _avg: PropietarioAvgAggregateOutputType | null
    _sum: PropietarioSumAggregateOutputType | null
    _min: PropietarioMinAggregateOutputType | null
    _max: PropietarioMaxAggregateOutputType | null
  }

  type GetPropietarioGroupByPayload<T extends PropietarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropietarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropietarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropietarioGroupByOutputType[P]>
            : GetScalarType<T[P], PropietarioGroupByOutputType[P]>
        }
      >
    >


  export type PropietarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    managedProperties?: boolean | Propietario$managedPropertiesArgs<ExtArgs>
    _count?: boolean | PropietarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propietario"]>

  export type PropietarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
  }, ExtArgs["result"]["propietario"]>

  export type PropietarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
  }, ExtArgs["result"]["propietario"]>

  export type PropietarioSelectScalar = {
    id?: boolean
    cognitoId?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
  }

  export type PropietarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cognitoId" | "nombre" | "email" | "telefono", ExtArgs["result"]["propietario"]>
  export type PropietarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    managedProperties?: boolean | Propietario$managedPropertiesArgs<ExtArgs>
    _count?: boolean | PropietarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropietarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PropietarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PropietarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Propietario"
    objects: {
      managedProperties: Prisma.$AlojamientoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cognitoId: string
      nombre: string
      email: string
      telefono: string
    }, ExtArgs["result"]["propietario"]>
    composites: {}
  }

  type PropietarioGetPayload<S extends boolean | null | undefined | PropietarioDefaultArgs> = $Result.GetResult<Prisma.$PropietarioPayload, S>

  type PropietarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropietarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropietarioCountAggregateInputType | true
    }

  export interface PropietarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Propietario'], meta: { name: 'Propietario' } }
    /**
     * Find zero or one Propietario that matches the filter.
     * @param {PropietarioFindUniqueArgs} args - Arguments to find a Propietario
     * @example
     * // Get one Propietario
     * const propietario = await prisma.propietario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropietarioFindUniqueArgs>(args: SelectSubset<T, PropietarioFindUniqueArgs<ExtArgs>>): Prisma__PropietarioClient<$Result.GetResult<Prisma.$PropietarioPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Propietario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropietarioFindUniqueOrThrowArgs} args - Arguments to find a Propietario
     * @example
     * // Get one Propietario
     * const propietario = await prisma.propietario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropietarioFindUniqueOrThrowArgs>(args: SelectSubset<T, PropietarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropietarioClient<$Result.GetResult<Prisma.$PropietarioPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Propietario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropietarioFindFirstArgs} args - Arguments to find a Propietario
     * @example
     * // Get one Propietario
     * const propietario = await prisma.propietario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropietarioFindFirstArgs>(args?: SelectSubset<T, PropietarioFindFirstArgs<ExtArgs>>): Prisma__PropietarioClient<$Result.GetResult<Prisma.$PropietarioPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Propietario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropietarioFindFirstOrThrowArgs} args - Arguments to find a Propietario
     * @example
     * // Get one Propietario
     * const propietario = await prisma.propietario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropietarioFindFirstOrThrowArgs>(args?: SelectSubset<T, PropietarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropietarioClient<$Result.GetResult<Prisma.$PropietarioPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Propietarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropietarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Propietarios
     * const propietarios = await prisma.propietario.findMany()
     * 
     * // Get first 10 Propietarios
     * const propietarios = await prisma.propietario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propietarioWithIdOnly = await prisma.propietario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropietarioFindManyArgs>(args?: SelectSubset<T, PropietarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropietarioPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Propietario.
     * @param {PropietarioCreateArgs} args - Arguments to create a Propietario.
     * @example
     * // Create one Propietario
     * const Propietario = await prisma.propietario.create({
     *   data: {
     *     // ... data to create a Propietario
     *   }
     * })
     * 
     */
    create<T extends PropietarioCreateArgs>(args: SelectSubset<T, PropietarioCreateArgs<ExtArgs>>): Prisma__PropietarioClient<$Result.GetResult<Prisma.$PropietarioPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Propietarios.
     * @param {PropietarioCreateManyArgs} args - Arguments to create many Propietarios.
     * @example
     * // Create many Propietarios
     * const propietario = await prisma.propietario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropietarioCreateManyArgs>(args?: SelectSubset<T, PropietarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Propietarios and returns the data saved in the database.
     * @param {PropietarioCreateManyAndReturnArgs} args - Arguments to create many Propietarios.
     * @example
     * // Create many Propietarios
     * const propietario = await prisma.propietario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Propietarios and only return the `id`
     * const propietarioWithIdOnly = await prisma.propietario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropietarioCreateManyAndReturnArgs>(args?: SelectSubset<T, PropietarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropietarioPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Propietario.
     * @param {PropietarioDeleteArgs} args - Arguments to delete one Propietario.
     * @example
     * // Delete one Propietario
     * const Propietario = await prisma.propietario.delete({
     *   where: {
     *     // ... filter to delete one Propietario
     *   }
     * })
     * 
     */
    delete<T extends PropietarioDeleteArgs>(args: SelectSubset<T, PropietarioDeleteArgs<ExtArgs>>): Prisma__PropietarioClient<$Result.GetResult<Prisma.$PropietarioPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Propietario.
     * @param {PropietarioUpdateArgs} args - Arguments to update one Propietario.
     * @example
     * // Update one Propietario
     * const propietario = await prisma.propietario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropietarioUpdateArgs>(args: SelectSubset<T, PropietarioUpdateArgs<ExtArgs>>): Prisma__PropietarioClient<$Result.GetResult<Prisma.$PropietarioPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Propietarios.
     * @param {PropietarioDeleteManyArgs} args - Arguments to filter Propietarios to delete.
     * @example
     * // Delete a few Propietarios
     * const { count } = await prisma.propietario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropietarioDeleteManyArgs>(args?: SelectSubset<T, PropietarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Propietarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropietarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Propietarios
     * const propietario = await prisma.propietario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropietarioUpdateManyArgs>(args: SelectSubset<T, PropietarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Propietarios and returns the data updated in the database.
     * @param {PropietarioUpdateManyAndReturnArgs} args - Arguments to update many Propietarios.
     * @example
     * // Update many Propietarios
     * const propietario = await prisma.propietario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Propietarios and only return the `id`
     * const propietarioWithIdOnly = await prisma.propietario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropietarioUpdateManyAndReturnArgs>(args: SelectSubset<T, PropietarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropietarioPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Propietario.
     * @param {PropietarioUpsertArgs} args - Arguments to update or create a Propietario.
     * @example
     * // Update or create a Propietario
     * const propietario = await prisma.propietario.upsert({
     *   create: {
     *     // ... data to create a Propietario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Propietario we want to update
     *   }
     * })
     */
    upsert<T extends PropietarioUpsertArgs>(args: SelectSubset<T, PropietarioUpsertArgs<ExtArgs>>): Prisma__PropietarioClient<$Result.GetResult<Prisma.$PropietarioPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Propietarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropietarioCountArgs} args - Arguments to filter Propietarios to count.
     * @example
     * // Count the number of Propietarios
     * const count = await prisma.propietario.count({
     *   where: {
     *     // ... the filter for the Propietarios we want to count
     *   }
     * })
    **/
    count<T extends PropietarioCountArgs>(
      args?: Subset<T, PropietarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropietarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Propietario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropietarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropietarioAggregateArgs>(args: Subset<T, PropietarioAggregateArgs>): Prisma.PrismaPromise<GetPropietarioAggregateType<T>>

    /**
     * Group by Propietario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropietarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropietarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropietarioGroupByArgs['orderBy'] }
        : { orderBy?: PropietarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropietarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropietarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Propietario model
   */
  readonly fields: PropietarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Propietario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropietarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    managedProperties<T extends Propietario$managedPropertiesArgs<ExtArgs> = {}>(args?: Subset<T, Propietario$managedPropertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlojamientoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Propietario model
   */ 
  interface PropietarioFieldRefs {
    readonly id: FieldRef<"Propietario", 'Int'>
    readonly cognitoId: FieldRef<"Propietario", 'String'>
    readonly nombre: FieldRef<"Propietario", 'String'>
    readonly email: FieldRef<"Propietario", 'String'>
    readonly telefono: FieldRef<"Propietario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Propietario findUnique
   */
  export type PropietarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propietario
     */
    select?: PropietarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propietario
     */
    omit?: PropietarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropietarioInclude<ExtArgs> | null
    /**
     * Filter, which Propietario to fetch.
     */
    where: PropietarioWhereUniqueInput
  }

  /**
   * Propietario findUniqueOrThrow
   */
  export type PropietarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propietario
     */
    select?: PropietarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propietario
     */
    omit?: PropietarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropietarioInclude<ExtArgs> | null
    /**
     * Filter, which Propietario to fetch.
     */
    where: PropietarioWhereUniqueInput
  }

  /**
   * Propietario findFirst
   */
  export type PropietarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propietario
     */
    select?: PropietarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propietario
     */
    omit?: PropietarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropietarioInclude<ExtArgs> | null
    /**
     * Filter, which Propietario to fetch.
     */
    where?: PropietarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Propietarios to fetch.
     */
    orderBy?: PropietarioOrderByWithRelationInput | PropietarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Propietarios.
     */
    cursor?: PropietarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Propietarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Propietarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Propietarios.
     */
    distinct?: PropietarioScalarFieldEnum | PropietarioScalarFieldEnum[]
  }

  /**
   * Propietario findFirstOrThrow
   */
  export type PropietarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propietario
     */
    select?: PropietarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propietario
     */
    omit?: PropietarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropietarioInclude<ExtArgs> | null
    /**
     * Filter, which Propietario to fetch.
     */
    where?: PropietarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Propietarios to fetch.
     */
    orderBy?: PropietarioOrderByWithRelationInput | PropietarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Propietarios.
     */
    cursor?: PropietarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Propietarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Propietarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Propietarios.
     */
    distinct?: PropietarioScalarFieldEnum | PropietarioScalarFieldEnum[]
  }

  /**
   * Propietario findMany
   */
  export type PropietarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propietario
     */
    select?: PropietarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propietario
     */
    omit?: PropietarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropietarioInclude<ExtArgs> | null
    /**
     * Filter, which Propietarios to fetch.
     */
    where?: PropietarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Propietarios to fetch.
     */
    orderBy?: PropietarioOrderByWithRelationInput | PropietarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Propietarios.
     */
    cursor?: PropietarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Propietarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Propietarios.
     */
    skip?: number
    distinct?: PropietarioScalarFieldEnum | PropietarioScalarFieldEnum[]
  }

  /**
   * Propietario create
   */
  export type PropietarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propietario
     */
    select?: PropietarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propietario
     */
    omit?: PropietarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropietarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Propietario.
     */
    data: XOR<PropietarioCreateInput, PropietarioUncheckedCreateInput>
  }

  /**
   * Propietario createMany
   */
  export type PropietarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Propietarios.
     */
    data: PropietarioCreateManyInput | PropietarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Propietario createManyAndReturn
   */
  export type PropietarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propietario
     */
    select?: PropietarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Propietario
     */
    omit?: PropietarioOmit<ExtArgs> | null
    /**
     * The data used to create many Propietarios.
     */
    data: PropietarioCreateManyInput | PropietarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Propietario update
   */
  export type PropietarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propietario
     */
    select?: PropietarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propietario
     */
    omit?: PropietarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropietarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Propietario.
     */
    data: XOR<PropietarioUpdateInput, PropietarioUncheckedUpdateInput>
    /**
     * Choose, which Propietario to update.
     */
    where: PropietarioWhereUniqueInput
  }

  /**
   * Propietario updateMany
   */
  export type PropietarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Propietarios.
     */
    data: XOR<PropietarioUpdateManyMutationInput, PropietarioUncheckedUpdateManyInput>
    /**
     * Filter which Propietarios to update
     */
    where?: PropietarioWhereInput
    /**
     * Limit how many Propietarios to update.
     */
    limit?: number
  }

  /**
   * Propietario updateManyAndReturn
   */
  export type PropietarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propietario
     */
    select?: PropietarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Propietario
     */
    omit?: PropietarioOmit<ExtArgs> | null
    /**
     * The data used to update Propietarios.
     */
    data: XOR<PropietarioUpdateManyMutationInput, PropietarioUncheckedUpdateManyInput>
    /**
     * Filter which Propietarios to update
     */
    where?: PropietarioWhereInput
    /**
     * Limit how many Propietarios to update.
     */
    limit?: number
  }

  /**
   * Propietario upsert
   */
  export type PropietarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propietario
     */
    select?: PropietarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propietario
     */
    omit?: PropietarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropietarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Propietario to update in case it exists.
     */
    where: PropietarioWhereUniqueInput
    /**
     * In case the Propietario found by the `where` argument doesn't exist, create a new Propietario with this data.
     */
    create: XOR<PropietarioCreateInput, PropietarioUncheckedCreateInput>
    /**
     * In case the Propietario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropietarioUpdateInput, PropietarioUncheckedUpdateInput>
  }

  /**
   * Propietario delete
   */
  export type PropietarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propietario
     */
    select?: PropietarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propietario
     */
    omit?: PropietarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropietarioInclude<ExtArgs> | null
    /**
     * Filter which Propietario to delete.
     */
    where: PropietarioWhereUniqueInput
  }

  /**
   * Propietario deleteMany
   */
  export type PropietarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Propietarios to delete
     */
    where?: PropietarioWhereInput
    /**
     * Limit how many Propietarios to delete.
     */
    limit?: number
  }

  /**
   * Propietario.managedProperties
   */
  export type Propietario$managedPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alojamiento
     */
    select?: AlojamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alojamiento
     */
    omit?: AlojamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlojamientoInclude<ExtArgs> | null
    where?: AlojamientoWhereInput
    orderBy?: AlojamientoOrderByWithRelationInput | AlojamientoOrderByWithRelationInput[]
    cursor?: AlojamientoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlojamientoScalarFieldEnum | AlojamientoScalarFieldEnum[]
  }

  /**
   * Propietario without action
   */
  export type PropietarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propietario
     */
    select?: PropietarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propietario
     */
    omit?: PropietarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropietarioInclude<ExtArgs> | null
  }


  /**
   * Model Inquilino
   */

  export type AggregateInquilino = {
    _count: InquilinoCountAggregateOutputType | null
    _avg: InquilinoAvgAggregateOutputType | null
    _sum: InquilinoSumAggregateOutputType | null
    _min: InquilinoMinAggregateOutputType | null
    _max: InquilinoMaxAggregateOutputType | null
  }

  export type InquilinoAvgAggregateOutputType = {
    id: number | null
  }

  export type InquilinoSumAggregateOutputType = {
    id: number | null
  }

  export type InquilinoMinAggregateOutputType = {
    id: number | null
    cognitoId: string | null
    nombre: string | null
    email: string | null
    telefono: string | null
  }

  export type InquilinoMaxAggregateOutputType = {
    id: number | null
    cognitoId: string | null
    nombre: string | null
    email: string | null
    telefono: string | null
  }

  export type InquilinoCountAggregateOutputType = {
    id: number
    cognitoId: number
    nombre: number
    email: number
    telefono: number
    _all: number
  }


  export type InquilinoAvgAggregateInputType = {
    id?: true
  }

  export type InquilinoSumAggregateInputType = {
    id?: true
  }

  export type InquilinoMinAggregateInputType = {
    id?: true
    cognitoId?: true
    nombre?: true
    email?: true
    telefono?: true
  }

  export type InquilinoMaxAggregateInputType = {
    id?: true
    cognitoId?: true
    nombre?: true
    email?: true
    telefono?: true
  }

  export type InquilinoCountAggregateInputType = {
    id?: true
    cognitoId?: true
    nombre?: true
    email?: true
    telefono?: true
    _all?: true
  }

  export type InquilinoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inquilino to aggregate.
     */
    where?: InquilinoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquilinos to fetch.
     */
    orderBy?: InquilinoOrderByWithRelationInput | InquilinoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InquilinoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquilinos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquilinos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inquilinos
    **/
    _count?: true | InquilinoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InquilinoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InquilinoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InquilinoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InquilinoMaxAggregateInputType
  }

  export type GetInquilinoAggregateType<T extends InquilinoAggregateArgs> = {
        [P in keyof T & keyof AggregateInquilino]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInquilino[P]>
      : GetScalarType<T[P], AggregateInquilino[P]>
  }




  export type InquilinoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InquilinoWhereInput
    orderBy?: InquilinoOrderByWithAggregationInput | InquilinoOrderByWithAggregationInput[]
    by: InquilinoScalarFieldEnum[] | InquilinoScalarFieldEnum
    having?: InquilinoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InquilinoCountAggregateInputType | true
    _avg?: InquilinoAvgAggregateInputType
    _sum?: InquilinoSumAggregateInputType
    _min?: InquilinoMinAggregateInputType
    _max?: InquilinoMaxAggregateInputType
  }

  export type InquilinoGroupByOutputType = {
    id: number
    cognitoId: string
    nombre: string
    email: string
    telefono: string
    _count: InquilinoCountAggregateOutputType | null
    _avg: InquilinoAvgAggregateOutputType | null
    _sum: InquilinoSumAggregateOutputType | null
    _min: InquilinoMinAggregateOutputType | null
    _max: InquilinoMaxAggregateOutputType | null
  }

  type GetInquilinoGroupByPayload<T extends InquilinoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InquilinoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InquilinoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InquilinoGroupByOutputType[P]>
            : GetScalarType<T[P], InquilinoGroupByOutputType[P]>
        }
      >
    >


  export type InquilinoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    alojamientos?: boolean | Inquilino$alojamientosArgs<ExtArgs>
    favoritos?: boolean | Inquilino$favoritosArgs<ExtArgs>
    solicitudes?: boolean | Inquilino$solicitudesArgs<ExtArgs>
    leases?: boolean | Inquilino$leasesArgs<ExtArgs>
    _count?: boolean | InquilinoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inquilino"]>

  export type InquilinoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
  }, ExtArgs["result"]["inquilino"]>

  export type InquilinoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
  }, ExtArgs["result"]["inquilino"]>

  export type InquilinoSelectScalar = {
    id?: boolean
    cognitoId?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
  }

  export type InquilinoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cognitoId" | "nombre" | "email" | "telefono", ExtArgs["result"]["inquilino"]>
  export type InquilinoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alojamientos?: boolean | Inquilino$alojamientosArgs<ExtArgs>
    favoritos?: boolean | Inquilino$favoritosArgs<ExtArgs>
    solicitudes?: boolean | Inquilino$solicitudesArgs<ExtArgs>
    leases?: boolean | Inquilino$leasesArgs<ExtArgs>
    _count?: boolean | InquilinoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InquilinoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InquilinoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InquilinoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inquilino"
    objects: {
      alojamientos: Prisma.$AlojamientoPayload<ExtArgs>[]
      favoritos: Prisma.$AlojamientoPayload<ExtArgs>[]
      solicitudes: Prisma.$SolicitudPayload<ExtArgs>[]
      leases: Prisma.$LeasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cognitoId: string
      nombre: string
      email: string
      telefono: string
    }, ExtArgs["result"]["inquilino"]>
    composites: {}
  }

  type InquilinoGetPayload<S extends boolean | null | undefined | InquilinoDefaultArgs> = $Result.GetResult<Prisma.$InquilinoPayload, S>

  type InquilinoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InquilinoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InquilinoCountAggregateInputType | true
    }

  export interface InquilinoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inquilino'], meta: { name: 'Inquilino' } }
    /**
     * Find zero or one Inquilino that matches the filter.
     * @param {InquilinoFindUniqueArgs} args - Arguments to find a Inquilino
     * @example
     * // Get one Inquilino
     * const inquilino = await prisma.inquilino.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InquilinoFindUniqueArgs>(args: SelectSubset<T, InquilinoFindUniqueArgs<ExtArgs>>): Prisma__InquilinoClient<$Result.GetResult<Prisma.$InquilinoPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Inquilino that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InquilinoFindUniqueOrThrowArgs} args - Arguments to find a Inquilino
     * @example
     * // Get one Inquilino
     * const inquilino = await prisma.inquilino.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InquilinoFindUniqueOrThrowArgs>(args: SelectSubset<T, InquilinoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InquilinoClient<$Result.GetResult<Prisma.$InquilinoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Inquilino that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquilinoFindFirstArgs} args - Arguments to find a Inquilino
     * @example
     * // Get one Inquilino
     * const inquilino = await prisma.inquilino.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InquilinoFindFirstArgs>(args?: SelectSubset<T, InquilinoFindFirstArgs<ExtArgs>>): Prisma__InquilinoClient<$Result.GetResult<Prisma.$InquilinoPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Inquilino that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquilinoFindFirstOrThrowArgs} args - Arguments to find a Inquilino
     * @example
     * // Get one Inquilino
     * const inquilino = await prisma.inquilino.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InquilinoFindFirstOrThrowArgs>(args?: SelectSubset<T, InquilinoFindFirstOrThrowArgs<ExtArgs>>): Prisma__InquilinoClient<$Result.GetResult<Prisma.$InquilinoPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Inquilinos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquilinoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inquilinos
     * const inquilinos = await prisma.inquilino.findMany()
     * 
     * // Get first 10 Inquilinos
     * const inquilinos = await prisma.inquilino.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inquilinoWithIdOnly = await prisma.inquilino.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InquilinoFindManyArgs>(args?: SelectSubset<T, InquilinoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquilinoPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Inquilino.
     * @param {InquilinoCreateArgs} args - Arguments to create a Inquilino.
     * @example
     * // Create one Inquilino
     * const Inquilino = await prisma.inquilino.create({
     *   data: {
     *     // ... data to create a Inquilino
     *   }
     * })
     * 
     */
    create<T extends InquilinoCreateArgs>(args: SelectSubset<T, InquilinoCreateArgs<ExtArgs>>): Prisma__InquilinoClient<$Result.GetResult<Prisma.$InquilinoPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Inquilinos.
     * @param {InquilinoCreateManyArgs} args - Arguments to create many Inquilinos.
     * @example
     * // Create many Inquilinos
     * const inquilino = await prisma.inquilino.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InquilinoCreateManyArgs>(args?: SelectSubset<T, InquilinoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inquilinos and returns the data saved in the database.
     * @param {InquilinoCreateManyAndReturnArgs} args - Arguments to create many Inquilinos.
     * @example
     * // Create many Inquilinos
     * const inquilino = await prisma.inquilino.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inquilinos and only return the `id`
     * const inquilinoWithIdOnly = await prisma.inquilino.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InquilinoCreateManyAndReturnArgs>(args?: SelectSubset<T, InquilinoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquilinoPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Inquilino.
     * @param {InquilinoDeleteArgs} args - Arguments to delete one Inquilino.
     * @example
     * // Delete one Inquilino
     * const Inquilino = await prisma.inquilino.delete({
     *   where: {
     *     // ... filter to delete one Inquilino
     *   }
     * })
     * 
     */
    delete<T extends InquilinoDeleteArgs>(args: SelectSubset<T, InquilinoDeleteArgs<ExtArgs>>): Prisma__InquilinoClient<$Result.GetResult<Prisma.$InquilinoPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Inquilino.
     * @param {InquilinoUpdateArgs} args - Arguments to update one Inquilino.
     * @example
     * // Update one Inquilino
     * const inquilino = await prisma.inquilino.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InquilinoUpdateArgs>(args: SelectSubset<T, InquilinoUpdateArgs<ExtArgs>>): Prisma__InquilinoClient<$Result.GetResult<Prisma.$InquilinoPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Inquilinos.
     * @param {InquilinoDeleteManyArgs} args - Arguments to filter Inquilinos to delete.
     * @example
     * // Delete a few Inquilinos
     * const { count } = await prisma.inquilino.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InquilinoDeleteManyArgs>(args?: SelectSubset<T, InquilinoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inquilinos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquilinoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inquilinos
     * const inquilino = await prisma.inquilino.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InquilinoUpdateManyArgs>(args: SelectSubset<T, InquilinoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inquilinos and returns the data updated in the database.
     * @param {InquilinoUpdateManyAndReturnArgs} args - Arguments to update many Inquilinos.
     * @example
     * // Update many Inquilinos
     * const inquilino = await prisma.inquilino.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inquilinos and only return the `id`
     * const inquilinoWithIdOnly = await prisma.inquilino.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InquilinoUpdateManyAndReturnArgs>(args: SelectSubset<T, InquilinoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquilinoPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Inquilino.
     * @param {InquilinoUpsertArgs} args - Arguments to update or create a Inquilino.
     * @example
     * // Update or create a Inquilino
     * const inquilino = await prisma.inquilino.upsert({
     *   create: {
     *     // ... data to create a Inquilino
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inquilino we want to update
     *   }
     * })
     */
    upsert<T extends InquilinoUpsertArgs>(args: SelectSubset<T, InquilinoUpsertArgs<ExtArgs>>): Prisma__InquilinoClient<$Result.GetResult<Prisma.$InquilinoPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Inquilinos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquilinoCountArgs} args - Arguments to filter Inquilinos to count.
     * @example
     * // Count the number of Inquilinos
     * const count = await prisma.inquilino.count({
     *   where: {
     *     // ... the filter for the Inquilinos we want to count
     *   }
     * })
    **/
    count<T extends InquilinoCountArgs>(
      args?: Subset<T, InquilinoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InquilinoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inquilino.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquilinoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InquilinoAggregateArgs>(args: Subset<T, InquilinoAggregateArgs>): Prisma.PrismaPromise<GetInquilinoAggregateType<T>>

    /**
     * Group by Inquilino.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquilinoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InquilinoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InquilinoGroupByArgs['orderBy'] }
        : { orderBy?: InquilinoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InquilinoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInquilinoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inquilino model
   */
  readonly fields: InquilinoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inquilino.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InquilinoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alojamientos<T extends Inquilino$alojamientosArgs<ExtArgs> = {}>(args?: Subset<T, Inquilino$alojamientosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlojamientoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    favoritos<T extends Inquilino$favoritosArgs<ExtArgs> = {}>(args?: Subset<T, Inquilino$favoritosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlojamientoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    solicitudes<T extends Inquilino$solicitudesArgs<ExtArgs> = {}>(args?: Subset<T, Inquilino$solicitudesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    leases<T extends Inquilino$leasesArgs<ExtArgs> = {}>(args?: Subset<T, Inquilino$leasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inquilino model
   */ 
  interface InquilinoFieldRefs {
    readonly id: FieldRef<"Inquilino", 'Int'>
    readonly cognitoId: FieldRef<"Inquilino", 'String'>
    readonly nombre: FieldRef<"Inquilino", 'String'>
    readonly email: FieldRef<"Inquilino", 'String'>
    readonly telefono: FieldRef<"Inquilino", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Inquilino findUnique
   */
  export type InquilinoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquilino
     */
    select?: InquilinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquilino
     */
    omit?: InquilinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquilinoInclude<ExtArgs> | null
    /**
     * Filter, which Inquilino to fetch.
     */
    where: InquilinoWhereUniqueInput
  }

  /**
   * Inquilino findUniqueOrThrow
   */
  export type InquilinoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquilino
     */
    select?: InquilinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquilino
     */
    omit?: InquilinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquilinoInclude<ExtArgs> | null
    /**
     * Filter, which Inquilino to fetch.
     */
    where: InquilinoWhereUniqueInput
  }

  /**
   * Inquilino findFirst
   */
  export type InquilinoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquilino
     */
    select?: InquilinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquilino
     */
    omit?: InquilinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquilinoInclude<ExtArgs> | null
    /**
     * Filter, which Inquilino to fetch.
     */
    where?: InquilinoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquilinos to fetch.
     */
    orderBy?: InquilinoOrderByWithRelationInput | InquilinoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inquilinos.
     */
    cursor?: InquilinoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquilinos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquilinos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inquilinos.
     */
    distinct?: InquilinoScalarFieldEnum | InquilinoScalarFieldEnum[]
  }

  /**
   * Inquilino findFirstOrThrow
   */
  export type InquilinoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquilino
     */
    select?: InquilinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquilino
     */
    omit?: InquilinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquilinoInclude<ExtArgs> | null
    /**
     * Filter, which Inquilino to fetch.
     */
    where?: InquilinoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquilinos to fetch.
     */
    orderBy?: InquilinoOrderByWithRelationInput | InquilinoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inquilinos.
     */
    cursor?: InquilinoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquilinos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquilinos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inquilinos.
     */
    distinct?: InquilinoScalarFieldEnum | InquilinoScalarFieldEnum[]
  }

  /**
   * Inquilino findMany
   */
  export type InquilinoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquilino
     */
    select?: InquilinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquilino
     */
    omit?: InquilinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquilinoInclude<ExtArgs> | null
    /**
     * Filter, which Inquilinos to fetch.
     */
    where?: InquilinoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquilinos to fetch.
     */
    orderBy?: InquilinoOrderByWithRelationInput | InquilinoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inquilinos.
     */
    cursor?: InquilinoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquilinos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquilinos.
     */
    skip?: number
    distinct?: InquilinoScalarFieldEnum | InquilinoScalarFieldEnum[]
  }

  /**
   * Inquilino create
   */
  export type InquilinoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquilino
     */
    select?: InquilinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquilino
     */
    omit?: InquilinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquilinoInclude<ExtArgs> | null
    /**
     * The data needed to create a Inquilino.
     */
    data: XOR<InquilinoCreateInput, InquilinoUncheckedCreateInput>
  }

  /**
   * Inquilino createMany
   */
  export type InquilinoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inquilinos.
     */
    data: InquilinoCreateManyInput | InquilinoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inquilino createManyAndReturn
   */
  export type InquilinoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquilino
     */
    select?: InquilinoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inquilino
     */
    omit?: InquilinoOmit<ExtArgs> | null
    /**
     * The data used to create many Inquilinos.
     */
    data: InquilinoCreateManyInput | InquilinoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inquilino update
   */
  export type InquilinoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquilino
     */
    select?: InquilinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquilino
     */
    omit?: InquilinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquilinoInclude<ExtArgs> | null
    /**
     * The data needed to update a Inquilino.
     */
    data: XOR<InquilinoUpdateInput, InquilinoUncheckedUpdateInput>
    /**
     * Choose, which Inquilino to update.
     */
    where: InquilinoWhereUniqueInput
  }

  /**
   * Inquilino updateMany
   */
  export type InquilinoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inquilinos.
     */
    data: XOR<InquilinoUpdateManyMutationInput, InquilinoUncheckedUpdateManyInput>
    /**
     * Filter which Inquilinos to update
     */
    where?: InquilinoWhereInput
    /**
     * Limit how many Inquilinos to update.
     */
    limit?: number
  }

  /**
   * Inquilino updateManyAndReturn
   */
  export type InquilinoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquilino
     */
    select?: InquilinoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inquilino
     */
    omit?: InquilinoOmit<ExtArgs> | null
    /**
     * The data used to update Inquilinos.
     */
    data: XOR<InquilinoUpdateManyMutationInput, InquilinoUncheckedUpdateManyInput>
    /**
     * Filter which Inquilinos to update
     */
    where?: InquilinoWhereInput
    /**
     * Limit how many Inquilinos to update.
     */
    limit?: number
  }

  /**
   * Inquilino upsert
   */
  export type InquilinoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquilino
     */
    select?: InquilinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquilino
     */
    omit?: InquilinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquilinoInclude<ExtArgs> | null
    /**
     * The filter to search for the Inquilino to update in case it exists.
     */
    where: InquilinoWhereUniqueInput
    /**
     * In case the Inquilino found by the `where` argument doesn't exist, create a new Inquilino with this data.
     */
    create: XOR<InquilinoCreateInput, InquilinoUncheckedCreateInput>
    /**
     * In case the Inquilino was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InquilinoUpdateInput, InquilinoUncheckedUpdateInput>
  }

  /**
   * Inquilino delete
   */
  export type InquilinoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquilino
     */
    select?: InquilinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquilino
     */
    omit?: InquilinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquilinoInclude<ExtArgs> | null
    /**
     * Filter which Inquilino to delete.
     */
    where: InquilinoWhereUniqueInput
  }

  /**
   * Inquilino deleteMany
   */
  export type InquilinoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inquilinos to delete
     */
    where?: InquilinoWhereInput
    /**
     * Limit how many Inquilinos to delete.
     */
    limit?: number
  }

  /**
   * Inquilino.alojamientos
   */
  export type Inquilino$alojamientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alojamiento
     */
    select?: AlojamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alojamiento
     */
    omit?: AlojamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlojamientoInclude<ExtArgs> | null
    where?: AlojamientoWhereInput
    orderBy?: AlojamientoOrderByWithRelationInput | AlojamientoOrderByWithRelationInput[]
    cursor?: AlojamientoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlojamientoScalarFieldEnum | AlojamientoScalarFieldEnum[]
  }

  /**
   * Inquilino.favoritos
   */
  export type Inquilino$favoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alojamiento
     */
    select?: AlojamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alojamiento
     */
    omit?: AlojamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlojamientoInclude<ExtArgs> | null
    where?: AlojamientoWhereInput
    orderBy?: AlojamientoOrderByWithRelationInput | AlojamientoOrderByWithRelationInput[]
    cursor?: AlojamientoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlojamientoScalarFieldEnum | AlojamientoScalarFieldEnum[]
  }

  /**
   * Inquilino.solicitudes
   */
  export type Inquilino$solicitudesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    where?: SolicitudWhereInput
    orderBy?: SolicitudOrderByWithRelationInput | SolicitudOrderByWithRelationInput[]
    cursor?: SolicitudWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SolicitudScalarFieldEnum | SolicitudScalarFieldEnum[]
  }

  /**
   * Inquilino.leases
   */
  export type Inquilino$leasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    where?: LeaseWhereInput
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    cursor?: LeaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Inquilino without action
   */
  export type InquilinoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquilino
     */
    select?: InquilinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquilino
     */
    omit?: InquilinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquilinoInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    id: number | null
  }

  export type LocationSumAggregateOutputType = {
    id: number | null
  }

  export type LocationMinAggregateOutputType = {
    id: number | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
  }

  export type LocationMaxAggregateOutputType = {
    id: number | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    address: number
    city: number
    state: number
    country: number
    postalCode: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    id?: true
  }

  export type LocationSumAggregateInputType = {
    id?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: number
    address: string
    city: string
    state: string
    country: string
    postalCode: string
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    alojamientos?: boolean | Location$alojamientosArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>


  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "city" | "state" | "country" | "postalCode", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alojamientos?: boolean | Location$alojamientosArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      alojamientos: Prisma.$AlojamientoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      address: string
      city: string
      state: string
      country: string
      postalCode: string
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alojamientos<T extends Location$alojamientosArgs<ExtArgs> = {}>(args?: Subset<T, Location$alojamientosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlojamientoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Location model
   */ 
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'Int'>
    readonly address: FieldRef<"Location", 'String'>
    readonly city: FieldRef<"Location", 'String'>
    readonly state: FieldRef<"Location", 'String'>
    readonly country: FieldRef<"Location", 'String'>
    readonly postalCode: FieldRef<"Location", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location.alojamientos
   */
  export type Location$alojamientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alojamiento
     */
    select?: AlojamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alojamiento
     */
    omit?: AlojamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlojamientoInclude<ExtArgs> | null
    where?: AlojamientoWhereInput
    orderBy?: AlojamientoOrderByWithRelationInput | AlojamientoOrderByWithRelationInput[]
    cursor?: AlojamientoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlojamientoScalarFieldEnum | AlojamientoScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model Solicitud
   */

  export type AggregateSolicitud = {
    _count: SolicitudCountAggregateOutputType | null
    _avg: SolicitudAvgAggregateOutputType | null
    _sum: SolicitudSumAggregateOutputType | null
    _min: SolicitudMinAggregateOutputType | null
    _max: SolicitudMaxAggregateOutputType | null
  }

  export type SolicitudAvgAggregateOutputType = {
    id: number | null
    alojamientoId: number | null
    leaseId: number | null
  }

  export type SolicitudSumAggregateOutputType = {
    id: number | null
    alojamientoId: number | null
    leaseId: number | null
  }

  export type SolicitudMinAggregateOutputType = {
    id: number | null
    applicationDate: Date | null
    estado: $Enums.EstadoSolicitud | null
    alojamientoId: number | null
    tenantCognitoId: string | null
    nombre: string | null
    email: string | null
    telefono: string | null
    mensaje: string | null
    leaseId: number | null
  }

  export type SolicitudMaxAggregateOutputType = {
    id: number | null
    applicationDate: Date | null
    estado: $Enums.EstadoSolicitud | null
    alojamientoId: number | null
    tenantCognitoId: string | null
    nombre: string | null
    email: string | null
    telefono: string | null
    mensaje: string | null
    leaseId: number | null
  }

  export type SolicitudCountAggregateOutputType = {
    id: number
    applicationDate: number
    estado: number
    alojamientoId: number
    tenantCognitoId: number
    nombre: number
    email: number
    telefono: number
    mensaje: number
    leaseId: number
    _all: number
  }


  export type SolicitudAvgAggregateInputType = {
    id?: true
    alojamientoId?: true
    leaseId?: true
  }

  export type SolicitudSumAggregateInputType = {
    id?: true
    alojamientoId?: true
    leaseId?: true
  }

  export type SolicitudMinAggregateInputType = {
    id?: true
    applicationDate?: true
    estado?: true
    alojamientoId?: true
    tenantCognitoId?: true
    nombre?: true
    email?: true
    telefono?: true
    mensaje?: true
    leaseId?: true
  }

  export type SolicitudMaxAggregateInputType = {
    id?: true
    applicationDate?: true
    estado?: true
    alojamientoId?: true
    tenantCognitoId?: true
    nombre?: true
    email?: true
    telefono?: true
    mensaje?: true
    leaseId?: true
  }

  export type SolicitudCountAggregateInputType = {
    id?: true
    applicationDate?: true
    estado?: true
    alojamientoId?: true
    tenantCognitoId?: true
    nombre?: true
    email?: true
    telefono?: true
    mensaje?: true
    leaseId?: true
    _all?: true
  }

  export type SolicitudAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Solicitud to aggregate.
     */
    where?: SolicitudWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solicituds to fetch.
     */
    orderBy?: SolicitudOrderByWithRelationInput | SolicitudOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SolicitudWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solicituds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solicituds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Solicituds
    **/
    _count?: true | SolicitudCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SolicitudAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SolicitudSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SolicitudMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SolicitudMaxAggregateInputType
  }

  export type GetSolicitudAggregateType<T extends SolicitudAggregateArgs> = {
        [P in keyof T & keyof AggregateSolicitud]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolicitud[P]>
      : GetScalarType<T[P], AggregateSolicitud[P]>
  }




  export type SolicitudGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolicitudWhereInput
    orderBy?: SolicitudOrderByWithAggregationInput | SolicitudOrderByWithAggregationInput[]
    by: SolicitudScalarFieldEnum[] | SolicitudScalarFieldEnum
    having?: SolicitudScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SolicitudCountAggregateInputType | true
    _avg?: SolicitudAvgAggregateInputType
    _sum?: SolicitudSumAggregateInputType
    _min?: SolicitudMinAggregateInputType
    _max?: SolicitudMaxAggregateInputType
  }

  export type SolicitudGroupByOutputType = {
    id: number
    applicationDate: Date
    estado: $Enums.EstadoSolicitud
    alojamientoId: number
    tenantCognitoId: string
    nombre: string
    email: string
    telefono: string
    mensaje: string | null
    leaseId: number | null
    _count: SolicitudCountAggregateOutputType | null
    _avg: SolicitudAvgAggregateOutputType | null
    _sum: SolicitudSumAggregateOutputType | null
    _min: SolicitudMinAggregateOutputType | null
    _max: SolicitudMaxAggregateOutputType | null
  }

  type GetSolicitudGroupByPayload<T extends SolicitudGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SolicitudGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SolicitudGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SolicitudGroupByOutputType[P]>
            : GetScalarType<T[P], SolicitudGroupByOutputType[P]>
        }
      >
    >


  export type SolicitudSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationDate?: boolean
    estado?: boolean
    alojamientoId?: boolean
    tenantCognitoId?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    mensaje?: boolean
    leaseId?: boolean
    alojamiento?: boolean | AlojamientoDefaultArgs<ExtArgs>
    inquilino?: boolean | InquilinoDefaultArgs<ExtArgs>
    lease?: boolean | Solicitud$leaseArgs<ExtArgs>
  }, ExtArgs["result"]["solicitud"]>

  export type SolicitudSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationDate?: boolean
    estado?: boolean
    alojamientoId?: boolean
    tenantCognitoId?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    mensaje?: boolean
    leaseId?: boolean
    alojamiento?: boolean | AlojamientoDefaultArgs<ExtArgs>
    inquilino?: boolean | InquilinoDefaultArgs<ExtArgs>
    lease?: boolean | Solicitud$leaseArgs<ExtArgs>
  }, ExtArgs["result"]["solicitud"]>

  export type SolicitudSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationDate?: boolean
    estado?: boolean
    alojamientoId?: boolean
    tenantCognitoId?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    mensaje?: boolean
    leaseId?: boolean
    alojamiento?: boolean | AlojamientoDefaultArgs<ExtArgs>
    inquilino?: boolean | InquilinoDefaultArgs<ExtArgs>
    lease?: boolean | Solicitud$leaseArgs<ExtArgs>
  }, ExtArgs["result"]["solicitud"]>

  export type SolicitudSelectScalar = {
    id?: boolean
    applicationDate?: boolean
    estado?: boolean
    alojamientoId?: boolean
    tenantCognitoId?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    mensaje?: boolean
    leaseId?: boolean
  }

  export type SolicitudOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationDate" | "estado" | "alojamientoId" | "tenantCognitoId" | "nombre" | "email" | "telefono" | "mensaje" | "leaseId", ExtArgs["result"]["solicitud"]>
  export type SolicitudInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alojamiento?: boolean | AlojamientoDefaultArgs<ExtArgs>
    inquilino?: boolean | InquilinoDefaultArgs<ExtArgs>
    lease?: boolean | Solicitud$leaseArgs<ExtArgs>
  }
  export type SolicitudIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alojamiento?: boolean | AlojamientoDefaultArgs<ExtArgs>
    inquilino?: boolean | InquilinoDefaultArgs<ExtArgs>
    lease?: boolean | Solicitud$leaseArgs<ExtArgs>
  }
  export type SolicitudIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alojamiento?: boolean | AlojamientoDefaultArgs<ExtArgs>
    inquilino?: boolean | InquilinoDefaultArgs<ExtArgs>
    lease?: boolean | Solicitud$leaseArgs<ExtArgs>
  }

  export type $SolicitudPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Solicitud"
    objects: {
      alojamiento: Prisma.$AlojamientoPayload<ExtArgs>
      inquilino: Prisma.$InquilinoPayload<ExtArgs>
      lease: Prisma.$LeasePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      applicationDate: Date
      estado: $Enums.EstadoSolicitud
      alojamientoId: number
      tenantCognitoId: string
      nombre: string
      email: string
      telefono: string
      mensaje: string | null
      leaseId: number | null
    }, ExtArgs["result"]["solicitud"]>
    composites: {}
  }

  type SolicitudGetPayload<S extends boolean | null | undefined | SolicitudDefaultArgs> = $Result.GetResult<Prisma.$SolicitudPayload, S>

  type SolicitudCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SolicitudFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SolicitudCountAggregateInputType | true
    }

  export interface SolicitudDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Solicitud'], meta: { name: 'Solicitud' } }
    /**
     * Find zero or one Solicitud that matches the filter.
     * @param {SolicitudFindUniqueArgs} args - Arguments to find a Solicitud
     * @example
     * // Get one Solicitud
     * const solicitud = await prisma.solicitud.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SolicitudFindUniqueArgs>(args: SelectSubset<T, SolicitudFindUniqueArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Solicitud that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SolicitudFindUniqueOrThrowArgs} args - Arguments to find a Solicitud
     * @example
     * // Get one Solicitud
     * const solicitud = await prisma.solicitud.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SolicitudFindUniqueOrThrowArgs>(args: SelectSubset<T, SolicitudFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Solicitud that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudFindFirstArgs} args - Arguments to find a Solicitud
     * @example
     * // Get one Solicitud
     * const solicitud = await prisma.solicitud.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SolicitudFindFirstArgs>(args?: SelectSubset<T, SolicitudFindFirstArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Solicitud that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudFindFirstOrThrowArgs} args - Arguments to find a Solicitud
     * @example
     * // Get one Solicitud
     * const solicitud = await prisma.solicitud.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SolicitudFindFirstOrThrowArgs>(args?: SelectSubset<T, SolicitudFindFirstOrThrowArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Solicituds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Solicituds
     * const solicituds = await prisma.solicitud.findMany()
     * 
     * // Get first 10 Solicituds
     * const solicituds = await prisma.solicitud.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const solicitudWithIdOnly = await prisma.solicitud.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SolicitudFindManyArgs>(args?: SelectSubset<T, SolicitudFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Solicitud.
     * @param {SolicitudCreateArgs} args - Arguments to create a Solicitud.
     * @example
     * // Create one Solicitud
     * const Solicitud = await prisma.solicitud.create({
     *   data: {
     *     // ... data to create a Solicitud
     *   }
     * })
     * 
     */
    create<T extends SolicitudCreateArgs>(args: SelectSubset<T, SolicitudCreateArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Solicituds.
     * @param {SolicitudCreateManyArgs} args - Arguments to create many Solicituds.
     * @example
     * // Create many Solicituds
     * const solicitud = await prisma.solicitud.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SolicitudCreateManyArgs>(args?: SelectSubset<T, SolicitudCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Solicituds and returns the data saved in the database.
     * @param {SolicitudCreateManyAndReturnArgs} args - Arguments to create many Solicituds.
     * @example
     * // Create many Solicituds
     * const solicitud = await prisma.solicitud.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Solicituds and only return the `id`
     * const solicitudWithIdOnly = await prisma.solicitud.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SolicitudCreateManyAndReturnArgs>(args?: SelectSubset<T, SolicitudCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Solicitud.
     * @param {SolicitudDeleteArgs} args - Arguments to delete one Solicitud.
     * @example
     * // Delete one Solicitud
     * const Solicitud = await prisma.solicitud.delete({
     *   where: {
     *     // ... filter to delete one Solicitud
     *   }
     * })
     * 
     */
    delete<T extends SolicitudDeleteArgs>(args: SelectSubset<T, SolicitudDeleteArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Solicitud.
     * @param {SolicitudUpdateArgs} args - Arguments to update one Solicitud.
     * @example
     * // Update one Solicitud
     * const solicitud = await prisma.solicitud.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SolicitudUpdateArgs>(args: SelectSubset<T, SolicitudUpdateArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Solicituds.
     * @param {SolicitudDeleteManyArgs} args - Arguments to filter Solicituds to delete.
     * @example
     * // Delete a few Solicituds
     * const { count } = await prisma.solicitud.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SolicitudDeleteManyArgs>(args?: SelectSubset<T, SolicitudDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solicituds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Solicituds
     * const solicitud = await prisma.solicitud.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SolicitudUpdateManyArgs>(args: SelectSubset<T, SolicitudUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solicituds and returns the data updated in the database.
     * @param {SolicitudUpdateManyAndReturnArgs} args - Arguments to update many Solicituds.
     * @example
     * // Update many Solicituds
     * const solicitud = await prisma.solicitud.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Solicituds and only return the `id`
     * const solicitudWithIdOnly = await prisma.solicitud.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SolicitudUpdateManyAndReturnArgs>(args: SelectSubset<T, SolicitudUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Solicitud.
     * @param {SolicitudUpsertArgs} args - Arguments to update or create a Solicitud.
     * @example
     * // Update or create a Solicitud
     * const solicitud = await prisma.solicitud.upsert({
     *   create: {
     *     // ... data to create a Solicitud
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Solicitud we want to update
     *   }
     * })
     */
    upsert<T extends SolicitudUpsertArgs>(args: SelectSubset<T, SolicitudUpsertArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Solicituds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudCountArgs} args - Arguments to filter Solicituds to count.
     * @example
     * // Count the number of Solicituds
     * const count = await prisma.solicitud.count({
     *   where: {
     *     // ... the filter for the Solicituds we want to count
     *   }
     * })
    **/
    count<T extends SolicitudCountArgs>(
      args?: Subset<T, SolicitudCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SolicitudCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Solicitud.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SolicitudAggregateArgs>(args: Subset<T, SolicitudAggregateArgs>): Prisma.PrismaPromise<GetSolicitudAggregateType<T>>

    /**
     * Group by Solicitud.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SolicitudGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SolicitudGroupByArgs['orderBy'] }
        : { orderBy?: SolicitudGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SolicitudGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolicitudGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Solicitud model
   */
  readonly fields: SolicitudFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Solicitud.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SolicitudClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alojamiento<T extends AlojamientoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlojamientoDefaultArgs<ExtArgs>>): Prisma__AlojamientoClient<$Result.GetResult<Prisma.$AlojamientoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    inquilino<T extends InquilinoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InquilinoDefaultArgs<ExtArgs>>): Prisma__InquilinoClient<$Result.GetResult<Prisma.$InquilinoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    lease<T extends Solicitud$leaseArgs<ExtArgs> = {}>(args?: Subset<T, Solicitud$leaseArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Solicitud model
   */ 
  interface SolicitudFieldRefs {
    readonly id: FieldRef<"Solicitud", 'Int'>
    readonly applicationDate: FieldRef<"Solicitud", 'DateTime'>
    readonly estado: FieldRef<"Solicitud", 'EstadoSolicitud'>
    readonly alojamientoId: FieldRef<"Solicitud", 'Int'>
    readonly tenantCognitoId: FieldRef<"Solicitud", 'String'>
    readonly nombre: FieldRef<"Solicitud", 'String'>
    readonly email: FieldRef<"Solicitud", 'String'>
    readonly telefono: FieldRef<"Solicitud", 'String'>
    readonly mensaje: FieldRef<"Solicitud", 'String'>
    readonly leaseId: FieldRef<"Solicitud", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Solicitud findUnique
   */
  export type SolicitudFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * Filter, which Solicitud to fetch.
     */
    where: SolicitudWhereUniqueInput
  }

  /**
   * Solicitud findUniqueOrThrow
   */
  export type SolicitudFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * Filter, which Solicitud to fetch.
     */
    where: SolicitudWhereUniqueInput
  }

  /**
   * Solicitud findFirst
   */
  export type SolicitudFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * Filter, which Solicitud to fetch.
     */
    where?: SolicitudWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solicituds to fetch.
     */
    orderBy?: SolicitudOrderByWithRelationInput | SolicitudOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Solicituds.
     */
    cursor?: SolicitudWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solicituds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solicituds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Solicituds.
     */
    distinct?: SolicitudScalarFieldEnum | SolicitudScalarFieldEnum[]
  }

  /**
   * Solicitud findFirstOrThrow
   */
  export type SolicitudFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * Filter, which Solicitud to fetch.
     */
    where?: SolicitudWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solicituds to fetch.
     */
    orderBy?: SolicitudOrderByWithRelationInput | SolicitudOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Solicituds.
     */
    cursor?: SolicitudWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solicituds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solicituds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Solicituds.
     */
    distinct?: SolicitudScalarFieldEnum | SolicitudScalarFieldEnum[]
  }

  /**
   * Solicitud findMany
   */
  export type SolicitudFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * Filter, which Solicituds to fetch.
     */
    where?: SolicitudWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solicituds to fetch.
     */
    orderBy?: SolicitudOrderByWithRelationInput | SolicitudOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Solicituds.
     */
    cursor?: SolicitudWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solicituds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solicituds.
     */
    skip?: number
    distinct?: SolicitudScalarFieldEnum | SolicitudScalarFieldEnum[]
  }

  /**
   * Solicitud create
   */
  export type SolicitudCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * The data needed to create a Solicitud.
     */
    data: XOR<SolicitudCreateInput, SolicitudUncheckedCreateInput>
  }

  /**
   * Solicitud createMany
   */
  export type SolicitudCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Solicituds.
     */
    data: SolicitudCreateManyInput | SolicitudCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Solicitud createManyAndReturn
   */
  export type SolicitudCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * The data used to create many Solicituds.
     */
    data: SolicitudCreateManyInput | SolicitudCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Solicitud update
   */
  export type SolicitudUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * The data needed to update a Solicitud.
     */
    data: XOR<SolicitudUpdateInput, SolicitudUncheckedUpdateInput>
    /**
     * Choose, which Solicitud to update.
     */
    where: SolicitudWhereUniqueInput
  }

  /**
   * Solicitud updateMany
   */
  export type SolicitudUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Solicituds.
     */
    data: XOR<SolicitudUpdateManyMutationInput, SolicitudUncheckedUpdateManyInput>
    /**
     * Filter which Solicituds to update
     */
    where?: SolicitudWhereInput
    /**
     * Limit how many Solicituds to update.
     */
    limit?: number
  }

  /**
   * Solicitud updateManyAndReturn
   */
  export type SolicitudUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * The data used to update Solicituds.
     */
    data: XOR<SolicitudUpdateManyMutationInput, SolicitudUncheckedUpdateManyInput>
    /**
     * Filter which Solicituds to update
     */
    where?: SolicitudWhereInput
    /**
     * Limit how many Solicituds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Solicitud upsert
   */
  export type SolicitudUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * The filter to search for the Solicitud to update in case it exists.
     */
    where: SolicitudWhereUniqueInput
    /**
     * In case the Solicitud found by the `where` argument doesn't exist, create a new Solicitud with this data.
     */
    create: XOR<SolicitudCreateInput, SolicitudUncheckedCreateInput>
    /**
     * In case the Solicitud was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SolicitudUpdateInput, SolicitudUncheckedUpdateInput>
  }

  /**
   * Solicitud delete
   */
  export type SolicitudDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * Filter which Solicitud to delete.
     */
    where: SolicitudWhereUniqueInput
  }

  /**
   * Solicitud deleteMany
   */
  export type SolicitudDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Solicituds to delete
     */
    where?: SolicitudWhereInput
    /**
     * Limit how many Solicituds to delete.
     */
    limit?: number
  }

  /**
   * Solicitud.lease
   */
  export type Solicitud$leaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    where?: LeaseWhereInput
  }

  /**
   * Solicitud without action
   */
  export type SolicitudDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
  }


  /**
   * Model Lease
   */

  export type AggregateLease = {
    _count: LeaseCountAggregateOutputType | null
    _avg: LeaseAvgAggregateOutputType | null
    _sum: LeaseSumAggregateOutputType | null
    _min: LeaseMinAggregateOutputType | null
    _max: LeaseMaxAggregateOutputType | null
  }

  export type LeaseAvgAggregateOutputType = {
    id: number | null
    rent: number | null
    deposit: number | null
    alojamientoId: number | null
  }

  export type LeaseSumAggregateOutputType = {
    id: number | null
    rent: number | null
    deposit: number | null
    alojamientoId: number | null
  }

  export type LeaseMinAggregateOutputType = {
    id: number | null
    startDate: Date | null
    endDate: Date | null
    rent: number | null
    deposit: number | null
    alojamientoId: number | null
    tenantCognitoId: string | null
  }

  export type LeaseMaxAggregateOutputType = {
    id: number | null
    startDate: Date | null
    endDate: Date | null
    rent: number | null
    deposit: number | null
    alojamientoId: number | null
    tenantCognitoId: string | null
  }

  export type LeaseCountAggregateOutputType = {
    id: number
    startDate: number
    endDate: number
    rent: number
    deposit: number
    alojamientoId: number
    tenantCognitoId: number
    _all: number
  }


  export type LeaseAvgAggregateInputType = {
    id?: true
    rent?: true
    deposit?: true
    alojamientoId?: true
  }

  export type LeaseSumAggregateInputType = {
    id?: true
    rent?: true
    deposit?: true
    alojamientoId?: true
  }

  export type LeaseMinAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    rent?: true
    deposit?: true
    alojamientoId?: true
    tenantCognitoId?: true
  }

  export type LeaseMaxAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    rent?: true
    deposit?: true
    alojamientoId?: true
    tenantCognitoId?: true
  }

  export type LeaseCountAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    rent?: true
    deposit?: true
    alojamientoId?: true
    tenantCognitoId?: true
    _all?: true
  }

  export type LeaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lease to aggregate.
     */
    where?: LeaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leases to fetch.
     */
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leases
    **/
    _count?: true | LeaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaseMaxAggregateInputType
  }

  export type GetLeaseAggregateType<T extends LeaseAggregateArgs> = {
        [P in keyof T & keyof AggregateLease]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLease[P]>
      : GetScalarType<T[P], AggregateLease[P]>
  }




  export type LeaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseWhereInput
    orderBy?: LeaseOrderByWithAggregationInput | LeaseOrderByWithAggregationInput[]
    by: LeaseScalarFieldEnum[] | LeaseScalarFieldEnum
    having?: LeaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaseCountAggregateInputType | true
    _avg?: LeaseAvgAggregateInputType
    _sum?: LeaseSumAggregateInputType
    _min?: LeaseMinAggregateInputType
    _max?: LeaseMaxAggregateInputType
  }

  export type LeaseGroupByOutputType = {
    id: number
    startDate: Date
    endDate: Date
    rent: number
    deposit: number
    alojamientoId: number
    tenantCognitoId: string
    _count: LeaseCountAggregateOutputType | null
    _avg: LeaseAvgAggregateOutputType | null
    _sum: LeaseSumAggregateOutputType | null
    _min: LeaseMinAggregateOutputType | null
    _max: LeaseMaxAggregateOutputType | null
  }

  type GetLeaseGroupByPayload<T extends LeaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaseGroupByOutputType[P]>
            : GetScalarType<T[P], LeaseGroupByOutputType[P]>
        }
      >
    >


  export type LeaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    rent?: boolean
    deposit?: boolean
    alojamientoId?: boolean
    tenantCognitoId?: boolean
    alojamiento?: boolean | AlojamientoDefaultArgs<ExtArgs>
    inquilino?: boolean | InquilinoDefaultArgs<ExtArgs>
    solicitud?: boolean | Lease$solicitudArgs<ExtArgs>
    payments?: boolean | Lease$paymentsArgs<ExtArgs>
    _count?: boolean | LeaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lease"]>

  export type LeaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    rent?: boolean
    deposit?: boolean
    alojamientoId?: boolean
    tenantCognitoId?: boolean
    alojamiento?: boolean | AlojamientoDefaultArgs<ExtArgs>
    inquilino?: boolean | InquilinoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lease"]>

  export type LeaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    rent?: boolean
    deposit?: boolean
    alojamientoId?: boolean
    tenantCognitoId?: boolean
    alojamiento?: boolean | AlojamientoDefaultArgs<ExtArgs>
    inquilino?: boolean | InquilinoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lease"]>

  export type LeaseSelectScalar = {
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    rent?: boolean
    deposit?: boolean
    alojamientoId?: boolean
    tenantCognitoId?: boolean
  }

  export type LeaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startDate" | "endDate" | "rent" | "deposit" | "alojamientoId" | "tenantCognitoId", ExtArgs["result"]["lease"]>
  export type LeaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alojamiento?: boolean | AlojamientoDefaultArgs<ExtArgs>
    inquilino?: boolean | InquilinoDefaultArgs<ExtArgs>
    solicitud?: boolean | Lease$solicitudArgs<ExtArgs>
    payments?: boolean | Lease$paymentsArgs<ExtArgs>
    _count?: boolean | LeaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LeaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alojamiento?: boolean | AlojamientoDefaultArgs<ExtArgs>
    inquilino?: boolean | InquilinoDefaultArgs<ExtArgs>
  }
  export type LeaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alojamiento?: boolean | AlojamientoDefaultArgs<ExtArgs>
    inquilino?: boolean | InquilinoDefaultArgs<ExtArgs>
  }

  export type $LeasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lease"
    objects: {
      alojamiento: Prisma.$AlojamientoPayload<ExtArgs>
      inquilino: Prisma.$InquilinoPayload<ExtArgs>
      solicitud: Prisma.$SolicitudPayload<ExtArgs> | null
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      startDate: Date
      endDate: Date
      rent: number
      deposit: number
      alojamientoId: number
      tenantCognitoId: string
    }, ExtArgs["result"]["lease"]>
    composites: {}
  }

  type LeaseGetPayload<S extends boolean | null | undefined | LeaseDefaultArgs> = $Result.GetResult<Prisma.$LeasePayload, S>

  type LeaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaseCountAggregateInputType | true
    }

  export interface LeaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lease'], meta: { name: 'Lease' } }
    /**
     * Find zero or one Lease that matches the filter.
     * @param {LeaseFindUniqueArgs} args - Arguments to find a Lease
     * @example
     * // Get one Lease
     * const lease = await prisma.lease.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaseFindUniqueArgs>(args: SelectSubset<T, LeaseFindUniqueArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Lease that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaseFindUniqueOrThrowArgs} args - Arguments to find a Lease
     * @example
     * // Get one Lease
     * const lease = await prisma.lease.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaseFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Lease that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFindFirstArgs} args - Arguments to find a Lease
     * @example
     * // Get one Lease
     * const lease = await prisma.lease.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaseFindFirstArgs>(args?: SelectSubset<T, LeaseFindFirstArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Lease that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFindFirstOrThrowArgs} args - Arguments to find a Lease
     * @example
     * // Get one Lease
     * const lease = await prisma.lease.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaseFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Leases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leases
     * const leases = await prisma.lease.findMany()
     * 
     * // Get first 10 Leases
     * const leases = await prisma.lease.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaseWithIdOnly = await prisma.lease.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaseFindManyArgs>(args?: SelectSubset<T, LeaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Lease.
     * @param {LeaseCreateArgs} args - Arguments to create a Lease.
     * @example
     * // Create one Lease
     * const Lease = await prisma.lease.create({
     *   data: {
     *     // ... data to create a Lease
     *   }
     * })
     * 
     */
    create<T extends LeaseCreateArgs>(args: SelectSubset<T, LeaseCreateArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Leases.
     * @param {LeaseCreateManyArgs} args - Arguments to create many Leases.
     * @example
     * // Create many Leases
     * const lease = await prisma.lease.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaseCreateManyArgs>(args?: SelectSubset<T, LeaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leases and returns the data saved in the database.
     * @param {LeaseCreateManyAndReturnArgs} args - Arguments to create many Leases.
     * @example
     * // Create many Leases
     * const lease = await prisma.lease.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leases and only return the `id`
     * const leaseWithIdOnly = await prisma.lease.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaseCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Lease.
     * @param {LeaseDeleteArgs} args - Arguments to delete one Lease.
     * @example
     * // Delete one Lease
     * const Lease = await prisma.lease.delete({
     *   where: {
     *     // ... filter to delete one Lease
     *   }
     * })
     * 
     */
    delete<T extends LeaseDeleteArgs>(args: SelectSubset<T, LeaseDeleteArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Lease.
     * @param {LeaseUpdateArgs} args - Arguments to update one Lease.
     * @example
     * // Update one Lease
     * const lease = await prisma.lease.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaseUpdateArgs>(args: SelectSubset<T, LeaseUpdateArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Leases.
     * @param {LeaseDeleteManyArgs} args - Arguments to filter Leases to delete.
     * @example
     * // Delete a few Leases
     * const { count } = await prisma.lease.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaseDeleteManyArgs>(args?: SelectSubset<T, LeaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leases
     * const lease = await prisma.lease.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaseUpdateManyArgs>(args: SelectSubset<T, LeaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leases and returns the data updated in the database.
     * @param {LeaseUpdateManyAndReturnArgs} args - Arguments to update many Leases.
     * @example
     * // Update many Leases
     * const lease = await prisma.lease.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leases and only return the `id`
     * const leaseWithIdOnly = await prisma.lease.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeaseUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Lease.
     * @param {LeaseUpsertArgs} args - Arguments to update or create a Lease.
     * @example
     * // Update or create a Lease
     * const lease = await prisma.lease.upsert({
     *   create: {
     *     // ... data to create a Lease
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lease we want to update
     *   }
     * })
     */
    upsert<T extends LeaseUpsertArgs>(args: SelectSubset<T, LeaseUpsertArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Leases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseCountArgs} args - Arguments to filter Leases to count.
     * @example
     * // Count the number of Leases
     * const count = await prisma.lease.count({
     *   where: {
     *     // ... the filter for the Leases we want to count
     *   }
     * })
    **/
    count<T extends LeaseCountArgs>(
      args?: Subset<T, LeaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeaseAggregateArgs>(args: Subset<T, LeaseAggregateArgs>): Prisma.PrismaPromise<GetLeaseAggregateType<T>>

    /**
     * Group by Lease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaseGroupByArgs['orderBy'] }
        : { orderBy?: LeaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lease model
   */
  readonly fields: LeaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lease.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alojamiento<T extends AlojamientoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlojamientoDefaultArgs<ExtArgs>>): Prisma__AlojamientoClient<$Result.GetResult<Prisma.$AlojamientoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    inquilino<T extends InquilinoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InquilinoDefaultArgs<ExtArgs>>): Prisma__InquilinoClient<$Result.GetResult<Prisma.$InquilinoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    solicitud<T extends Lease$solicitudArgs<ExtArgs> = {}>(args?: Subset<T, Lease$solicitudArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    payments<T extends Lease$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Lease$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lease model
   */ 
  interface LeaseFieldRefs {
    readonly id: FieldRef<"Lease", 'Int'>
    readonly startDate: FieldRef<"Lease", 'DateTime'>
    readonly endDate: FieldRef<"Lease", 'DateTime'>
    readonly rent: FieldRef<"Lease", 'Float'>
    readonly deposit: FieldRef<"Lease", 'Float'>
    readonly alojamientoId: FieldRef<"Lease", 'Int'>
    readonly tenantCognitoId: FieldRef<"Lease", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Lease findUnique
   */
  export type LeaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Lease to fetch.
     */
    where: LeaseWhereUniqueInput
  }

  /**
   * Lease findUniqueOrThrow
   */
  export type LeaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Lease to fetch.
     */
    where: LeaseWhereUniqueInput
  }

  /**
   * Lease findFirst
   */
  export type LeaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Lease to fetch.
     */
    where?: LeaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leases to fetch.
     */
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leases.
     */
    cursor?: LeaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leases.
     */
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Lease findFirstOrThrow
   */
  export type LeaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Lease to fetch.
     */
    where?: LeaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leases to fetch.
     */
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leases.
     */
    cursor?: LeaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leases.
     */
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Lease findMany
   */
  export type LeaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Leases to fetch.
     */
    where?: LeaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leases to fetch.
     */
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leases.
     */
    cursor?: LeaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leases.
     */
    skip?: number
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Lease create
   */
  export type LeaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Lease.
     */
    data: XOR<LeaseCreateInput, LeaseUncheckedCreateInput>
  }

  /**
   * Lease createMany
   */
  export type LeaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leases.
     */
    data: LeaseCreateManyInput | LeaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lease createManyAndReturn
   */
  export type LeaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * The data used to create many Leases.
     */
    data: LeaseCreateManyInput | LeaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lease update
   */
  export type LeaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Lease.
     */
    data: XOR<LeaseUpdateInput, LeaseUncheckedUpdateInput>
    /**
     * Choose, which Lease to update.
     */
    where: LeaseWhereUniqueInput
  }

  /**
   * Lease updateMany
   */
  export type LeaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leases.
     */
    data: XOR<LeaseUpdateManyMutationInput, LeaseUncheckedUpdateManyInput>
    /**
     * Filter which Leases to update
     */
    where?: LeaseWhereInput
    /**
     * Limit how many Leases to update.
     */
    limit?: number
  }

  /**
   * Lease updateManyAndReturn
   */
  export type LeaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * The data used to update Leases.
     */
    data: XOR<LeaseUpdateManyMutationInput, LeaseUncheckedUpdateManyInput>
    /**
     * Filter which Leases to update
     */
    where?: LeaseWhereInput
    /**
     * Limit how many Leases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lease upsert
   */
  export type LeaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Lease to update in case it exists.
     */
    where: LeaseWhereUniqueInput
    /**
     * In case the Lease found by the `where` argument doesn't exist, create a new Lease with this data.
     */
    create: XOR<LeaseCreateInput, LeaseUncheckedCreateInput>
    /**
     * In case the Lease was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaseUpdateInput, LeaseUncheckedUpdateInput>
  }

  /**
   * Lease delete
   */
  export type LeaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter which Lease to delete.
     */
    where: LeaseWhereUniqueInput
  }

  /**
   * Lease deleteMany
   */
  export type LeaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leases to delete
     */
    where?: LeaseWhereInput
    /**
     * Limit how many Leases to delete.
     */
    limit?: number
  }

  /**
   * Lease.solicitud
   */
  export type Lease$solicitudArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    where?: SolicitudWhereInput
  }

  /**
   * Lease.payments
   */
  export type Lease$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Lease without action
   */
  export type LeaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    amountDue: number | null
    amountPaid: number | null
    leaseId: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    amountDue: number | null
    amountPaid: number | null
    leaseId: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    amountDue: number | null
    amountPaid: number | null
    dueDate: Date | null
    paymentDate: Date | null
    paymentStatus: $Enums.PaymentStatus | null
    leaseId: number | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    amountDue: number | null
    amountPaid: number | null
    dueDate: Date | null
    paymentDate: Date | null
    paymentStatus: $Enums.PaymentStatus | null
    leaseId: number | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    amountDue: number
    amountPaid: number
    dueDate: number
    paymentDate: number
    paymentStatus: number
    leaseId: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    amountDue?: true
    amountPaid?: true
    leaseId?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    amountDue?: true
    amountPaid?: true
    leaseId?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    amountDue?: true
    amountPaid?: true
    dueDate?: true
    paymentDate?: true
    paymentStatus?: true
    leaseId?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    amountDue?: true
    amountPaid?: true
    dueDate?: true
    paymentDate?: true
    paymentStatus?: true
    leaseId?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    amountDue?: true
    amountPaid?: true
    dueDate?: true
    paymentDate?: true
    paymentStatus?: true
    leaseId?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    amountDue: number
    amountPaid: number
    dueDate: Date
    paymentDate: Date
    paymentStatus: $Enums.PaymentStatus
    leaseId: number
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amountDue?: boolean
    amountPaid?: boolean
    dueDate?: boolean
    paymentDate?: boolean
    paymentStatus?: boolean
    leaseId?: boolean
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amountDue?: boolean
    amountPaid?: boolean
    dueDate?: boolean
    paymentDate?: boolean
    paymentStatus?: boolean
    leaseId?: boolean
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amountDue?: boolean
    amountPaid?: boolean
    dueDate?: boolean
    paymentDate?: boolean
    paymentStatus?: boolean
    leaseId?: boolean
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    amountDue?: boolean
    amountPaid?: boolean
    dueDate?: boolean
    paymentDate?: boolean
    paymentStatus?: boolean
    leaseId?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amountDue" | "amountPaid" | "dueDate" | "paymentDate" | "paymentStatus" | "leaseId", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      lease: Prisma.$LeasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amountDue: number
      amountPaid: number
      dueDate: Date
      paymentDate: Date
      paymentStatus: $Enums.PaymentStatus
      leaseId: number
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lease<T extends LeaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeaseDefaultArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */ 
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly amountDue: FieldRef<"Payment", 'Float'>
    readonly amountPaid: FieldRef<"Payment", 'Float'>
    readonly dueDate: FieldRef<"Payment", 'DateTime'>
    readonly paymentDate: FieldRef<"Payment", 'DateTime'>
    readonly paymentStatus: FieldRef<"Payment", 'PaymentStatus'>
    readonly leaseId: FieldRef<"Payment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AlojamientoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    precio: 'precio',
    habitaciones: 'habitaciones',
    banos: 'banos',
    superficie: 'superficie',
    plazasLibres: 'plazasLibres',
    tipoAlojamiento: 'tipoAlojamiento',
    hayTelevision: 'hayTelevision',
    hayTelefono: 'hayTelefono',
    hayInternet: 'hayInternet',
    hayTerraza: 'hayTerraza',
    hayAscensor: 'hayAscensor',
    hayGaraje: 'hayGaraje',
    hayLavavajillas: 'hayLavavajillas',
    hayHorno: 'hayHorno',
    hayMicroondas: 'hayMicroondas',
    hayNevera: 'hayNevera',
    hayLavadora: 'hayLavadora',
    haySecadora: 'haySecadora',
    hayPortero: 'hayPortero',
    hayMuebles: 'hayMuebles',
    hayCalefaccion: 'hayCalefaccion',
    hayAireAcondicionado: 'hayAireAcondicionado',
    hayGas: 'hayGas',
    hayPiscina: 'hayPiscina',
    hayZonaComunitaria: 'hayZonaComunitaria',
    hayGimnasio: 'hayGimnasio',
    aguaIncluido: 'aguaIncluido',
    gasIncluido: 'gasIncluido',
    electricidadIncluido: 'electricidadIncluido',
    internetIncluido: 'internetIncluido',
    photoUrls: 'photoUrls',
    postedDate: 'postedDate',
    averageRating: 'averageRating',
    numberOfReviews: 'numberOfReviews',
    locationId: 'locationId',
    managerCognitoId: 'managerCognitoId'
  };

  export type AlojamientoScalarFieldEnum = (typeof AlojamientoScalarFieldEnum)[keyof typeof AlojamientoScalarFieldEnum]


  export const PropietarioScalarFieldEnum: {
    id: 'id',
    cognitoId: 'cognitoId',
    nombre: 'nombre',
    email: 'email',
    telefono: 'telefono'
  };

  export type PropietarioScalarFieldEnum = (typeof PropietarioScalarFieldEnum)[keyof typeof PropietarioScalarFieldEnum]


  export const InquilinoScalarFieldEnum: {
    id: 'id',
    cognitoId: 'cognitoId',
    nombre: 'nombre',
    email: 'email',
    telefono: 'telefono'
  };

  export type InquilinoScalarFieldEnum = (typeof InquilinoScalarFieldEnum)[keyof typeof InquilinoScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    address: 'address',
    city: 'city',
    state: 'state',
    country: 'country',
    postalCode: 'postalCode'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const SolicitudScalarFieldEnum: {
    id: 'id',
    applicationDate: 'applicationDate',
    estado: 'estado',
    alojamientoId: 'alojamientoId',
    tenantCognitoId: 'tenantCognitoId',
    nombre: 'nombre',
    email: 'email',
    telefono: 'telefono',
    mensaje: 'mensaje',
    leaseId: 'leaseId'
  };

  export type SolicitudScalarFieldEnum = (typeof SolicitudScalarFieldEnum)[keyof typeof SolicitudScalarFieldEnum]


  export const LeaseScalarFieldEnum: {
    id: 'id',
    startDate: 'startDate',
    endDate: 'endDate',
    rent: 'rent',
    deposit: 'deposit',
    alojamientoId: 'alojamientoId',
    tenantCognitoId: 'tenantCognitoId'
  };

  export type LeaseScalarFieldEnum = (typeof LeaseScalarFieldEnum)[keyof typeof LeaseScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    amountDue: 'amountDue',
    amountPaid: 'amountPaid',
    dueDate: 'dueDate',
    paymentDate: 'paymentDate',
    paymentStatus: 'paymentStatus',
    leaseId: 'leaseId'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TipoAlojamiento'
   */
  export type EnumTipoAlojamientoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoAlojamiento'>
    


  /**
   * Reference to a field of type 'TipoAlojamiento[]'
   */
  export type ListEnumTipoAlojamientoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoAlojamiento[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EstadoSolicitud'
   */
  export type EnumEstadoSolicitudFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoSolicitud'>
    


  /**
   * Reference to a field of type 'EstadoSolicitud[]'
   */
  export type ListEnumEstadoSolicitudFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoSolicitud[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type AlojamientoWhereInput = {
    AND?: AlojamientoWhereInput | AlojamientoWhereInput[]
    OR?: AlojamientoWhereInput[]
    NOT?: AlojamientoWhereInput | AlojamientoWhereInput[]
    id?: IntFilter<"Alojamiento"> | number
    nombre?: StringFilter<"Alojamiento"> | string
    descripcion?: StringFilter<"Alojamiento"> | string
    precio?: FloatFilter<"Alojamiento"> | number
    habitaciones?: IntFilter<"Alojamiento"> | number
    banos?: FloatFilter<"Alojamiento"> | number
    superficie?: IntFilter<"Alojamiento"> | number
    plazasLibres?: IntFilter<"Alojamiento"> | number
    tipoAlojamiento?: EnumTipoAlojamientoFilter<"Alojamiento"> | $Enums.TipoAlojamiento
    hayTelevision?: BoolFilter<"Alojamiento"> | boolean
    hayTelefono?: BoolFilter<"Alojamiento"> | boolean
    hayInternet?: BoolFilter<"Alojamiento"> | boolean
    hayTerraza?: BoolFilter<"Alojamiento"> | boolean
    hayAscensor?: BoolFilter<"Alojamiento"> | boolean
    hayGaraje?: BoolFilter<"Alojamiento"> | boolean
    hayLavavajillas?: BoolFilter<"Alojamiento"> | boolean
    hayHorno?: BoolFilter<"Alojamiento"> | boolean
    hayMicroondas?: BoolFilter<"Alojamiento"> | boolean
    hayNevera?: BoolFilter<"Alojamiento"> | boolean
    hayLavadora?: BoolFilter<"Alojamiento"> | boolean
    haySecadora?: BoolFilter<"Alojamiento"> | boolean
    hayPortero?: BoolFilter<"Alojamiento"> | boolean
    hayMuebles?: BoolFilter<"Alojamiento"> | boolean
    hayCalefaccion?: BoolFilter<"Alojamiento"> | boolean
    hayAireAcondicionado?: BoolFilter<"Alojamiento"> | boolean
    hayGas?: BoolFilter<"Alojamiento"> | boolean
    hayPiscina?: BoolFilter<"Alojamiento"> | boolean
    hayZonaComunitaria?: BoolFilter<"Alojamiento"> | boolean
    hayGimnasio?: BoolFilter<"Alojamiento"> | boolean
    aguaIncluido?: BoolFilter<"Alojamiento"> | boolean
    gasIncluido?: BoolFilter<"Alojamiento"> | boolean
    electricidadIncluido?: BoolFilter<"Alojamiento"> | boolean
    internetIncluido?: BoolFilter<"Alojamiento"> | boolean
    photoUrls?: StringNullableListFilter<"Alojamiento">
    postedDate?: DateTimeFilter<"Alojamiento"> | Date | string
    averageRating?: FloatNullableFilter<"Alojamiento"> | number | null
    numberOfReviews?: IntNullableFilter<"Alojamiento"> | number | null
    locationId?: IntFilter<"Alojamiento"> | number
    managerCognitoId?: StringFilter<"Alojamiento"> | string
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    propietario?: XOR<PropietarioScalarRelationFilter, PropietarioWhereInput>
    leases?: LeaseListRelationFilter
    solicitudes?: SolicitudListRelationFilter
    favoritedBy?: InquilinoListRelationFilter
    inquilinos?: InquilinoListRelationFilter
  }

  export type AlojamientoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    habitaciones?: SortOrder
    banos?: SortOrder
    superficie?: SortOrder
    plazasLibres?: SortOrder
    tipoAlojamiento?: SortOrder
    hayTelevision?: SortOrder
    hayTelefono?: SortOrder
    hayInternet?: SortOrder
    hayTerraza?: SortOrder
    hayAscensor?: SortOrder
    hayGaraje?: SortOrder
    hayLavavajillas?: SortOrder
    hayHorno?: SortOrder
    hayMicroondas?: SortOrder
    hayNevera?: SortOrder
    hayLavadora?: SortOrder
    haySecadora?: SortOrder
    hayPortero?: SortOrder
    hayMuebles?: SortOrder
    hayCalefaccion?: SortOrder
    hayAireAcondicionado?: SortOrder
    hayGas?: SortOrder
    hayPiscina?: SortOrder
    hayZonaComunitaria?: SortOrder
    hayGimnasio?: SortOrder
    aguaIncluido?: SortOrder
    gasIncluido?: SortOrder
    electricidadIncluido?: SortOrder
    internetIncluido?: SortOrder
    photoUrls?: SortOrder
    postedDate?: SortOrder
    averageRating?: SortOrderInput | SortOrder
    numberOfReviews?: SortOrderInput | SortOrder
    locationId?: SortOrder
    managerCognitoId?: SortOrder
    location?: LocationOrderByWithRelationInput
    propietario?: PropietarioOrderByWithRelationInput
    leases?: LeaseOrderByRelationAggregateInput
    solicitudes?: SolicitudOrderByRelationAggregateInput
    favoritedBy?: InquilinoOrderByRelationAggregateInput
    inquilinos?: InquilinoOrderByRelationAggregateInput
  }

  export type AlojamientoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlojamientoWhereInput | AlojamientoWhereInput[]
    OR?: AlojamientoWhereInput[]
    NOT?: AlojamientoWhereInput | AlojamientoWhereInput[]
    nombre?: StringFilter<"Alojamiento"> | string
    descripcion?: StringFilter<"Alojamiento"> | string
    precio?: FloatFilter<"Alojamiento"> | number
    habitaciones?: IntFilter<"Alojamiento"> | number
    banos?: FloatFilter<"Alojamiento"> | number
    superficie?: IntFilter<"Alojamiento"> | number
    plazasLibres?: IntFilter<"Alojamiento"> | number
    tipoAlojamiento?: EnumTipoAlojamientoFilter<"Alojamiento"> | $Enums.TipoAlojamiento
    hayTelevision?: BoolFilter<"Alojamiento"> | boolean
    hayTelefono?: BoolFilter<"Alojamiento"> | boolean
    hayInternet?: BoolFilter<"Alojamiento"> | boolean
    hayTerraza?: BoolFilter<"Alojamiento"> | boolean
    hayAscensor?: BoolFilter<"Alojamiento"> | boolean
    hayGaraje?: BoolFilter<"Alojamiento"> | boolean
    hayLavavajillas?: BoolFilter<"Alojamiento"> | boolean
    hayHorno?: BoolFilter<"Alojamiento"> | boolean
    hayMicroondas?: BoolFilter<"Alojamiento"> | boolean
    hayNevera?: BoolFilter<"Alojamiento"> | boolean
    hayLavadora?: BoolFilter<"Alojamiento"> | boolean
    haySecadora?: BoolFilter<"Alojamiento"> | boolean
    hayPortero?: BoolFilter<"Alojamiento"> | boolean
    hayMuebles?: BoolFilter<"Alojamiento"> | boolean
    hayCalefaccion?: BoolFilter<"Alojamiento"> | boolean
    hayAireAcondicionado?: BoolFilter<"Alojamiento"> | boolean
    hayGas?: BoolFilter<"Alojamiento"> | boolean
    hayPiscina?: BoolFilter<"Alojamiento"> | boolean
    hayZonaComunitaria?: BoolFilter<"Alojamiento"> | boolean
    hayGimnasio?: BoolFilter<"Alojamiento"> | boolean
    aguaIncluido?: BoolFilter<"Alojamiento"> | boolean
    gasIncluido?: BoolFilter<"Alojamiento"> | boolean
    electricidadIncluido?: BoolFilter<"Alojamiento"> | boolean
    internetIncluido?: BoolFilter<"Alojamiento"> | boolean
    photoUrls?: StringNullableListFilter<"Alojamiento">
    postedDate?: DateTimeFilter<"Alojamiento"> | Date | string
    averageRating?: FloatNullableFilter<"Alojamiento"> | number | null
    numberOfReviews?: IntNullableFilter<"Alojamiento"> | number | null
    locationId?: IntFilter<"Alojamiento"> | number
    managerCognitoId?: StringFilter<"Alojamiento"> | string
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    propietario?: XOR<PropietarioScalarRelationFilter, PropietarioWhereInput>
    leases?: LeaseListRelationFilter
    solicitudes?: SolicitudListRelationFilter
    favoritedBy?: InquilinoListRelationFilter
    inquilinos?: InquilinoListRelationFilter
  }, "id">

  export type AlojamientoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    habitaciones?: SortOrder
    banos?: SortOrder
    superficie?: SortOrder
    plazasLibres?: SortOrder
    tipoAlojamiento?: SortOrder
    hayTelevision?: SortOrder
    hayTelefono?: SortOrder
    hayInternet?: SortOrder
    hayTerraza?: SortOrder
    hayAscensor?: SortOrder
    hayGaraje?: SortOrder
    hayLavavajillas?: SortOrder
    hayHorno?: SortOrder
    hayMicroondas?: SortOrder
    hayNevera?: SortOrder
    hayLavadora?: SortOrder
    haySecadora?: SortOrder
    hayPortero?: SortOrder
    hayMuebles?: SortOrder
    hayCalefaccion?: SortOrder
    hayAireAcondicionado?: SortOrder
    hayGas?: SortOrder
    hayPiscina?: SortOrder
    hayZonaComunitaria?: SortOrder
    hayGimnasio?: SortOrder
    aguaIncluido?: SortOrder
    gasIncluido?: SortOrder
    electricidadIncluido?: SortOrder
    internetIncluido?: SortOrder
    photoUrls?: SortOrder
    postedDate?: SortOrder
    averageRating?: SortOrderInput | SortOrder
    numberOfReviews?: SortOrderInput | SortOrder
    locationId?: SortOrder
    managerCognitoId?: SortOrder
    _count?: AlojamientoCountOrderByAggregateInput
    _avg?: AlojamientoAvgOrderByAggregateInput
    _max?: AlojamientoMaxOrderByAggregateInput
    _min?: AlojamientoMinOrderByAggregateInput
    _sum?: AlojamientoSumOrderByAggregateInput
  }

  export type AlojamientoScalarWhereWithAggregatesInput = {
    AND?: AlojamientoScalarWhereWithAggregatesInput | AlojamientoScalarWhereWithAggregatesInput[]
    OR?: AlojamientoScalarWhereWithAggregatesInput[]
    NOT?: AlojamientoScalarWhereWithAggregatesInput | AlojamientoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Alojamiento"> | number
    nombre?: StringWithAggregatesFilter<"Alojamiento"> | string
    descripcion?: StringWithAggregatesFilter<"Alojamiento"> | string
    precio?: FloatWithAggregatesFilter<"Alojamiento"> | number
    habitaciones?: IntWithAggregatesFilter<"Alojamiento"> | number
    banos?: FloatWithAggregatesFilter<"Alojamiento"> | number
    superficie?: IntWithAggregatesFilter<"Alojamiento"> | number
    plazasLibres?: IntWithAggregatesFilter<"Alojamiento"> | number
    tipoAlojamiento?: EnumTipoAlojamientoWithAggregatesFilter<"Alojamiento"> | $Enums.TipoAlojamiento
    hayTelevision?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayTelefono?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayInternet?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayTerraza?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayAscensor?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayGaraje?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayLavavajillas?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayHorno?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayMicroondas?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayNevera?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayLavadora?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    haySecadora?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayPortero?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayMuebles?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayCalefaccion?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayAireAcondicionado?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayGas?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayPiscina?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayZonaComunitaria?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayGimnasio?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    aguaIncluido?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    gasIncluido?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    electricidadIncluido?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    internetIncluido?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    photoUrls?: StringNullableListFilter<"Alojamiento">
    postedDate?: DateTimeWithAggregatesFilter<"Alojamiento"> | Date | string
    averageRating?: FloatNullableWithAggregatesFilter<"Alojamiento"> | number | null
    numberOfReviews?: IntNullableWithAggregatesFilter<"Alojamiento"> | number | null
    locationId?: IntWithAggregatesFilter<"Alojamiento"> | number
    managerCognitoId?: StringWithAggregatesFilter<"Alojamiento"> | string
  }

  export type PropietarioWhereInput = {
    AND?: PropietarioWhereInput | PropietarioWhereInput[]
    OR?: PropietarioWhereInput[]
    NOT?: PropietarioWhereInput | PropietarioWhereInput[]
    id?: IntFilter<"Propietario"> | number
    cognitoId?: StringFilter<"Propietario"> | string
    nombre?: StringFilter<"Propietario"> | string
    email?: StringFilter<"Propietario"> | string
    telefono?: StringFilter<"Propietario"> | string
    managedProperties?: AlojamientoListRelationFilter
  }

  export type PropietarioOrderByWithRelationInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    managedProperties?: AlojamientoOrderByRelationAggregateInput
  }

  export type PropietarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cognitoId?: string
    AND?: PropietarioWhereInput | PropietarioWhereInput[]
    OR?: PropietarioWhereInput[]
    NOT?: PropietarioWhereInput | PropietarioWhereInput[]
    nombre?: StringFilter<"Propietario"> | string
    email?: StringFilter<"Propietario"> | string
    telefono?: StringFilter<"Propietario"> | string
    managedProperties?: AlojamientoListRelationFilter
  }, "id" | "cognitoId">

  export type PropietarioOrderByWithAggregationInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    _count?: PropietarioCountOrderByAggregateInput
    _avg?: PropietarioAvgOrderByAggregateInput
    _max?: PropietarioMaxOrderByAggregateInput
    _min?: PropietarioMinOrderByAggregateInput
    _sum?: PropietarioSumOrderByAggregateInput
  }

  export type PropietarioScalarWhereWithAggregatesInput = {
    AND?: PropietarioScalarWhereWithAggregatesInput | PropietarioScalarWhereWithAggregatesInput[]
    OR?: PropietarioScalarWhereWithAggregatesInput[]
    NOT?: PropietarioScalarWhereWithAggregatesInput | PropietarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Propietario"> | number
    cognitoId?: StringWithAggregatesFilter<"Propietario"> | string
    nombre?: StringWithAggregatesFilter<"Propietario"> | string
    email?: StringWithAggregatesFilter<"Propietario"> | string
    telefono?: StringWithAggregatesFilter<"Propietario"> | string
  }

  export type InquilinoWhereInput = {
    AND?: InquilinoWhereInput | InquilinoWhereInput[]
    OR?: InquilinoWhereInput[]
    NOT?: InquilinoWhereInput | InquilinoWhereInput[]
    id?: IntFilter<"Inquilino"> | number
    cognitoId?: StringFilter<"Inquilino"> | string
    nombre?: StringFilter<"Inquilino"> | string
    email?: StringFilter<"Inquilino"> | string
    telefono?: StringFilter<"Inquilino"> | string
    alojamientos?: AlojamientoListRelationFilter
    favoritos?: AlojamientoListRelationFilter
    solicitudes?: SolicitudListRelationFilter
    leases?: LeaseListRelationFilter
  }

  export type InquilinoOrderByWithRelationInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    alojamientos?: AlojamientoOrderByRelationAggregateInput
    favoritos?: AlojamientoOrderByRelationAggregateInput
    solicitudes?: SolicitudOrderByRelationAggregateInput
    leases?: LeaseOrderByRelationAggregateInput
  }

  export type InquilinoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cognitoId?: string
    AND?: InquilinoWhereInput | InquilinoWhereInput[]
    OR?: InquilinoWhereInput[]
    NOT?: InquilinoWhereInput | InquilinoWhereInput[]
    nombre?: StringFilter<"Inquilino"> | string
    email?: StringFilter<"Inquilino"> | string
    telefono?: StringFilter<"Inquilino"> | string
    alojamientos?: AlojamientoListRelationFilter
    favoritos?: AlojamientoListRelationFilter
    solicitudes?: SolicitudListRelationFilter
    leases?: LeaseListRelationFilter
  }, "id" | "cognitoId">

  export type InquilinoOrderByWithAggregationInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    _count?: InquilinoCountOrderByAggregateInput
    _avg?: InquilinoAvgOrderByAggregateInput
    _max?: InquilinoMaxOrderByAggregateInput
    _min?: InquilinoMinOrderByAggregateInput
    _sum?: InquilinoSumOrderByAggregateInput
  }

  export type InquilinoScalarWhereWithAggregatesInput = {
    AND?: InquilinoScalarWhereWithAggregatesInput | InquilinoScalarWhereWithAggregatesInput[]
    OR?: InquilinoScalarWhereWithAggregatesInput[]
    NOT?: InquilinoScalarWhereWithAggregatesInput | InquilinoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Inquilino"> | number
    cognitoId?: StringWithAggregatesFilter<"Inquilino"> | string
    nombre?: StringWithAggregatesFilter<"Inquilino"> | string
    email?: StringWithAggregatesFilter<"Inquilino"> | string
    telefono?: StringWithAggregatesFilter<"Inquilino"> | string
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: IntFilter<"Location"> | number
    address?: StringFilter<"Location"> | string
    city?: StringFilter<"Location"> | string
    state?: StringFilter<"Location"> | string
    country?: StringFilter<"Location"> | string
    postalCode?: StringFilter<"Location"> | string
    alojamientos?: AlojamientoListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    alojamientos?: AlojamientoOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    address?: StringFilter<"Location"> | string
    city?: StringFilter<"Location"> | string
    state?: StringFilter<"Location"> | string
    country?: StringFilter<"Location"> | string
    postalCode?: StringFilter<"Location"> | string
    alojamientos?: AlojamientoListRelationFilter
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Location"> | number
    address?: StringWithAggregatesFilter<"Location"> | string
    city?: StringWithAggregatesFilter<"Location"> | string
    state?: StringWithAggregatesFilter<"Location"> | string
    country?: StringWithAggregatesFilter<"Location"> | string
    postalCode?: StringWithAggregatesFilter<"Location"> | string
  }

  export type SolicitudWhereInput = {
    AND?: SolicitudWhereInput | SolicitudWhereInput[]
    OR?: SolicitudWhereInput[]
    NOT?: SolicitudWhereInput | SolicitudWhereInput[]
    id?: IntFilter<"Solicitud"> | number
    applicationDate?: DateTimeFilter<"Solicitud"> | Date | string
    estado?: EnumEstadoSolicitudFilter<"Solicitud"> | $Enums.EstadoSolicitud
    alojamientoId?: IntFilter<"Solicitud"> | number
    tenantCognitoId?: StringFilter<"Solicitud"> | string
    nombre?: StringFilter<"Solicitud"> | string
    email?: StringFilter<"Solicitud"> | string
    telefono?: StringFilter<"Solicitud"> | string
    mensaje?: StringNullableFilter<"Solicitud"> | string | null
    leaseId?: IntNullableFilter<"Solicitud"> | number | null
    alojamiento?: XOR<AlojamientoScalarRelationFilter, AlojamientoWhereInput>
    inquilino?: XOR<InquilinoScalarRelationFilter, InquilinoWhereInput>
    lease?: XOR<LeaseNullableScalarRelationFilter, LeaseWhereInput> | null
  }

  export type SolicitudOrderByWithRelationInput = {
    id?: SortOrder
    applicationDate?: SortOrder
    estado?: SortOrder
    alojamientoId?: SortOrder
    tenantCognitoId?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    mensaje?: SortOrderInput | SortOrder
    leaseId?: SortOrderInput | SortOrder
    alojamiento?: AlojamientoOrderByWithRelationInput
    inquilino?: InquilinoOrderByWithRelationInput
    lease?: LeaseOrderByWithRelationInput
  }

  export type SolicitudWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    leaseId?: number
    AND?: SolicitudWhereInput | SolicitudWhereInput[]
    OR?: SolicitudWhereInput[]
    NOT?: SolicitudWhereInput | SolicitudWhereInput[]
    applicationDate?: DateTimeFilter<"Solicitud"> | Date | string
    estado?: EnumEstadoSolicitudFilter<"Solicitud"> | $Enums.EstadoSolicitud
    alojamientoId?: IntFilter<"Solicitud"> | number
    tenantCognitoId?: StringFilter<"Solicitud"> | string
    nombre?: StringFilter<"Solicitud"> | string
    email?: StringFilter<"Solicitud"> | string
    telefono?: StringFilter<"Solicitud"> | string
    mensaje?: StringNullableFilter<"Solicitud"> | string | null
    alojamiento?: XOR<AlojamientoScalarRelationFilter, AlojamientoWhereInput>
    inquilino?: XOR<InquilinoScalarRelationFilter, InquilinoWhereInput>
    lease?: XOR<LeaseNullableScalarRelationFilter, LeaseWhereInput> | null
  }, "id" | "leaseId">

  export type SolicitudOrderByWithAggregationInput = {
    id?: SortOrder
    applicationDate?: SortOrder
    estado?: SortOrder
    alojamientoId?: SortOrder
    tenantCognitoId?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    mensaje?: SortOrderInput | SortOrder
    leaseId?: SortOrderInput | SortOrder
    _count?: SolicitudCountOrderByAggregateInput
    _avg?: SolicitudAvgOrderByAggregateInput
    _max?: SolicitudMaxOrderByAggregateInput
    _min?: SolicitudMinOrderByAggregateInput
    _sum?: SolicitudSumOrderByAggregateInput
  }

  export type SolicitudScalarWhereWithAggregatesInput = {
    AND?: SolicitudScalarWhereWithAggregatesInput | SolicitudScalarWhereWithAggregatesInput[]
    OR?: SolicitudScalarWhereWithAggregatesInput[]
    NOT?: SolicitudScalarWhereWithAggregatesInput | SolicitudScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Solicitud"> | number
    applicationDate?: DateTimeWithAggregatesFilter<"Solicitud"> | Date | string
    estado?: EnumEstadoSolicitudWithAggregatesFilter<"Solicitud"> | $Enums.EstadoSolicitud
    alojamientoId?: IntWithAggregatesFilter<"Solicitud"> | number
    tenantCognitoId?: StringWithAggregatesFilter<"Solicitud"> | string
    nombre?: StringWithAggregatesFilter<"Solicitud"> | string
    email?: StringWithAggregatesFilter<"Solicitud"> | string
    telefono?: StringWithAggregatesFilter<"Solicitud"> | string
    mensaje?: StringNullableWithAggregatesFilter<"Solicitud"> | string | null
    leaseId?: IntNullableWithAggregatesFilter<"Solicitud"> | number | null
  }

  export type LeaseWhereInput = {
    AND?: LeaseWhereInput | LeaseWhereInput[]
    OR?: LeaseWhereInput[]
    NOT?: LeaseWhereInput | LeaseWhereInput[]
    id?: IntFilter<"Lease"> | number
    startDate?: DateTimeFilter<"Lease"> | Date | string
    endDate?: DateTimeFilter<"Lease"> | Date | string
    rent?: FloatFilter<"Lease"> | number
    deposit?: FloatFilter<"Lease"> | number
    alojamientoId?: IntFilter<"Lease"> | number
    tenantCognitoId?: StringFilter<"Lease"> | string
    alojamiento?: XOR<AlojamientoScalarRelationFilter, AlojamientoWhereInput>
    inquilino?: XOR<InquilinoScalarRelationFilter, InquilinoWhereInput>
    solicitud?: XOR<SolicitudNullableScalarRelationFilter, SolicitudWhereInput> | null
    payments?: PaymentListRelationFilter
  }

  export type LeaseOrderByWithRelationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    rent?: SortOrder
    deposit?: SortOrder
    alojamientoId?: SortOrder
    tenantCognitoId?: SortOrder
    alojamiento?: AlojamientoOrderByWithRelationInput
    inquilino?: InquilinoOrderByWithRelationInput
    solicitud?: SolicitudOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type LeaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LeaseWhereInput | LeaseWhereInput[]
    OR?: LeaseWhereInput[]
    NOT?: LeaseWhereInput | LeaseWhereInput[]
    startDate?: DateTimeFilter<"Lease"> | Date | string
    endDate?: DateTimeFilter<"Lease"> | Date | string
    rent?: FloatFilter<"Lease"> | number
    deposit?: FloatFilter<"Lease"> | number
    alojamientoId?: IntFilter<"Lease"> | number
    tenantCognitoId?: StringFilter<"Lease"> | string
    alojamiento?: XOR<AlojamientoScalarRelationFilter, AlojamientoWhereInput>
    inquilino?: XOR<InquilinoScalarRelationFilter, InquilinoWhereInput>
    solicitud?: XOR<SolicitudNullableScalarRelationFilter, SolicitudWhereInput> | null
    payments?: PaymentListRelationFilter
  }, "id">

  export type LeaseOrderByWithAggregationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    rent?: SortOrder
    deposit?: SortOrder
    alojamientoId?: SortOrder
    tenantCognitoId?: SortOrder
    _count?: LeaseCountOrderByAggregateInput
    _avg?: LeaseAvgOrderByAggregateInput
    _max?: LeaseMaxOrderByAggregateInput
    _min?: LeaseMinOrderByAggregateInput
    _sum?: LeaseSumOrderByAggregateInput
  }

  export type LeaseScalarWhereWithAggregatesInput = {
    AND?: LeaseScalarWhereWithAggregatesInput | LeaseScalarWhereWithAggregatesInput[]
    OR?: LeaseScalarWhereWithAggregatesInput[]
    NOT?: LeaseScalarWhereWithAggregatesInput | LeaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Lease"> | number
    startDate?: DateTimeWithAggregatesFilter<"Lease"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Lease"> | Date | string
    rent?: FloatWithAggregatesFilter<"Lease"> | number
    deposit?: FloatWithAggregatesFilter<"Lease"> | number
    alojamientoId?: IntWithAggregatesFilter<"Lease"> | number
    tenantCognitoId?: StringWithAggregatesFilter<"Lease"> | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    amountDue?: FloatFilter<"Payment"> | number
    amountPaid?: FloatFilter<"Payment"> | number
    dueDate?: DateTimeFilter<"Payment"> | Date | string
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    paymentStatus?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    leaseId?: IntFilter<"Payment"> | number
    lease?: XOR<LeaseScalarRelationFilter, LeaseWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    dueDate?: SortOrder
    paymentDate?: SortOrder
    paymentStatus?: SortOrder
    leaseId?: SortOrder
    lease?: LeaseOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    amountDue?: FloatFilter<"Payment"> | number
    amountPaid?: FloatFilter<"Payment"> | number
    dueDate?: DateTimeFilter<"Payment"> | Date | string
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    paymentStatus?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    leaseId?: IntFilter<"Payment"> | number
    lease?: XOR<LeaseScalarRelationFilter, LeaseWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    dueDate?: SortOrder
    paymentDate?: SortOrder
    paymentStatus?: SortOrder
    leaseId?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    amountDue?: FloatWithAggregatesFilter<"Payment"> | number
    amountPaid?: FloatWithAggregatesFilter<"Payment"> | number
    dueDate?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    paymentDate?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    leaseId?: IntWithAggregatesFilter<"Payment"> | number
  }

  export type AlojamientoCreateInput = {
    nombre: string
    descripcion: string
    precio: number
    habitaciones: number
    banos: number
    superficie: number
    plazasLibres: number
    tipoAlojamiento: $Enums.TipoAlojamiento
    hayTelevision?: boolean
    hayTelefono?: boolean
    hayInternet?: boolean
    hayTerraza?: boolean
    hayAscensor?: boolean
    hayGaraje?: boolean
    hayLavavajillas?: boolean
    hayHorno?: boolean
    hayMicroondas?: boolean
    hayNevera?: boolean
    hayLavadora?: boolean
    haySecadora?: boolean
    hayPortero?: boolean
    hayMuebles?: boolean
    hayCalefaccion?: boolean
    hayAireAcondicionado?: boolean
    hayGas?: boolean
    hayPiscina?: boolean
    hayZonaComunitaria?: boolean
    hayGimnasio?: boolean
    aguaIncluido?: boolean
    gasIncluido?: boolean
    electricidadIncluido?: boolean
    internetIncluido?: boolean
    photoUrls?: AlojamientoCreatephotoUrlsInput | string[]
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    location: LocationCreateNestedOneWithoutAlojamientosInput
    propietario: PropietarioCreateNestedOneWithoutManagedPropertiesInput
    leases?: LeaseCreateNestedManyWithoutAlojamientoInput
    solicitudes?: SolicitudCreateNestedManyWithoutAlojamientoInput
    favoritedBy?: InquilinoCreateNestedManyWithoutFavoritosInput
    inquilinos?: InquilinoCreateNestedManyWithoutAlojamientosInput
  }

  export type AlojamientoUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    habitaciones: number
    banos: number
    superficie: number
    plazasLibres: number
    tipoAlojamiento: $Enums.TipoAlojamiento
    hayTelevision?: boolean
    hayTelefono?: boolean
    hayInternet?: boolean
    hayTerraza?: boolean
    hayAscensor?: boolean
    hayGaraje?: boolean
    hayLavavajillas?: boolean
    hayHorno?: boolean
    hayMicroondas?: boolean
    hayNevera?: boolean
    hayLavadora?: boolean
    haySecadora?: boolean
    hayPortero?: boolean
    hayMuebles?: boolean
    hayCalefaccion?: boolean
    hayAireAcondicionado?: boolean
    hayGas?: boolean
    hayPiscina?: boolean
    hayZonaComunitaria?: boolean
    hayGimnasio?: boolean
    aguaIncluido?: boolean
    gasIncluido?: boolean
    electricidadIncluido?: boolean
    internetIncluido?: boolean
    photoUrls?: AlojamientoCreatephotoUrlsInput | string[]
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    locationId: number
    managerCognitoId: string
    leases?: LeaseUncheckedCreateNestedManyWithoutAlojamientoInput
    solicitudes?: SolicitudUncheckedCreateNestedManyWithoutAlojamientoInput
    favoritedBy?: InquilinoUncheckedCreateNestedManyWithoutFavoritosInput
    inquilinos?: InquilinoUncheckedCreateNestedManyWithoutAlojamientosInput
  }

  export type AlojamientoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    habitaciones?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    tipoAlojamiento?: EnumTipoAlojamientoFieldUpdateOperationsInput | $Enums.TipoAlojamiento
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    location?: LocationUpdateOneRequiredWithoutAlojamientosNestedInput
    propietario?: PropietarioUpdateOneRequiredWithoutManagedPropertiesNestedInput
    leases?: LeaseUpdateManyWithoutAlojamientoNestedInput
    solicitudes?: SolicitudUpdateManyWithoutAlojamientoNestedInput
    favoritedBy?: InquilinoUpdateManyWithoutFavoritosNestedInput
    inquilinos?: InquilinoUpdateManyWithoutAlojamientosNestedInput
  }

  export type AlojamientoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    habitaciones?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    tipoAlojamiento?: EnumTipoAlojamientoFieldUpdateOperationsInput | $Enums.TipoAlojamiento
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    managerCognitoId?: StringFieldUpdateOperationsInput | string
    leases?: LeaseUncheckedUpdateManyWithoutAlojamientoNestedInput
    solicitudes?: SolicitudUncheckedUpdateManyWithoutAlojamientoNestedInput
    favoritedBy?: InquilinoUncheckedUpdateManyWithoutFavoritosNestedInput
    inquilinos?: InquilinoUncheckedUpdateManyWithoutAlojamientosNestedInput
  }

  export type AlojamientoCreateManyInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    habitaciones: number
    banos: number
    superficie: number
    plazasLibres: number
    tipoAlojamiento: $Enums.TipoAlojamiento
    hayTelevision?: boolean
    hayTelefono?: boolean
    hayInternet?: boolean
    hayTerraza?: boolean
    hayAscensor?: boolean
    hayGaraje?: boolean
    hayLavavajillas?: boolean
    hayHorno?: boolean
    hayMicroondas?: boolean
    hayNevera?: boolean
    hayLavadora?: boolean
    haySecadora?: boolean
    hayPortero?: boolean
    hayMuebles?: boolean
    hayCalefaccion?: boolean
    hayAireAcondicionado?: boolean
    hayGas?: boolean
    hayPiscina?: boolean
    hayZonaComunitaria?: boolean
    hayGimnasio?: boolean
    aguaIncluido?: boolean
    gasIncluido?: boolean
    electricidadIncluido?: boolean
    internetIncluido?: boolean
    photoUrls?: AlojamientoCreatephotoUrlsInput | string[]
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    locationId: number
    managerCognitoId: string
  }

  export type AlojamientoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    habitaciones?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    tipoAlojamiento?: EnumTipoAlojamientoFieldUpdateOperationsInput | $Enums.TipoAlojamiento
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AlojamientoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    habitaciones?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    tipoAlojamiento?: EnumTipoAlojamientoFieldUpdateOperationsInput | $Enums.TipoAlojamiento
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    managerCognitoId?: StringFieldUpdateOperationsInput | string
  }

  export type PropietarioCreateInput = {
    cognitoId: string
    nombre: string
    email: string
    telefono: string
    managedProperties?: AlojamientoCreateNestedManyWithoutPropietarioInput
  }

  export type PropietarioUncheckedCreateInput = {
    id?: number
    cognitoId: string
    nombre: string
    email: string
    telefono: string
    managedProperties?: AlojamientoUncheckedCreateNestedManyWithoutPropietarioInput
  }

  export type PropietarioUpdateInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    managedProperties?: AlojamientoUpdateManyWithoutPropietarioNestedInput
  }

  export type PropietarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    managedProperties?: AlojamientoUncheckedUpdateManyWithoutPropietarioNestedInput
  }

  export type PropietarioCreateManyInput = {
    id?: number
    cognitoId: string
    nombre: string
    email: string
    telefono: string
  }

  export type PropietarioUpdateManyMutationInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
  }

  export type PropietarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
  }

  export type InquilinoCreateInput = {
    cognitoId: string
    nombre: string
    email: string
    telefono: string
    alojamientos?: AlojamientoCreateNestedManyWithoutInquilinosInput
    favoritos?: AlojamientoCreateNestedManyWithoutFavoritedByInput
    solicitudes?: SolicitudCreateNestedManyWithoutInquilinoInput
    leases?: LeaseCreateNestedManyWithoutInquilinoInput
  }

  export type InquilinoUncheckedCreateInput = {
    id?: number
    cognitoId: string
    nombre: string
    email: string
    telefono: string
    alojamientos?: AlojamientoUncheckedCreateNestedManyWithoutInquilinosInput
    favoritos?: AlojamientoUncheckedCreateNestedManyWithoutFavoritedByInput
    solicitudes?: SolicitudUncheckedCreateNestedManyWithoutInquilinoInput
    leases?: LeaseUncheckedCreateNestedManyWithoutInquilinoInput
  }

  export type InquilinoUpdateInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    alojamientos?: AlojamientoUpdateManyWithoutInquilinosNestedInput
    favoritos?: AlojamientoUpdateManyWithoutFavoritedByNestedInput
    solicitudes?: SolicitudUpdateManyWithoutInquilinoNestedInput
    leases?: LeaseUpdateManyWithoutInquilinoNestedInput
  }

  export type InquilinoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    alojamientos?: AlojamientoUncheckedUpdateManyWithoutInquilinosNestedInput
    favoritos?: AlojamientoUncheckedUpdateManyWithoutFavoritedByNestedInput
    solicitudes?: SolicitudUncheckedUpdateManyWithoutInquilinoNestedInput
    leases?: LeaseUncheckedUpdateManyWithoutInquilinoNestedInput
  }

  export type InquilinoCreateManyInput = {
    id?: number
    cognitoId: string
    nombre: string
    email: string
    telefono: string
  }

  export type InquilinoUpdateManyMutationInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
  }

  export type InquilinoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
  }

  export type LocationUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    alojamientos?: AlojamientoUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    alojamientos?: AlojamientoUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type SolicitudCreateInput = {
    applicationDate: Date | string
    estado: $Enums.EstadoSolicitud
    nombre: string
    email: string
    telefono: string
    mensaje?: string | null
    alojamiento: AlojamientoCreateNestedOneWithoutSolicitudesInput
    inquilino: InquilinoCreateNestedOneWithoutSolicitudesInput
    lease?: LeaseCreateNestedOneWithoutSolicitudInput
  }

  export type SolicitudUncheckedCreateInput = {
    id?: number
    applicationDate: Date | string
    estado: $Enums.EstadoSolicitud
    alojamientoId: number
    tenantCognitoId: string
    nombre: string
    email: string
    telefono: string
    mensaje?: string | null
    leaseId?: number | null
  }

  export type SolicitudUpdateInput = {
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoSolicitudFieldUpdateOperationsInput | $Enums.EstadoSolicitud
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    alojamiento?: AlojamientoUpdateOneRequiredWithoutSolicitudesNestedInput
    inquilino?: InquilinoUpdateOneRequiredWithoutSolicitudesNestedInput
    lease?: LeaseUpdateOneWithoutSolicitudNestedInput
  }

  export type SolicitudUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoSolicitudFieldUpdateOperationsInput | $Enums.EstadoSolicitud
    alojamientoId?: IntFieldUpdateOperationsInput | number
    tenantCognitoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    leaseId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SolicitudCreateManyInput = {
    id?: number
    applicationDate: Date | string
    estado: $Enums.EstadoSolicitud
    alojamientoId: number
    tenantCognitoId: string
    nombre: string
    email: string
    telefono: string
    mensaje?: string | null
    leaseId?: number | null
  }

  export type SolicitudUpdateManyMutationInput = {
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoSolicitudFieldUpdateOperationsInput | $Enums.EstadoSolicitud
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SolicitudUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoSolicitudFieldUpdateOperationsInput | $Enums.EstadoSolicitud
    alojamientoId?: IntFieldUpdateOperationsInput | number
    tenantCognitoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    leaseId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LeaseCreateInput = {
    startDate: Date | string
    endDate: Date | string
    rent: number
    deposit: number
    alojamiento: AlojamientoCreateNestedOneWithoutLeasesInput
    inquilino: InquilinoCreateNestedOneWithoutLeasesInput
    solicitud?: SolicitudCreateNestedOneWithoutLeaseInput
    payments?: PaymentCreateNestedManyWithoutLeaseInput
  }

  export type LeaseUncheckedCreateInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    rent: number
    deposit: number
    alojamientoId: number
    tenantCognitoId: string
    solicitud?: SolicitudUncheckedCreateNestedOneWithoutLeaseInput
    payments?: PaymentUncheckedCreateNestedManyWithoutLeaseInput
  }

  export type LeaseUpdateInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rent?: FloatFieldUpdateOperationsInput | number
    deposit?: FloatFieldUpdateOperationsInput | number
    alojamiento?: AlojamientoUpdateOneRequiredWithoutLeasesNestedInput
    inquilino?: InquilinoUpdateOneRequiredWithoutLeasesNestedInput
    solicitud?: SolicitudUpdateOneWithoutLeaseNestedInput
    payments?: PaymentUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rent?: FloatFieldUpdateOperationsInput | number
    deposit?: FloatFieldUpdateOperationsInput | number
    alojamientoId?: IntFieldUpdateOperationsInput | number
    tenantCognitoId?: StringFieldUpdateOperationsInput | string
    solicitud?: SolicitudUncheckedUpdateOneWithoutLeaseNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseCreateManyInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    rent: number
    deposit: number
    alojamientoId: number
    tenantCognitoId: string
  }

  export type LeaseUpdateManyMutationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rent?: FloatFieldUpdateOperationsInput | number
    deposit?: FloatFieldUpdateOperationsInput | number
  }

  export type LeaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rent?: FloatFieldUpdateOperationsInput | number
    deposit?: FloatFieldUpdateOperationsInput | number
    alojamientoId?: IntFieldUpdateOperationsInput | number
    tenantCognitoId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateInput = {
    amountDue: number
    amountPaid: number
    dueDate: Date | string
    paymentDate: Date | string
    paymentStatus: $Enums.PaymentStatus
    lease: LeaseCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    amountDue: number
    amountPaid: number
    dueDate: Date | string
    paymentDate: Date | string
    paymentStatus: $Enums.PaymentStatus
    leaseId: number
  }

  export type PaymentUpdateInput = {
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    lease?: LeaseUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    leaseId?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentCreateManyInput = {
    id?: number
    amountDue: number
    amountPaid: number
    dueDate: Date | string
    paymentDate: Date | string
    paymentStatus: $Enums.PaymentStatus
    leaseId: number
  }

  export type PaymentUpdateManyMutationInput = {
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    leaseId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumTipoAlojamientoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAlojamiento | EnumTipoAlojamientoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAlojamiento[] | ListEnumTipoAlojamientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoAlojamiento[] | ListEnumTipoAlojamientoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoAlojamientoFilter<$PrismaModel> | $Enums.TipoAlojamiento
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type LocationScalarRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type PropietarioScalarRelationFilter = {
    is?: PropietarioWhereInput
    isNot?: PropietarioWhereInput
  }

  export type LeaseListRelationFilter = {
    every?: LeaseWhereInput
    some?: LeaseWhereInput
    none?: LeaseWhereInput
  }

  export type SolicitudListRelationFilter = {
    every?: SolicitudWhereInput
    some?: SolicitudWhereInput
    none?: SolicitudWhereInput
  }

  export type InquilinoListRelationFilter = {
    every?: InquilinoWhereInput
    some?: InquilinoWhereInput
    none?: InquilinoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LeaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SolicitudOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InquilinoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlojamientoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    habitaciones?: SortOrder
    banos?: SortOrder
    superficie?: SortOrder
    plazasLibres?: SortOrder
    tipoAlojamiento?: SortOrder
    hayTelevision?: SortOrder
    hayTelefono?: SortOrder
    hayInternet?: SortOrder
    hayTerraza?: SortOrder
    hayAscensor?: SortOrder
    hayGaraje?: SortOrder
    hayLavavajillas?: SortOrder
    hayHorno?: SortOrder
    hayMicroondas?: SortOrder
    hayNevera?: SortOrder
    hayLavadora?: SortOrder
    haySecadora?: SortOrder
    hayPortero?: SortOrder
    hayMuebles?: SortOrder
    hayCalefaccion?: SortOrder
    hayAireAcondicionado?: SortOrder
    hayGas?: SortOrder
    hayPiscina?: SortOrder
    hayZonaComunitaria?: SortOrder
    hayGimnasio?: SortOrder
    aguaIncluido?: SortOrder
    gasIncluido?: SortOrder
    electricidadIncluido?: SortOrder
    internetIncluido?: SortOrder
    photoUrls?: SortOrder
    postedDate?: SortOrder
    averageRating?: SortOrder
    numberOfReviews?: SortOrder
    locationId?: SortOrder
    managerCognitoId?: SortOrder
  }

  export type AlojamientoAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    habitaciones?: SortOrder
    banos?: SortOrder
    superficie?: SortOrder
    plazasLibres?: SortOrder
    averageRating?: SortOrder
    numberOfReviews?: SortOrder
    locationId?: SortOrder
  }

  export type AlojamientoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    habitaciones?: SortOrder
    banos?: SortOrder
    superficie?: SortOrder
    plazasLibres?: SortOrder
    tipoAlojamiento?: SortOrder
    hayTelevision?: SortOrder
    hayTelefono?: SortOrder
    hayInternet?: SortOrder
    hayTerraza?: SortOrder
    hayAscensor?: SortOrder
    hayGaraje?: SortOrder
    hayLavavajillas?: SortOrder
    hayHorno?: SortOrder
    hayMicroondas?: SortOrder
    hayNevera?: SortOrder
    hayLavadora?: SortOrder
    haySecadora?: SortOrder
    hayPortero?: SortOrder
    hayMuebles?: SortOrder
    hayCalefaccion?: SortOrder
    hayAireAcondicionado?: SortOrder
    hayGas?: SortOrder
    hayPiscina?: SortOrder
    hayZonaComunitaria?: SortOrder
    hayGimnasio?: SortOrder
    aguaIncluido?: SortOrder
    gasIncluido?: SortOrder
    electricidadIncluido?: SortOrder
    internetIncluido?: SortOrder
    postedDate?: SortOrder
    averageRating?: SortOrder
    numberOfReviews?: SortOrder
    locationId?: SortOrder
    managerCognitoId?: SortOrder
  }

  export type AlojamientoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    habitaciones?: SortOrder
    banos?: SortOrder
    superficie?: SortOrder
    plazasLibres?: SortOrder
    tipoAlojamiento?: SortOrder
    hayTelevision?: SortOrder
    hayTelefono?: SortOrder
    hayInternet?: SortOrder
    hayTerraza?: SortOrder
    hayAscensor?: SortOrder
    hayGaraje?: SortOrder
    hayLavavajillas?: SortOrder
    hayHorno?: SortOrder
    hayMicroondas?: SortOrder
    hayNevera?: SortOrder
    hayLavadora?: SortOrder
    haySecadora?: SortOrder
    hayPortero?: SortOrder
    hayMuebles?: SortOrder
    hayCalefaccion?: SortOrder
    hayAireAcondicionado?: SortOrder
    hayGas?: SortOrder
    hayPiscina?: SortOrder
    hayZonaComunitaria?: SortOrder
    hayGimnasio?: SortOrder
    aguaIncluido?: SortOrder
    gasIncluido?: SortOrder
    electricidadIncluido?: SortOrder
    internetIncluido?: SortOrder
    postedDate?: SortOrder
    averageRating?: SortOrder
    numberOfReviews?: SortOrder
    locationId?: SortOrder
    managerCognitoId?: SortOrder
  }

  export type AlojamientoSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    habitaciones?: SortOrder
    banos?: SortOrder
    superficie?: SortOrder
    plazasLibres?: SortOrder
    averageRating?: SortOrder
    numberOfReviews?: SortOrder
    locationId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumTipoAlojamientoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAlojamiento | EnumTipoAlojamientoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAlojamiento[] | ListEnumTipoAlojamientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoAlojamiento[] | ListEnumTipoAlojamientoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoAlojamientoWithAggregatesFilter<$PrismaModel> | $Enums.TipoAlojamiento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoAlojamientoFilter<$PrismaModel>
    _max?: NestedEnumTipoAlojamientoFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AlojamientoListRelationFilter = {
    every?: AlojamientoWhereInput
    some?: AlojamientoWhereInput
    none?: AlojamientoWhereInput
  }

  export type AlojamientoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropietarioCountOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
  }

  export type PropietarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PropietarioMaxOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
  }

  export type PropietarioMinOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
  }

  export type PropietarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InquilinoCountOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
  }

  export type InquilinoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InquilinoMaxOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
  }

  export type InquilinoMinOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
  }

  export type InquilinoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumEstadoSolicitudFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoSolicitud | EnumEstadoSolicitudFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoSolicitud[] | ListEnumEstadoSolicitudFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoSolicitud[] | ListEnumEstadoSolicitudFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoSolicitudFilter<$PrismaModel> | $Enums.EstadoSolicitud
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AlojamientoScalarRelationFilter = {
    is?: AlojamientoWhereInput
    isNot?: AlojamientoWhereInput
  }

  export type InquilinoScalarRelationFilter = {
    is?: InquilinoWhereInput
    isNot?: InquilinoWhereInput
  }

  export type LeaseNullableScalarRelationFilter = {
    is?: LeaseWhereInput | null
    isNot?: LeaseWhereInput | null
  }

  export type SolicitudCountOrderByAggregateInput = {
    id?: SortOrder
    applicationDate?: SortOrder
    estado?: SortOrder
    alojamientoId?: SortOrder
    tenantCognitoId?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    mensaje?: SortOrder
    leaseId?: SortOrder
  }

  export type SolicitudAvgOrderByAggregateInput = {
    id?: SortOrder
    alojamientoId?: SortOrder
    leaseId?: SortOrder
  }

  export type SolicitudMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationDate?: SortOrder
    estado?: SortOrder
    alojamientoId?: SortOrder
    tenantCognitoId?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    mensaje?: SortOrder
    leaseId?: SortOrder
  }

  export type SolicitudMinOrderByAggregateInput = {
    id?: SortOrder
    applicationDate?: SortOrder
    estado?: SortOrder
    alojamientoId?: SortOrder
    tenantCognitoId?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    mensaje?: SortOrder
    leaseId?: SortOrder
  }

  export type SolicitudSumOrderByAggregateInput = {
    id?: SortOrder
    alojamientoId?: SortOrder
    leaseId?: SortOrder
  }

  export type EnumEstadoSolicitudWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoSolicitud | EnumEstadoSolicitudFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoSolicitud[] | ListEnumEstadoSolicitudFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoSolicitud[] | ListEnumEstadoSolicitudFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoSolicitudWithAggregatesFilter<$PrismaModel> | $Enums.EstadoSolicitud
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoSolicitudFilter<$PrismaModel>
    _max?: NestedEnumEstadoSolicitudFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type SolicitudNullableScalarRelationFilter = {
    is?: SolicitudWhereInput | null
    isNot?: SolicitudWhereInput | null
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeaseCountOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    rent?: SortOrder
    deposit?: SortOrder
    alojamientoId?: SortOrder
    tenantCognitoId?: SortOrder
  }

  export type LeaseAvgOrderByAggregateInput = {
    id?: SortOrder
    rent?: SortOrder
    deposit?: SortOrder
    alojamientoId?: SortOrder
  }

  export type LeaseMaxOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    rent?: SortOrder
    deposit?: SortOrder
    alojamientoId?: SortOrder
    tenantCognitoId?: SortOrder
  }

  export type LeaseMinOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    rent?: SortOrder
    deposit?: SortOrder
    alojamientoId?: SortOrder
    tenantCognitoId?: SortOrder
  }

  export type LeaseSumOrderByAggregateInput = {
    id?: SortOrder
    rent?: SortOrder
    deposit?: SortOrder
    alojamientoId?: SortOrder
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type LeaseScalarRelationFilter = {
    is?: LeaseWhereInput
    isNot?: LeaseWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    dueDate?: SortOrder
    paymentDate?: SortOrder
    paymentStatus?: SortOrder
    leaseId?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    leaseId?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    dueDate?: SortOrder
    paymentDate?: SortOrder
    paymentStatus?: SortOrder
    leaseId?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    dueDate?: SortOrder
    paymentDate?: SortOrder
    paymentStatus?: SortOrder
    leaseId?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    leaseId?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type AlojamientoCreatephotoUrlsInput = {
    set: string[]
  }

  export type LocationCreateNestedOneWithoutAlojamientosInput = {
    connect?: LocationWhereUniqueInput
  }

  export type PropietarioCreateNestedOneWithoutManagedPropertiesInput = {
    create?: XOR<PropietarioCreateWithoutManagedPropertiesInput, PropietarioUncheckedCreateWithoutManagedPropertiesInput>
    connectOrCreate?: PropietarioCreateOrConnectWithoutManagedPropertiesInput
    connect?: PropietarioWhereUniqueInput
  }

  export type LeaseCreateNestedManyWithoutAlojamientoInput = {
    create?: XOR<LeaseCreateWithoutAlojamientoInput, LeaseUncheckedCreateWithoutAlojamientoInput> | LeaseCreateWithoutAlojamientoInput[] | LeaseUncheckedCreateWithoutAlojamientoInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutAlojamientoInput | LeaseCreateOrConnectWithoutAlojamientoInput[]
    createMany?: LeaseCreateManyAlojamientoInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type SolicitudCreateNestedManyWithoutAlojamientoInput = {
    create?: XOR<SolicitudCreateWithoutAlojamientoInput, SolicitudUncheckedCreateWithoutAlojamientoInput> | SolicitudCreateWithoutAlojamientoInput[] | SolicitudUncheckedCreateWithoutAlojamientoInput[]
    connectOrCreate?: SolicitudCreateOrConnectWithoutAlojamientoInput | SolicitudCreateOrConnectWithoutAlojamientoInput[]
    createMany?: SolicitudCreateManyAlojamientoInputEnvelope
    connect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
  }

  export type InquilinoCreateNestedManyWithoutFavoritosInput = {
    create?: XOR<InquilinoCreateWithoutFavoritosInput, InquilinoUncheckedCreateWithoutFavoritosInput> | InquilinoCreateWithoutFavoritosInput[] | InquilinoUncheckedCreateWithoutFavoritosInput[]
    connectOrCreate?: InquilinoCreateOrConnectWithoutFavoritosInput | InquilinoCreateOrConnectWithoutFavoritosInput[]
    connect?: InquilinoWhereUniqueInput | InquilinoWhereUniqueInput[]
  }

  export type InquilinoCreateNestedManyWithoutAlojamientosInput = {
    create?: XOR<InquilinoCreateWithoutAlojamientosInput, InquilinoUncheckedCreateWithoutAlojamientosInput> | InquilinoCreateWithoutAlojamientosInput[] | InquilinoUncheckedCreateWithoutAlojamientosInput[]
    connectOrCreate?: InquilinoCreateOrConnectWithoutAlojamientosInput | InquilinoCreateOrConnectWithoutAlojamientosInput[]
    connect?: InquilinoWhereUniqueInput | InquilinoWhereUniqueInput[]
  }

  export type LeaseUncheckedCreateNestedManyWithoutAlojamientoInput = {
    create?: XOR<LeaseCreateWithoutAlojamientoInput, LeaseUncheckedCreateWithoutAlojamientoInput> | LeaseCreateWithoutAlojamientoInput[] | LeaseUncheckedCreateWithoutAlojamientoInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutAlojamientoInput | LeaseCreateOrConnectWithoutAlojamientoInput[]
    createMany?: LeaseCreateManyAlojamientoInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type SolicitudUncheckedCreateNestedManyWithoutAlojamientoInput = {
    create?: XOR<SolicitudCreateWithoutAlojamientoInput, SolicitudUncheckedCreateWithoutAlojamientoInput> | SolicitudCreateWithoutAlojamientoInput[] | SolicitudUncheckedCreateWithoutAlojamientoInput[]
    connectOrCreate?: SolicitudCreateOrConnectWithoutAlojamientoInput | SolicitudCreateOrConnectWithoutAlojamientoInput[]
    createMany?: SolicitudCreateManyAlojamientoInputEnvelope
    connect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
  }

  export type InquilinoUncheckedCreateNestedManyWithoutFavoritosInput = {
    create?: XOR<InquilinoCreateWithoutFavoritosInput, InquilinoUncheckedCreateWithoutFavoritosInput> | InquilinoCreateWithoutFavoritosInput[] | InquilinoUncheckedCreateWithoutFavoritosInput[]
    connectOrCreate?: InquilinoCreateOrConnectWithoutFavoritosInput | InquilinoCreateOrConnectWithoutFavoritosInput[]
    connect?: InquilinoWhereUniqueInput | InquilinoWhereUniqueInput[]
  }

  export type InquilinoUncheckedCreateNestedManyWithoutAlojamientosInput = {
    create?: XOR<InquilinoCreateWithoutAlojamientosInput, InquilinoUncheckedCreateWithoutAlojamientosInput> | InquilinoCreateWithoutAlojamientosInput[] | InquilinoUncheckedCreateWithoutAlojamientosInput[]
    connectOrCreate?: InquilinoCreateOrConnectWithoutAlojamientosInput | InquilinoCreateOrConnectWithoutAlojamientosInput[]
    connect?: InquilinoWhereUniqueInput | InquilinoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumTipoAlojamientoFieldUpdateOperationsInput = {
    set?: $Enums.TipoAlojamiento
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AlojamientoUpdatephotoUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LocationUpdateOneRequiredWithoutAlojamientosNestedInput = {
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutAlojamientosInput, LocationUpdateWithoutAlojamientosInput>, LocationUncheckedUpdateWithoutAlojamientosInput>
  }

  export type PropietarioUpdateOneRequiredWithoutManagedPropertiesNestedInput = {
    create?: XOR<PropietarioCreateWithoutManagedPropertiesInput, PropietarioUncheckedCreateWithoutManagedPropertiesInput>
    connectOrCreate?: PropietarioCreateOrConnectWithoutManagedPropertiesInput
    upsert?: PropietarioUpsertWithoutManagedPropertiesInput
    connect?: PropietarioWhereUniqueInput
    update?: XOR<XOR<PropietarioUpdateToOneWithWhereWithoutManagedPropertiesInput, PropietarioUpdateWithoutManagedPropertiesInput>, PropietarioUncheckedUpdateWithoutManagedPropertiesInput>
  }

  export type LeaseUpdateManyWithoutAlojamientoNestedInput = {
    create?: XOR<LeaseCreateWithoutAlojamientoInput, LeaseUncheckedCreateWithoutAlojamientoInput> | LeaseCreateWithoutAlojamientoInput[] | LeaseUncheckedCreateWithoutAlojamientoInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutAlojamientoInput | LeaseCreateOrConnectWithoutAlojamientoInput[]
    upsert?: LeaseUpsertWithWhereUniqueWithoutAlojamientoInput | LeaseUpsertWithWhereUniqueWithoutAlojamientoInput[]
    createMany?: LeaseCreateManyAlojamientoInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?: LeaseUpdateWithWhereUniqueWithoutAlojamientoInput | LeaseUpdateWithWhereUniqueWithoutAlojamientoInput[]
    updateMany?: LeaseUpdateManyWithWhereWithoutAlojamientoInput | LeaseUpdateManyWithWhereWithoutAlojamientoInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type SolicitudUpdateManyWithoutAlojamientoNestedInput = {
    create?: XOR<SolicitudCreateWithoutAlojamientoInput, SolicitudUncheckedCreateWithoutAlojamientoInput> | SolicitudCreateWithoutAlojamientoInput[] | SolicitudUncheckedCreateWithoutAlojamientoInput[]
    connectOrCreate?: SolicitudCreateOrConnectWithoutAlojamientoInput | SolicitudCreateOrConnectWithoutAlojamientoInput[]
    upsert?: SolicitudUpsertWithWhereUniqueWithoutAlojamientoInput | SolicitudUpsertWithWhereUniqueWithoutAlojamientoInput[]
    createMany?: SolicitudCreateManyAlojamientoInputEnvelope
    set?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    disconnect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    delete?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    connect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    update?: SolicitudUpdateWithWhereUniqueWithoutAlojamientoInput | SolicitudUpdateWithWhereUniqueWithoutAlojamientoInput[]
    updateMany?: SolicitudUpdateManyWithWhereWithoutAlojamientoInput | SolicitudUpdateManyWithWhereWithoutAlojamientoInput[]
    deleteMany?: SolicitudScalarWhereInput | SolicitudScalarWhereInput[]
  }

  export type InquilinoUpdateManyWithoutFavoritosNestedInput = {
    create?: XOR<InquilinoCreateWithoutFavoritosInput, InquilinoUncheckedCreateWithoutFavoritosInput> | InquilinoCreateWithoutFavoritosInput[] | InquilinoUncheckedCreateWithoutFavoritosInput[]
    connectOrCreate?: InquilinoCreateOrConnectWithoutFavoritosInput | InquilinoCreateOrConnectWithoutFavoritosInput[]
    upsert?: InquilinoUpsertWithWhereUniqueWithoutFavoritosInput | InquilinoUpsertWithWhereUniqueWithoutFavoritosInput[]
    set?: InquilinoWhereUniqueInput | InquilinoWhereUniqueInput[]
    disconnect?: InquilinoWhereUniqueInput | InquilinoWhereUniqueInput[]
    delete?: InquilinoWhereUniqueInput | InquilinoWhereUniqueInput[]
    connect?: InquilinoWhereUniqueInput | InquilinoWhereUniqueInput[]
    update?: InquilinoUpdateWithWhereUniqueWithoutFavoritosInput | InquilinoUpdateWithWhereUniqueWithoutFavoritosInput[]
    updateMany?: InquilinoUpdateManyWithWhereWithoutFavoritosInput | InquilinoUpdateManyWithWhereWithoutFavoritosInput[]
    deleteMany?: InquilinoScalarWhereInput | InquilinoScalarWhereInput[]
  }

  export type InquilinoUpdateManyWithoutAlojamientosNestedInput = {
    create?: XOR<InquilinoCreateWithoutAlojamientosInput, InquilinoUncheckedCreateWithoutAlojamientosInput> | InquilinoCreateWithoutAlojamientosInput[] | InquilinoUncheckedCreateWithoutAlojamientosInput[]
    connectOrCreate?: InquilinoCreateOrConnectWithoutAlojamientosInput | InquilinoCreateOrConnectWithoutAlojamientosInput[]
    upsert?: InquilinoUpsertWithWhereUniqueWithoutAlojamientosInput | InquilinoUpsertWithWhereUniqueWithoutAlojamientosInput[]
    set?: InquilinoWhereUniqueInput | InquilinoWhereUniqueInput[]
    disconnect?: InquilinoWhereUniqueInput | InquilinoWhereUniqueInput[]
    delete?: InquilinoWhereUniqueInput | InquilinoWhereUniqueInput[]
    connect?: InquilinoWhereUniqueInput | InquilinoWhereUniqueInput[]
    update?: InquilinoUpdateWithWhereUniqueWithoutAlojamientosInput | InquilinoUpdateWithWhereUniqueWithoutAlojamientosInput[]
    updateMany?: InquilinoUpdateManyWithWhereWithoutAlojamientosInput | InquilinoUpdateManyWithWhereWithoutAlojamientosInput[]
    deleteMany?: InquilinoScalarWhereInput | InquilinoScalarWhereInput[]
  }

  export type LeaseUncheckedUpdateManyWithoutAlojamientoNestedInput = {
    create?: XOR<LeaseCreateWithoutAlojamientoInput, LeaseUncheckedCreateWithoutAlojamientoInput> | LeaseCreateWithoutAlojamientoInput[] | LeaseUncheckedCreateWithoutAlojamientoInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutAlojamientoInput | LeaseCreateOrConnectWithoutAlojamientoInput[]
    upsert?: LeaseUpsertWithWhereUniqueWithoutAlojamientoInput | LeaseUpsertWithWhereUniqueWithoutAlojamientoInput[]
    createMany?: LeaseCreateManyAlojamientoInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?: LeaseUpdateWithWhereUniqueWithoutAlojamientoInput | LeaseUpdateWithWhereUniqueWithoutAlojamientoInput[]
    updateMany?: LeaseUpdateManyWithWhereWithoutAlojamientoInput | LeaseUpdateManyWithWhereWithoutAlojamientoInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type SolicitudUncheckedUpdateManyWithoutAlojamientoNestedInput = {
    create?: XOR<SolicitudCreateWithoutAlojamientoInput, SolicitudUncheckedCreateWithoutAlojamientoInput> | SolicitudCreateWithoutAlojamientoInput[] | SolicitudUncheckedCreateWithoutAlojamientoInput[]
    connectOrCreate?: SolicitudCreateOrConnectWithoutAlojamientoInput | SolicitudCreateOrConnectWithoutAlojamientoInput[]
    upsert?: SolicitudUpsertWithWhereUniqueWithoutAlojamientoInput | SolicitudUpsertWithWhereUniqueWithoutAlojamientoInput[]
    createMany?: SolicitudCreateManyAlojamientoInputEnvelope
    set?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    disconnect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    delete?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    connect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    update?: SolicitudUpdateWithWhereUniqueWithoutAlojamientoInput | SolicitudUpdateWithWhereUniqueWithoutAlojamientoInput[]
    updateMany?: SolicitudUpdateManyWithWhereWithoutAlojamientoInput | SolicitudUpdateManyWithWhereWithoutAlojamientoInput[]
    deleteMany?: SolicitudScalarWhereInput | SolicitudScalarWhereInput[]
  }

  export type InquilinoUncheckedUpdateManyWithoutFavoritosNestedInput = {
    create?: XOR<InquilinoCreateWithoutFavoritosInput, InquilinoUncheckedCreateWithoutFavoritosInput> | InquilinoCreateWithoutFavoritosInput[] | InquilinoUncheckedCreateWithoutFavoritosInput[]
    connectOrCreate?: InquilinoCreateOrConnectWithoutFavoritosInput | InquilinoCreateOrConnectWithoutFavoritosInput[]
    upsert?: InquilinoUpsertWithWhereUniqueWithoutFavoritosInput | InquilinoUpsertWithWhereUniqueWithoutFavoritosInput[]
    set?: InquilinoWhereUniqueInput | InquilinoWhereUniqueInput[]
    disconnect?: InquilinoWhereUniqueInput | InquilinoWhereUniqueInput[]
    delete?: InquilinoWhereUniqueInput | InquilinoWhereUniqueInput[]
    connect?: InquilinoWhereUniqueInput | InquilinoWhereUniqueInput[]
    update?: InquilinoUpdateWithWhereUniqueWithoutFavoritosInput | InquilinoUpdateWithWhereUniqueWithoutFavoritosInput[]
    updateMany?: InquilinoUpdateManyWithWhereWithoutFavoritosInput | InquilinoUpdateManyWithWhereWithoutFavoritosInput[]
    deleteMany?: InquilinoScalarWhereInput | InquilinoScalarWhereInput[]
  }

  export type InquilinoUncheckedUpdateManyWithoutAlojamientosNestedInput = {
    create?: XOR<InquilinoCreateWithoutAlojamientosInput, InquilinoUncheckedCreateWithoutAlojamientosInput> | InquilinoCreateWithoutAlojamientosInput[] | InquilinoUncheckedCreateWithoutAlojamientosInput[]
    connectOrCreate?: InquilinoCreateOrConnectWithoutAlojamientosInput | InquilinoCreateOrConnectWithoutAlojamientosInput[]
    upsert?: InquilinoUpsertWithWhereUniqueWithoutAlojamientosInput | InquilinoUpsertWithWhereUniqueWithoutAlojamientosInput[]
    set?: InquilinoWhereUniqueInput | InquilinoWhereUniqueInput[]
    disconnect?: InquilinoWhereUniqueInput | InquilinoWhereUniqueInput[]
    delete?: InquilinoWhereUniqueInput | InquilinoWhereUniqueInput[]
    connect?: InquilinoWhereUniqueInput | InquilinoWhereUniqueInput[]
    update?: InquilinoUpdateWithWhereUniqueWithoutAlojamientosInput | InquilinoUpdateWithWhereUniqueWithoutAlojamientosInput[]
    updateMany?: InquilinoUpdateManyWithWhereWithoutAlojamientosInput | InquilinoUpdateManyWithWhereWithoutAlojamientosInput[]
    deleteMany?: InquilinoScalarWhereInput | InquilinoScalarWhereInput[]
  }

  export type AlojamientoCreateNestedManyWithoutPropietarioInput = {
    create?: XOR<AlojamientoCreateWithoutPropietarioInput, AlojamientoUncheckedCreateWithoutPropietarioInput> | AlojamientoCreateWithoutPropietarioInput[] | AlojamientoUncheckedCreateWithoutPropietarioInput[]
    connectOrCreate?: AlojamientoCreateOrConnectWithoutPropietarioInput | AlojamientoCreateOrConnectWithoutPropietarioInput[]
    createMany?: AlojamientoCreateManyPropietarioInputEnvelope
    connect?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
  }

  export type AlojamientoUncheckedCreateNestedManyWithoutPropietarioInput = {
    create?: XOR<AlojamientoCreateWithoutPropietarioInput, AlojamientoUncheckedCreateWithoutPropietarioInput> | AlojamientoCreateWithoutPropietarioInput[] | AlojamientoUncheckedCreateWithoutPropietarioInput[]
    connectOrCreate?: AlojamientoCreateOrConnectWithoutPropietarioInput | AlojamientoCreateOrConnectWithoutPropietarioInput[]
    createMany?: AlojamientoCreateManyPropietarioInputEnvelope
    connect?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
  }

  export type AlojamientoUpdateManyWithoutPropietarioNestedInput = {
    create?: XOR<AlojamientoCreateWithoutPropietarioInput, AlojamientoUncheckedCreateWithoutPropietarioInput> | AlojamientoCreateWithoutPropietarioInput[] | AlojamientoUncheckedCreateWithoutPropietarioInput[]
    connectOrCreate?: AlojamientoCreateOrConnectWithoutPropietarioInput | AlojamientoCreateOrConnectWithoutPropietarioInput[]
    upsert?: AlojamientoUpsertWithWhereUniqueWithoutPropietarioInput | AlojamientoUpsertWithWhereUniqueWithoutPropietarioInput[]
    createMany?: AlojamientoCreateManyPropietarioInputEnvelope
    set?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
    disconnect?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
    delete?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
    connect?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
    update?: AlojamientoUpdateWithWhereUniqueWithoutPropietarioInput | AlojamientoUpdateWithWhereUniqueWithoutPropietarioInput[]
    updateMany?: AlojamientoUpdateManyWithWhereWithoutPropietarioInput | AlojamientoUpdateManyWithWhereWithoutPropietarioInput[]
    deleteMany?: AlojamientoScalarWhereInput | AlojamientoScalarWhereInput[]
  }

  export type AlojamientoUncheckedUpdateManyWithoutPropietarioNestedInput = {
    create?: XOR<AlojamientoCreateWithoutPropietarioInput, AlojamientoUncheckedCreateWithoutPropietarioInput> | AlojamientoCreateWithoutPropietarioInput[] | AlojamientoUncheckedCreateWithoutPropietarioInput[]
    connectOrCreate?: AlojamientoCreateOrConnectWithoutPropietarioInput | AlojamientoCreateOrConnectWithoutPropietarioInput[]
    upsert?: AlojamientoUpsertWithWhereUniqueWithoutPropietarioInput | AlojamientoUpsertWithWhereUniqueWithoutPropietarioInput[]
    createMany?: AlojamientoCreateManyPropietarioInputEnvelope
    set?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
    disconnect?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
    delete?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
    connect?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
    update?: AlojamientoUpdateWithWhereUniqueWithoutPropietarioInput | AlojamientoUpdateWithWhereUniqueWithoutPropietarioInput[]
    updateMany?: AlojamientoUpdateManyWithWhereWithoutPropietarioInput | AlojamientoUpdateManyWithWhereWithoutPropietarioInput[]
    deleteMany?: AlojamientoScalarWhereInput | AlojamientoScalarWhereInput[]
  }

  export type AlojamientoCreateNestedManyWithoutInquilinosInput = {
    create?: XOR<AlojamientoCreateWithoutInquilinosInput, AlojamientoUncheckedCreateWithoutInquilinosInput> | AlojamientoCreateWithoutInquilinosInput[] | AlojamientoUncheckedCreateWithoutInquilinosInput[]
    connectOrCreate?: AlojamientoCreateOrConnectWithoutInquilinosInput | AlojamientoCreateOrConnectWithoutInquilinosInput[]
    connect?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
  }

  export type AlojamientoCreateNestedManyWithoutFavoritedByInput = {
    create?: XOR<AlojamientoCreateWithoutFavoritedByInput, AlojamientoUncheckedCreateWithoutFavoritedByInput> | AlojamientoCreateWithoutFavoritedByInput[] | AlojamientoUncheckedCreateWithoutFavoritedByInput[]
    connectOrCreate?: AlojamientoCreateOrConnectWithoutFavoritedByInput | AlojamientoCreateOrConnectWithoutFavoritedByInput[]
    connect?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
  }

  export type SolicitudCreateNestedManyWithoutInquilinoInput = {
    create?: XOR<SolicitudCreateWithoutInquilinoInput, SolicitudUncheckedCreateWithoutInquilinoInput> | SolicitudCreateWithoutInquilinoInput[] | SolicitudUncheckedCreateWithoutInquilinoInput[]
    connectOrCreate?: SolicitudCreateOrConnectWithoutInquilinoInput | SolicitudCreateOrConnectWithoutInquilinoInput[]
    createMany?: SolicitudCreateManyInquilinoInputEnvelope
    connect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
  }

  export type LeaseCreateNestedManyWithoutInquilinoInput = {
    create?: XOR<LeaseCreateWithoutInquilinoInput, LeaseUncheckedCreateWithoutInquilinoInput> | LeaseCreateWithoutInquilinoInput[] | LeaseUncheckedCreateWithoutInquilinoInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutInquilinoInput | LeaseCreateOrConnectWithoutInquilinoInput[]
    createMany?: LeaseCreateManyInquilinoInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type AlojamientoUncheckedCreateNestedManyWithoutInquilinosInput = {
    create?: XOR<AlojamientoCreateWithoutInquilinosInput, AlojamientoUncheckedCreateWithoutInquilinosInput> | AlojamientoCreateWithoutInquilinosInput[] | AlojamientoUncheckedCreateWithoutInquilinosInput[]
    connectOrCreate?: AlojamientoCreateOrConnectWithoutInquilinosInput | AlojamientoCreateOrConnectWithoutInquilinosInput[]
    connect?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
  }

  export type AlojamientoUncheckedCreateNestedManyWithoutFavoritedByInput = {
    create?: XOR<AlojamientoCreateWithoutFavoritedByInput, AlojamientoUncheckedCreateWithoutFavoritedByInput> | AlojamientoCreateWithoutFavoritedByInput[] | AlojamientoUncheckedCreateWithoutFavoritedByInput[]
    connectOrCreate?: AlojamientoCreateOrConnectWithoutFavoritedByInput | AlojamientoCreateOrConnectWithoutFavoritedByInput[]
    connect?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
  }

  export type SolicitudUncheckedCreateNestedManyWithoutInquilinoInput = {
    create?: XOR<SolicitudCreateWithoutInquilinoInput, SolicitudUncheckedCreateWithoutInquilinoInput> | SolicitudCreateWithoutInquilinoInput[] | SolicitudUncheckedCreateWithoutInquilinoInput[]
    connectOrCreate?: SolicitudCreateOrConnectWithoutInquilinoInput | SolicitudCreateOrConnectWithoutInquilinoInput[]
    createMany?: SolicitudCreateManyInquilinoInputEnvelope
    connect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
  }

  export type LeaseUncheckedCreateNestedManyWithoutInquilinoInput = {
    create?: XOR<LeaseCreateWithoutInquilinoInput, LeaseUncheckedCreateWithoutInquilinoInput> | LeaseCreateWithoutInquilinoInput[] | LeaseUncheckedCreateWithoutInquilinoInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutInquilinoInput | LeaseCreateOrConnectWithoutInquilinoInput[]
    createMany?: LeaseCreateManyInquilinoInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type AlojamientoUpdateManyWithoutInquilinosNestedInput = {
    create?: XOR<AlojamientoCreateWithoutInquilinosInput, AlojamientoUncheckedCreateWithoutInquilinosInput> | AlojamientoCreateWithoutInquilinosInput[] | AlojamientoUncheckedCreateWithoutInquilinosInput[]
    connectOrCreate?: AlojamientoCreateOrConnectWithoutInquilinosInput | AlojamientoCreateOrConnectWithoutInquilinosInput[]
    upsert?: AlojamientoUpsertWithWhereUniqueWithoutInquilinosInput | AlojamientoUpsertWithWhereUniqueWithoutInquilinosInput[]
    set?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
    disconnect?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
    delete?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
    connect?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
    update?: AlojamientoUpdateWithWhereUniqueWithoutInquilinosInput | AlojamientoUpdateWithWhereUniqueWithoutInquilinosInput[]
    updateMany?: AlojamientoUpdateManyWithWhereWithoutInquilinosInput | AlojamientoUpdateManyWithWhereWithoutInquilinosInput[]
    deleteMany?: AlojamientoScalarWhereInput | AlojamientoScalarWhereInput[]
  }

  export type AlojamientoUpdateManyWithoutFavoritedByNestedInput = {
    create?: XOR<AlojamientoCreateWithoutFavoritedByInput, AlojamientoUncheckedCreateWithoutFavoritedByInput> | AlojamientoCreateWithoutFavoritedByInput[] | AlojamientoUncheckedCreateWithoutFavoritedByInput[]
    connectOrCreate?: AlojamientoCreateOrConnectWithoutFavoritedByInput | AlojamientoCreateOrConnectWithoutFavoritedByInput[]
    upsert?: AlojamientoUpsertWithWhereUniqueWithoutFavoritedByInput | AlojamientoUpsertWithWhereUniqueWithoutFavoritedByInput[]
    set?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
    disconnect?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
    delete?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
    connect?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
    update?: AlojamientoUpdateWithWhereUniqueWithoutFavoritedByInput | AlojamientoUpdateWithWhereUniqueWithoutFavoritedByInput[]
    updateMany?: AlojamientoUpdateManyWithWhereWithoutFavoritedByInput | AlojamientoUpdateManyWithWhereWithoutFavoritedByInput[]
    deleteMany?: AlojamientoScalarWhereInput | AlojamientoScalarWhereInput[]
  }

  export type SolicitudUpdateManyWithoutInquilinoNestedInput = {
    create?: XOR<SolicitudCreateWithoutInquilinoInput, SolicitudUncheckedCreateWithoutInquilinoInput> | SolicitudCreateWithoutInquilinoInput[] | SolicitudUncheckedCreateWithoutInquilinoInput[]
    connectOrCreate?: SolicitudCreateOrConnectWithoutInquilinoInput | SolicitudCreateOrConnectWithoutInquilinoInput[]
    upsert?: SolicitudUpsertWithWhereUniqueWithoutInquilinoInput | SolicitudUpsertWithWhereUniqueWithoutInquilinoInput[]
    createMany?: SolicitudCreateManyInquilinoInputEnvelope
    set?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    disconnect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    delete?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    connect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    update?: SolicitudUpdateWithWhereUniqueWithoutInquilinoInput | SolicitudUpdateWithWhereUniqueWithoutInquilinoInput[]
    updateMany?: SolicitudUpdateManyWithWhereWithoutInquilinoInput | SolicitudUpdateManyWithWhereWithoutInquilinoInput[]
    deleteMany?: SolicitudScalarWhereInput | SolicitudScalarWhereInput[]
  }

  export type LeaseUpdateManyWithoutInquilinoNestedInput = {
    create?: XOR<LeaseCreateWithoutInquilinoInput, LeaseUncheckedCreateWithoutInquilinoInput> | LeaseCreateWithoutInquilinoInput[] | LeaseUncheckedCreateWithoutInquilinoInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutInquilinoInput | LeaseCreateOrConnectWithoutInquilinoInput[]
    upsert?: LeaseUpsertWithWhereUniqueWithoutInquilinoInput | LeaseUpsertWithWhereUniqueWithoutInquilinoInput[]
    createMany?: LeaseCreateManyInquilinoInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?: LeaseUpdateWithWhereUniqueWithoutInquilinoInput | LeaseUpdateWithWhereUniqueWithoutInquilinoInput[]
    updateMany?: LeaseUpdateManyWithWhereWithoutInquilinoInput | LeaseUpdateManyWithWhereWithoutInquilinoInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type AlojamientoUncheckedUpdateManyWithoutInquilinosNestedInput = {
    create?: XOR<AlojamientoCreateWithoutInquilinosInput, AlojamientoUncheckedCreateWithoutInquilinosInput> | AlojamientoCreateWithoutInquilinosInput[] | AlojamientoUncheckedCreateWithoutInquilinosInput[]
    connectOrCreate?: AlojamientoCreateOrConnectWithoutInquilinosInput | AlojamientoCreateOrConnectWithoutInquilinosInput[]
    upsert?: AlojamientoUpsertWithWhereUniqueWithoutInquilinosInput | AlojamientoUpsertWithWhereUniqueWithoutInquilinosInput[]
    set?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
    disconnect?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
    delete?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
    connect?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
    update?: AlojamientoUpdateWithWhereUniqueWithoutInquilinosInput | AlojamientoUpdateWithWhereUniqueWithoutInquilinosInput[]
    updateMany?: AlojamientoUpdateManyWithWhereWithoutInquilinosInput | AlojamientoUpdateManyWithWhereWithoutInquilinosInput[]
    deleteMany?: AlojamientoScalarWhereInput | AlojamientoScalarWhereInput[]
  }

  export type AlojamientoUncheckedUpdateManyWithoutFavoritedByNestedInput = {
    create?: XOR<AlojamientoCreateWithoutFavoritedByInput, AlojamientoUncheckedCreateWithoutFavoritedByInput> | AlojamientoCreateWithoutFavoritedByInput[] | AlojamientoUncheckedCreateWithoutFavoritedByInput[]
    connectOrCreate?: AlojamientoCreateOrConnectWithoutFavoritedByInput | AlojamientoCreateOrConnectWithoutFavoritedByInput[]
    upsert?: AlojamientoUpsertWithWhereUniqueWithoutFavoritedByInput | AlojamientoUpsertWithWhereUniqueWithoutFavoritedByInput[]
    set?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
    disconnect?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
    delete?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
    connect?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
    update?: AlojamientoUpdateWithWhereUniqueWithoutFavoritedByInput | AlojamientoUpdateWithWhereUniqueWithoutFavoritedByInput[]
    updateMany?: AlojamientoUpdateManyWithWhereWithoutFavoritedByInput | AlojamientoUpdateManyWithWhereWithoutFavoritedByInput[]
    deleteMany?: AlojamientoScalarWhereInput | AlojamientoScalarWhereInput[]
  }

  export type SolicitudUncheckedUpdateManyWithoutInquilinoNestedInput = {
    create?: XOR<SolicitudCreateWithoutInquilinoInput, SolicitudUncheckedCreateWithoutInquilinoInput> | SolicitudCreateWithoutInquilinoInput[] | SolicitudUncheckedCreateWithoutInquilinoInput[]
    connectOrCreate?: SolicitudCreateOrConnectWithoutInquilinoInput | SolicitudCreateOrConnectWithoutInquilinoInput[]
    upsert?: SolicitudUpsertWithWhereUniqueWithoutInquilinoInput | SolicitudUpsertWithWhereUniqueWithoutInquilinoInput[]
    createMany?: SolicitudCreateManyInquilinoInputEnvelope
    set?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    disconnect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    delete?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    connect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    update?: SolicitudUpdateWithWhereUniqueWithoutInquilinoInput | SolicitudUpdateWithWhereUniqueWithoutInquilinoInput[]
    updateMany?: SolicitudUpdateManyWithWhereWithoutInquilinoInput | SolicitudUpdateManyWithWhereWithoutInquilinoInput[]
    deleteMany?: SolicitudScalarWhereInput | SolicitudScalarWhereInput[]
  }

  export type LeaseUncheckedUpdateManyWithoutInquilinoNestedInput = {
    create?: XOR<LeaseCreateWithoutInquilinoInput, LeaseUncheckedCreateWithoutInquilinoInput> | LeaseCreateWithoutInquilinoInput[] | LeaseUncheckedCreateWithoutInquilinoInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutInquilinoInput | LeaseCreateOrConnectWithoutInquilinoInput[]
    upsert?: LeaseUpsertWithWhereUniqueWithoutInquilinoInput | LeaseUpsertWithWhereUniqueWithoutInquilinoInput[]
    createMany?: LeaseCreateManyInquilinoInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?: LeaseUpdateWithWhereUniqueWithoutInquilinoInput | LeaseUpdateWithWhereUniqueWithoutInquilinoInput[]
    updateMany?: LeaseUpdateManyWithWhereWithoutInquilinoInput | LeaseUpdateManyWithWhereWithoutInquilinoInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type AlojamientoUpdateManyWithoutLocationNestedInput = {
    create?: XOR<AlojamientoCreateWithoutLocationInput, AlojamientoUncheckedCreateWithoutLocationInput> | AlojamientoCreateWithoutLocationInput[] | AlojamientoUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: AlojamientoCreateOrConnectWithoutLocationInput | AlojamientoCreateOrConnectWithoutLocationInput[]
    upsert?: AlojamientoUpsertWithWhereUniqueWithoutLocationInput | AlojamientoUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: AlojamientoCreateManyLocationInputEnvelope
    set?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
    disconnect?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
    delete?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
    connect?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
    update?: AlojamientoUpdateWithWhereUniqueWithoutLocationInput | AlojamientoUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: AlojamientoUpdateManyWithWhereWithoutLocationInput | AlojamientoUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: AlojamientoScalarWhereInput | AlojamientoScalarWhereInput[]
  }

  export type AlojamientoUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<AlojamientoCreateWithoutLocationInput, AlojamientoUncheckedCreateWithoutLocationInput> | AlojamientoCreateWithoutLocationInput[] | AlojamientoUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: AlojamientoCreateOrConnectWithoutLocationInput | AlojamientoCreateOrConnectWithoutLocationInput[]
    upsert?: AlojamientoUpsertWithWhereUniqueWithoutLocationInput | AlojamientoUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: AlojamientoCreateManyLocationInputEnvelope
    set?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
    disconnect?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
    delete?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
    connect?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
    update?: AlojamientoUpdateWithWhereUniqueWithoutLocationInput | AlojamientoUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: AlojamientoUpdateManyWithWhereWithoutLocationInput | AlojamientoUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: AlojamientoScalarWhereInput | AlojamientoScalarWhereInput[]
  }

  export type AlojamientoCreateNestedOneWithoutSolicitudesInput = {
    create?: XOR<AlojamientoCreateWithoutSolicitudesInput, AlojamientoUncheckedCreateWithoutSolicitudesInput>
    connectOrCreate?: AlojamientoCreateOrConnectWithoutSolicitudesInput
    connect?: AlojamientoWhereUniqueInput
  }

  export type InquilinoCreateNestedOneWithoutSolicitudesInput = {
    create?: XOR<InquilinoCreateWithoutSolicitudesInput, InquilinoUncheckedCreateWithoutSolicitudesInput>
    connectOrCreate?: InquilinoCreateOrConnectWithoutSolicitudesInput
    connect?: InquilinoWhereUniqueInput
  }

  export type LeaseCreateNestedOneWithoutSolicitudInput = {
    create?: XOR<LeaseCreateWithoutSolicitudInput, LeaseUncheckedCreateWithoutSolicitudInput>
    connectOrCreate?: LeaseCreateOrConnectWithoutSolicitudInput
    connect?: LeaseWhereUniqueInput
  }

  export type EnumEstadoSolicitudFieldUpdateOperationsInput = {
    set?: $Enums.EstadoSolicitud
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AlojamientoUpdateOneRequiredWithoutSolicitudesNestedInput = {
    create?: XOR<AlojamientoCreateWithoutSolicitudesInput, AlojamientoUncheckedCreateWithoutSolicitudesInput>
    connectOrCreate?: AlojamientoCreateOrConnectWithoutSolicitudesInput
    upsert?: AlojamientoUpsertWithoutSolicitudesInput
    connect?: AlojamientoWhereUniqueInput
    update?: XOR<XOR<AlojamientoUpdateToOneWithWhereWithoutSolicitudesInput, AlojamientoUpdateWithoutSolicitudesInput>, AlojamientoUncheckedUpdateWithoutSolicitudesInput>
  }

  export type InquilinoUpdateOneRequiredWithoutSolicitudesNestedInput = {
    create?: XOR<InquilinoCreateWithoutSolicitudesInput, InquilinoUncheckedCreateWithoutSolicitudesInput>
    connectOrCreate?: InquilinoCreateOrConnectWithoutSolicitudesInput
    upsert?: InquilinoUpsertWithoutSolicitudesInput
    connect?: InquilinoWhereUniqueInput
    update?: XOR<XOR<InquilinoUpdateToOneWithWhereWithoutSolicitudesInput, InquilinoUpdateWithoutSolicitudesInput>, InquilinoUncheckedUpdateWithoutSolicitudesInput>
  }

  export type LeaseUpdateOneWithoutSolicitudNestedInput = {
    create?: XOR<LeaseCreateWithoutSolicitudInput, LeaseUncheckedCreateWithoutSolicitudInput>
    connectOrCreate?: LeaseCreateOrConnectWithoutSolicitudInput
    upsert?: LeaseUpsertWithoutSolicitudInput
    disconnect?: LeaseWhereInput | boolean
    delete?: LeaseWhereInput | boolean
    connect?: LeaseWhereUniqueInput
    update?: XOR<XOR<LeaseUpdateToOneWithWhereWithoutSolicitudInput, LeaseUpdateWithoutSolicitudInput>, LeaseUncheckedUpdateWithoutSolicitudInput>
  }

  export type AlojamientoCreateNestedOneWithoutLeasesInput = {
    create?: XOR<AlojamientoCreateWithoutLeasesInput, AlojamientoUncheckedCreateWithoutLeasesInput>
    connectOrCreate?: AlojamientoCreateOrConnectWithoutLeasesInput
    connect?: AlojamientoWhereUniqueInput
  }

  export type InquilinoCreateNestedOneWithoutLeasesInput = {
    create?: XOR<InquilinoCreateWithoutLeasesInput, InquilinoUncheckedCreateWithoutLeasesInput>
    connectOrCreate?: InquilinoCreateOrConnectWithoutLeasesInput
    connect?: InquilinoWhereUniqueInput
  }

  export type SolicitudCreateNestedOneWithoutLeaseInput = {
    create?: XOR<SolicitudCreateWithoutLeaseInput, SolicitudUncheckedCreateWithoutLeaseInput>
    connectOrCreate?: SolicitudCreateOrConnectWithoutLeaseInput
    connect?: SolicitudWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutLeaseInput = {
    create?: XOR<PaymentCreateWithoutLeaseInput, PaymentUncheckedCreateWithoutLeaseInput> | PaymentCreateWithoutLeaseInput[] | PaymentUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutLeaseInput | PaymentCreateOrConnectWithoutLeaseInput[]
    createMany?: PaymentCreateManyLeaseInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type SolicitudUncheckedCreateNestedOneWithoutLeaseInput = {
    create?: XOR<SolicitudCreateWithoutLeaseInput, SolicitudUncheckedCreateWithoutLeaseInput>
    connectOrCreate?: SolicitudCreateOrConnectWithoutLeaseInput
    connect?: SolicitudWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedManyWithoutLeaseInput = {
    create?: XOR<PaymentCreateWithoutLeaseInput, PaymentUncheckedCreateWithoutLeaseInput> | PaymentCreateWithoutLeaseInput[] | PaymentUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutLeaseInput | PaymentCreateOrConnectWithoutLeaseInput[]
    createMany?: PaymentCreateManyLeaseInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type AlojamientoUpdateOneRequiredWithoutLeasesNestedInput = {
    create?: XOR<AlojamientoCreateWithoutLeasesInput, AlojamientoUncheckedCreateWithoutLeasesInput>
    connectOrCreate?: AlojamientoCreateOrConnectWithoutLeasesInput
    upsert?: AlojamientoUpsertWithoutLeasesInput
    connect?: AlojamientoWhereUniqueInput
    update?: XOR<XOR<AlojamientoUpdateToOneWithWhereWithoutLeasesInput, AlojamientoUpdateWithoutLeasesInput>, AlojamientoUncheckedUpdateWithoutLeasesInput>
  }

  export type InquilinoUpdateOneRequiredWithoutLeasesNestedInput = {
    create?: XOR<InquilinoCreateWithoutLeasesInput, InquilinoUncheckedCreateWithoutLeasesInput>
    connectOrCreate?: InquilinoCreateOrConnectWithoutLeasesInput
    upsert?: InquilinoUpsertWithoutLeasesInput
    connect?: InquilinoWhereUniqueInput
    update?: XOR<XOR<InquilinoUpdateToOneWithWhereWithoutLeasesInput, InquilinoUpdateWithoutLeasesInput>, InquilinoUncheckedUpdateWithoutLeasesInput>
  }

  export type SolicitudUpdateOneWithoutLeaseNestedInput = {
    create?: XOR<SolicitudCreateWithoutLeaseInput, SolicitudUncheckedCreateWithoutLeaseInput>
    connectOrCreate?: SolicitudCreateOrConnectWithoutLeaseInput
    upsert?: SolicitudUpsertWithoutLeaseInput
    disconnect?: SolicitudWhereInput | boolean
    delete?: SolicitudWhereInput | boolean
    connect?: SolicitudWhereUniqueInput
    update?: XOR<XOR<SolicitudUpdateToOneWithWhereWithoutLeaseInput, SolicitudUpdateWithoutLeaseInput>, SolicitudUncheckedUpdateWithoutLeaseInput>
  }

  export type PaymentUpdateManyWithoutLeaseNestedInput = {
    create?: XOR<PaymentCreateWithoutLeaseInput, PaymentUncheckedCreateWithoutLeaseInput> | PaymentCreateWithoutLeaseInput[] | PaymentUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutLeaseInput | PaymentCreateOrConnectWithoutLeaseInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutLeaseInput | PaymentUpsertWithWhereUniqueWithoutLeaseInput[]
    createMany?: PaymentCreateManyLeaseInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutLeaseInput | PaymentUpdateWithWhereUniqueWithoutLeaseInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutLeaseInput | PaymentUpdateManyWithWhereWithoutLeaseInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type SolicitudUncheckedUpdateOneWithoutLeaseNestedInput = {
    create?: XOR<SolicitudCreateWithoutLeaseInput, SolicitudUncheckedCreateWithoutLeaseInput>
    connectOrCreate?: SolicitudCreateOrConnectWithoutLeaseInput
    upsert?: SolicitudUpsertWithoutLeaseInput
    disconnect?: SolicitudWhereInput | boolean
    delete?: SolicitudWhereInput | boolean
    connect?: SolicitudWhereUniqueInput
    update?: XOR<XOR<SolicitudUpdateToOneWithWhereWithoutLeaseInput, SolicitudUpdateWithoutLeaseInput>, SolicitudUncheckedUpdateWithoutLeaseInput>
  }

  export type PaymentUncheckedUpdateManyWithoutLeaseNestedInput = {
    create?: XOR<PaymentCreateWithoutLeaseInput, PaymentUncheckedCreateWithoutLeaseInput> | PaymentCreateWithoutLeaseInput[] | PaymentUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutLeaseInput | PaymentCreateOrConnectWithoutLeaseInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutLeaseInput | PaymentUpsertWithWhereUniqueWithoutLeaseInput[]
    createMany?: PaymentCreateManyLeaseInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutLeaseInput | PaymentUpdateWithWhereUniqueWithoutLeaseInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutLeaseInput | PaymentUpdateManyWithWhereWithoutLeaseInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type LeaseCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<LeaseCreateWithoutPaymentsInput, LeaseUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: LeaseCreateOrConnectWithoutPaymentsInput
    connect?: LeaseWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type LeaseUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<LeaseCreateWithoutPaymentsInput, LeaseUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: LeaseCreateOrConnectWithoutPaymentsInput
    upsert?: LeaseUpsertWithoutPaymentsInput
    connect?: LeaseWhereUniqueInput
    update?: XOR<XOR<LeaseUpdateToOneWithWhereWithoutPaymentsInput, LeaseUpdateWithoutPaymentsInput>, LeaseUncheckedUpdateWithoutPaymentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumTipoAlojamientoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAlojamiento | EnumTipoAlojamientoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAlojamiento[] | ListEnumTipoAlojamientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoAlojamiento[] | ListEnumTipoAlojamientoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoAlojamientoFilter<$PrismaModel> | $Enums.TipoAlojamiento
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumTipoAlojamientoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAlojamiento | EnumTipoAlojamientoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAlojamiento[] | ListEnumTipoAlojamientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoAlojamiento[] | ListEnumTipoAlojamientoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoAlojamientoWithAggregatesFilter<$PrismaModel> | $Enums.TipoAlojamiento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoAlojamientoFilter<$PrismaModel>
    _max?: NestedEnumTipoAlojamientoFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumEstadoSolicitudFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoSolicitud | EnumEstadoSolicitudFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoSolicitud[] | ListEnumEstadoSolicitudFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoSolicitud[] | ListEnumEstadoSolicitudFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoSolicitudFilter<$PrismaModel> | $Enums.EstadoSolicitud
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumEstadoSolicitudWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoSolicitud | EnumEstadoSolicitudFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoSolicitud[] | ListEnumEstadoSolicitudFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoSolicitud[] | ListEnumEstadoSolicitudFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoSolicitudWithAggregatesFilter<$PrismaModel> | $Enums.EstadoSolicitud
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoSolicitudFilter<$PrismaModel>
    _max?: NestedEnumEstadoSolicitudFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type PropietarioCreateWithoutManagedPropertiesInput = {
    cognitoId: string
    nombre: string
    email: string
    telefono: string
  }

  export type PropietarioUncheckedCreateWithoutManagedPropertiesInput = {
    id?: number
    cognitoId: string
    nombre: string
    email: string
    telefono: string
  }

  export type PropietarioCreateOrConnectWithoutManagedPropertiesInput = {
    where: PropietarioWhereUniqueInput
    create: XOR<PropietarioCreateWithoutManagedPropertiesInput, PropietarioUncheckedCreateWithoutManagedPropertiesInput>
  }

  export type LeaseCreateWithoutAlojamientoInput = {
    startDate: Date | string
    endDate: Date | string
    rent: number
    deposit: number
    inquilino: InquilinoCreateNestedOneWithoutLeasesInput
    solicitud?: SolicitudCreateNestedOneWithoutLeaseInput
    payments?: PaymentCreateNestedManyWithoutLeaseInput
  }

  export type LeaseUncheckedCreateWithoutAlojamientoInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    rent: number
    deposit: number
    tenantCognitoId: string
    solicitud?: SolicitudUncheckedCreateNestedOneWithoutLeaseInput
    payments?: PaymentUncheckedCreateNestedManyWithoutLeaseInput
  }

  export type LeaseCreateOrConnectWithoutAlojamientoInput = {
    where: LeaseWhereUniqueInput
    create: XOR<LeaseCreateWithoutAlojamientoInput, LeaseUncheckedCreateWithoutAlojamientoInput>
  }

  export type LeaseCreateManyAlojamientoInputEnvelope = {
    data: LeaseCreateManyAlojamientoInput | LeaseCreateManyAlojamientoInput[]
    skipDuplicates?: boolean
  }

  export type SolicitudCreateWithoutAlojamientoInput = {
    applicationDate: Date | string
    estado: $Enums.EstadoSolicitud
    nombre: string
    email: string
    telefono: string
    mensaje?: string | null
    inquilino: InquilinoCreateNestedOneWithoutSolicitudesInput
    lease?: LeaseCreateNestedOneWithoutSolicitudInput
  }

  export type SolicitudUncheckedCreateWithoutAlojamientoInput = {
    id?: number
    applicationDate: Date | string
    estado: $Enums.EstadoSolicitud
    tenantCognitoId: string
    nombre: string
    email: string
    telefono: string
    mensaje?: string | null
    leaseId?: number | null
  }

  export type SolicitudCreateOrConnectWithoutAlojamientoInput = {
    where: SolicitudWhereUniqueInput
    create: XOR<SolicitudCreateWithoutAlojamientoInput, SolicitudUncheckedCreateWithoutAlojamientoInput>
  }

  export type SolicitudCreateManyAlojamientoInputEnvelope = {
    data: SolicitudCreateManyAlojamientoInput | SolicitudCreateManyAlojamientoInput[]
    skipDuplicates?: boolean
  }

  export type InquilinoCreateWithoutFavoritosInput = {
    cognitoId: string
    nombre: string
    email: string
    telefono: string
    alojamientos?: AlojamientoCreateNestedManyWithoutInquilinosInput
    solicitudes?: SolicitudCreateNestedManyWithoutInquilinoInput
    leases?: LeaseCreateNestedManyWithoutInquilinoInput
  }

  export type InquilinoUncheckedCreateWithoutFavoritosInput = {
    id?: number
    cognitoId: string
    nombre: string
    email: string
    telefono: string
    alojamientos?: AlojamientoUncheckedCreateNestedManyWithoutInquilinosInput
    solicitudes?: SolicitudUncheckedCreateNestedManyWithoutInquilinoInput
    leases?: LeaseUncheckedCreateNestedManyWithoutInquilinoInput
  }

  export type InquilinoCreateOrConnectWithoutFavoritosInput = {
    where: InquilinoWhereUniqueInput
    create: XOR<InquilinoCreateWithoutFavoritosInput, InquilinoUncheckedCreateWithoutFavoritosInput>
  }

  export type InquilinoCreateWithoutAlojamientosInput = {
    cognitoId: string
    nombre: string
    email: string
    telefono: string
    favoritos?: AlojamientoCreateNestedManyWithoutFavoritedByInput
    solicitudes?: SolicitudCreateNestedManyWithoutInquilinoInput
    leases?: LeaseCreateNestedManyWithoutInquilinoInput
  }

  export type InquilinoUncheckedCreateWithoutAlojamientosInput = {
    id?: number
    cognitoId: string
    nombre: string
    email: string
    telefono: string
    favoritos?: AlojamientoUncheckedCreateNestedManyWithoutFavoritedByInput
    solicitudes?: SolicitudUncheckedCreateNestedManyWithoutInquilinoInput
    leases?: LeaseUncheckedCreateNestedManyWithoutInquilinoInput
  }

  export type InquilinoCreateOrConnectWithoutAlojamientosInput = {
    where: InquilinoWhereUniqueInput
    create: XOR<InquilinoCreateWithoutAlojamientosInput, InquilinoUncheckedCreateWithoutAlojamientosInput>
  }

  export type LocationUpdateToOneWithWhereWithoutAlojamientosInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutAlojamientosInput, LocationUncheckedUpdateWithoutAlojamientosInput>
  }

  export type LocationUpdateWithoutAlojamientosInput = {
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type LocationUncheckedUpdateWithoutAlojamientosInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type PropietarioUpsertWithoutManagedPropertiesInput = {
    update: XOR<PropietarioUpdateWithoutManagedPropertiesInput, PropietarioUncheckedUpdateWithoutManagedPropertiesInput>
    create: XOR<PropietarioCreateWithoutManagedPropertiesInput, PropietarioUncheckedCreateWithoutManagedPropertiesInput>
    where?: PropietarioWhereInput
  }

  export type PropietarioUpdateToOneWithWhereWithoutManagedPropertiesInput = {
    where?: PropietarioWhereInput
    data: XOR<PropietarioUpdateWithoutManagedPropertiesInput, PropietarioUncheckedUpdateWithoutManagedPropertiesInput>
  }

  export type PropietarioUpdateWithoutManagedPropertiesInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
  }

  export type PropietarioUncheckedUpdateWithoutManagedPropertiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
  }

  export type LeaseUpsertWithWhereUniqueWithoutAlojamientoInput = {
    where: LeaseWhereUniqueInput
    update: XOR<LeaseUpdateWithoutAlojamientoInput, LeaseUncheckedUpdateWithoutAlojamientoInput>
    create: XOR<LeaseCreateWithoutAlojamientoInput, LeaseUncheckedCreateWithoutAlojamientoInput>
  }

  export type LeaseUpdateWithWhereUniqueWithoutAlojamientoInput = {
    where: LeaseWhereUniqueInput
    data: XOR<LeaseUpdateWithoutAlojamientoInput, LeaseUncheckedUpdateWithoutAlojamientoInput>
  }

  export type LeaseUpdateManyWithWhereWithoutAlojamientoInput = {
    where: LeaseScalarWhereInput
    data: XOR<LeaseUpdateManyMutationInput, LeaseUncheckedUpdateManyWithoutAlojamientoInput>
  }

  export type LeaseScalarWhereInput = {
    AND?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
    OR?: LeaseScalarWhereInput[]
    NOT?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
    id?: IntFilter<"Lease"> | number
    startDate?: DateTimeFilter<"Lease"> | Date | string
    endDate?: DateTimeFilter<"Lease"> | Date | string
    rent?: FloatFilter<"Lease"> | number
    deposit?: FloatFilter<"Lease"> | number
    alojamientoId?: IntFilter<"Lease"> | number
    tenantCognitoId?: StringFilter<"Lease"> | string
  }

  export type SolicitudUpsertWithWhereUniqueWithoutAlojamientoInput = {
    where: SolicitudWhereUniqueInput
    update: XOR<SolicitudUpdateWithoutAlojamientoInput, SolicitudUncheckedUpdateWithoutAlojamientoInput>
    create: XOR<SolicitudCreateWithoutAlojamientoInput, SolicitudUncheckedCreateWithoutAlojamientoInput>
  }

  export type SolicitudUpdateWithWhereUniqueWithoutAlojamientoInput = {
    where: SolicitudWhereUniqueInput
    data: XOR<SolicitudUpdateWithoutAlojamientoInput, SolicitudUncheckedUpdateWithoutAlojamientoInput>
  }

  export type SolicitudUpdateManyWithWhereWithoutAlojamientoInput = {
    where: SolicitudScalarWhereInput
    data: XOR<SolicitudUpdateManyMutationInput, SolicitudUncheckedUpdateManyWithoutAlojamientoInput>
  }

  export type SolicitudScalarWhereInput = {
    AND?: SolicitudScalarWhereInput | SolicitudScalarWhereInput[]
    OR?: SolicitudScalarWhereInput[]
    NOT?: SolicitudScalarWhereInput | SolicitudScalarWhereInput[]
    id?: IntFilter<"Solicitud"> | number
    applicationDate?: DateTimeFilter<"Solicitud"> | Date | string
    estado?: EnumEstadoSolicitudFilter<"Solicitud"> | $Enums.EstadoSolicitud
    alojamientoId?: IntFilter<"Solicitud"> | number
    tenantCognitoId?: StringFilter<"Solicitud"> | string
    nombre?: StringFilter<"Solicitud"> | string
    email?: StringFilter<"Solicitud"> | string
    telefono?: StringFilter<"Solicitud"> | string
    mensaje?: StringNullableFilter<"Solicitud"> | string | null
    leaseId?: IntNullableFilter<"Solicitud"> | number | null
  }

  export type InquilinoUpsertWithWhereUniqueWithoutFavoritosInput = {
    where: InquilinoWhereUniqueInput
    update: XOR<InquilinoUpdateWithoutFavoritosInput, InquilinoUncheckedUpdateWithoutFavoritosInput>
    create: XOR<InquilinoCreateWithoutFavoritosInput, InquilinoUncheckedCreateWithoutFavoritosInput>
  }

  export type InquilinoUpdateWithWhereUniqueWithoutFavoritosInput = {
    where: InquilinoWhereUniqueInput
    data: XOR<InquilinoUpdateWithoutFavoritosInput, InquilinoUncheckedUpdateWithoutFavoritosInput>
  }

  export type InquilinoUpdateManyWithWhereWithoutFavoritosInput = {
    where: InquilinoScalarWhereInput
    data: XOR<InquilinoUpdateManyMutationInput, InquilinoUncheckedUpdateManyWithoutFavoritosInput>
  }

  export type InquilinoScalarWhereInput = {
    AND?: InquilinoScalarWhereInput | InquilinoScalarWhereInput[]
    OR?: InquilinoScalarWhereInput[]
    NOT?: InquilinoScalarWhereInput | InquilinoScalarWhereInput[]
    id?: IntFilter<"Inquilino"> | number
    cognitoId?: StringFilter<"Inquilino"> | string
    nombre?: StringFilter<"Inquilino"> | string
    email?: StringFilter<"Inquilino"> | string
    telefono?: StringFilter<"Inquilino"> | string
  }

  export type InquilinoUpsertWithWhereUniqueWithoutAlojamientosInput = {
    where: InquilinoWhereUniqueInput
    update: XOR<InquilinoUpdateWithoutAlojamientosInput, InquilinoUncheckedUpdateWithoutAlojamientosInput>
    create: XOR<InquilinoCreateWithoutAlojamientosInput, InquilinoUncheckedCreateWithoutAlojamientosInput>
  }

  export type InquilinoUpdateWithWhereUniqueWithoutAlojamientosInput = {
    where: InquilinoWhereUniqueInput
    data: XOR<InquilinoUpdateWithoutAlojamientosInput, InquilinoUncheckedUpdateWithoutAlojamientosInput>
  }

  export type InquilinoUpdateManyWithWhereWithoutAlojamientosInput = {
    where: InquilinoScalarWhereInput
    data: XOR<InquilinoUpdateManyMutationInput, InquilinoUncheckedUpdateManyWithoutAlojamientosInput>
  }

  export type AlojamientoCreateWithoutPropietarioInput = {
    nombre: string
    descripcion: string
    precio: number
    habitaciones: number
    banos: number
    superficie: number
    plazasLibres: number
    tipoAlojamiento: $Enums.TipoAlojamiento
    hayTelevision?: boolean
    hayTelefono?: boolean
    hayInternet?: boolean
    hayTerraza?: boolean
    hayAscensor?: boolean
    hayGaraje?: boolean
    hayLavavajillas?: boolean
    hayHorno?: boolean
    hayMicroondas?: boolean
    hayNevera?: boolean
    hayLavadora?: boolean
    haySecadora?: boolean
    hayPortero?: boolean
    hayMuebles?: boolean
    hayCalefaccion?: boolean
    hayAireAcondicionado?: boolean
    hayGas?: boolean
    hayPiscina?: boolean
    hayZonaComunitaria?: boolean
    hayGimnasio?: boolean
    aguaIncluido?: boolean
    gasIncluido?: boolean
    electricidadIncluido?: boolean
    internetIncluido?: boolean
    photoUrls?: AlojamientoCreatephotoUrlsInput | string[]
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    location: LocationCreateNestedOneWithoutAlojamientosInput
    leases?: LeaseCreateNestedManyWithoutAlojamientoInput
    solicitudes?: SolicitudCreateNestedManyWithoutAlojamientoInput
    favoritedBy?: InquilinoCreateNestedManyWithoutFavoritosInput
    inquilinos?: InquilinoCreateNestedManyWithoutAlojamientosInput
  }

  export type AlojamientoUncheckedCreateWithoutPropietarioInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    habitaciones: number
    banos: number
    superficie: number
    plazasLibres: number
    tipoAlojamiento: $Enums.TipoAlojamiento
    hayTelevision?: boolean
    hayTelefono?: boolean
    hayInternet?: boolean
    hayTerraza?: boolean
    hayAscensor?: boolean
    hayGaraje?: boolean
    hayLavavajillas?: boolean
    hayHorno?: boolean
    hayMicroondas?: boolean
    hayNevera?: boolean
    hayLavadora?: boolean
    haySecadora?: boolean
    hayPortero?: boolean
    hayMuebles?: boolean
    hayCalefaccion?: boolean
    hayAireAcondicionado?: boolean
    hayGas?: boolean
    hayPiscina?: boolean
    hayZonaComunitaria?: boolean
    hayGimnasio?: boolean
    aguaIncluido?: boolean
    gasIncluido?: boolean
    electricidadIncluido?: boolean
    internetIncluido?: boolean
    photoUrls?: AlojamientoCreatephotoUrlsInput | string[]
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    locationId: number
    leases?: LeaseUncheckedCreateNestedManyWithoutAlojamientoInput
    solicitudes?: SolicitudUncheckedCreateNestedManyWithoutAlojamientoInput
    favoritedBy?: InquilinoUncheckedCreateNestedManyWithoutFavoritosInput
    inquilinos?: InquilinoUncheckedCreateNestedManyWithoutAlojamientosInput
  }

  export type AlojamientoCreateOrConnectWithoutPropietarioInput = {
    where: AlojamientoWhereUniqueInput
    create: XOR<AlojamientoCreateWithoutPropietarioInput, AlojamientoUncheckedCreateWithoutPropietarioInput>
  }

  export type AlojamientoCreateManyPropietarioInputEnvelope = {
    data: AlojamientoCreateManyPropietarioInput | AlojamientoCreateManyPropietarioInput[]
    skipDuplicates?: boolean
  }

  export type AlojamientoUpsertWithWhereUniqueWithoutPropietarioInput = {
    where: AlojamientoWhereUniqueInput
    update: XOR<AlojamientoUpdateWithoutPropietarioInput, AlojamientoUncheckedUpdateWithoutPropietarioInput>
    create: XOR<AlojamientoCreateWithoutPropietarioInput, AlojamientoUncheckedCreateWithoutPropietarioInput>
  }

  export type AlojamientoUpdateWithWhereUniqueWithoutPropietarioInput = {
    where: AlojamientoWhereUniqueInput
    data: XOR<AlojamientoUpdateWithoutPropietarioInput, AlojamientoUncheckedUpdateWithoutPropietarioInput>
  }

  export type AlojamientoUpdateManyWithWhereWithoutPropietarioInput = {
    where: AlojamientoScalarWhereInput
    data: XOR<AlojamientoUpdateManyMutationInput, AlojamientoUncheckedUpdateManyWithoutPropietarioInput>
  }

  export type AlojamientoScalarWhereInput = {
    AND?: AlojamientoScalarWhereInput | AlojamientoScalarWhereInput[]
    OR?: AlojamientoScalarWhereInput[]
    NOT?: AlojamientoScalarWhereInput | AlojamientoScalarWhereInput[]
    id?: IntFilter<"Alojamiento"> | number
    nombre?: StringFilter<"Alojamiento"> | string
    descripcion?: StringFilter<"Alojamiento"> | string
    precio?: FloatFilter<"Alojamiento"> | number
    habitaciones?: IntFilter<"Alojamiento"> | number
    banos?: FloatFilter<"Alojamiento"> | number
    superficie?: IntFilter<"Alojamiento"> | number
    plazasLibres?: IntFilter<"Alojamiento"> | number
    tipoAlojamiento?: EnumTipoAlojamientoFilter<"Alojamiento"> | $Enums.TipoAlojamiento
    hayTelevision?: BoolFilter<"Alojamiento"> | boolean
    hayTelefono?: BoolFilter<"Alojamiento"> | boolean
    hayInternet?: BoolFilter<"Alojamiento"> | boolean
    hayTerraza?: BoolFilter<"Alojamiento"> | boolean
    hayAscensor?: BoolFilter<"Alojamiento"> | boolean
    hayGaraje?: BoolFilter<"Alojamiento"> | boolean
    hayLavavajillas?: BoolFilter<"Alojamiento"> | boolean
    hayHorno?: BoolFilter<"Alojamiento"> | boolean
    hayMicroondas?: BoolFilter<"Alojamiento"> | boolean
    hayNevera?: BoolFilter<"Alojamiento"> | boolean
    hayLavadora?: BoolFilter<"Alojamiento"> | boolean
    haySecadora?: BoolFilter<"Alojamiento"> | boolean
    hayPortero?: BoolFilter<"Alojamiento"> | boolean
    hayMuebles?: BoolFilter<"Alojamiento"> | boolean
    hayCalefaccion?: BoolFilter<"Alojamiento"> | boolean
    hayAireAcondicionado?: BoolFilter<"Alojamiento"> | boolean
    hayGas?: BoolFilter<"Alojamiento"> | boolean
    hayPiscina?: BoolFilter<"Alojamiento"> | boolean
    hayZonaComunitaria?: BoolFilter<"Alojamiento"> | boolean
    hayGimnasio?: BoolFilter<"Alojamiento"> | boolean
    aguaIncluido?: BoolFilter<"Alojamiento"> | boolean
    gasIncluido?: BoolFilter<"Alojamiento"> | boolean
    electricidadIncluido?: BoolFilter<"Alojamiento"> | boolean
    internetIncluido?: BoolFilter<"Alojamiento"> | boolean
    photoUrls?: StringNullableListFilter<"Alojamiento">
    postedDate?: DateTimeFilter<"Alojamiento"> | Date | string
    averageRating?: FloatNullableFilter<"Alojamiento"> | number | null
    numberOfReviews?: IntNullableFilter<"Alojamiento"> | number | null
    locationId?: IntFilter<"Alojamiento"> | number
    managerCognitoId?: StringFilter<"Alojamiento"> | string
  }

  export type AlojamientoCreateWithoutInquilinosInput = {
    nombre: string
    descripcion: string
    precio: number
    habitaciones: number
    banos: number
    superficie: number
    plazasLibres: number
    tipoAlojamiento: $Enums.TipoAlojamiento
    hayTelevision?: boolean
    hayTelefono?: boolean
    hayInternet?: boolean
    hayTerraza?: boolean
    hayAscensor?: boolean
    hayGaraje?: boolean
    hayLavavajillas?: boolean
    hayHorno?: boolean
    hayMicroondas?: boolean
    hayNevera?: boolean
    hayLavadora?: boolean
    haySecadora?: boolean
    hayPortero?: boolean
    hayMuebles?: boolean
    hayCalefaccion?: boolean
    hayAireAcondicionado?: boolean
    hayGas?: boolean
    hayPiscina?: boolean
    hayZonaComunitaria?: boolean
    hayGimnasio?: boolean
    aguaIncluido?: boolean
    gasIncluido?: boolean
    electricidadIncluido?: boolean
    internetIncluido?: boolean
    photoUrls?: AlojamientoCreatephotoUrlsInput | string[]
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    location: LocationCreateNestedOneWithoutAlojamientosInput
    propietario: PropietarioCreateNestedOneWithoutManagedPropertiesInput
    leases?: LeaseCreateNestedManyWithoutAlojamientoInput
    solicitudes?: SolicitudCreateNestedManyWithoutAlojamientoInput
    favoritedBy?: InquilinoCreateNestedManyWithoutFavoritosInput
  }

  export type AlojamientoUncheckedCreateWithoutInquilinosInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    habitaciones: number
    banos: number
    superficie: number
    plazasLibres: number
    tipoAlojamiento: $Enums.TipoAlojamiento
    hayTelevision?: boolean
    hayTelefono?: boolean
    hayInternet?: boolean
    hayTerraza?: boolean
    hayAscensor?: boolean
    hayGaraje?: boolean
    hayLavavajillas?: boolean
    hayHorno?: boolean
    hayMicroondas?: boolean
    hayNevera?: boolean
    hayLavadora?: boolean
    haySecadora?: boolean
    hayPortero?: boolean
    hayMuebles?: boolean
    hayCalefaccion?: boolean
    hayAireAcondicionado?: boolean
    hayGas?: boolean
    hayPiscina?: boolean
    hayZonaComunitaria?: boolean
    hayGimnasio?: boolean
    aguaIncluido?: boolean
    gasIncluido?: boolean
    electricidadIncluido?: boolean
    internetIncluido?: boolean
    photoUrls?: AlojamientoCreatephotoUrlsInput | string[]
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    locationId: number
    managerCognitoId: string
    leases?: LeaseUncheckedCreateNestedManyWithoutAlojamientoInput
    solicitudes?: SolicitudUncheckedCreateNestedManyWithoutAlojamientoInput
    favoritedBy?: InquilinoUncheckedCreateNestedManyWithoutFavoritosInput
  }

  export type AlojamientoCreateOrConnectWithoutInquilinosInput = {
    where: AlojamientoWhereUniqueInput
    create: XOR<AlojamientoCreateWithoutInquilinosInput, AlojamientoUncheckedCreateWithoutInquilinosInput>
  }

  export type AlojamientoCreateWithoutFavoritedByInput = {
    nombre: string
    descripcion: string
    precio: number
    habitaciones: number
    banos: number
    superficie: number
    plazasLibres: number
    tipoAlojamiento: $Enums.TipoAlojamiento
    hayTelevision?: boolean
    hayTelefono?: boolean
    hayInternet?: boolean
    hayTerraza?: boolean
    hayAscensor?: boolean
    hayGaraje?: boolean
    hayLavavajillas?: boolean
    hayHorno?: boolean
    hayMicroondas?: boolean
    hayNevera?: boolean
    hayLavadora?: boolean
    haySecadora?: boolean
    hayPortero?: boolean
    hayMuebles?: boolean
    hayCalefaccion?: boolean
    hayAireAcondicionado?: boolean
    hayGas?: boolean
    hayPiscina?: boolean
    hayZonaComunitaria?: boolean
    hayGimnasio?: boolean
    aguaIncluido?: boolean
    gasIncluido?: boolean
    electricidadIncluido?: boolean
    internetIncluido?: boolean
    photoUrls?: AlojamientoCreatephotoUrlsInput | string[]
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    location: LocationCreateNestedOneWithoutAlojamientosInput
    propietario: PropietarioCreateNestedOneWithoutManagedPropertiesInput
    leases?: LeaseCreateNestedManyWithoutAlojamientoInput
    solicitudes?: SolicitudCreateNestedManyWithoutAlojamientoInput
    inquilinos?: InquilinoCreateNestedManyWithoutAlojamientosInput
  }

  export type AlojamientoUncheckedCreateWithoutFavoritedByInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    habitaciones: number
    banos: number
    superficie: number
    plazasLibres: number
    tipoAlojamiento: $Enums.TipoAlojamiento
    hayTelevision?: boolean
    hayTelefono?: boolean
    hayInternet?: boolean
    hayTerraza?: boolean
    hayAscensor?: boolean
    hayGaraje?: boolean
    hayLavavajillas?: boolean
    hayHorno?: boolean
    hayMicroondas?: boolean
    hayNevera?: boolean
    hayLavadora?: boolean
    haySecadora?: boolean
    hayPortero?: boolean
    hayMuebles?: boolean
    hayCalefaccion?: boolean
    hayAireAcondicionado?: boolean
    hayGas?: boolean
    hayPiscina?: boolean
    hayZonaComunitaria?: boolean
    hayGimnasio?: boolean
    aguaIncluido?: boolean
    gasIncluido?: boolean
    electricidadIncluido?: boolean
    internetIncluido?: boolean
    photoUrls?: AlojamientoCreatephotoUrlsInput | string[]
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    locationId: number
    managerCognitoId: string
    leases?: LeaseUncheckedCreateNestedManyWithoutAlojamientoInput
    solicitudes?: SolicitudUncheckedCreateNestedManyWithoutAlojamientoInput
    inquilinos?: InquilinoUncheckedCreateNestedManyWithoutAlojamientosInput
  }

  export type AlojamientoCreateOrConnectWithoutFavoritedByInput = {
    where: AlojamientoWhereUniqueInput
    create: XOR<AlojamientoCreateWithoutFavoritedByInput, AlojamientoUncheckedCreateWithoutFavoritedByInput>
  }

  export type SolicitudCreateWithoutInquilinoInput = {
    applicationDate: Date | string
    estado: $Enums.EstadoSolicitud
    nombre: string
    email: string
    telefono: string
    mensaje?: string | null
    alojamiento: AlojamientoCreateNestedOneWithoutSolicitudesInput
    lease?: LeaseCreateNestedOneWithoutSolicitudInput
  }

  export type SolicitudUncheckedCreateWithoutInquilinoInput = {
    id?: number
    applicationDate: Date | string
    estado: $Enums.EstadoSolicitud
    alojamientoId: number
    nombre: string
    email: string
    telefono: string
    mensaje?: string | null
    leaseId?: number | null
  }

  export type SolicitudCreateOrConnectWithoutInquilinoInput = {
    where: SolicitudWhereUniqueInput
    create: XOR<SolicitudCreateWithoutInquilinoInput, SolicitudUncheckedCreateWithoutInquilinoInput>
  }

  export type SolicitudCreateManyInquilinoInputEnvelope = {
    data: SolicitudCreateManyInquilinoInput | SolicitudCreateManyInquilinoInput[]
    skipDuplicates?: boolean
  }

  export type LeaseCreateWithoutInquilinoInput = {
    startDate: Date | string
    endDate: Date | string
    rent: number
    deposit: number
    alojamiento: AlojamientoCreateNestedOneWithoutLeasesInput
    solicitud?: SolicitudCreateNestedOneWithoutLeaseInput
    payments?: PaymentCreateNestedManyWithoutLeaseInput
  }

  export type LeaseUncheckedCreateWithoutInquilinoInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    rent: number
    deposit: number
    alojamientoId: number
    solicitud?: SolicitudUncheckedCreateNestedOneWithoutLeaseInput
    payments?: PaymentUncheckedCreateNestedManyWithoutLeaseInput
  }

  export type LeaseCreateOrConnectWithoutInquilinoInput = {
    where: LeaseWhereUniqueInput
    create: XOR<LeaseCreateWithoutInquilinoInput, LeaseUncheckedCreateWithoutInquilinoInput>
  }

  export type LeaseCreateManyInquilinoInputEnvelope = {
    data: LeaseCreateManyInquilinoInput | LeaseCreateManyInquilinoInput[]
    skipDuplicates?: boolean
  }

  export type AlojamientoUpsertWithWhereUniqueWithoutInquilinosInput = {
    where: AlojamientoWhereUniqueInput
    update: XOR<AlojamientoUpdateWithoutInquilinosInput, AlojamientoUncheckedUpdateWithoutInquilinosInput>
    create: XOR<AlojamientoCreateWithoutInquilinosInput, AlojamientoUncheckedCreateWithoutInquilinosInput>
  }

  export type AlojamientoUpdateWithWhereUniqueWithoutInquilinosInput = {
    where: AlojamientoWhereUniqueInput
    data: XOR<AlojamientoUpdateWithoutInquilinosInput, AlojamientoUncheckedUpdateWithoutInquilinosInput>
  }

  export type AlojamientoUpdateManyWithWhereWithoutInquilinosInput = {
    where: AlojamientoScalarWhereInput
    data: XOR<AlojamientoUpdateManyMutationInput, AlojamientoUncheckedUpdateManyWithoutInquilinosInput>
  }

  export type AlojamientoUpsertWithWhereUniqueWithoutFavoritedByInput = {
    where: AlojamientoWhereUniqueInput
    update: XOR<AlojamientoUpdateWithoutFavoritedByInput, AlojamientoUncheckedUpdateWithoutFavoritedByInput>
    create: XOR<AlojamientoCreateWithoutFavoritedByInput, AlojamientoUncheckedCreateWithoutFavoritedByInput>
  }

  export type AlojamientoUpdateWithWhereUniqueWithoutFavoritedByInput = {
    where: AlojamientoWhereUniqueInput
    data: XOR<AlojamientoUpdateWithoutFavoritedByInput, AlojamientoUncheckedUpdateWithoutFavoritedByInput>
  }

  export type AlojamientoUpdateManyWithWhereWithoutFavoritedByInput = {
    where: AlojamientoScalarWhereInput
    data: XOR<AlojamientoUpdateManyMutationInput, AlojamientoUncheckedUpdateManyWithoutFavoritedByInput>
  }

  export type SolicitudUpsertWithWhereUniqueWithoutInquilinoInput = {
    where: SolicitudWhereUniqueInput
    update: XOR<SolicitudUpdateWithoutInquilinoInput, SolicitudUncheckedUpdateWithoutInquilinoInput>
    create: XOR<SolicitudCreateWithoutInquilinoInput, SolicitudUncheckedCreateWithoutInquilinoInput>
  }

  export type SolicitudUpdateWithWhereUniqueWithoutInquilinoInput = {
    where: SolicitudWhereUniqueInput
    data: XOR<SolicitudUpdateWithoutInquilinoInput, SolicitudUncheckedUpdateWithoutInquilinoInput>
  }

  export type SolicitudUpdateManyWithWhereWithoutInquilinoInput = {
    where: SolicitudScalarWhereInput
    data: XOR<SolicitudUpdateManyMutationInput, SolicitudUncheckedUpdateManyWithoutInquilinoInput>
  }

  export type LeaseUpsertWithWhereUniqueWithoutInquilinoInput = {
    where: LeaseWhereUniqueInput
    update: XOR<LeaseUpdateWithoutInquilinoInput, LeaseUncheckedUpdateWithoutInquilinoInput>
    create: XOR<LeaseCreateWithoutInquilinoInput, LeaseUncheckedCreateWithoutInquilinoInput>
  }

  export type LeaseUpdateWithWhereUniqueWithoutInquilinoInput = {
    where: LeaseWhereUniqueInput
    data: XOR<LeaseUpdateWithoutInquilinoInput, LeaseUncheckedUpdateWithoutInquilinoInput>
  }

  export type LeaseUpdateManyWithWhereWithoutInquilinoInput = {
    where: LeaseScalarWhereInput
    data: XOR<LeaseUpdateManyMutationInput, LeaseUncheckedUpdateManyWithoutInquilinoInput>
  }

  export type AlojamientoCreateWithoutLocationInput = {
    nombre: string
    descripcion: string
    precio: number
    habitaciones: number
    banos: number
    superficie: number
    plazasLibres: number
    tipoAlojamiento: $Enums.TipoAlojamiento
    hayTelevision?: boolean
    hayTelefono?: boolean
    hayInternet?: boolean
    hayTerraza?: boolean
    hayAscensor?: boolean
    hayGaraje?: boolean
    hayLavavajillas?: boolean
    hayHorno?: boolean
    hayMicroondas?: boolean
    hayNevera?: boolean
    hayLavadora?: boolean
    haySecadora?: boolean
    hayPortero?: boolean
    hayMuebles?: boolean
    hayCalefaccion?: boolean
    hayAireAcondicionado?: boolean
    hayGas?: boolean
    hayPiscina?: boolean
    hayZonaComunitaria?: boolean
    hayGimnasio?: boolean
    aguaIncluido?: boolean
    gasIncluido?: boolean
    electricidadIncluido?: boolean
    internetIncluido?: boolean
    photoUrls?: AlojamientoCreatephotoUrlsInput | string[]
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    propietario: PropietarioCreateNestedOneWithoutManagedPropertiesInput
    leases?: LeaseCreateNestedManyWithoutAlojamientoInput
    solicitudes?: SolicitudCreateNestedManyWithoutAlojamientoInput
    favoritedBy?: InquilinoCreateNestedManyWithoutFavoritosInput
    inquilinos?: InquilinoCreateNestedManyWithoutAlojamientosInput
  }

  export type AlojamientoUncheckedCreateWithoutLocationInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    habitaciones: number
    banos: number
    superficie: number
    plazasLibres: number
    tipoAlojamiento: $Enums.TipoAlojamiento
    hayTelevision?: boolean
    hayTelefono?: boolean
    hayInternet?: boolean
    hayTerraza?: boolean
    hayAscensor?: boolean
    hayGaraje?: boolean
    hayLavavajillas?: boolean
    hayHorno?: boolean
    hayMicroondas?: boolean
    hayNevera?: boolean
    hayLavadora?: boolean
    haySecadora?: boolean
    hayPortero?: boolean
    hayMuebles?: boolean
    hayCalefaccion?: boolean
    hayAireAcondicionado?: boolean
    hayGas?: boolean
    hayPiscina?: boolean
    hayZonaComunitaria?: boolean
    hayGimnasio?: boolean
    aguaIncluido?: boolean
    gasIncluido?: boolean
    electricidadIncluido?: boolean
    internetIncluido?: boolean
    photoUrls?: AlojamientoCreatephotoUrlsInput | string[]
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    managerCognitoId: string
    leases?: LeaseUncheckedCreateNestedManyWithoutAlojamientoInput
    solicitudes?: SolicitudUncheckedCreateNestedManyWithoutAlojamientoInput
    favoritedBy?: InquilinoUncheckedCreateNestedManyWithoutFavoritosInput
    inquilinos?: InquilinoUncheckedCreateNestedManyWithoutAlojamientosInput
  }

  export type AlojamientoCreateOrConnectWithoutLocationInput = {
    where: AlojamientoWhereUniqueInput
    create: XOR<AlojamientoCreateWithoutLocationInput, AlojamientoUncheckedCreateWithoutLocationInput>
  }

  export type AlojamientoUpsertWithWhereUniqueWithoutLocationInput = {
    where: AlojamientoWhereUniqueInput
    update: XOR<AlojamientoUpdateWithoutLocationInput, AlojamientoUncheckedUpdateWithoutLocationInput>
    create: XOR<AlojamientoCreateWithoutLocationInput, AlojamientoUncheckedCreateWithoutLocationInput>
  }

  export type AlojamientoCreateManyLocationInputEnvelope = {
    data: AlojamientoCreateManyLocationInput | AlojamientoCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type AlojamientoUpdateWithWhereUniqueWithoutLocationInput = {
    where: AlojamientoWhereUniqueInput
    data: XOR<AlojamientoUpdateWithoutLocationInput, AlojamientoUncheckedUpdateWithoutLocationInput>
  }

  export type AlojamientoUpdateManyWithWhereWithoutLocationInput = {
    where: AlojamientoScalarWhereInput
    data: XOR<AlojamientoUpdateManyMutationInput, AlojamientoUncheckedUpdateManyWithoutLocationInput>
  }

  export type AlojamientoCreateWithoutSolicitudesInput = {
    nombre: string
    descripcion: string
    precio: number
    habitaciones: number
    banos: number
    superficie: number
    plazasLibres: number
    tipoAlojamiento: $Enums.TipoAlojamiento
    hayTelevision?: boolean
    hayTelefono?: boolean
    hayInternet?: boolean
    hayTerraza?: boolean
    hayAscensor?: boolean
    hayGaraje?: boolean
    hayLavavajillas?: boolean
    hayHorno?: boolean
    hayMicroondas?: boolean
    hayNevera?: boolean
    hayLavadora?: boolean
    haySecadora?: boolean
    hayPortero?: boolean
    hayMuebles?: boolean
    hayCalefaccion?: boolean
    hayAireAcondicionado?: boolean
    hayGas?: boolean
    hayPiscina?: boolean
    hayZonaComunitaria?: boolean
    hayGimnasio?: boolean
    aguaIncluido?: boolean
    gasIncluido?: boolean
    electricidadIncluido?: boolean
    internetIncluido?: boolean
    photoUrls?: AlojamientoCreatephotoUrlsInput | string[]
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    location: LocationCreateNestedOneWithoutAlojamientosInput
    propietario: PropietarioCreateNestedOneWithoutManagedPropertiesInput
    leases?: LeaseCreateNestedManyWithoutAlojamientoInput
    favoritedBy?: InquilinoCreateNestedManyWithoutFavoritosInput
    inquilinos?: InquilinoCreateNestedManyWithoutAlojamientosInput
  }

  export type AlojamientoUncheckedCreateWithoutSolicitudesInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    habitaciones: number
    banos: number
    superficie: number
    plazasLibres: number
    tipoAlojamiento: $Enums.TipoAlojamiento
    hayTelevision?: boolean
    hayTelefono?: boolean
    hayInternet?: boolean
    hayTerraza?: boolean
    hayAscensor?: boolean
    hayGaraje?: boolean
    hayLavavajillas?: boolean
    hayHorno?: boolean
    hayMicroondas?: boolean
    hayNevera?: boolean
    hayLavadora?: boolean
    haySecadora?: boolean
    hayPortero?: boolean
    hayMuebles?: boolean
    hayCalefaccion?: boolean
    hayAireAcondicionado?: boolean
    hayGas?: boolean
    hayPiscina?: boolean
    hayZonaComunitaria?: boolean
    hayGimnasio?: boolean
    aguaIncluido?: boolean
    gasIncluido?: boolean
    electricidadIncluido?: boolean
    internetIncluido?: boolean
    photoUrls?: AlojamientoCreatephotoUrlsInput | string[]
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    locationId: number
    managerCognitoId: string
    leases?: LeaseUncheckedCreateNestedManyWithoutAlojamientoInput
    favoritedBy?: InquilinoUncheckedCreateNestedManyWithoutFavoritosInput
    inquilinos?: InquilinoUncheckedCreateNestedManyWithoutAlojamientosInput
  }

  export type AlojamientoCreateOrConnectWithoutSolicitudesInput = {
    where: AlojamientoWhereUniqueInput
    create: XOR<AlojamientoCreateWithoutSolicitudesInput, AlojamientoUncheckedCreateWithoutSolicitudesInput>
  }

  export type InquilinoCreateWithoutSolicitudesInput = {
    cognitoId: string
    nombre: string
    email: string
    telefono: string
    alojamientos?: AlojamientoCreateNestedManyWithoutInquilinosInput
    favoritos?: AlojamientoCreateNestedManyWithoutFavoritedByInput
    leases?: LeaseCreateNestedManyWithoutInquilinoInput
  }

  export type InquilinoUncheckedCreateWithoutSolicitudesInput = {
    id?: number
    cognitoId: string
    nombre: string
    email: string
    telefono: string
    alojamientos?: AlojamientoUncheckedCreateNestedManyWithoutInquilinosInput
    favoritos?: AlojamientoUncheckedCreateNestedManyWithoutFavoritedByInput
    leases?: LeaseUncheckedCreateNestedManyWithoutInquilinoInput
  }

  export type InquilinoCreateOrConnectWithoutSolicitudesInput = {
    where: InquilinoWhereUniqueInput
    create: XOR<InquilinoCreateWithoutSolicitudesInput, InquilinoUncheckedCreateWithoutSolicitudesInput>
  }

  export type LeaseCreateWithoutSolicitudInput = {
    startDate: Date | string
    endDate: Date | string
    rent: number
    deposit: number
    alojamiento: AlojamientoCreateNestedOneWithoutLeasesInput
    inquilino: InquilinoCreateNestedOneWithoutLeasesInput
    payments?: PaymentCreateNestedManyWithoutLeaseInput
  }

  export type LeaseUncheckedCreateWithoutSolicitudInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    rent: number
    deposit: number
    alojamientoId: number
    tenantCognitoId: string
    payments?: PaymentUncheckedCreateNestedManyWithoutLeaseInput
  }

  export type LeaseCreateOrConnectWithoutSolicitudInput = {
    where: LeaseWhereUniqueInput
    create: XOR<LeaseCreateWithoutSolicitudInput, LeaseUncheckedCreateWithoutSolicitudInput>
  }

  export type AlojamientoUpsertWithoutSolicitudesInput = {
    update: XOR<AlojamientoUpdateWithoutSolicitudesInput, AlojamientoUncheckedUpdateWithoutSolicitudesInput>
    create: XOR<AlojamientoCreateWithoutSolicitudesInput, AlojamientoUncheckedCreateWithoutSolicitudesInput>
    where?: AlojamientoWhereInput
  }

  export type AlojamientoUpdateToOneWithWhereWithoutSolicitudesInput = {
    where?: AlojamientoWhereInput
    data: XOR<AlojamientoUpdateWithoutSolicitudesInput, AlojamientoUncheckedUpdateWithoutSolicitudesInput>
  }

  export type AlojamientoUpdateWithoutSolicitudesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    habitaciones?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    tipoAlojamiento?: EnumTipoAlojamientoFieldUpdateOperationsInput | $Enums.TipoAlojamiento
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    location?: LocationUpdateOneRequiredWithoutAlojamientosNestedInput
    propietario?: PropietarioUpdateOneRequiredWithoutManagedPropertiesNestedInput
    leases?: LeaseUpdateManyWithoutAlojamientoNestedInput
    favoritedBy?: InquilinoUpdateManyWithoutFavoritosNestedInput
    inquilinos?: InquilinoUpdateManyWithoutAlojamientosNestedInput
  }

  export type AlojamientoUncheckedUpdateWithoutSolicitudesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    habitaciones?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    tipoAlojamiento?: EnumTipoAlojamientoFieldUpdateOperationsInput | $Enums.TipoAlojamiento
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    managerCognitoId?: StringFieldUpdateOperationsInput | string
    leases?: LeaseUncheckedUpdateManyWithoutAlojamientoNestedInput
    favoritedBy?: InquilinoUncheckedUpdateManyWithoutFavoritosNestedInput
    inquilinos?: InquilinoUncheckedUpdateManyWithoutAlojamientosNestedInput
  }

  export type InquilinoUpsertWithoutSolicitudesInput = {
    update: XOR<InquilinoUpdateWithoutSolicitudesInput, InquilinoUncheckedUpdateWithoutSolicitudesInput>
    create: XOR<InquilinoCreateWithoutSolicitudesInput, InquilinoUncheckedCreateWithoutSolicitudesInput>
    where?: InquilinoWhereInput
  }

  export type InquilinoUpdateToOneWithWhereWithoutSolicitudesInput = {
    where?: InquilinoWhereInput
    data: XOR<InquilinoUpdateWithoutSolicitudesInput, InquilinoUncheckedUpdateWithoutSolicitudesInput>
  }

  export type InquilinoUpdateWithoutSolicitudesInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    alojamientos?: AlojamientoUpdateManyWithoutInquilinosNestedInput
    favoritos?: AlojamientoUpdateManyWithoutFavoritedByNestedInput
    leases?: LeaseUpdateManyWithoutInquilinoNestedInput
  }

  export type InquilinoUncheckedUpdateWithoutSolicitudesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    alojamientos?: AlojamientoUncheckedUpdateManyWithoutInquilinosNestedInput
    favoritos?: AlojamientoUncheckedUpdateManyWithoutFavoritedByNestedInput
    leases?: LeaseUncheckedUpdateManyWithoutInquilinoNestedInput
  }

  export type LeaseUpsertWithoutSolicitudInput = {
    update: XOR<LeaseUpdateWithoutSolicitudInput, LeaseUncheckedUpdateWithoutSolicitudInput>
    create: XOR<LeaseCreateWithoutSolicitudInput, LeaseUncheckedCreateWithoutSolicitudInput>
    where?: LeaseWhereInput
  }

  export type LeaseUpdateToOneWithWhereWithoutSolicitudInput = {
    where?: LeaseWhereInput
    data: XOR<LeaseUpdateWithoutSolicitudInput, LeaseUncheckedUpdateWithoutSolicitudInput>
  }

  export type LeaseUpdateWithoutSolicitudInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rent?: FloatFieldUpdateOperationsInput | number
    deposit?: FloatFieldUpdateOperationsInput | number
    alojamiento?: AlojamientoUpdateOneRequiredWithoutLeasesNestedInput
    inquilino?: InquilinoUpdateOneRequiredWithoutLeasesNestedInput
    payments?: PaymentUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateWithoutSolicitudInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rent?: FloatFieldUpdateOperationsInput | number
    deposit?: FloatFieldUpdateOperationsInput | number
    alojamientoId?: IntFieldUpdateOperationsInput | number
    tenantCognitoId?: StringFieldUpdateOperationsInput | string
    payments?: PaymentUncheckedUpdateManyWithoutLeaseNestedInput
  }

  export type AlojamientoCreateWithoutLeasesInput = {
    nombre: string
    descripcion: string
    precio: number
    habitaciones: number
    banos: number
    superficie: number
    plazasLibres: number
    tipoAlojamiento: $Enums.TipoAlojamiento
    hayTelevision?: boolean
    hayTelefono?: boolean
    hayInternet?: boolean
    hayTerraza?: boolean
    hayAscensor?: boolean
    hayGaraje?: boolean
    hayLavavajillas?: boolean
    hayHorno?: boolean
    hayMicroondas?: boolean
    hayNevera?: boolean
    hayLavadora?: boolean
    haySecadora?: boolean
    hayPortero?: boolean
    hayMuebles?: boolean
    hayCalefaccion?: boolean
    hayAireAcondicionado?: boolean
    hayGas?: boolean
    hayPiscina?: boolean
    hayZonaComunitaria?: boolean
    hayGimnasio?: boolean
    aguaIncluido?: boolean
    gasIncluido?: boolean
    electricidadIncluido?: boolean
    internetIncluido?: boolean
    photoUrls?: AlojamientoCreatephotoUrlsInput | string[]
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    location: LocationCreateNestedOneWithoutAlojamientosInput
    propietario: PropietarioCreateNestedOneWithoutManagedPropertiesInput
    solicitudes?: SolicitudCreateNestedManyWithoutAlojamientoInput
    favoritedBy?: InquilinoCreateNestedManyWithoutFavoritosInput
    inquilinos?: InquilinoCreateNestedManyWithoutAlojamientosInput
  }

  export type AlojamientoUncheckedCreateWithoutLeasesInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    habitaciones: number
    banos: number
    superficie: number
    plazasLibres: number
    tipoAlojamiento: $Enums.TipoAlojamiento
    hayTelevision?: boolean
    hayTelefono?: boolean
    hayInternet?: boolean
    hayTerraza?: boolean
    hayAscensor?: boolean
    hayGaraje?: boolean
    hayLavavajillas?: boolean
    hayHorno?: boolean
    hayMicroondas?: boolean
    hayNevera?: boolean
    hayLavadora?: boolean
    haySecadora?: boolean
    hayPortero?: boolean
    hayMuebles?: boolean
    hayCalefaccion?: boolean
    hayAireAcondicionado?: boolean
    hayGas?: boolean
    hayPiscina?: boolean
    hayZonaComunitaria?: boolean
    hayGimnasio?: boolean
    aguaIncluido?: boolean
    gasIncluido?: boolean
    electricidadIncluido?: boolean
    internetIncluido?: boolean
    photoUrls?: AlojamientoCreatephotoUrlsInput | string[]
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    locationId: number
    managerCognitoId: string
    solicitudes?: SolicitudUncheckedCreateNestedManyWithoutAlojamientoInput
    favoritedBy?: InquilinoUncheckedCreateNestedManyWithoutFavoritosInput
    inquilinos?: InquilinoUncheckedCreateNestedManyWithoutAlojamientosInput
  }

  export type AlojamientoCreateOrConnectWithoutLeasesInput = {
    where: AlojamientoWhereUniqueInput
    create: XOR<AlojamientoCreateWithoutLeasesInput, AlojamientoUncheckedCreateWithoutLeasesInput>
  }

  export type InquilinoCreateWithoutLeasesInput = {
    cognitoId: string
    nombre: string
    email: string
    telefono: string
    alojamientos?: AlojamientoCreateNestedManyWithoutInquilinosInput
    favoritos?: AlojamientoCreateNestedManyWithoutFavoritedByInput
    solicitudes?: SolicitudCreateNestedManyWithoutInquilinoInput
  }

  export type InquilinoUncheckedCreateWithoutLeasesInput = {
    id?: number
    cognitoId: string
    nombre: string
    email: string
    telefono: string
    alojamientos?: AlojamientoUncheckedCreateNestedManyWithoutInquilinosInput
    favoritos?: AlojamientoUncheckedCreateNestedManyWithoutFavoritedByInput
    solicitudes?: SolicitudUncheckedCreateNestedManyWithoutInquilinoInput
  }

  export type InquilinoCreateOrConnectWithoutLeasesInput = {
    where: InquilinoWhereUniqueInput
    create: XOR<InquilinoCreateWithoutLeasesInput, InquilinoUncheckedCreateWithoutLeasesInput>
  }

  export type SolicitudCreateWithoutLeaseInput = {
    applicationDate: Date | string
    estado: $Enums.EstadoSolicitud
    nombre: string
    email: string
    telefono: string
    mensaje?: string | null
    alojamiento: AlojamientoCreateNestedOneWithoutSolicitudesInput
    inquilino: InquilinoCreateNestedOneWithoutSolicitudesInput
  }

  export type SolicitudUncheckedCreateWithoutLeaseInput = {
    id?: number
    applicationDate: Date | string
    estado: $Enums.EstadoSolicitud
    alojamientoId: number
    tenantCognitoId: string
    nombre: string
    email: string
    telefono: string
    mensaje?: string | null
  }

  export type SolicitudCreateOrConnectWithoutLeaseInput = {
    where: SolicitudWhereUniqueInput
    create: XOR<SolicitudCreateWithoutLeaseInput, SolicitudUncheckedCreateWithoutLeaseInput>
  }

  export type PaymentCreateWithoutLeaseInput = {
    amountDue: number
    amountPaid: number
    dueDate: Date | string
    paymentDate: Date | string
    paymentStatus: $Enums.PaymentStatus
  }

  export type PaymentUncheckedCreateWithoutLeaseInput = {
    id?: number
    amountDue: number
    amountPaid: number
    dueDate: Date | string
    paymentDate: Date | string
    paymentStatus: $Enums.PaymentStatus
  }

  export type PaymentCreateOrConnectWithoutLeaseInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutLeaseInput, PaymentUncheckedCreateWithoutLeaseInput>
  }

  export type PaymentCreateManyLeaseInputEnvelope = {
    data: PaymentCreateManyLeaseInput | PaymentCreateManyLeaseInput[]
    skipDuplicates?: boolean
  }

  export type AlojamientoUpsertWithoutLeasesInput = {
    update: XOR<AlojamientoUpdateWithoutLeasesInput, AlojamientoUncheckedUpdateWithoutLeasesInput>
    create: XOR<AlojamientoCreateWithoutLeasesInput, AlojamientoUncheckedCreateWithoutLeasesInput>
    where?: AlojamientoWhereInput
  }

  export type AlojamientoUpdateToOneWithWhereWithoutLeasesInput = {
    where?: AlojamientoWhereInput
    data: XOR<AlojamientoUpdateWithoutLeasesInput, AlojamientoUncheckedUpdateWithoutLeasesInput>
  }

  export type AlojamientoUpdateWithoutLeasesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    habitaciones?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    tipoAlojamiento?: EnumTipoAlojamientoFieldUpdateOperationsInput | $Enums.TipoAlojamiento
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    location?: LocationUpdateOneRequiredWithoutAlojamientosNestedInput
    propietario?: PropietarioUpdateOneRequiredWithoutManagedPropertiesNestedInput
    solicitudes?: SolicitudUpdateManyWithoutAlojamientoNestedInput
    favoritedBy?: InquilinoUpdateManyWithoutFavoritosNestedInput
    inquilinos?: InquilinoUpdateManyWithoutAlojamientosNestedInput
  }

  export type AlojamientoUncheckedUpdateWithoutLeasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    habitaciones?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    tipoAlojamiento?: EnumTipoAlojamientoFieldUpdateOperationsInput | $Enums.TipoAlojamiento
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    managerCognitoId?: StringFieldUpdateOperationsInput | string
    solicitudes?: SolicitudUncheckedUpdateManyWithoutAlojamientoNestedInput
    favoritedBy?: InquilinoUncheckedUpdateManyWithoutFavoritosNestedInput
    inquilinos?: InquilinoUncheckedUpdateManyWithoutAlojamientosNestedInput
  }

  export type InquilinoUpsertWithoutLeasesInput = {
    update: XOR<InquilinoUpdateWithoutLeasesInput, InquilinoUncheckedUpdateWithoutLeasesInput>
    create: XOR<InquilinoCreateWithoutLeasesInput, InquilinoUncheckedCreateWithoutLeasesInput>
    where?: InquilinoWhereInput
  }

  export type InquilinoUpdateToOneWithWhereWithoutLeasesInput = {
    where?: InquilinoWhereInput
    data: XOR<InquilinoUpdateWithoutLeasesInput, InquilinoUncheckedUpdateWithoutLeasesInput>
  }

  export type InquilinoUpdateWithoutLeasesInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    alojamientos?: AlojamientoUpdateManyWithoutInquilinosNestedInput
    favoritos?: AlojamientoUpdateManyWithoutFavoritedByNestedInput
    solicitudes?: SolicitudUpdateManyWithoutInquilinoNestedInput
  }

  export type InquilinoUncheckedUpdateWithoutLeasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    alojamientos?: AlojamientoUncheckedUpdateManyWithoutInquilinosNestedInput
    favoritos?: AlojamientoUncheckedUpdateManyWithoutFavoritedByNestedInput
    solicitudes?: SolicitudUncheckedUpdateManyWithoutInquilinoNestedInput
  }

  export type SolicitudUpsertWithoutLeaseInput = {
    update: XOR<SolicitudUpdateWithoutLeaseInput, SolicitudUncheckedUpdateWithoutLeaseInput>
    create: XOR<SolicitudCreateWithoutLeaseInput, SolicitudUncheckedCreateWithoutLeaseInput>
    where?: SolicitudWhereInput
  }

  export type SolicitudUpdateToOneWithWhereWithoutLeaseInput = {
    where?: SolicitudWhereInput
    data: XOR<SolicitudUpdateWithoutLeaseInput, SolicitudUncheckedUpdateWithoutLeaseInput>
  }

  export type SolicitudUpdateWithoutLeaseInput = {
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoSolicitudFieldUpdateOperationsInput | $Enums.EstadoSolicitud
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    alojamiento?: AlojamientoUpdateOneRequiredWithoutSolicitudesNestedInput
    inquilino?: InquilinoUpdateOneRequiredWithoutSolicitudesNestedInput
  }

  export type SolicitudUncheckedUpdateWithoutLeaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoSolicitudFieldUpdateOperationsInput | $Enums.EstadoSolicitud
    alojamientoId?: IntFieldUpdateOperationsInput | number
    tenantCognitoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentUpsertWithWhereUniqueWithoutLeaseInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutLeaseInput, PaymentUncheckedUpdateWithoutLeaseInput>
    create: XOR<PaymentCreateWithoutLeaseInput, PaymentUncheckedCreateWithoutLeaseInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutLeaseInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutLeaseInput, PaymentUncheckedUpdateWithoutLeaseInput>
  }

  export type PaymentUpdateManyWithWhereWithoutLeaseInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutLeaseInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: IntFilter<"Payment"> | number
    amountDue?: FloatFilter<"Payment"> | number
    amountPaid?: FloatFilter<"Payment"> | number
    dueDate?: DateTimeFilter<"Payment"> | Date | string
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    paymentStatus?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    leaseId?: IntFilter<"Payment"> | number
  }

  export type LeaseCreateWithoutPaymentsInput = {
    startDate: Date | string
    endDate: Date | string
    rent: number
    deposit: number
    alojamiento: AlojamientoCreateNestedOneWithoutLeasesInput
    inquilino: InquilinoCreateNestedOneWithoutLeasesInput
    solicitud?: SolicitudCreateNestedOneWithoutLeaseInput
  }

  export type LeaseUncheckedCreateWithoutPaymentsInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    rent: number
    deposit: number
    alojamientoId: number
    tenantCognitoId: string
    solicitud?: SolicitudUncheckedCreateNestedOneWithoutLeaseInput
  }

  export type LeaseCreateOrConnectWithoutPaymentsInput = {
    where: LeaseWhereUniqueInput
    create: XOR<LeaseCreateWithoutPaymentsInput, LeaseUncheckedCreateWithoutPaymentsInput>
  }

  export type LeaseUpsertWithoutPaymentsInput = {
    update: XOR<LeaseUpdateWithoutPaymentsInput, LeaseUncheckedUpdateWithoutPaymentsInput>
    create: XOR<LeaseCreateWithoutPaymentsInput, LeaseUncheckedCreateWithoutPaymentsInput>
    where?: LeaseWhereInput
  }

  export type LeaseUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: LeaseWhereInput
    data: XOR<LeaseUpdateWithoutPaymentsInput, LeaseUncheckedUpdateWithoutPaymentsInput>
  }

  export type LeaseUpdateWithoutPaymentsInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rent?: FloatFieldUpdateOperationsInput | number
    deposit?: FloatFieldUpdateOperationsInput | number
    alojamiento?: AlojamientoUpdateOneRequiredWithoutLeasesNestedInput
    inquilino?: InquilinoUpdateOneRequiredWithoutLeasesNestedInput
    solicitud?: SolicitudUpdateOneWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rent?: FloatFieldUpdateOperationsInput | number
    deposit?: FloatFieldUpdateOperationsInput | number
    alojamientoId?: IntFieldUpdateOperationsInput | number
    tenantCognitoId?: StringFieldUpdateOperationsInput | string
    solicitud?: SolicitudUncheckedUpdateOneWithoutLeaseNestedInput
  }

  export type LeaseCreateManyAlojamientoInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    rent: number
    deposit: number
    tenantCognitoId: string
  }

  export type SolicitudCreateManyAlojamientoInput = {
    id?: number
    applicationDate: Date | string
    estado: $Enums.EstadoSolicitud
    tenantCognitoId: string
    nombre: string
    email: string
    telefono: string
    mensaje?: string | null
    leaseId?: number | null
  }

  export type LeaseUpdateWithoutAlojamientoInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rent?: FloatFieldUpdateOperationsInput | number
    deposit?: FloatFieldUpdateOperationsInput | number
    inquilino?: InquilinoUpdateOneRequiredWithoutLeasesNestedInput
    solicitud?: SolicitudUpdateOneWithoutLeaseNestedInput
    payments?: PaymentUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateWithoutAlojamientoInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rent?: FloatFieldUpdateOperationsInput | number
    deposit?: FloatFieldUpdateOperationsInput | number
    tenantCognitoId?: StringFieldUpdateOperationsInput | string
    solicitud?: SolicitudUncheckedUpdateOneWithoutLeaseNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateManyWithoutAlojamientoInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rent?: FloatFieldUpdateOperationsInput | number
    deposit?: FloatFieldUpdateOperationsInput | number
    tenantCognitoId?: StringFieldUpdateOperationsInput | string
  }

  export type SolicitudUpdateWithoutAlojamientoInput = {
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoSolicitudFieldUpdateOperationsInput | $Enums.EstadoSolicitud
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    inquilino?: InquilinoUpdateOneRequiredWithoutSolicitudesNestedInput
    lease?: LeaseUpdateOneWithoutSolicitudNestedInput
  }

  export type SolicitudUncheckedUpdateWithoutAlojamientoInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoSolicitudFieldUpdateOperationsInput | $Enums.EstadoSolicitud
    tenantCognitoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    leaseId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SolicitudUncheckedUpdateManyWithoutAlojamientoInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoSolicitudFieldUpdateOperationsInput | $Enums.EstadoSolicitud
    tenantCognitoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    leaseId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InquilinoUpdateWithoutFavoritosInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    alojamientos?: AlojamientoUpdateManyWithoutInquilinosNestedInput
    solicitudes?: SolicitudUpdateManyWithoutInquilinoNestedInput
    leases?: LeaseUpdateManyWithoutInquilinoNestedInput
  }

  export type InquilinoUncheckedUpdateWithoutFavoritosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    alojamientos?: AlojamientoUncheckedUpdateManyWithoutInquilinosNestedInput
    solicitudes?: SolicitudUncheckedUpdateManyWithoutInquilinoNestedInput
    leases?: LeaseUncheckedUpdateManyWithoutInquilinoNestedInput
  }

  export type InquilinoUncheckedUpdateManyWithoutFavoritosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
  }

  export type InquilinoUpdateWithoutAlojamientosInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    favoritos?: AlojamientoUpdateManyWithoutFavoritedByNestedInput
    solicitudes?: SolicitudUpdateManyWithoutInquilinoNestedInput
    leases?: LeaseUpdateManyWithoutInquilinoNestedInput
  }

  export type InquilinoUncheckedUpdateWithoutAlojamientosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    favoritos?: AlojamientoUncheckedUpdateManyWithoutFavoritedByNestedInput
    solicitudes?: SolicitudUncheckedUpdateManyWithoutInquilinoNestedInput
    leases?: LeaseUncheckedUpdateManyWithoutInquilinoNestedInput
  }

  export type InquilinoUncheckedUpdateManyWithoutAlojamientosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
  }

  export type AlojamientoCreateManyPropietarioInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    habitaciones: number
    banos: number
    superficie: number
    plazasLibres: number
    tipoAlojamiento: $Enums.TipoAlojamiento
    hayTelevision?: boolean
    hayTelefono?: boolean
    hayInternet?: boolean
    hayTerraza?: boolean
    hayAscensor?: boolean
    hayGaraje?: boolean
    hayLavavajillas?: boolean
    hayHorno?: boolean
    hayMicroondas?: boolean
    hayNevera?: boolean
    hayLavadora?: boolean
    haySecadora?: boolean
    hayPortero?: boolean
    hayMuebles?: boolean
    hayCalefaccion?: boolean
    hayAireAcondicionado?: boolean
    hayGas?: boolean
    hayPiscina?: boolean
    hayZonaComunitaria?: boolean
    hayGimnasio?: boolean
    aguaIncluido?: boolean
    gasIncluido?: boolean
    electricidadIncluido?: boolean
    internetIncluido?: boolean
    photoUrls?: AlojamientoCreatephotoUrlsInput | string[]
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    locationId: number
  }

  export type AlojamientoUpdateWithoutPropietarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    habitaciones?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    tipoAlojamiento?: EnumTipoAlojamientoFieldUpdateOperationsInput | $Enums.TipoAlojamiento
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    location?: LocationUpdateOneRequiredWithoutAlojamientosNestedInput
    leases?: LeaseUpdateManyWithoutAlojamientoNestedInput
    solicitudes?: SolicitudUpdateManyWithoutAlojamientoNestedInput
    favoritedBy?: InquilinoUpdateManyWithoutFavoritosNestedInput
    inquilinos?: InquilinoUpdateManyWithoutAlojamientosNestedInput
  }

  export type AlojamientoUncheckedUpdateWithoutPropietarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    habitaciones?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    tipoAlojamiento?: EnumTipoAlojamientoFieldUpdateOperationsInput | $Enums.TipoAlojamiento
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    leases?: LeaseUncheckedUpdateManyWithoutAlojamientoNestedInput
    solicitudes?: SolicitudUncheckedUpdateManyWithoutAlojamientoNestedInput
    favoritedBy?: InquilinoUncheckedUpdateManyWithoutFavoritosNestedInput
    inquilinos?: InquilinoUncheckedUpdateManyWithoutAlojamientosNestedInput
  }

  export type AlojamientoUncheckedUpdateManyWithoutPropietarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    habitaciones?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    tipoAlojamiento?: EnumTipoAlojamientoFieldUpdateOperationsInput | $Enums.TipoAlojamiento
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
  }

  export type SolicitudCreateManyInquilinoInput = {
    id?: number
    applicationDate: Date | string
    estado: $Enums.EstadoSolicitud
    alojamientoId: number
    nombre: string
    email: string
    telefono: string
    mensaje?: string | null
    leaseId?: number | null
  }

  export type LeaseCreateManyInquilinoInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    rent: number
    deposit: number
    alojamientoId: number
  }

  export type AlojamientoUpdateWithoutInquilinosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    habitaciones?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    tipoAlojamiento?: EnumTipoAlojamientoFieldUpdateOperationsInput | $Enums.TipoAlojamiento
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    location?: LocationUpdateOneRequiredWithoutAlojamientosNestedInput
    propietario?: PropietarioUpdateOneRequiredWithoutManagedPropertiesNestedInput
    leases?: LeaseUpdateManyWithoutAlojamientoNestedInput
    solicitudes?: SolicitudUpdateManyWithoutAlojamientoNestedInput
    favoritedBy?: InquilinoUpdateManyWithoutFavoritosNestedInput
  }

  export type AlojamientoUncheckedUpdateWithoutInquilinosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    habitaciones?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    tipoAlojamiento?: EnumTipoAlojamientoFieldUpdateOperationsInput | $Enums.TipoAlojamiento
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    managerCognitoId?: StringFieldUpdateOperationsInput | string
    leases?: LeaseUncheckedUpdateManyWithoutAlojamientoNestedInput
    solicitudes?: SolicitudUncheckedUpdateManyWithoutAlojamientoNestedInput
    favoritedBy?: InquilinoUncheckedUpdateManyWithoutFavoritosNestedInput
  }

  export type AlojamientoUncheckedUpdateManyWithoutInquilinosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    habitaciones?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    tipoAlojamiento?: EnumTipoAlojamientoFieldUpdateOperationsInput | $Enums.TipoAlojamiento
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    managerCognitoId?: StringFieldUpdateOperationsInput | string
  }

  export type AlojamientoUpdateWithoutFavoritedByInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    habitaciones?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    tipoAlojamiento?: EnumTipoAlojamientoFieldUpdateOperationsInput | $Enums.TipoAlojamiento
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    location?: LocationUpdateOneRequiredWithoutAlojamientosNestedInput
    propietario?: PropietarioUpdateOneRequiredWithoutManagedPropertiesNestedInput
    leases?: LeaseUpdateManyWithoutAlojamientoNestedInput
    solicitudes?: SolicitudUpdateManyWithoutAlojamientoNestedInput
    inquilinos?: InquilinoUpdateManyWithoutAlojamientosNestedInput
  }

  export type AlojamientoUncheckedUpdateWithoutFavoritedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    habitaciones?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    tipoAlojamiento?: EnumTipoAlojamientoFieldUpdateOperationsInput | $Enums.TipoAlojamiento
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    managerCognitoId?: StringFieldUpdateOperationsInput | string
    leases?: LeaseUncheckedUpdateManyWithoutAlojamientoNestedInput
    solicitudes?: SolicitudUncheckedUpdateManyWithoutAlojamientoNestedInput
    inquilinos?: InquilinoUncheckedUpdateManyWithoutAlojamientosNestedInput
  }

  export type AlojamientoUncheckedUpdateManyWithoutFavoritedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    habitaciones?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    tipoAlojamiento?: EnumTipoAlojamientoFieldUpdateOperationsInput | $Enums.TipoAlojamiento
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    managerCognitoId?: StringFieldUpdateOperationsInput | string
  }

  export type SolicitudUpdateWithoutInquilinoInput = {
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoSolicitudFieldUpdateOperationsInput | $Enums.EstadoSolicitud
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    alojamiento?: AlojamientoUpdateOneRequiredWithoutSolicitudesNestedInput
    lease?: LeaseUpdateOneWithoutSolicitudNestedInput
  }

  export type SolicitudUncheckedUpdateWithoutInquilinoInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoSolicitudFieldUpdateOperationsInput | $Enums.EstadoSolicitud
    alojamientoId?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    leaseId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SolicitudUncheckedUpdateManyWithoutInquilinoInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoSolicitudFieldUpdateOperationsInput | $Enums.EstadoSolicitud
    alojamientoId?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    leaseId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LeaseUpdateWithoutInquilinoInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rent?: FloatFieldUpdateOperationsInput | number
    deposit?: FloatFieldUpdateOperationsInput | number
    alojamiento?: AlojamientoUpdateOneRequiredWithoutLeasesNestedInput
    solicitud?: SolicitudUpdateOneWithoutLeaseNestedInput
    payments?: PaymentUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateWithoutInquilinoInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rent?: FloatFieldUpdateOperationsInput | number
    deposit?: FloatFieldUpdateOperationsInput | number
    alojamientoId?: IntFieldUpdateOperationsInput | number
    solicitud?: SolicitudUncheckedUpdateOneWithoutLeaseNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateManyWithoutInquilinoInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rent?: FloatFieldUpdateOperationsInput | number
    deposit?: FloatFieldUpdateOperationsInput | number
    alojamientoId?: IntFieldUpdateOperationsInput | number
  }

  export type AlojamientoUpdateWithoutLocationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    habitaciones?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    tipoAlojamiento?: EnumTipoAlojamientoFieldUpdateOperationsInput | $Enums.TipoAlojamiento
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    propietario?: PropietarioUpdateOneRequiredWithoutManagedPropertiesNestedInput
    leases?: LeaseUpdateManyWithoutAlojamientoNestedInput
    solicitudes?: SolicitudUpdateManyWithoutAlojamientoNestedInput
    favoritedBy?: InquilinoUpdateManyWithoutFavoritosNestedInput
    inquilinos?: InquilinoUpdateManyWithoutAlojamientosNestedInput
  }

  export type AlojamientoUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    habitaciones?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    tipoAlojamiento?: EnumTipoAlojamientoFieldUpdateOperationsInput | $Enums.TipoAlojamiento
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    managerCognitoId?: StringFieldUpdateOperationsInput | string
    leases?: LeaseUncheckedUpdateManyWithoutAlojamientoNestedInput
    solicitudes?: SolicitudUncheckedUpdateManyWithoutAlojamientoNestedInput
    favoritedBy?: InquilinoUncheckedUpdateManyWithoutFavoritosNestedInput
    inquilinos?: InquilinoUncheckedUpdateManyWithoutAlojamientosNestedInput
  }

  export type AlojamientoCreateManyLocationInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    habitaciones: number
    banos: number
    superficie: number
    plazasLibres: number
    tipoAlojamiento: $Enums.TipoAlojamiento
    hayTelevision?: boolean
    hayTelefono?: boolean
    hayInternet?: boolean
    hayTerraza?: boolean
    hayAscensor?: boolean
    hayGaraje?: boolean
    hayLavavajillas?: boolean
    hayHorno?: boolean
    hayMicroondas?: boolean
    hayNevera?: boolean
    hayLavadora?: boolean
    haySecadora?: boolean
    hayPortero?: boolean
    hayMuebles?: boolean
    hayCalefaccion?: boolean
    hayAireAcondicionado?: boolean
    hayGas?: boolean
    hayPiscina?: boolean
    hayZonaComunitaria?: boolean
    hayGimnasio?: boolean
    aguaIncluido?: boolean
    gasIncluido?: boolean
    electricidadIncluido?: boolean
    internetIncluido?: boolean
    photoUrls?: AlojamientoCreatephotoUrlsInput | string[]
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    managerCognitoId: string
  }

  export type AlojamientoUncheckedUpdateManyWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    habitaciones?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    tipoAlojamiento?: EnumTipoAlojamientoFieldUpdateOperationsInput | $Enums.TipoAlojamiento
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    managerCognitoId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateManyLeaseInput = {
    id?: number
    amountDue: number
    amountPaid: number
    dueDate: Date | string
    paymentDate: Date | string
    paymentStatus: $Enums.PaymentStatus
  }

  export type PaymentUpdateWithoutLeaseInput = {
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type PaymentUncheckedUpdateWithoutLeaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type PaymentUncheckedUpdateManyWithoutLeaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}