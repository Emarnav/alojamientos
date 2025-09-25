
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
 * Model Conversacion
 * 
 */
export type Conversacion = $Result.DefaultSelection<Prisma.$ConversacionPayload>
/**
 * Model Mensaje
 * 
 */
export type Mensaje = $Result.DefaultSelection<Prisma.$MensajePayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Notificacion
 * 
 */
export type Notificacion = $Result.DefaultSelection<Prisma.$NotificacionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoNotificacion: {
  NUEVO_MENSAJE: 'NUEVO_MENSAJE',
  NUEVA_CONVERSACION: 'NUEVA_CONVERSACION',
  PROPIEDAD_APROBADA: 'PROPIEDAD_APROBADA',
  PROPIEDAD_RECHAZADA: 'PROPIEDAD_RECHAZADA',
  NUEVA_SOLICITUD: 'NUEVA_SOLICITUD'
};

export type TipoNotificacion = (typeof TipoNotificacion)[keyof typeof TipoNotificacion]


export const TipoUsuario: {
  Propietario: 'Propietario',
  Estudiante: 'Estudiante',
  Admin: 'Admin'
};

export type TipoUsuario = (typeof TipoUsuario)[keyof typeof TipoUsuario]

}

export type TipoNotificacion = $Enums.TipoNotificacion

export const TipoNotificacion: typeof $Enums.TipoNotificacion

export type TipoUsuario = $Enums.TipoUsuario

export const TipoUsuario: typeof $Enums.TipoUsuario

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
   * `prisma.conversacion`: Exposes CRUD operations for the **Conversacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversacions
    * const conversacions = await prisma.conversacion.findMany()
    * ```
    */
  get conversacion(): Prisma.ConversacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mensaje`: Exposes CRUD operations for the **Mensaje** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mensajes
    * const mensajes = await prisma.mensaje.findMany()
    * ```
    */
  get mensaje(): Prisma.MensajeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificacion`: Exposes CRUD operations for the **Notificacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notificacions
    * const notificacions = await prisma.notificacion.findMany()
    * ```
    */
  get notificacion(): Prisma.NotificacionDelegate<ExtArgs, ClientOptions>;
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
    Conversacion: 'Conversacion',
    Mensaje: 'Mensaje',
    Usuario: 'Usuario',
    Notificacion: 'Notificacion'
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
      modelProps: "alojamiento" | "conversacion" | "mensaje" | "usuario" | "notificacion"
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
      Conversacion: {
        payload: Prisma.$ConversacionPayload<ExtArgs>
        fields: Prisma.ConversacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>
          }
          findFirst: {
            args: Prisma.ConversacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>
          }
          findMany: {
            args: Prisma.ConversacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>[]
          }
          create: {
            args: Prisma.ConversacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>
          }
          createMany: {
            args: Prisma.ConversacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>[]
          }
          delete: {
            args: Prisma.ConversacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>
          }
          update: {
            args: Prisma.ConversacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>
          }
          deleteMany: {
            args: Prisma.ConversacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>[]
          }
          upsert: {
            args: Prisma.ConversacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>
          }
          aggregate: {
            args: Prisma.ConversacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversacion>
          }
          groupBy: {
            args: Prisma.ConversacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversacionCountArgs<ExtArgs>
            result: $Utils.Optional<ConversacionCountAggregateOutputType> | number
          }
        }
      }
      Mensaje: {
        payload: Prisma.$MensajePayload<ExtArgs>
        fields: Prisma.MensajeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MensajeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MensajeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          findFirst: {
            args: Prisma.MensajeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MensajeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          findMany: {
            args: Prisma.MensajeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>[]
          }
          create: {
            args: Prisma.MensajeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          createMany: {
            args: Prisma.MensajeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MensajeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>[]
          }
          delete: {
            args: Prisma.MensajeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          update: {
            args: Prisma.MensajeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          deleteMany: {
            args: Prisma.MensajeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MensajeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MensajeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>[]
          }
          upsert: {
            args: Prisma.MensajeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          aggregate: {
            args: Prisma.MensajeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMensaje>
          }
          groupBy: {
            args: Prisma.MensajeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MensajeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MensajeCountArgs<ExtArgs>
            result: $Utils.Optional<MensajeCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Notificacion: {
        payload: Prisma.$NotificacionPayload<ExtArgs>
        fields: Prisma.NotificacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>
          }
          findFirst: {
            args: Prisma.NotificacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>
          }
          findMany: {
            args: Prisma.NotificacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>[]
          }
          create: {
            args: Prisma.NotificacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>
          }
          createMany: {
            args: Prisma.NotificacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>[]
          }
          delete: {
            args: Prisma.NotificacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>
          }
          update: {
            args: Prisma.NotificacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>
          }
          deleteMany: {
            args: Prisma.NotificacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>[]
          }
          upsert: {
            args: Prisma.NotificacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>
          }
          aggregate: {
            args: Prisma.NotificacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificacion>
          }
          groupBy: {
            args: Prisma.NotificacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificacionCountArgs<ExtArgs>
            result: $Utils.Optional<NotificacionCountAggregateOutputType> | number
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
    conversacion?: ConversacionOmit
    mensaje?: MensajeOmit
    usuario?: UsuarioOmit
    notificacion?: NotificacionOmit
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
    conversaciones: number
    notificaciones: number
    favoritedBy: number
  }

  export type AlojamientoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversaciones?: boolean | AlojamientoCountOutputTypeCountConversacionesArgs
    notificaciones?: boolean | AlojamientoCountOutputTypeCountNotificacionesArgs
    favoritedBy?: boolean | AlojamientoCountOutputTypeCountFavoritedByArgs
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
  export type AlojamientoCountOutputTypeCountConversacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversacionWhereInput
  }

  /**
   * AlojamientoCountOutputType without action
   */
  export type AlojamientoCountOutputTypeCountNotificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacionWhereInput
  }

  /**
   * AlojamientoCountOutputType without action
   */
  export type AlojamientoCountOutputTypeCountFavoritedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Count Type ConversacionCountOutputType
   */

  export type ConversacionCountOutputType = {
    mensajes: number
    notificaciones: number
  }

  export type ConversacionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mensajes?: boolean | ConversacionCountOutputTypeCountMensajesArgs
    notificaciones?: boolean | ConversacionCountOutputTypeCountNotificacionesArgs
  }

  // Custom InputTypes
  /**
   * ConversacionCountOutputType without action
   */
  export type ConversacionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversacionCountOutputType
     */
    select?: ConversacionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversacionCountOutputType without action
   */
  export type ConversacionCountOutputTypeCountMensajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensajeWhereInput
  }

  /**
   * ConversacionCountOutputType without action
   */
  export type ConversacionCountOutputTypeCountNotificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacionWhereInput
  }


  /**
   * Count Type MensajeCountOutputType
   */

  export type MensajeCountOutputType = {
    notificaciones: number
  }

  export type MensajeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notificaciones?: boolean | MensajeCountOutputTypeCountNotificacionesArgs
  }

  // Custom InputTypes
  /**
   * MensajeCountOutputType without action
   */
  export type MensajeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensajeCountOutputType
     */
    select?: MensajeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MensajeCountOutputType without action
   */
  export type MensajeCountOutputTypeCountNotificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacionWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    alojamientos: number
    estudianteConversaciones: number
    conversacionesComoPropietario: number
    mensajesRemitidos: number
    notificaciones: number
    alojamientosFavoritos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alojamientos?: boolean | UsuarioCountOutputTypeCountAlojamientosArgs
    estudianteConversaciones?: boolean | UsuarioCountOutputTypeCountEstudianteConversacionesArgs
    conversacionesComoPropietario?: boolean | UsuarioCountOutputTypeCountConversacionesComoPropietarioArgs
    mensajesRemitidos?: boolean | UsuarioCountOutputTypeCountMensajesRemitidosArgs
    notificaciones?: boolean | UsuarioCountOutputTypeCountNotificacionesArgs
    alojamientosFavoritos?: boolean | UsuarioCountOutputTypeCountAlojamientosFavoritosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAlojamientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlojamientoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountEstudianteConversacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversacionWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountConversacionesComoPropietarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversacionWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountMensajesRemitidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensajeWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountNotificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacionWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAlojamientosFavoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlojamientoWhereInput
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
    habitaciones: number | null
    precio: number | null
    superficie: number | null
    plazasLibres: number | null
    banos: number | null
    managerUsuarioId: number | null
  }

  export type AlojamientoSumAggregateOutputType = {
    id: number | null
    habitaciones: number | null
    precio: number | null
    superficie: number | null
    plazasLibres: number | null
    banos: number | null
    managerUsuarioId: number | null
  }

  export type AlojamientoMinAggregateOutputType = {
    id: number | null
    slug: string | null
    estado: string | null
    motivoRechazo: string | null
    postedDate: Date | null
    aguaIncluido: boolean | null
    descripcion: string | null
    electricidadIncluido: boolean | null
    gasIncluido: boolean | null
    habitaciones: number | null
    hayAireAcondicionado: boolean | null
    hayAscensor: boolean | null
    hayCalefaccion: boolean | null
    hayGaraje: boolean | null
    hayGas: boolean | null
    hayGimnasio: boolean | null
    hayHorno: boolean | null
    hayInternet: boolean | null
    hayLavadora: boolean | null
    hayLavavajillas: boolean | null
    hayMicroondas: boolean | null
    hayMuebles: boolean | null
    hayNevera: boolean | null
    hayPiscina: boolean | null
    hayPortero: boolean | null
    haySecadora: boolean | null
    hayTelefono: boolean | null
    hayTelevision: boolean | null
    hayTerraza: boolean | null
    hayZonaComunitaria: boolean | null
    internetIncluido: boolean | null
    nombre: string | null
    precio: number | null
    superficie: number | null
    plazasLibres: number | null
    banos: number | null
    dirigidoA: string | null
    infoExtra: string | null
    esDestacado: boolean | null
    tipoAlojamiento: string | null
    managerUsuarioId: number | null
    direccion: string | null
    ciudad: string | null
    provincia: string | null
    pais: string | null
    codigoPostal: string | null
    portal: string | null
    piso: string | null
    puerta: string | null
  }

  export type AlojamientoMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    estado: string | null
    motivoRechazo: string | null
    postedDate: Date | null
    aguaIncluido: boolean | null
    descripcion: string | null
    electricidadIncluido: boolean | null
    gasIncluido: boolean | null
    habitaciones: number | null
    hayAireAcondicionado: boolean | null
    hayAscensor: boolean | null
    hayCalefaccion: boolean | null
    hayGaraje: boolean | null
    hayGas: boolean | null
    hayGimnasio: boolean | null
    hayHorno: boolean | null
    hayInternet: boolean | null
    hayLavadora: boolean | null
    hayLavavajillas: boolean | null
    hayMicroondas: boolean | null
    hayMuebles: boolean | null
    hayNevera: boolean | null
    hayPiscina: boolean | null
    hayPortero: boolean | null
    haySecadora: boolean | null
    hayTelefono: boolean | null
    hayTelevision: boolean | null
    hayTerraza: boolean | null
    hayZonaComunitaria: boolean | null
    internetIncluido: boolean | null
    nombre: string | null
    precio: number | null
    superficie: number | null
    plazasLibres: number | null
    banos: number | null
    dirigidoA: string | null
    infoExtra: string | null
    esDestacado: boolean | null
    tipoAlojamiento: string | null
    managerUsuarioId: number | null
    direccion: string | null
    ciudad: string | null
    provincia: string | null
    pais: string | null
    codigoPostal: string | null
    portal: string | null
    piso: string | null
    puerta: string | null
  }

  export type AlojamientoCountAggregateOutputType = {
    id: number
    slug: number
    estado: number
    motivoRechazo: number
    photoUrls: number
    postedDate: number
    aguaIncluido: number
    descripcion: number
    electricidadIncluido: number
    gasIncluido: number
    habitaciones: number
    hayAireAcondicionado: number
    hayAscensor: number
    hayCalefaccion: number
    hayGaraje: number
    hayGas: number
    hayGimnasio: number
    hayHorno: number
    hayInternet: number
    hayLavadora: number
    hayLavavajillas: number
    hayMicroondas: number
    hayMuebles: number
    hayNevera: number
    hayPiscina: number
    hayPortero: number
    haySecadora: number
    hayTelefono: number
    hayTelevision: number
    hayTerraza: number
    hayZonaComunitaria: number
    internetIncluido: number
    nombre: number
    precio: number
    superficie: number
    plazasLibres: number
    banos: number
    dirigidoA: number
    infoExtra: number
    esDestacado: number
    tipoAlojamiento: number
    managerUsuarioId: number
    direccion: number
    ciudad: number
    provincia: number
    pais: number
    codigoPostal: number
    portal: number
    piso: number
    puerta: number
    _all: number
  }


  export type AlojamientoAvgAggregateInputType = {
    id?: true
    habitaciones?: true
    precio?: true
    superficie?: true
    plazasLibres?: true
    banos?: true
    managerUsuarioId?: true
  }

  export type AlojamientoSumAggregateInputType = {
    id?: true
    habitaciones?: true
    precio?: true
    superficie?: true
    plazasLibres?: true
    banos?: true
    managerUsuarioId?: true
  }

  export type AlojamientoMinAggregateInputType = {
    id?: true
    slug?: true
    estado?: true
    motivoRechazo?: true
    postedDate?: true
    aguaIncluido?: true
    descripcion?: true
    electricidadIncluido?: true
    gasIncluido?: true
    habitaciones?: true
    hayAireAcondicionado?: true
    hayAscensor?: true
    hayCalefaccion?: true
    hayGaraje?: true
    hayGas?: true
    hayGimnasio?: true
    hayHorno?: true
    hayInternet?: true
    hayLavadora?: true
    hayLavavajillas?: true
    hayMicroondas?: true
    hayMuebles?: true
    hayNevera?: true
    hayPiscina?: true
    hayPortero?: true
    haySecadora?: true
    hayTelefono?: true
    hayTelevision?: true
    hayTerraza?: true
    hayZonaComunitaria?: true
    internetIncluido?: true
    nombre?: true
    precio?: true
    superficie?: true
    plazasLibres?: true
    banos?: true
    dirigidoA?: true
    infoExtra?: true
    esDestacado?: true
    tipoAlojamiento?: true
    managerUsuarioId?: true
    direccion?: true
    ciudad?: true
    provincia?: true
    pais?: true
    codigoPostal?: true
    portal?: true
    piso?: true
    puerta?: true
  }

  export type AlojamientoMaxAggregateInputType = {
    id?: true
    slug?: true
    estado?: true
    motivoRechazo?: true
    postedDate?: true
    aguaIncluido?: true
    descripcion?: true
    electricidadIncluido?: true
    gasIncluido?: true
    habitaciones?: true
    hayAireAcondicionado?: true
    hayAscensor?: true
    hayCalefaccion?: true
    hayGaraje?: true
    hayGas?: true
    hayGimnasio?: true
    hayHorno?: true
    hayInternet?: true
    hayLavadora?: true
    hayLavavajillas?: true
    hayMicroondas?: true
    hayMuebles?: true
    hayNevera?: true
    hayPiscina?: true
    hayPortero?: true
    haySecadora?: true
    hayTelefono?: true
    hayTelevision?: true
    hayTerraza?: true
    hayZonaComunitaria?: true
    internetIncluido?: true
    nombre?: true
    precio?: true
    superficie?: true
    plazasLibres?: true
    banos?: true
    dirigidoA?: true
    infoExtra?: true
    esDestacado?: true
    tipoAlojamiento?: true
    managerUsuarioId?: true
    direccion?: true
    ciudad?: true
    provincia?: true
    pais?: true
    codigoPostal?: true
    portal?: true
    piso?: true
    puerta?: true
  }

  export type AlojamientoCountAggregateInputType = {
    id?: true
    slug?: true
    estado?: true
    motivoRechazo?: true
    photoUrls?: true
    postedDate?: true
    aguaIncluido?: true
    descripcion?: true
    electricidadIncluido?: true
    gasIncluido?: true
    habitaciones?: true
    hayAireAcondicionado?: true
    hayAscensor?: true
    hayCalefaccion?: true
    hayGaraje?: true
    hayGas?: true
    hayGimnasio?: true
    hayHorno?: true
    hayInternet?: true
    hayLavadora?: true
    hayLavavajillas?: true
    hayMicroondas?: true
    hayMuebles?: true
    hayNevera?: true
    hayPiscina?: true
    hayPortero?: true
    haySecadora?: true
    hayTelefono?: true
    hayTelevision?: true
    hayTerraza?: true
    hayZonaComunitaria?: true
    internetIncluido?: true
    nombre?: true
    precio?: true
    superficie?: true
    plazasLibres?: true
    banos?: true
    dirigidoA?: true
    infoExtra?: true
    esDestacado?: true
    tipoAlojamiento?: true
    managerUsuarioId?: true
    direccion?: true
    ciudad?: true
    provincia?: true
    pais?: true
    codigoPostal?: true
    portal?: true
    piso?: true
    puerta?: true
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
    slug: string
    estado: string
    motivoRechazo: string | null
    photoUrls: string[]
    postedDate: Date
    aguaIncluido: boolean
    descripcion: string
    electricidadIncluido: boolean
    gasIncluido: boolean
    habitaciones: number
    hayAireAcondicionado: boolean
    hayAscensor: boolean
    hayCalefaccion: boolean
    hayGaraje: boolean
    hayGas: boolean
    hayGimnasio: boolean
    hayHorno: boolean
    hayInternet: boolean
    hayLavadora: boolean
    hayLavavajillas: boolean
    hayMicroondas: boolean
    hayMuebles: boolean
    hayNevera: boolean
    hayPiscina: boolean
    hayPortero: boolean
    haySecadora: boolean
    hayTelefono: boolean
    hayTelevision: boolean
    hayTerraza: boolean
    hayZonaComunitaria: boolean
    internetIncluido: boolean
    nombre: string
    precio: number
    superficie: number
    plazasLibres: number
    banos: number
    dirigidoA: string
    infoExtra: string
    esDestacado: boolean
    tipoAlojamiento: string
    managerUsuarioId: number
    direccion: string | null
    ciudad: string | null
    provincia: string | null
    pais: string | null
    codigoPostal: string | null
    portal: string | null
    piso: string | null
    puerta: string | null
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
    slug?: boolean
    estado?: boolean
    motivoRechazo?: boolean
    photoUrls?: boolean
    postedDate?: boolean
    aguaIncluido?: boolean
    descripcion?: boolean
    electricidadIncluido?: boolean
    gasIncluido?: boolean
    habitaciones?: boolean
    hayAireAcondicionado?: boolean
    hayAscensor?: boolean
    hayCalefaccion?: boolean
    hayGaraje?: boolean
    hayGas?: boolean
    hayGimnasio?: boolean
    hayHorno?: boolean
    hayInternet?: boolean
    hayLavadora?: boolean
    hayLavavajillas?: boolean
    hayMicroondas?: boolean
    hayMuebles?: boolean
    hayNevera?: boolean
    hayPiscina?: boolean
    hayPortero?: boolean
    haySecadora?: boolean
    hayTelefono?: boolean
    hayTelevision?: boolean
    hayTerraza?: boolean
    hayZonaComunitaria?: boolean
    internetIncluido?: boolean
    nombre?: boolean
    precio?: boolean
    superficie?: boolean
    plazasLibres?: boolean
    banos?: boolean
    dirigidoA?: boolean
    infoExtra?: boolean
    esDestacado?: boolean
    tipoAlojamiento?: boolean
    managerUsuarioId?: boolean
    direccion?: boolean
    ciudad?: boolean
    provincia?: boolean
    pais?: boolean
    codigoPostal?: boolean
    portal?: boolean
    piso?: boolean
    puerta?: boolean
    propietario?: boolean | UsuarioDefaultArgs<ExtArgs>
    conversaciones?: boolean | Alojamiento$conversacionesArgs<ExtArgs>
    notificaciones?: boolean | Alojamiento$notificacionesArgs<ExtArgs>
    favoritedBy?: boolean | Alojamiento$favoritedByArgs<ExtArgs>
    _count?: boolean | AlojamientoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alojamiento"]>

  export type AlojamientoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    estado?: boolean
    motivoRechazo?: boolean
    photoUrls?: boolean
    postedDate?: boolean
    aguaIncluido?: boolean
    descripcion?: boolean
    electricidadIncluido?: boolean
    gasIncluido?: boolean
    habitaciones?: boolean
    hayAireAcondicionado?: boolean
    hayAscensor?: boolean
    hayCalefaccion?: boolean
    hayGaraje?: boolean
    hayGas?: boolean
    hayGimnasio?: boolean
    hayHorno?: boolean
    hayInternet?: boolean
    hayLavadora?: boolean
    hayLavavajillas?: boolean
    hayMicroondas?: boolean
    hayMuebles?: boolean
    hayNevera?: boolean
    hayPiscina?: boolean
    hayPortero?: boolean
    haySecadora?: boolean
    hayTelefono?: boolean
    hayTelevision?: boolean
    hayTerraza?: boolean
    hayZonaComunitaria?: boolean
    internetIncluido?: boolean
    nombre?: boolean
    precio?: boolean
    superficie?: boolean
    plazasLibres?: boolean
    banos?: boolean
    dirigidoA?: boolean
    infoExtra?: boolean
    esDestacado?: boolean
    tipoAlojamiento?: boolean
    managerUsuarioId?: boolean
    direccion?: boolean
    ciudad?: boolean
    provincia?: boolean
    pais?: boolean
    codigoPostal?: boolean
    portal?: boolean
    piso?: boolean
    puerta?: boolean
    propietario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alojamiento"]>

  export type AlojamientoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    estado?: boolean
    motivoRechazo?: boolean
    photoUrls?: boolean
    postedDate?: boolean
    aguaIncluido?: boolean
    descripcion?: boolean
    electricidadIncluido?: boolean
    gasIncluido?: boolean
    habitaciones?: boolean
    hayAireAcondicionado?: boolean
    hayAscensor?: boolean
    hayCalefaccion?: boolean
    hayGaraje?: boolean
    hayGas?: boolean
    hayGimnasio?: boolean
    hayHorno?: boolean
    hayInternet?: boolean
    hayLavadora?: boolean
    hayLavavajillas?: boolean
    hayMicroondas?: boolean
    hayMuebles?: boolean
    hayNevera?: boolean
    hayPiscina?: boolean
    hayPortero?: boolean
    haySecadora?: boolean
    hayTelefono?: boolean
    hayTelevision?: boolean
    hayTerraza?: boolean
    hayZonaComunitaria?: boolean
    internetIncluido?: boolean
    nombre?: boolean
    precio?: boolean
    superficie?: boolean
    plazasLibres?: boolean
    banos?: boolean
    dirigidoA?: boolean
    infoExtra?: boolean
    esDestacado?: boolean
    tipoAlojamiento?: boolean
    managerUsuarioId?: boolean
    direccion?: boolean
    ciudad?: boolean
    provincia?: boolean
    pais?: boolean
    codigoPostal?: boolean
    portal?: boolean
    piso?: boolean
    puerta?: boolean
    propietario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alojamiento"]>

  export type AlojamientoSelectScalar = {
    id?: boolean
    slug?: boolean
    estado?: boolean
    motivoRechazo?: boolean
    photoUrls?: boolean
    postedDate?: boolean
    aguaIncluido?: boolean
    descripcion?: boolean
    electricidadIncluido?: boolean
    gasIncluido?: boolean
    habitaciones?: boolean
    hayAireAcondicionado?: boolean
    hayAscensor?: boolean
    hayCalefaccion?: boolean
    hayGaraje?: boolean
    hayGas?: boolean
    hayGimnasio?: boolean
    hayHorno?: boolean
    hayInternet?: boolean
    hayLavadora?: boolean
    hayLavavajillas?: boolean
    hayMicroondas?: boolean
    hayMuebles?: boolean
    hayNevera?: boolean
    hayPiscina?: boolean
    hayPortero?: boolean
    haySecadora?: boolean
    hayTelefono?: boolean
    hayTelevision?: boolean
    hayTerraza?: boolean
    hayZonaComunitaria?: boolean
    internetIncluido?: boolean
    nombre?: boolean
    precio?: boolean
    superficie?: boolean
    plazasLibres?: boolean
    banos?: boolean
    dirigidoA?: boolean
    infoExtra?: boolean
    esDestacado?: boolean
    tipoAlojamiento?: boolean
    managerUsuarioId?: boolean
    direccion?: boolean
    ciudad?: boolean
    provincia?: boolean
    pais?: boolean
    codigoPostal?: boolean
    portal?: boolean
    piso?: boolean
    puerta?: boolean
  }

  export type AlojamientoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "estado" | "motivoRechazo" | "photoUrls" | "postedDate" | "aguaIncluido" | "descripcion" | "electricidadIncluido" | "gasIncluido" | "habitaciones" | "hayAireAcondicionado" | "hayAscensor" | "hayCalefaccion" | "hayGaraje" | "hayGas" | "hayGimnasio" | "hayHorno" | "hayInternet" | "hayLavadora" | "hayLavavajillas" | "hayMicroondas" | "hayMuebles" | "hayNevera" | "hayPiscina" | "hayPortero" | "haySecadora" | "hayTelefono" | "hayTelevision" | "hayTerraza" | "hayZonaComunitaria" | "internetIncluido" | "nombre" | "precio" | "superficie" | "plazasLibres" | "banos" | "dirigidoA" | "infoExtra" | "esDestacado" | "tipoAlojamiento" | "managerUsuarioId" | "direccion" | "ciudad" | "provincia" | "pais" | "codigoPostal" | "portal" | "piso" | "puerta", ExtArgs["result"]["alojamiento"]>
  export type AlojamientoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propietario?: boolean | UsuarioDefaultArgs<ExtArgs>
    conversaciones?: boolean | Alojamiento$conversacionesArgs<ExtArgs>
    notificaciones?: boolean | Alojamiento$notificacionesArgs<ExtArgs>
    favoritedBy?: boolean | Alojamiento$favoritedByArgs<ExtArgs>
    _count?: boolean | AlojamientoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlojamientoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propietario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type AlojamientoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propietario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $AlojamientoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alojamiento"
    objects: {
      propietario: Prisma.$UsuarioPayload<ExtArgs>
      conversaciones: Prisma.$ConversacionPayload<ExtArgs>[]
      notificaciones: Prisma.$NotificacionPayload<ExtArgs>[]
      favoritedBy: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slug: string
      estado: string
      motivoRechazo: string | null
      photoUrls: string[]
      postedDate: Date
      aguaIncluido: boolean
      descripcion: string
      electricidadIncluido: boolean
      gasIncluido: boolean
      habitaciones: number
      hayAireAcondicionado: boolean
      hayAscensor: boolean
      hayCalefaccion: boolean
      hayGaraje: boolean
      hayGas: boolean
      hayGimnasio: boolean
      hayHorno: boolean
      hayInternet: boolean
      hayLavadora: boolean
      hayLavavajillas: boolean
      hayMicroondas: boolean
      hayMuebles: boolean
      hayNevera: boolean
      hayPiscina: boolean
      hayPortero: boolean
      haySecadora: boolean
      hayTelefono: boolean
      hayTelevision: boolean
      hayTerraza: boolean
      hayZonaComunitaria: boolean
      internetIncluido: boolean
      nombre: string
      precio: number
      superficie: number
      plazasLibres: number
      banos: number
      dirigidoA: string
      infoExtra: string
      esDestacado: boolean
      tipoAlojamiento: string
      managerUsuarioId: number
      direccion: string | null
      ciudad: string | null
      provincia: string | null
      pais: string | null
      codigoPostal: string | null
      portal: string | null
      piso: string | null
      puerta: string | null
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
    propietario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    conversaciones<T extends Alojamiento$conversacionesArgs<ExtArgs> = {}>(args?: Subset<T, Alojamiento$conversacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    notificaciones<T extends Alojamiento$notificacionesArgs<ExtArgs> = {}>(args?: Subset<T, Alojamiento$notificacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    favoritedBy<T extends Alojamiento$favoritedByArgs<ExtArgs> = {}>(args?: Subset<T, Alojamiento$favoritedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
    readonly slug: FieldRef<"Alojamiento", 'String'>
    readonly estado: FieldRef<"Alojamiento", 'String'>
    readonly motivoRechazo: FieldRef<"Alojamiento", 'String'>
    readonly photoUrls: FieldRef<"Alojamiento", 'String[]'>
    readonly postedDate: FieldRef<"Alojamiento", 'DateTime'>
    readonly aguaIncluido: FieldRef<"Alojamiento", 'Boolean'>
    readonly descripcion: FieldRef<"Alojamiento", 'String'>
    readonly electricidadIncluido: FieldRef<"Alojamiento", 'Boolean'>
    readonly gasIncluido: FieldRef<"Alojamiento", 'Boolean'>
    readonly habitaciones: FieldRef<"Alojamiento", 'Int'>
    readonly hayAireAcondicionado: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayAscensor: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayCalefaccion: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayGaraje: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayGas: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayGimnasio: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayHorno: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayInternet: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayLavadora: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayLavavajillas: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayMicroondas: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayMuebles: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayNevera: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayPiscina: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayPortero: FieldRef<"Alojamiento", 'Boolean'>
    readonly haySecadora: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayTelefono: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayTelevision: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayTerraza: FieldRef<"Alojamiento", 'Boolean'>
    readonly hayZonaComunitaria: FieldRef<"Alojamiento", 'Boolean'>
    readonly internetIncluido: FieldRef<"Alojamiento", 'Boolean'>
    readonly nombre: FieldRef<"Alojamiento", 'String'>
    readonly precio: FieldRef<"Alojamiento", 'Float'>
    readonly superficie: FieldRef<"Alojamiento", 'Int'>
    readonly plazasLibres: FieldRef<"Alojamiento", 'Int'>
    readonly banos: FieldRef<"Alojamiento", 'Float'>
    readonly dirigidoA: FieldRef<"Alojamiento", 'String'>
    readonly infoExtra: FieldRef<"Alojamiento", 'String'>
    readonly esDestacado: FieldRef<"Alojamiento", 'Boolean'>
    readonly tipoAlojamiento: FieldRef<"Alojamiento", 'String'>
    readonly managerUsuarioId: FieldRef<"Alojamiento", 'Int'>
    readonly direccion: FieldRef<"Alojamiento", 'String'>
    readonly ciudad: FieldRef<"Alojamiento", 'String'>
    readonly provincia: FieldRef<"Alojamiento", 'String'>
    readonly pais: FieldRef<"Alojamiento", 'String'>
    readonly codigoPostal: FieldRef<"Alojamiento", 'String'>
    readonly portal: FieldRef<"Alojamiento", 'String'>
    readonly piso: FieldRef<"Alojamiento", 'String'>
    readonly puerta: FieldRef<"Alojamiento", 'String'>
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
   * Alojamiento.conversaciones
   */
  export type Alojamiento$conversacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    where?: ConversacionWhereInput
    orderBy?: ConversacionOrderByWithRelationInput | ConversacionOrderByWithRelationInput[]
    cursor?: ConversacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversacionScalarFieldEnum | ConversacionScalarFieldEnum[]
  }

  /**
   * Alojamiento.notificaciones
   */
  export type Alojamiento$notificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    where?: NotificacionWhereInput
    orderBy?: NotificacionOrderByWithRelationInput | NotificacionOrderByWithRelationInput[]
    cursor?: NotificacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * Alojamiento.favoritedBy
   */
  export type Alojamiento$favoritedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
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
   * Model Conversacion
   */

  export type AggregateConversacion = {
    _count: ConversacionCountAggregateOutputType | null
    _avg: ConversacionAvgAggregateOutputType | null
    _sum: ConversacionSumAggregateOutputType | null
    _min: ConversacionMinAggregateOutputType | null
    _max: ConversacionMaxAggregateOutputType | null
  }

  export type ConversacionAvgAggregateOutputType = {
    id: number | null
    alojamientoId: number | null
    estudianteId: number | null
    propietarioId: number | null
    ultimoMensajeId: number | null
  }

  export type ConversacionSumAggregateOutputType = {
    id: number | null
    alojamientoId: number | null
    estudianteId: number | null
    propietarioId: number | null
    ultimoMensajeId: number | null
  }

  export type ConversacionMinAggregateOutputType = {
    id: number | null
    alojamientoId: number | null
    createdAt: Date | null
    estudianteId: number | null
    propietarioId: number | null
    ultimoMensajeId: number | null
    estudianteVistoUltimo: boolean | null
    propietarioVistoUltimo: boolean | null
    esConversacionAdmin: boolean | null
  }

  export type ConversacionMaxAggregateOutputType = {
    id: number | null
    alojamientoId: number | null
    createdAt: Date | null
    estudianteId: number | null
    propietarioId: number | null
    ultimoMensajeId: number | null
    estudianteVistoUltimo: boolean | null
    propietarioVistoUltimo: boolean | null
    esConversacionAdmin: boolean | null
  }

  export type ConversacionCountAggregateOutputType = {
    id: number
    alojamientoId: number
    createdAt: number
    estudianteId: number
    propietarioId: number
    ultimoMensajeId: number
    estudianteVistoUltimo: number
    propietarioVistoUltimo: number
    esConversacionAdmin: number
    _all: number
  }


  export type ConversacionAvgAggregateInputType = {
    id?: true
    alojamientoId?: true
    estudianteId?: true
    propietarioId?: true
    ultimoMensajeId?: true
  }

  export type ConversacionSumAggregateInputType = {
    id?: true
    alojamientoId?: true
    estudianteId?: true
    propietarioId?: true
    ultimoMensajeId?: true
  }

  export type ConversacionMinAggregateInputType = {
    id?: true
    alojamientoId?: true
    createdAt?: true
    estudianteId?: true
    propietarioId?: true
    ultimoMensajeId?: true
    estudianteVistoUltimo?: true
    propietarioVistoUltimo?: true
    esConversacionAdmin?: true
  }

  export type ConversacionMaxAggregateInputType = {
    id?: true
    alojamientoId?: true
    createdAt?: true
    estudianteId?: true
    propietarioId?: true
    ultimoMensajeId?: true
    estudianteVistoUltimo?: true
    propietarioVistoUltimo?: true
    esConversacionAdmin?: true
  }

  export type ConversacionCountAggregateInputType = {
    id?: true
    alojamientoId?: true
    createdAt?: true
    estudianteId?: true
    propietarioId?: true
    ultimoMensajeId?: true
    estudianteVistoUltimo?: true
    propietarioVistoUltimo?: true
    esConversacionAdmin?: true
    _all?: true
  }

  export type ConversacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversacion to aggregate.
     */
    where?: ConversacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversacions to fetch.
     */
    orderBy?: ConversacionOrderByWithRelationInput | ConversacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversacions
    **/
    _count?: true | ConversacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConversacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConversacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversacionMaxAggregateInputType
  }

  export type GetConversacionAggregateType<T extends ConversacionAggregateArgs> = {
        [P in keyof T & keyof AggregateConversacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversacion[P]>
      : GetScalarType<T[P], AggregateConversacion[P]>
  }




  export type ConversacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversacionWhereInput
    orderBy?: ConversacionOrderByWithAggregationInput | ConversacionOrderByWithAggregationInput[]
    by: ConversacionScalarFieldEnum[] | ConversacionScalarFieldEnum
    having?: ConversacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversacionCountAggregateInputType | true
    _avg?: ConversacionAvgAggregateInputType
    _sum?: ConversacionSumAggregateInputType
    _min?: ConversacionMinAggregateInputType
    _max?: ConversacionMaxAggregateInputType
  }

  export type ConversacionGroupByOutputType = {
    id: number
    alojamientoId: number | null
    createdAt: Date
    estudianteId: number
    propietarioId: number
    ultimoMensajeId: number | null
    estudianteVistoUltimo: boolean
    propietarioVistoUltimo: boolean
    esConversacionAdmin: boolean
    _count: ConversacionCountAggregateOutputType | null
    _avg: ConversacionAvgAggregateOutputType | null
    _sum: ConversacionSumAggregateOutputType | null
    _min: ConversacionMinAggregateOutputType | null
    _max: ConversacionMaxAggregateOutputType | null
  }

  type GetConversacionGroupByPayload<T extends ConversacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversacionGroupByOutputType[P]>
            : GetScalarType<T[P], ConversacionGroupByOutputType[P]>
        }
      >
    >


  export type ConversacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alojamientoId?: boolean
    createdAt?: boolean
    estudianteId?: boolean
    propietarioId?: boolean
    ultimoMensajeId?: boolean
    estudianteVistoUltimo?: boolean
    propietarioVistoUltimo?: boolean
    esConversacionAdmin?: boolean
    alojamiento?: boolean | Conversacion$alojamientoArgs<ExtArgs>
    estudiante?: boolean | UsuarioDefaultArgs<ExtArgs>
    propietario?: boolean | UsuarioDefaultArgs<ExtArgs>
    mensajes?: boolean | Conversacion$mensajesArgs<ExtArgs>
    notificaciones?: boolean | Conversacion$notificacionesArgs<ExtArgs>
    _count?: boolean | ConversacionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversacion"]>

  export type ConversacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alojamientoId?: boolean
    createdAt?: boolean
    estudianteId?: boolean
    propietarioId?: boolean
    ultimoMensajeId?: boolean
    estudianteVistoUltimo?: boolean
    propietarioVistoUltimo?: boolean
    esConversacionAdmin?: boolean
    alojamiento?: boolean | Conversacion$alojamientoArgs<ExtArgs>
    estudiante?: boolean | UsuarioDefaultArgs<ExtArgs>
    propietario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversacion"]>

  export type ConversacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alojamientoId?: boolean
    createdAt?: boolean
    estudianteId?: boolean
    propietarioId?: boolean
    ultimoMensajeId?: boolean
    estudianteVistoUltimo?: boolean
    propietarioVistoUltimo?: boolean
    esConversacionAdmin?: boolean
    alojamiento?: boolean | Conversacion$alojamientoArgs<ExtArgs>
    estudiante?: boolean | UsuarioDefaultArgs<ExtArgs>
    propietario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversacion"]>

  export type ConversacionSelectScalar = {
    id?: boolean
    alojamientoId?: boolean
    createdAt?: boolean
    estudianteId?: boolean
    propietarioId?: boolean
    ultimoMensajeId?: boolean
    estudianteVistoUltimo?: boolean
    propietarioVistoUltimo?: boolean
    esConversacionAdmin?: boolean
  }

  export type ConversacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alojamientoId" | "createdAt" | "estudianteId" | "propietarioId" | "ultimoMensajeId" | "estudianteVistoUltimo" | "propietarioVistoUltimo" | "esConversacionAdmin", ExtArgs["result"]["conversacion"]>
  export type ConversacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alojamiento?: boolean | Conversacion$alojamientoArgs<ExtArgs>
    estudiante?: boolean | UsuarioDefaultArgs<ExtArgs>
    propietario?: boolean | UsuarioDefaultArgs<ExtArgs>
    mensajes?: boolean | Conversacion$mensajesArgs<ExtArgs>
    notificaciones?: boolean | Conversacion$notificacionesArgs<ExtArgs>
    _count?: boolean | ConversacionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConversacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alojamiento?: boolean | Conversacion$alojamientoArgs<ExtArgs>
    estudiante?: boolean | UsuarioDefaultArgs<ExtArgs>
    propietario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ConversacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alojamiento?: boolean | Conversacion$alojamientoArgs<ExtArgs>
    estudiante?: boolean | UsuarioDefaultArgs<ExtArgs>
    propietario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ConversacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversacion"
    objects: {
      alojamiento: Prisma.$AlojamientoPayload<ExtArgs> | null
      estudiante: Prisma.$UsuarioPayload<ExtArgs>
      propietario: Prisma.$UsuarioPayload<ExtArgs>
      mensajes: Prisma.$MensajePayload<ExtArgs>[]
      notificaciones: Prisma.$NotificacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      alojamientoId: number | null
      createdAt: Date
      estudianteId: number
      propietarioId: number
      ultimoMensajeId: number | null
      estudianteVistoUltimo: boolean
      propietarioVistoUltimo: boolean
      esConversacionAdmin: boolean
    }, ExtArgs["result"]["conversacion"]>
    composites: {}
  }

  type ConversacionGetPayload<S extends boolean | null | undefined | ConversacionDefaultArgs> = $Result.GetResult<Prisma.$ConversacionPayload, S>

  type ConversacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversacionCountAggregateInputType | true
    }

  export interface ConversacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversacion'], meta: { name: 'Conversacion' } }
    /**
     * Find zero or one Conversacion that matches the filter.
     * @param {ConversacionFindUniqueArgs} args - Arguments to find a Conversacion
     * @example
     * // Get one Conversacion
     * const conversacion = await prisma.conversacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversacionFindUniqueArgs>(args: SelectSubset<T, ConversacionFindUniqueArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Conversacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversacionFindUniqueOrThrowArgs} args - Arguments to find a Conversacion
     * @example
     * // Get one Conversacion
     * const conversacion = await prisma.conversacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversacionFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Conversacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionFindFirstArgs} args - Arguments to find a Conversacion
     * @example
     * // Get one Conversacion
     * const conversacion = await prisma.conversacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversacionFindFirstArgs>(args?: SelectSubset<T, ConversacionFindFirstArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Conversacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionFindFirstOrThrowArgs} args - Arguments to find a Conversacion
     * @example
     * // Get one Conversacion
     * const conversacion = await prisma.conversacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversacionFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Conversacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversacions
     * const conversacions = await prisma.conversacion.findMany()
     * 
     * // Get first 10 Conversacions
     * const conversacions = await prisma.conversacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversacionWithIdOnly = await prisma.conversacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversacionFindManyArgs>(args?: SelectSubset<T, ConversacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Conversacion.
     * @param {ConversacionCreateArgs} args - Arguments to create a Conversacion.
     * @example
     * // Create one Conversacion
     * const Conversacion = await prisma.conversacion.create({
     *   data: {
     *     // ... data to create a Conversacion
     *   }
     * })
     * 
     */
    create<T extends ConversacionCreateArgs>(args: SelectSubset<T, ConversacionCreateArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Conversacions.
     * @param {ConversacionCreateManyArgs} args - Arguments to create many Conversacions.
     * @example
     * // Create many Conversacions
     * const conversacion = await prisma.conversacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversacionCreateManyArgs>(args?: SelectSubset<T, ConversacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conversacions and returns the data saved in the database.
     * @param {ConversacionCreateManyAndReturnArgs} args - Arguments to create many Conversacions.
     * @example
     * // Create many Conversacions
     * const conversacion = await prisma.conversacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conversacions and only return the `id`
     * const conversacionWithIdOnly = await prisma.conversacion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversacionCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Conversacion.
     * @param {ConversacionDeleteArgs} args - Arguments to delete one Conversacion.
     * @example
     * // Delete one Conversacion
     * const Conversacion = await prisma.conversacion.delete({
     *   where: {
     *     // ... filter to delete one Conversacion
     *   }
     * })
     * 
     */
    delete<T extends ConversacionDeleteArgs>(args: SelectSubset<T, ConversacionDeleteArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Conversacion.
     * @param {ConversacionUpdateArgs} args - Arguments to update one Conversacion.
     * @example
     * // Update one Conversacion
     * const conversacion = await prisma.conversacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversacionUpdateArgs>(args: SelectSubset<T, ConversacionUpdateArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Conversacions.
     * @param {ConversacionDeleteManyArgs} args - Arguments to filter Conversacions to delete.
     * @example
     * // Delete a few Conversacions
     * const { count } = await prisma.conversacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversacionDeleteManyArgs>(args?: SelectSubset<T, ConversacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversacions
     * const conversacion = await prisma.conversacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversacionUpdateManyArgs>(args: SelectSubset<T, ConversacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversacions and returns the data updated in the database.
     * @param {ConversacionUpdateManyAndReturnArgs} args - Arguments to update many Conversacions.
     * @example
     * // Update many Conversacions
     * const conversacion = await prisma.conversacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conversacions and only return the `id`
     * const conversacionWithIdOnly = await prisma.conversacion.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConversacionUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Conversacion.
     * @param {ConversacionUpsertArgs} args - Arguments to update or create a Conversacion.
     * @example
     * // Update or create a Conversacion
     * const conversacion = await prisma.conversacion.upsert({
     *   create: {
     *     // ... data to create a Conversacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversacion we want to update
     *   }
     * })
     */
    upsert<T extends ConversacionUpsertArgs>(args: SelectSubset<T, ConversacionUpsertArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Conversacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionCountArgs} args - Arguments to filter Conversacions to count.
     * @example
     * // Count the number of Conversacions
     * const count = await prisma.conversacion.count({
     *   where: {
     *     // ... the filter for the Conversacions we want to count
     *   }
     * })
    **/
    count<T extends ConversacionCountArgs>(
      args?: Subset<T, ConversacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversacionAggregateArgs>(args: Subset<T, ConversacionAggregateArgs>): Prisma.PrismaPromise<GetConversacionAggregateType<T>>

    /**
     * Group by Conversacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionGroupByArgs} args - Group by arguments.
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
      T extends ConversacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversacionGroupByArgs['orderBy'] }
        : { orderBy?: ConversacionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConversacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversacion model
   */
  readonly fields: ConversacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alojamiento<T extends Conversacion$alojamientoArgs<ExtArgs> = {}>(args?: Subset<T, Conversacion$alojamientoArgs<ExtArgs>>): Prisma__AlojamientoClient<$Result.GetResult<Prisma.$AlojamientoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    estudiante<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    propietario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    mensajes<T extends Conversacion$mensajesArgs<ExtArgs> = {}>(args?: Subset<T, Conversacion$mensajesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    notificaciones<T extends Conversacion$notificacionesArgs<ExtArgs> = {}>(args?: Subset<T, Conversacion$notificacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Conversacion model
   */ 
  interface ConversacionFieldRefs {
    readonly id: FieldRef<"Conversacion", 'Int'>
    readonly alojamientoId: FieldRef<"Conversacion", 'Int'>
    readonly createdAt: FieldRef<"Conversacion", 'DateTime'>
    readonly estudianteId: FieldRef<"Conversacion", 'Int'>
    readonly propietarioId: FieldRef<"Conversacion", 'Int'>
    readonly ultimoMensajeId: FieldRef<"Conversacion", 'Int'>
    readonly estudianteVistoUltimo: FieldRef<"Conversacion", 'Boolean'>
    readonly propietarioVistoUltimo: FieldRef<"Conversacion", 'Boolean'>
    readonly esConversacionAdmin: FieldRef<"Conversacion", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Conversacion findUnique
   */
  export type ConversacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * Filter, which Conversacion to fetch.
     */
    where: ConversacionWhereUniqueInput
  }

  /**
   * Conversacion findUniqueOrThrow
   */
  export type ConversacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * Filter, which Conversacion to fetch.
     */
    where: ConversacionWhereUniqueInput
  }

  /**
   * Conversacion findFirst
   */
  export type ConversacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * Filter, which Conversacion to fetch.
     */
    where?: ConversacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversacions to fetch.
     */
    orderBy?: ConversacionOrderByWithRelationInput | ConversacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversacions.
     */
    cursor?: ConversacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversacions.
     */
    distinct?: ConversacionScalarFieldEnum | ConversacionScalarFieldEnum[]
  }

  /**
   * Conversacion findFirstOrThrow
   */
  export type ConversacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * Filter, which Conversacion to fetch.
     */
    where?: ConversacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversacions to fetch.
     */
    orderBy?: ConversacionOrderByWithRelationInput | ConversacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversacions.
     */
    cursor?: ConversacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversacions.
     */
    distinct?: ConversacionScalarFieldEnum | ConversacionScalarFieldEnum[]
  }

  /**
   * Conversacion findMany
   */
  export type ConversacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * Filter, which Conversacions to fetch.
     */
    where?: ConversacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversacions to fetch.
     */
    orderBy?: ConversacionOrderByWithRelationInput | ConversacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversacions.
     */
    cursor?: ConversacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversacions.
     */
    skip?: number
    distinct?: ConversacionScalarFieldEnum | ConversacionScalarFieldEnum[]
  }

  /**
   * Conversacion create
   */
  export type ConversacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversacion.
     */
    data: XOR<ConversacionCreateInput, ConversacionUncheckedCreateInput>
  }

  /**
   * Conversacion createMany
   */
  export type ConversacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversacions.
     */
    data: ConversacionCreateManyInput | ConversacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conversacion createManyAndReturn
   */
  export type ConversacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * The data used to create many Conversacions.
     */
    data: ConversacionCreateManyInput | ConversacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversacion update
   */
  export type ConversacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversacion.
     */
    data: XOR<ConversacionUpdateInput, ConversacionUncheckedUpdateInput>
    /**
     * Choose, which Conversacion to update.
     */
    where: ConversacionWhereUniqueInput
  }

  /**
   * Conversacion updateMany
   */
  export type ConversacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversacions.
     */
    data: XOR<ConversacionUpdateManyMutationInput, ConversacionUncheckedUpdateManyInput>
    /**
     * Filter which Conversacions to update
     */
    where?: ConversacionWhereInput
    /**
     * Limit how many Conversacions to update.
     */
    limit?: number
  }

  /**
   * Conversacion updateManyAndReturn
   */
  export type ConversacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * The data used to update Conversacions.
     */
    data: XOR<ConversacionUpdateManyMutationInput, ConversacionUncheckedUpdateManyInput>
    /**
     * Filter which Conversacions to update
     */
    where?: ConversacionWhereInput
    /**
     * Limit how many Conversacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversacion upsert
   */
  export type ConversacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversacion to update in case it exists.
     */
    where: ConversacionWhereUniqueInput
    /**
     * In case the Conversacion found by the `where` argument doesn't exist, create a new Conversacion with this data.
     */
    create: XOR<ConversacionCreateInput, ConversacionUncheckedCreateInput>
    /**
     * In case the Conversacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversacionUpdateInput, ConversacionUncheckedUpdateInput>
  }

  /**
   * Conversacion delete
   */
  export type ConversacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * Filter which Conversacion to delete.
     */
    where: ConversacionWhereUniqueInput
  }

  /**
   * Conversacion deleteMany
   */
  export type ConversacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversacions to delete
     */
    where?: ConversacionWhereInput
    /**
     * Limit how many Conversacions to delete.
     */
    limit?: number
  }

  /**
   * Conversacion.alojamiento
   */
  export type Conversacion$alojamientoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * Conversacion.mensajes
   */
  export type Conversacion$mensajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    where?: MensajeWhereInput
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    cursor?: MensajeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
   * Conversacion.notificaciones
   */
  export type Conversacion$notificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    where?: NotificacionWhereInput
    orderBy?: NotificacionOrderByWithRelationInput | NotificacionOrderByWithRelationInput[]
    cursor?: NotificacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * Conversacion without action
   */
  export type ConversacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
  }


  /**
   * Model Mensaje
   */

  export type AggregateMensaje = {
    _count: MensajeCountAggregateOutputType | null
    _avg: MensajeAvgAggregateOutputType | null
    _sum: MensajeSumAggregateOutputType | null
    _min: MensajeMinAggregateOutputType | null
    _max: MensajeMaxAggregateOutputType | null
  }

  export type MensajeAvgAggregateOutputType = {
    id: number | null
    conversacionId: number | null
    emisorId: number | null
  }

  export type MensajeSumAggregateOutputType = {
    id: number | null
    conversacionId: number | null
    emisorId: number | null
  }

  export type MensajeMinAggregateOutputType = {
    id: number | null
    contenido: string | null
    conversacionId: number | null
    createdAt: Date | null
    emisorId: number | null
  }

  export type MensajeMaxAggregateOutputType = {
    id: number | null
    contenido: string | null
    conversacionId: number | null
    createdAt: Date | null
    emisorId: number | null
  }

  export type MensajeCountAggregateOutputType = {
    id: number
    contenido: number
    conversacionId: number
    createdAt: number
    emisorId: number
    _all: number
  }


  export type MensajeAvgAggregateInputType = {
    id?: true
    conversacionId?: true
    emisorId?: true
  }

  export type MensajeSumAggregateInputType = {
    id?: true
    conversacionId?: true
    emisorId?: true
  }

  export type MensajeMinAggregateInputType = {
    id?: true
    contenido?: true
    conversacionId?: true
    createdAt?: true
    emisorId?: true
  }

  export type MensajeMaxAggregateInputType = {
    id?: true
    contenido?: true
    conversacionId?: true
    createdAt?: true
    emisorId?: true
  }

  export type MensajeCountAggregateInputType = {
    id?: true
    contenido?: true
    conversacionId?: true
    createdAt?: true
    emisorId?: true
    _all?: true
  }

  export type MensajeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensaje to aggregate.
     */
    where?: MensajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensajes to fetch.
     */
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MensajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mensajes
    **/
    _count?: true | MensajeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MensajeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MensajeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MensajeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MensajeMaxAggregateInputType
  }

  export type GetMensajeAggregateType<T extends MensajeAggregateArgs> = {
        [P in keyof T & keyof AggregateMensaje]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMensaje[P]>
      : GetScalarType<T[P], AggregateMensaje[P]>
  }




  export type MensajeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensajeWhereInput
    orderBy?: MensajeOrderByWithAggregationInput | MensajeOrderByWithAggregationInput[]
    by: MensajeScalarFieldEnum[] | MensajeScalarFieldEnum
    having?: MensajeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MensajeCountAggregateInputType | true
    _avg?: MensajeAvgAggregateInputType
    _sum?: MensajeSumAggregateInputType
    _min?: MensajeMinAggregateInputType
    _max?: MensajeMaxAggregateInputType
  }

  export type MensajeGroupByOutputType = {
    id: number
    contenido: string
    conversacionId: number
    createdAt: Date
    emisorId: number
    _count: MensajeCountAggregateOutputType | null
    _avg: MensajeAvgAggregateOutputType | null
    _sum: MensajeSumAggregateOutputType | null
    _min: MensajeMinAggregateOutputType | null
    _max: MensajeMaxAggregateOutputType | null
  }

  type GetMensajeGroupByPayload<T extends MensajeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MensajeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MensajeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MensajeGroupByOutputType[P]>
            : GetScalarType<T[P], MensajeGroupByOutputType[P]>
        }
      >
    >


  export type MensajeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenido?: boolean
    conversacionId?: boolean
    createdAt?: boolean
    emisorId?: boolean
    conversacion?: boolean | ConversacionDefaultArgs<ExtArgs>
    emisor?: boolean | UsuarioDefaultArgs<ExtArgs>
    notificaciones?: boolean | Mensaje$notificacionesArgs<ExtArgs>
    _count?: boolean | MensajeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensaje"]>

  export type MensajeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenido?: boolean
    conversacionId?: boolean
    createdAt?: boolean
    emisorId?: boolean
    conversacion?: boolean | ConversacionDefaultArgs<ExtArgs>
    emisor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensaje"]>

  export type MensajeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenido?: boolean
    conversacionId?: boolean
    createdAt?: boolean
    emisorId?: boolean
    conversacion?: boolean | ConversacionDefaultArgs<ExtArgs>
    emisor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensaje"]>

  export type MensajeSelectScalar = {
    id?: boolean
    contenido?: boolean
    conversacionId?: boolean
    createdAt?: boolean
    emisorId?: boolean
  }

  export type MensajeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contenido" | "conversacionId" | "createdAt" | "emisorId", ExtArgs["result"]["mensaje"]>
  export type MensajeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversacion?: boolean | ConversacionDefaultArgs<ExtArgs>
    emisor?: boolean | UsuarioDefaultArgs<ExtArgs>
    notificaciones?: boolean | Mensaje$notificacionesArgs<ExtArgs>
    _count?: boolean | MensajeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MensajeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversacion?: boolean | ConversacionDefaultArgs<ExtArgs>
    emisor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type MensajeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversacion?: boolean | ConversacionDefaultArgs<ExtArgs>
    emisor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $MensajePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mensaje"
    objects: {
      conversacion: Prisma.$ConversacionPayload<ExtArgs>
      emisor: Prisma.$UsuarioPayload<ExtArgs>
      notificaciones: Prisma.$NotificacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      contenido: string
      conversacionId: number
      createdAt: Date
      emisorId: number
    }, ExtArgs["result"]["mensaje"]>
    composites: {}
  }

  type MensajeGetPayload<S extends boolean | null | undefined | MensajeDefaultArgs> = $Result.GetResult<Prisma.$MensajePayload, S>

  type MensajeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MensajeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MensajeCountAggregateInputType | true
    }

  export interface MensajeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mensaje'], meta: { name: 'Mensaje' } }
    /**
     * Find zero or one Mensaje that matches the filter.
     * @param {MensajeFindUniqueArgs} args - Arguments to find a Mensaje
     * @example
     * // Get one Mensaje
     * const mensaje = await prisma.mensaje.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MensajeFindUniqueArgs>(args: SelectSubset<T, MensajeFindUniqueArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Mensaje that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MensajeFindUniqueOrThrowArgs} args - Arguments to find a Mensaje
     * @example
     * // Get one Mensaje
     * const mensaje = await prisma.mensaje.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MensajeFindUniqueOrThrowArgs>(args: SelectSubset<T, MensajeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Mensaje that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeFindFirstArgs} args - Arguments to find a Mensaje
     * @example
     * // Get one Mensaje
     * const mensaje = await prisma.mensaje.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MensajeFindFirstArgs>(args?: SelectSubset<T, MensajeFindFirstArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Mensaje that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeFindFirstOrThrowArgs} args - Arguments to find a Mensaje
     * @example
     * // Get one Mensaje
     * const mensaje = await prisma.mensaje.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MensajeFindFirstOrThrowArgs>(args?: SelectSubset<T, MensajeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Mensajes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mensajes
     * const mensajes = await prisma.mensaje.findMany()
     * 
     * // Get first 10 Mensajes
     * const mensajes = await prisma.mensaje.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mensajeWithIdOnly = await prisma.mensaje.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MensajeFindManyArgs>(args?: SelectSubset<T, MensajeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Mensaje.
     * @param {MensajeCreateArgs} args - Arguments to create a Mensaje.
     * @example
     * // Create one Mensaje
     * const Mensaje = await prisma.mensaje.create({
     *   data: {
     *     // ... data to create a Mensaje
     *   }
     * })
     * 
     */
    create<T extends MensajeCreateArgs>(args: SelectSubset<T, MensajeCreateArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Mensajes.
     * @param {MensajeCreateManyArgs} args - Arguments to create many Mensajes.
     * @example
     * // Create many Mensajes
     * const mensaje = await prisma.mensaje.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MensajeCreateManyArgs>(args?: SelectSubset<T, MensajeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mensajes and returns the data saved in the database.
     * @param {MensajeCreateManyAndReturnArgs} args - Arguments to create many Mensajes.
     * @example
     * // Create many Mensajes
     * const mensaje = await prisma.mensaje.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mensajes and only return the `id`
     * const mensajeWithIdOnly = await prisma.mensaje.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MensajeCreateManyAndReturnArgs>(args?: SelectSubset<T, MensajeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Mensaje.
     * @param {MensajeDeleteArgs} args - Arguments to delete one Mensaje.
     * @example
     * // Delete one Mensaje
     * const Mensaje = await prisma.mensaje.delete({
     *   where: {
     *     // ... filter to delete one Mensaje
     *   }
     * })
     * 
     */
    delete<T extends MensajeDeleteArgs>(args: SelectSubset<T, MensajeDeleteArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Mensaje.
     * @param {MensajeUpdateArgs} args - Arguments to update one Mensaje.
     * @example
     * // Update one Mensaje
     * const mensaje = await prisma.mensaje.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MensajeUpdateArgs>(args: SelectSubset<T, MensajeUpdateArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Mensajes.
     * @param {MensajeDeleteManyArgs} args - Arguments to filter Mensajes to delete.
     * @example
     * // Delete a few Mensajes
     * const { count } = await prisma.mensaje.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MensajeDeleteManyArgs>(args?: SelectSubset<T, MensajeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mensajes
     * const mensaje = await prisma.mensaje.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MensajeUpdateManyArgs>(args: SelectSubset<T, MensajeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensajes and returns the data updated in the database.
     * @param {MensajeUpdateManyAndReturnArgs} args - Arguments to update many Mensajes.
     * @example
     * // Update many Mensajes
     * const mensaje = await prisma.mensaje.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mensajes and only return the `id`
     * const mensajeWithIdOnly = await prisma.mensaje.updateManyAndReturn({
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
    updateManyAndReturn<T extends MensajeUpdateManyAndReturnArgs>(args: SelectSubset<T, MensajeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Mensaje.
     * @param {MensajeUpsertArgs} args - Arguments to update or create a Mensaje.
     * @example
     * // Update or create a Mensaje
     * const mensaje = await prisma.mensaje.upsert({
     *   create: {
     *     // ... data to create a Mensaje
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mensaje we want to update
     *   }
     * })
     */
    upsert<T extends MensajeUpsertArgs>(args: SelectSubset<T, MensajeUpsertArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Mensajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeCountArgs} args - Arguments to filter Mensajes to count.
     * @example
     * // Count the number of Mensajes
     * const count = await prisma.mensaje.count({
     *   where: {
     *     // ... the filter for the Mensajes we want to count
     *   }
     * })
    **/
    count<T extends MensajeCountArgs>(
      args?: Subset<T, MensajeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MensajeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mensaje.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MensajeAggregateArgs>(args: Subset<T, MensajeAggregateArgs>): Prisma.PrismaPromise<GetMensajeAggregateType<T>>

    /**
     * Group by Mensaje.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeGroupByArgs} args - Group by arguments.
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
      T extends MensajeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MensajeGroupByArgs['orderBy'] }
        : { orderBy?: MensajeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MensajeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMensajeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mensaje model
   */
  readonly fields: MensajeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mensaje.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MensajeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversacion<T extends ConversacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversacionDefaultArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    emisor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    notificaciones<T extends Mensaje$notificacionesArgs<ExtArgs> = {}>(args?: Subset<T, Mensaje$notificacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Mensaje model
   */ 
  interface MensajeFieldRefs {
    readonly id: FieldRef<"Mensaje", 'Int'>
    readonly contenido: FieldRef<"Mensaje", 'String'>
    readonly conversacionId: FieldRef<"Mensaje", 'Int'>
    readonly createdAt: FieldRef<"Mensaje", 'DateTime'>
    readonly emisorId: FieldRef<"Mensaje", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Mensaje findUnique
   */
  export type MensajeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter, which Mensaje to fetch.
     */
    where: MensajeWhereUniqueInput
  }

  /**
   * Mensaje findUniqueOrThrow
   */
  export type MensajeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter, which Mensaje to fetch.
     */
    where: MensajeWhereUniqueInput
  }

  /**
   * Mensaje findFirst
   */
  export type MensajeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter, which Mensaje to fetch.
     */
    where?: MensajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensajes to fetch.
     */
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensajes.
     */
    cursor?: MensajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensajes.
     */
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
   * Mensaje findFirstOrThrow
   */
  export type MensajeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter, which Mensaje to fetch.
     */
    where?: MensajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensajes to fetch.
     */
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensajes.
     */
    cursor?: MensajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensajes.
     */
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
   * Mensaje findMany
   */
  export type MensajeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter, which Mensajes to fetch.
     */
    where?: MensajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensajes to fetch.
     */
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mensajes.
     */
    cursor?: MensajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensajes.
     */
    skip?: number
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
   * Mensaje create
   */
  export type MensajeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * The data needed to create a Mensaje.
     */
    data: XOR<MensajeCreateInput, MensajeUncheckedCreateInput>
  }

  /**
   * Mensaje createMany
   */
  export type MensajeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mensajes.
     */
    data: MensajeCreateManyInput | MensajeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mensaje createManyAndReturn
   */
  export type MensajeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * The data used to create many Mensajes.
     */
    data: MensajeCreateManyInput | MensajeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mensaje update
   */
  export type MensajeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * The data needed to update a Mensaje.
     */
    data: XOR<MensajeUpdateInput, MensajeUncheckedUpdateInput>
    /**
     * Choose, which Mensaje to update.
     */
    where: MensajeWhereUniqueInput
  }

  /**
   * Mensaje updateMany
   */
  export type MensajeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mensajes.
     */
    data: XOR<MensajeUpdateManyMutationInput, MensajeUncheckedUpdateManyInput>
    /**
     * Filter which Mensajes to update
     */
    where?: MensajeWhereInput
    /**
     * Limit how many Mensajes to update.
     */
    limit?: number
  }

  /**
   * Mensaje updateManyAndReturn
   */
  export type MensajeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * The data used to update Mensajes.
     */
    data: XOR<MensajeUpdateManyMutationInput, MensajeUncheckedUpdateManyInput>
    /**
     * Filter which Mensajes to update
     */
    where?: MensajeWhereInput
    /**
     * Limit how many Mensajes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mensaje upsert
   */
  export type MensajeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * The filter to search for the Mensaje to update in case it exists.
     */
    where: MensajeWhereUniqueInput
    /**
     * In case the Mensaje found by the `where` argument doesn't exist, create a new Mensaje with this data.
     */
    create: XOR<MensajeCreateInput, MensajeUncheckedCreateInput>
    /**
     * In case the Mensaje was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MensajeUpdateInput, MensajeUncheckedUpdateInput>
  }

  /**
   * Mensaje delete
   */
  export type MensajeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter which Mensaje to delete.
     */
    where: MensajeWhereUniqueInput
  }

  /**
   * Mensaje deleteMany
   */
  export type MensajeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensajes to delete
     */
    where?: MensajeWhereInput
    /**
     * Limit how many Mensajes to delete.
     */
    limit?: number
  }

  /**
   * Mensaje.notificaciones
   */
  export type Mensaje$notificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    where?: NotificacionWhereInput
    orderBy?: NotificacionOrderByWithRelationInput | NotificacionOrderByWithRelationInput[]
    cursor?: NotificacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * Mensaje without action
   */
  export type MensajeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    password: string | null
    telefono: string | null
    tipo: $Enums.TipoUsuario | null
    isEmailVerified: boolean | null
    isSuspended: boolean | null
    motivoSuspension: string | null
    emailVerificationToken: string | null
    emailVerificationExpiry: Date | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    createdAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    password: string | null
    telefono: string | null
    tipo: $Enums.TipoUsuario | null
    isEmailVerified: boolean | null
    isSuspended: boolean | null
    motivoSuspension: string | null
    emailVerificationToken: string | null
    emailVerificationExpiry: Date | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    createdAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    password: number
    telefono: number
    tipo: number
    isEmailVerified: number
    isSuspended: number
    motivoSuspension: number
    emailVerificationToken: number
    emailVerificationExpiry: number
    resetToken: number
    resetTokenExpiry: number
    createdAt: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    telefono?: true
    tipo?: true
    isEmailVerified?: true
    isSuspended?: true
    motivoSuspension?: true
    emailVerificationToken?: true
    emailVerificationExpiry?: true
    resetToken?: true
    resetTokenExpiry?: true
    createdAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    telefono?: true
    tipo?: true
    isEmailVerified?: true
    isSuspended?: true
    motivoSuspension?: true
    emailVerificationToken?: true
    emailVerificationExpiry?: true
    resetToken?: true
    resetTokenExpiry?: true
    createdAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    telefono?: true
    tipo?: true
    isEmailVerified?: true
    isSuspended?: true
    motivoSuspension?: true
    emailVerificationToken?: true
    emailVerificationExpiry?: true
    resetToken?: true
    resetTokenExpiry?: true
    createdAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombre: string
    email: string
    password: string
    telefono: string | null
    tipo: $Enums.TipoUsuario
    isEmailVerified: boolean
    isSuspended: boolean
    motivoSuspension: string | null
    emailVerificationToken: string | null
    emailVerificationExpiry: Date | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    createdAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    telefono?: boolean
    tipo?: boolean
    isEmailVerified?: boolean
    isSuspended?: boolean
    motivoSuspension?: boolean
    emailVerificationToken?: boolean
    emailVerificationExpiry?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    createdAt?: boolean
    alojamientos?: boolean | Usuario$alojamientosArgs<ExtArgs>
    estudianteConversaciones?: boolean | Usuario$estudianteConversacionesArgs<ExtArgs>
    conversacionesComoPropietario?: boolean | Usuario$conversacionesComoPropietarioArgs<ExtArgs>
    mensajesRemitidos?: boolean | Usuario$mensajesRemitidosArgs<ExtArgs>
    notificaciones?: boolean | Usuario$notificacionesArgs<ExtArgs>
    alojamientosFavoritos?: boolean | Usuario$alojamientosFavoritosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    telefono?: boolean
    tipo?: boolean
    isEmailVerified?: boolean
    isSuspended?: boolean
    motivoSuspension?: boolean
    emailVerificationToken?: boolean
    emailVerificationExpiry?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    telefono?: boolean
    tipo?: boolean
    isEmailVerified?: boolean
    isSuspended?: boolean
    motivoSuspension?: boolean
    emailVerificationToken?: boolean
    emailVerificationExpiry?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    telefono?: boolean
    tipo?: boolean
    isEmailVerified?: boolean
    isSuspended?: boolean
    motivoSuspension?: boolean
    emailVerificationToken?: boolean
    emailVerificationExpiry?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    createdAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "password" | "telefono" | "tipo" | "isEmailVerified" | "isSuspended" | "motivoSuspension" | "emailVerificationToken" | "emailVerificationExpiry" | "resetToken" | "resetTokenExpiry" | "createdAt", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alojamientos?: boolean | Usuario$alojamientosArgs<ExtArgs>
    estudianteConversaciones?: boolean | Usuario$estudianteConversacionesArgs<ExtArgs>
    conversacionesComoPropietario?: boolean | Usuario$conversacionesComoPropietarioArgs<ExtArgs>
    mensajesRemitidos?: boolean | Usuario$mensajesRemitidosArgs<ExtArgs>
    notificaciones?: boolean | Usuario$notificacionesArgs<ExtArgs>
    alojamientosFavoritos?: boolean | Usuario$alojamientosFavoritosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      alojamientos: Prisma.$AlojamientoPayload<ExtArgs>[]
      estudianteConversaciones: Prisma.$ConversacionPayload<ExtArgs>[]
      conversacionesComoPropietario: Prisma.$ConversacionPayload<ExtArgs>[]
      mensajesRemitidos: Prisma.$MensajePayload<ExtArgs>[]
      notificaciones: Prisma.$NotificacionPayload<ExtArgs>[]
      alojamientosFavoritos: Prisma.$AlojamientoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      email: string
      password: string
      telefono: string | null
      tipo: $Enums.TipoUsuario
      isEmailVerified: boolean
      isSuspended: boolean
      motivoSuspension: string | null
      emailVerificationToken: string | null
      emailVerificationExpiry: Date | null
      resetToken: string | null
      resetTokenExpiry: Date | null
      createdAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alojamientos<T extends Usuario$alojamientosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$alojamientosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlojamientoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    estudianteConversaciones<T extends Usuario$estudianteConversacionesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$estudianteConversacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    conversacionesComoPropietario<T extends Usuario$conversacionesComoPropietarioArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$conversacionesComoPropietarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    mensajesRemitidos<T extends Usuario$mensajesRemitidosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$mensajesRemitidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    notificaciones<T extends Usuario$notificacionesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$notificacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    alojamientosFavoritos<T extends Usuario$alojamientosFavoritosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$alojamientosFavoritosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlojamientoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Usuario model
   */ 
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly telefono: FieldRef<"Usuario", 'String'>
    readonly tipo: FieldRef<"Usuario", 'TipoUsuario'>
    readonly isEmailVerified: FieldRef<"Usuario", 'Boolean'>
    readonly isSuspended: FieldRef<"Usuario", 'Boolean'>
    readonly motivoSuspension: FieldRef<"Usuario", 'String'>
    readonly emailVerificationToken: FieldRef<"Usuario", 'String'>
    readonly emailVerificationExpiry: FieldRef<"Usuario", 'DateTime'>
    readonly resetToken: FieldRef<"Usuario", 'String'>
    readonly resetTokenExpiry: FieldRef<"Usuario", 'DateTime'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.alojamientos
   */
  export type Usuario$alojamientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Usuario.estudianteConversaciones
   */
  export type Usuario$estudianteConversacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    where?: ConversacionWhereInput
    orderBy?: ConversacionOrderByWithRelationInput | ConversacionOrderByWithRelationInput[]
    cursor?: ConversacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversacionScalarFieldEnum | ConversacionScalarFieldEnum[]
  }

  /**
   * Usuario.conversacionesComoPropietario
   */
  export type Usuario$conversacionesComoPropietarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    where?: ConversacionWhereInput
    orderBy?: ConversacionOrderByWithRelationInput | ConversacionOrderByWithRelationInput[]
    cursor?: ConversacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversacionScalarFieldEnum | ConversacionScalarFieldEnum[]
  }

  /**
   * Usuario.mensajesRemitidos
   */
  export type Usuario$mensajesRemitidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    where?: MensajeWhereInput
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    cursor?: MensajeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
   * Usuario.notificaciones
   */
  export type Usuario$notificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    where?: NotificacionWhereInput
    orderBy?: NotificacionOrderByWithRelationInput | NotificacionOrderByWithRelationInput[]
    cursor?: NotificacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * Usuario.alojamientosFavoritos
   */
  export type Usuario$alojamientosFavoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Notificacion
   */

  export type AggregateNotificacion = {
    _count: NotificacionCountAggregateOutputType | null
    _avg: NotificacionAvgAggregateOutputType | null
    _sum: NotificacionSumAggregateOutputType | null
    _min: NotificacionMinAggregateOutputType | null
    _max: NotificacionMaxAggregateOutputType | null
  }

  export type NotificacionAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    conversacionId: number | null
    mensajeId: number | null
    alojamientoId: number | null
  }

  export type NotificacionSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    conversacionId: number | null
    mensajeId: number | null
    alojamientoId: number | null
  }

  export type NotificacionMinAggregateOutputType = {
    id: number | null
    tipo: $Enums.TipoNotificacion | null
    titulo: string | null
    descripcion: string | null
    isRead: boolean | null
    createdAt: Date | null
    usuarioId: number | null
    conversacionId: number | null
    mensajeId: number | null
    alojamientoId: number | null
  }

  export type NotificacionMaxAggregateOutputType = {
    id: number | null
    tipo: $Enums.TipoNotificacion | null
    titulo: string | null
    descripcion: string | null
    isRead: boolean | null
    createdAt: Date | null
    usuarioId: number | null
    conversacionId: number | null
    mensajeId: number | null
    alojamientoId: number | null
  }

  export type NotificacionCountAggregateOutputType = {
    id: number
    tipo: number
    titulo: number
    descripcion: number
    isRead: number
    createdAt: number
    usuarioId: number
    conversacionId: number
    mensajeId: number
    alojamientoId: number
    _all: number
  }


  export type NotificacionAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    conversacionId?: true
    mensajeId?: true
    alojamientoId?: true
  }

  export type NotificacionSumAggregateInputType = {
    id?: true
    usuarioId?: true
    conversacionId?: true
    mensajeId?: true
    alojamientoId?: true
  }

  export type NotificacionMinAggregateInputType = {
    id?: true
    tipo?: true
    titulo?: true
    descripcion?: true
    isRead?: true
    createdAt?: true
    usuarioId?: true
    conversacionId?: true
    mensajeId?: true
    alojamientoId?: true
  }

  export type NotificacionMaxAggregateInputType = {
    id?: true
    tipo?: true
    titulo?: true
    descripcion?: true
    isRead?: true
    createdAt?: true
    usuarioId?: true
    conversacionId?: true
    mensajeId?: true
    alojamientoId?: true
  }

  export type NotificacionCountAggregateInputType = {
    id?: true
    tipo?: true
    titulo?: true
    descripcion?: true
    isRead?: true
    createdAt?: true
    usuarioId?: true
    conversacionId?: true
    mensajeId?: true
    alojamientoId?: true
    _all?: true
  }

  export type NotificacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacion to aggregate.
     */
    where?: NotificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacions to fetch.
     */
    orderBy?: NotificacionOrderByWithRelationInput | NotificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notificacions
    **/
    _count?: true | NotificacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificacionMaxAggregateInputType
  }

  export type GetNotificacionAggregateType<T extends NotificacionAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificacion[P]>
      : GetScalarType<T[P], AggregateNotificacion[P]>
  }




  export type NotificacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacionWhereInput
    orderBy?: NotificacionOrderByWithAggregationInput | NotificacionOrderByWithAggregationInput[]
    by: NotificacionScalarFieldEnum[] | NotificacionScalarFieldEnum
    having?: NotificacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificacionCountAggregateInputType | true
    _avg?: NotificacionAvgAggregateInputType
    _sum?: NotificacionSumAggregateInputType
    _min?: NotificacionMinAggregateInputType
    _max?: NotificacionMaxAggregateInputType
  }

  export type NotificacionGroupByOutputType = {
    id: number
    tipo: $Enums.TipoNotificacion
    titulo: string
    descripcion: string
    isRead: boolean
    createdAt: Date
    usuarioId: number
    conversacionId: number | null
    mensajeId: number | null
    alojamientoId: number | null
    _count: NotificacionCountAggregateOutputType | null
    _avg: NotificacionAvgAggregateOutputType | null
    _sum: NotificacionSumAggregateOutputType | null
    _min: NotificacionMinAggregateOutputType | null
    _max: NotificacionMaxAggregateOutputType | null
  }

  type GetNotificacionGroupByPayload<T extends NotificacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificacionGroupByOutputType[P]>
            : GetScalarType<T[P], NotificacionGroupByOutputType[P]>
        }
      >
    >


  export type NotificacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    titulo?: boolean
    descripcion?: boolean
    isRead?: boolean
    createdAt?: boolean
    usuarioId?: boolean
    conversacionId?: boolean
    mensajeId?: boolean
    alojamientoId?: boolean
    alojamiento?: boolean | Notificacion$alojamientoArgs<ExtArgs>
    conversacion?: boolean | Notificacion$conversacionArgs<ExtArgs>
    mensaje?: boolean | Notificacion$mensajeArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacion"]>

  export type NotificacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    titulo?: boolean
    descripcion?: boolean
    isRead?: boolean
    createdAt?: boolean
    usuarioId?: boolean
    conversacionId?: boolean
    mensajeId?: boolean
    alojamientoId?: boolean
    alojamiento?: boolean | Notificacion$alojamientoArgs<ExtArgs>
    conversacion?: boolean | Notificacion$conversacionArgs<ExtArgs>
    mensaje?: boolean | Notificacion$mensajeArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacion"]>

  export type NotificacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    titulo?: boolean
    descripcion?: boolean
    isRead?: boolean
    createdAt?: boolean
    usuarioId?: boolean
    conversacionId?: boolean
    mensajeId?: boolean
    alojamientoId?: boolean
    alojamiento?: boolean | Notificacion$alojamientoArgs<ExtArgs>
    conversacion?: boolean | Notificacion$conversacionArgs<ExtArgs>
    mensaje?: boolean | Notificacion$mensajeArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacion"]>

  export type NotificacionSelectScalar = {
    id?: boolean
    tipo?: boolean
    titulo?: boolean
    descripcion?: boolean
    isRead?: boolean
    createdAt?: boolean
    usuarioId?: boolean
    conversacionId?: boolean
    mensajeId?: boolean
    alojamientoId?: boolean
  }

  export type NotificacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "titulo" | "descripcion" | "isRead" | "createdAt" | "usuarioId" | "conversacionId" | "mensajeId" | "alojamientoId", ExtArgs["result"]["notificacion"]>
  export type NotificacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alojamiento?: boolean | Notificacion$alojamientoArgs<ExtArgs>
    conversacion?: boolean | Notificacion$conversacionArgs<ExtArgs>
    mensaje?: boolean | Notificacion$mensajeArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type NotificacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alojamiento?: boolean | Notificacion$alojamientoArgs<ExtArgs>
    conversacion?: boolean | Notificacion$conversacionArgs<ExtArgs>
    mensaje?: boolean | Notificacion$mensajeArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type NotificacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alojamiento?: boolean | Notificacion$alojamientoArgs<ExtArgs>
    conversacion?: boolean | Notificacion$conversacionArgs<ExtArgs>
    mensaje?: boolean | Notificacion$mensajeArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $NotificacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notificacion"
    objects: {
      alojamiento: Prisma.$AlojamientoPayload<ExtArgs> | null
      conversacion: Prisma.$ConversacionPayload<ExtArgs> | null
      mensaje: Prisma.$MensajePayload<ExtArgs> | null
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo: $Enums.TipoNotificacion
      titulo: string
      descripcion: string
      isRead: boolean
      createdAt: Date
      usuarioId: number
      conversacionId: number | null
      mensajeId: number | null
      alojamientoId: number | null
    }, ExtArgs["result"]["notificacion"]>
    composites: {}
  }

  type NotificacionGetPayload<S extends boolean | null | undefined | NotificacionDefaultArgs> = $Result.GetResult<Prisma.$NotificacionPayload, S>

  type NotificacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificacionCountAggregateInputType | true
    }

  export interface NotificacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notificacion'], meta: { name: 'Notificacion' } }
    /**
     * Find zero or one Notificacion that matches the filter.
     * @param {NotificacionFindUniqueArgs} args - Arguments to find a Notificacion
     * @example
     * // Get one Notificacion
     * const notificacion = await prisma.notificacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificacionFindUniqueArgs>(args: SelectSubset<T, NotificacionFindUniqueArgs<ExtArgs>>): Prisma__NotificacionClient<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Notificacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificacionFindUniqueOrThrowArgs} args - Arguments to find a Notificacion
     * @example
     * // Get one Notificacion
     * const notificacion = await prisma.notificacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificacionFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificacionClient<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Notificacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacionFindFirstArgs} args - Arguments to find a Notificacion
     * @example
     * // Get one Notificacion
     * const notificacion = await prisma.notificacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificacionFindFirstArgs>(args?: SelectSubset<T, NotificacionFindFirstArgs<ExtArgs>>): Prisma__NotificacionClient<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Notificacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacionFindFirstOrThrowArgs} args - Arguments to find a Notificacion
     * @example
     * // Get one Notificacion
     * const notificacion = await prisma.notificacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificacionFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificacionClient<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Notificacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notificacions
     * const notificacions = await prisma.notificacion.findMany()
     * 
     * // Get first 10 Notificacions
     * const notificacions = await prisma.notificacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificacionWithIdOnly = await prisma.notificacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificacionFindManyArgs>(args?: SelectSubset<T, NotificacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Notificacion.
     * @param {NotificacionCreateArgs} args - Arguments to create a Notificacion.
     * @example
     * // Create one Notificacion
     * const Notificacion = await prisma.notificacion.create({
     *   data: {
     *     // ... data to create a Notificacion
     *   }
     * })
     * 
     */
    create<T extends NotificacionCreateArgs>(args: SelectSubset<T, NotificacionCreateArgs<ExtArgs>>): Prisma__NotificacionClient<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Notificacions.
     * @param {NotificacionCreateManyArgs} args - Arguments to create many Notificacions.
     * @example
     * // Create many Notificacions
     * const notificacion = await prisma.notificacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificacionCreateManyArgs>(args?: SelectSubset<T, NotificacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notificacions and returns the data saved in the database.
     * @param {NotificacionCreateManyAndReturnArgs} args - Arguments to create many Notificacions.
     * @example
     * // Create many Notificacions
     * const notificacion = await prisma.notificacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notificacions and only return the `id`
     * const notificacionWithIdOnly = await prisma.notificacion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificacionCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Notificacion.
     * @param {NotificacionDeleteArgs} args - Arguments to delete one Notificacion.
     * @example
     * // Delete one Notificacion
     * const Notificacion = await prisma.notificacion.delete({
     *   where: {
     *     // ... filter to delete one Notificacion
     *   }
     * })
     * 
     */
    delete<T extends NotificacionDeleteArgs>(args: SelectSubset<T, NotificacionDeleteArgs<ExtArgs>>): Prisma__NotificacionClient<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Notificacion.
     * @param {NotificacionUpdateArgs} args - Arguments to update one Notificacion.
     * @example
     * // Update one Notificacion
     * const notificacion = await prisma.notificacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificacionUpdateArgs>(args: SelectSubset<T, NotificacionUpdateArgs<ExtArgs>>): Prisma__NotificacionClient<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Notificacions.
     * @param {NotificacionDeleteManyArgs} args - Arguments to filter Notificacions to delete.
     * @example
     * // Delete a few Notificacions
     * const { count } = await prisma.notificacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificacionDeleteManyArgs>(args?: SelectSubset<T, NotificacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notificacions
     * const notificacion = await prisma.notificacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificacionUpdateManyArgs>(args: SelectSubset<T, NotificacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacions and returns the data updated in the database.
     * @param {NotificacionUpdateManyAndReturnArgs} args - Arguments to update many Notificacions.
     * @example
     * // Update many Notificacions
     * const notificacion = await prisma.notificacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notificacions and only return the `id`
     * const notificacionWithIdOnly = await prisma.notificacion.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificacionUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Notificacion.
     * @param {NotificacionUpsertArgs} args - Arguments to update or create a Notificacion.
     * @example
     * // Update or create a Notificacion
     * const notificacion = await prisma.notificacion.upsert({
     *   create: {
     *     // ... data to create a Notificacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notificacion we want to update
     *   }
     * })
     */
    upsert<T extends NotificacionUpsertArgs>(args: SelectSubset<T, NotificacionUpsertArgs<ExtArgs>>): Prisma__NotificacionClient<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Notificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacionCountArgs} args - Arguments to filter Notificacions to count.
     * @example
     * // Count the number of Notificacions
     * const count = await prisma.notificacion.count({
     *   where: {
     *     // ... the filter for the Notificacions we want to count
     *   }
     * })
    **/
    count<T extends NotificacionCountArgs>(
      args?: Subset<T, NotificacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificacionAggregateArgs>(args: Subset<T, NotificacionAggregateArgs>): Prisma.PrismaPromise<GetNotificacionAggregateType<T>>

    /**
     * Group by Notificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacionGroupByArgs} args - Group by arguments.
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
      T extends NotificacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificacionGroupByArgs['orderBy'] }
        : { orderBy?: NotificacionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notificacion model
   */
  readonly fields: NotificacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notificacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alojamiento<T extends Notificacion$alojamientoArgs<ExtArgs> = {}>(args?: Subset<T, Notificacion$alojamientoArgs<ExtArgs>>): Prisma__AlojamientoClient<$Result.GetResult<Prisma.$AlojamientoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    conversacion<T extends Notificacion$conversacionArgs<ExtArgs> = {}>(args?: Subset<T, Notificacion$conversacionArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    mensaje<T extends Notificacion$mensajeArgs<ExtArgs> = {}>(args?: Subset<T, Notificacion$mensajeArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the Notificacion model
   */ 
  interface NotificacionFieldRefs {
    readonly id: FieldRef<"Notificacion", 'Int'>
    readonly tipo: FieldRef<"Notificacion", 'TipoNotificacion'>
    readonly titulo: FieldRef<"Notificacion", 'String'>
    readonly descripcion: FieldRef<"Notificacion", 'String'>
    readonly isRead: FieldRef<"Notificacion", 'Boolean'>
    readonly createdAt: FieldRef<"Notificacion", 'DateTime'>
    readonly usuarioId: FieldRef<"Notificacion", 'Int'>
    readonly conversacionId: FieldRef<"Notificacion", 'Int'>
    readonly mensajeId: FieldRef<"Notificacion", 'Int'>
    readonly alojamientoId: FieldRef<"Notificacion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Notificacion findUnique
   */
  export type NotificacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    /**
     * Filter, which Notificacion to fetch.
     */
    where: NotificacionWhereUniqueInput
  }

  /**
   * Notificacion findUniqueOrThrow
   */
  export type NotificacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    /**
     * Filter, which Notificacion to fetch.
     */
    where: NotificacionWhereUniqueInput
  }

  /**
   * Notificacion findFirst
   */
  export type NotificacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    /**
     * Filter, which Notificacion to fetch.
     */
    where?: NotificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacions to fetch.
     */
    orderBy?: NotificacionOrderByWithRelationInput | NotificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacions.
     */
    cursor?: NotificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacions.
     */
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * Notificacion findFirstOrThrow
   */
  export type NotificacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    /**
     * Filter, which Notificacion to fetch.
     */
    where?: NotificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacions to fetch.
     */
    orderBy?: NotificacionOrderByWithRelationInput | NotificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacions.
     */
    cursor?: NotificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacions.
     */
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * Notificacion findMany
   */
  export type NotificacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    /**
     * Filter, which Notificacions to fetch.
     */
    where?: NotificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacions to fetch.
     */
    orderBy?: NotificacionOrderByWithRelationInput | NotificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notificacions.
     */
    cursor?: NotificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacions.
     */
    skip?: number
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * Notificacion create
   */
  export type NotificacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    /**
     * The data needed to create a Notificacion.
     */
    data: XOR<NotificacionCreateInput, NotificacionUncheckedCreateInput>
  }

  /**
   * Notificacion createMany
   */
  export type NotificacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notificacions.
     */
    data: NotificacionCreateManyInput | NotificacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notificacion createManyAndReturn
   */
  export type NotificacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * The data used to create many Notificacions.
     */
    data: NotificacionCreateManyInput | NotificacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notificacion update
   */
  export type NotificacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    /**
     * The data needed to update a Notificacion.
     */
    data: XOR<NotificacionUpdateInput, NotificacionUncheckedUpdateInput>
    /**
     * Choose, which Notificacion to update.
     */
    where: NotificacionWhereUniqueInput
  }

  /**
   * Notificacion updateMany
   */
  export type NotificacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notificacions.
     */
    data: XOR<NotificacionUpdateManyMutationInput, NotificacionUncheckedUpdateManyInput>
    /**
     * Filter which Notificacions to update
     */
    where?: NotificacionWhereInput
    /**
     * Limit how many Notificacions to update.
     */
    limit?: number
  }

  /**
   * Notificacion updateManyAndReturn
   */
  export type NotificacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * The data used to update Notificacions.
     */
    data: XOR<NotificacionUpdateManyMutationInput, NotificacionUncheckedUpdateManyInput>
    /**
     * Filter which Notificacions to update
     */
    where?: NotificacionWhereInput
    /**
     * Limit how many Notificacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notificacion upsert
   */
  export type NotificacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    /**
     * The filter to search for the Notificacion to update in case it exists.
     */
    where: NotificacionWhereUniqueInput
    /**
     * In case the Notificacion found by the `where` argument doesn't exist, create a new Notificacion with this data.
     */
    create: XOR<NotificacionCreateInput, NotificacionUncheckedCreateInput>
    /**
     * In case the Notificacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificacionUpdateInput, NotificacionUncheckedUpdateInput>
  }

  /**
   * Notificacion delete
   */
  export type NotificacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    /**
     * Filter which Notificacion to delete.
     */
    where: NotificacionWhereUniqueInput
  }

  /**
   * Notificacion deleteMany
   */
  export type NotificacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacions to delete
     */
    where?: NotificacionWhereInput
    /**
     * Limit how many Notificacions to delete.
     */
    limit?: number
  }

  /**
   * Notificacion.alojamiento
   */
  export type Notificacion$alojamientoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * Notificacion.conversacion
   */
  export type Notificacion$conversacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    where?: ConversacionWhereInput
  }

  /**
   * Notificacion.mensaje
   */
  export type Notificacion$mensajeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    where?: MensajeWhereInput
  }

  /**
   * Notificacion without action
   */
  export type NotificacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
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
    slug: 'slug',
    estado: 'estado',
    motivoRechazo: 'motivoRechazo',
    photoUrls: 'photoUrls',
    postedDate: 'postedDate',
    aguaIncluido: 'aguaIncluido',
    descripcion: 'descripcion',
    electricidadIncluido: 'electricidadIncluido',
    gasIncluido: 'gasIncluido',
    habitaciones: 'habitaciones',
    hayAireAcondicionado: 'hayAireAcondicionado',
    hayAscensor: 'hayAscensor',
    hayCalefaccion: 'hayCalefaccion',
    hayGaraje: 'hayGaraje',
    hayGas: 'hayGas',
    hayGimnasio: 'hayGimnasio',
    hayHorno: 'hayHorno',
    hayInternet: 'hayInternet',
    hayLavadora: 'hayLavadora',
    hayLavavajillas: 'hayLavavajillas',
    hayMicroondas: 'hayMicroondas',
    hayMuebles: 'hayMuebles',
    hayNevera: 'hayNevera',
    hayPiscina: 'hayPiscina',
    hayPortero: 'hayPortero',
    haySecadora: 'haySecadora',
    hayTelefono: 'hayTelefono',
    hayTelevision: 'hayTelevision',
    hayTerraza: 'hayTerraza',
    hayZonaComunitaria: 'hayZonaComunitaria',
    internetIncluido: 'internetIncluido',
    nombre: 'nombre',
    precio: 'precio',
    superficie: 'superficie',
    plazasLibres: 'plazasLibres',
    banos: 'banos',
    dirigidoA: 'dirigidoA',
    infoExtra: 'infoExtra',
    esDestacado: 'esDestacado',
    tipoAlojamiento: 'tipoAlojamiento',
    managerUsuarioId: 'managerUsuarioId',
    direccion: 'direccion',
    ciudad: 'ciudad',
    provincia: 'provincia',
    pais: 'pais',
    codigoPostal: 'codigoPostal',
    portal: 'portal',
    piso: 'piso',
    puerta: 'puerta'
  };

  export type AlojamientoScalarFieldEnum = (typeof AlojamientoScalarFieldEnum)[keyof typeof AlojamientoScalarFieldEnum]


  export const ConversacionScalarFieldEnum: {
    id: 'id',
    alojamientoId: 'alojamientoId',
    createdAt: 'createdAt',
    estudianteId: 'estudianteId',
    propietarioId: 'propietarioId',
    ultimoMensajeId: 'ultimoMensajeId',
    estudianteVistoUltimo: 'estudianteVistoUltimo',
    propietarioVistoUltimo: 'propietarioVistoUltimo',
    esConversacionAdmin: 'esConversacionAdmin'
  };

  export type ConversacionScalarFieldEnum = (typeof ConversacionScalarFieldEnum)[keyof typeof ConversacionScalarFieldEnum]


  export const MensajeScalarFieldEnum: {
    id: 'id',
    contenido: 'contenido',
    conversacionId: 'conversacionId',
    createdAt: 'createdAt',
    emisorId: 'emisorId'
  };

  export type MensajeScalarFieldEnum = (typeof MensajeScalarFieldEnum)[keyof typeof MensajeScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    password: 'password',
    telefono: 'telefono',
    tipo: 'tipo',
    isEmailVerified: 'isEmailVerified',
    isSuspended: 'isSuspended',
    motivoSuspension: 'motivoSuspension',
    emailVerificationToken: 'emailVerificationToken',
    emailVerificationExpiry: 'emailVerificationExpiry',
    resetToken: 'resetToken',
    resetTokenExpiry: 'resetTokenExpiry',
    createdAt: 'createdAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const NotificacionScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    titulo: 'titulo',
    descripcion: 'descripcion',
    isRead: 'isRead',
    createdAt: 'createdAt',
    usuarioId: 'usuarioId',
    conversacionId: 'conversacionId',
    mensajeId: 'mensajeId',
    alojamientoId: 'alojamientoId'
  };

  export type NotificacionScalarFieldEnum = (typeof NotificacionScalarFieldEnum)[keyof typeof NotificacionScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TipoUsuario'
   */
  export type EnumTipoUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoUsuario'>
    


  /**
   * Reference to a field of type 'TipoUsuario[]'
   */
  export type ListEnumTipoUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoUsuario[]'>
    


  /**
   * Reference to a field of type 'TipoNotificacion'
   */
  export type EnumTipoNotificacionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoNotificacion'>
    


  /**
   * Reference to a field of type 'TipoNotificacion[]'
   */
  export type ListEnumTipoNotificacionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoNotificacion[]'>
    
  /**
   * Deep Input Types
   */


  export type AlojamientoWhereInput = {
    AND?: AlojamientoWhereInput | AlojamientoWhereInput[]
    OR?: AlojamientoWhereInput[]
    NOT?: AlojamientoWhereInput | AlojamientoWhereInput[]
    id?: IntFilter<"Alojamiento"> | number
    slug?: StringFilter<"Alojamiento"> | string
    estado?: StringFilter<"Alojamiento"> | string
    motivoRechazo?: StringNullableFilter<"Alojamiento"> | string | null
    photoUrls?: StringNullableListFilter<"Alojamiento">
    postedDate?: DateTimeFilter<"Alojamiento"> | Date | string
    aguaIncluido?: BoolFilter<"Alojamiento"> | boolean
    descripcion?: StringFilter<"Alojamiento"> | string
    electricidadIncluido?: BoolFilter<"Alojamiento"> | boolean
    gasIncluido?: BoolFilter<"Alojamiento"> | boolean
    habitaciones?: IntFilter<"Alojamiento"> | number
    hayAireAcondicionado?: BoolFilter<"Alojamiento"> | boolean
    hayAscensor?: BoolFilter<"Alojamiento"> | boolean
    hayCalefaccion?: BoolFilter<"Alojamiento"> | boolean
    hayGaraje?: BoolFilter<"Alojamiento"> | boolean
    hayGas?: BoolFilter<"Alojamiento"> | boolean
    hayGimnasio?: BoolFilter<"Alojamiento"> | boolean
    hayHorno?: BoolFilter<"Alojamiento"> | boolean
    hayInternet?: BoolFilter<"Alojamiento"> | boolean
    hayLavadora?: BoolFilter<"Alojamiento"> | boolean
    hayLavavajillas?: BoolFilter<"Alojamiento"> | boolean
    hayMicroondas?: BoolFilter<"Alojamiento"> | boolean
    hayMuebles?: BoolFilter<"Alojamiento"> | boolean
    hayNevera?: BoolFilter<"Alojamiento"> | boolean
    hayPiscina?: BoolFilter<"Alojamiento"> | boolean
    hayPortero?: BoolFilter<"Alojamiento"> | boolean
    haySecadora?: BoolFilter<"Alojamiento"> | boolean
    hayTelefono?: BoolFilter<"Alojamiento"> | boolean
    hayTelevision?: BoolFilter<"Alojamiento"> | boolean
    hayTerraza?: BoolFilter<"Alojamiento"> | boolean
    hayZonaComunitaria?: BoolFilter<"Alojamiento"> | boolean
    internetIncluido?: BoolFilter<"Alojamiento"> | boolean
    nombre?: StringFilter<"Alojamiento"> | string
    precio?: FloatFilter<"Alojamiento"> | number
    superficie?: IntFilter<"Alojamiento"> | number
    plazasLibres?: IntFilter<"Alojamiento"> | number
    banos?: FloatFilter<"Alojamiento"> | number
    dirigidoA?: StringFilter<"Alojamiento"> | string
    infoExtra?: StringFilter<"Alojamiento"> | string
    esDestacado?: BoolFilter<"Alojamiento"> | boolean
    tipoAlojamiento?: StringFilter<"Alojamiento"> | string
    managerUsuarioId?: IntFilter<"Alojamiento"> | number
    direccion?: StringNullableFilter<"Alojamiento"> | string | null
    ciudad?: StringNullableFilter<"Alojamiento"> | string | null
    provincia?: StringNullableFilter<"Alojamiento"> | string | null
    pais?: StringNullableFilter<"Alojamiento"> | string | null
    codigoPostal?: StringNullableFilter<"Alojamiento"> | string | null
    portal?: StringNullableFilter<"Alojamiento"> | string | null
    piso?: StringNullableFilter<"Alojamiento"> | string | null
    puerta?: StringNullableFilter<"Alojamiento"> | string | null
    propietario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    conversaciones?: ConversacionListRelationFilter
    notificaciones?: NotificacionListRelationFilter
    favoritedBy?: UsuarioListRelationFilter
  }

  export type AlojamientoOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    estado?: SortOrder
    motivoRechazo?: SortOrderInput | SortOrder
    photoUrls?: SortOrder
    postedDate?: SortOrder
    aguaIncluido?: SortOrder
    descripcion?: SortOrder
    electricidadIncluido?: SortOrder
    gasIncluido?: SortOrder
    habitaciones?: SortOrder
    hayAireAcondicionado?: SortOrder
    hayAscensor?: SortOrder
    hayCalefaccion?: SortOrder
    hayGaraje?: SortOrder
    hayGas?: SortOrder
    hayGimnasio?: SortOrder
    hayHorno?: SortOrder
    hayInternet?: SortOrder
    hayLavadora?: SortOrder
    hayLavavajillas?: SortOrder
    hayMicroondas?: SortOrder
    hayMuebles?: SortOrder
    hayNevera?: SortOrder
    hayPiscina?: SortOrder
    hayPortero?: SortOrder
    haySecadora?: SortOrder
    hayTelefono?: SortOrder
    hayTelevision?: SortOrder
    hayTerraza?: SortOrder
    hayZonaComunitaria?: SortOrder
    internetIncluido?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    superficie?: SortOrder
    plazasLibres?: SortOrder
    banos?: SortOrder
    dirigidoA?: SortOrder
    infoExtra?: SortOrder
    esDestacado?: SortOrder
    tipoAlojamiento?: SortOrder
    managerUsuarioId?: SortOrder
    direccion?: SortOrderInput | SortOrder
    ciudad?: SortOrderInput | SortOrder
    provincia?: SortOrderInput | SortOrder
    pais?: SortOrderInput | SortOrder
    codigoPostal?: SortOrderInput | SortOrder
    portal?: SortOrderInput | SortOrder
    piso?: SortOrderInput | SortOrder
    puerta?: SortOrderInput | SortOrder
    propietario?: UsuarioOrderByWithRelationInput
    conversaciones?: ConversacionOrderByRelationAggregateInput
    notificaciones?: NotificacionOrderByRelationAggregateInput
    favoritedBy?: UsuarioOrderByRelationAggregateInput
  }

  export type AlojamientoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: AlojamientoWhereInput | AlojamientoWhereInput[]
    OR?: AlojamientoWhereInput[]
    NOT?: AlojamientoWhereInput | AlojamientoWhereInput[]
    estado?: StringFilter<"Alojamiento"> | string
    motivoRechazo?: StringNullableFilter<"Alojamiento"> | string | null
    photoUrls?: StringNullableListFilter<"Alojamiento">
    postedDate?: DateTimeFilter<"Alojamiento"> | Date | string
    aguaIncluido?: BoolFilter<"Alojamiento"> | boolean
    descripcion?: StringFilter<"Alojamiento"> | string
    electricidadIncluido?: BoolFilter<"Alojamiento"> | boolean
    gasIncluido?: BoolFilter<"Alojamiento"> | boolean
    habitaciones?: IntFilter<"Alojamiento"> | number
    hayAireAcondicionado?: BoolFilter<"Alojamiento"> | boolean
    hayAscensor?: BoolFilter<"Alojamiento"> | boolean
    hayCalefaccion?: BoolFilter<"Alojamiento"> | boolean
    hayGaraje?: BoolFilter<"Alojamiento"> | boolean
    hayGas?: BoolFilter<"Alojamiento"> | boolean
    hayGimnasio?: BoolFilter<"Alojamiento"> | boolean
    hayHorno?: BoolFilter<"Alojamiento"> | boolean
    hayInternet?: BoolFilter<"Alojamiento"> | boolean
    hayLavadora?: BoolFilter<"Alojamiento"> | boolean
    hayLavavajillas?: BoolFilter<"Alojamiento"> | boolean
    hayMicroondas?: BoolFilter<"Alojamiento"> | boolean
    hayMuebles?: BoolFilter<"Alojamiento"> | boolean
    hayNevera?: BoolFilter<"Alojamiento"> | boolean
    hayPiscina?: BoolFilter<"Alojamiento"> | boolean
    hayPortero?: BoolFilter<"Alojamiento"> | boolean
    haySecadora?: BoolFilter<"Alojamiento"> | boolean
    hayTelefono?: BoolFilter<"Alojamiento"> | boolean
    hayTelevision?: BoolFilter<"Alojamiento"> | boolean
    hayTerraza?: BoolFilter<"Alojamiento"> | boolean
    hayZonaComunitaria?: BoolFilter<"Alojamiento"> | boolean
    internetIncluido?: BoolFilter<"Alojamiento"> | boolean
    nombre?: StringFilter<"Alojamiento"> | string
    precio?: FloatFilter<"Alojamiento"> | number
    superficie?: IntFilter<"Alojamiento"> | number
    plazasLibres?: IntFilter<"Alojamiento"> | number
    banos?: FloatFilter<"Alojamiento"> | number
    dirigidoA?: StringFilter<"Alojamiento"> | string
    infoExtra?: StringFilter<"Alojamiento"> | string
    esDestacado?: BoolFilter<"Alojamiento"> | boolean
    tipoAlojamiento?: StringFilter<"Alojamiento"> | string
    managerUsuarioId?: IntFilter<"Alojamiento"> | number
    direccion?: StringNullableFilter<"Alojamiento"> | string | null
    ciudad?: StringNullableFilter<"Alojamiento"> | string | null
    provincia?: StringNullableFilter<"Alojamiento"> | string | null
    pais?: StringNullableFilter<"Alojamiento"> | string | null
    codigoPostal?: StringNullableFilter<"Alojamiento"> | string | null
    portal?: StringNullableFilter<"Alojamiento"> | string | null
    piso?: StringNullableFilter<"Alojamiento"> | string | null
    puerta?: StringNullableFilter<"Alojamiento"> | string | null
    propietario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    conversaciones?: ConversacionListRelationFilter
    notificaciones?: NotificacionListRelationFilter
    favoritedBy?: UsuarioListRelationFilter
  }, "id" | "slug">

  export type AlojamientoOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    estado?: SortOrder
    motivoRechazo?: SortOrderInput | SortOrder
    photoUrls?: SortOrder
    postedDate?: SortOrder
    aguaIncluido?: SortOrder
    descripcion?: SortOrder
    electricidadIncluido?: SortOrder
    gasIncluido?: SortOrder
    habitaciones?: SortOrder
    hayAireAcondicionado?: SortOrder
    hayAscensor?: SortOrder
    hayCalefaccion?: SortOrder
    hayGaraje?: SortOrder
    hayGas?: SortOrder
    hayGimnasio?: SortOrder
    hayHorno?: SortOrder
    hayInternet?: SortOrder
    hayLavadora?: SortOrder
    hayLavavajillas?: SortOrder
    hayMicroondas?: SortOrder
    hayMuebles?: SortOrder
    hayNevera?: SortOrder
    hayPiscina?: SortOrder
    hayPortero?: SortOrder
    haySecadora?: SortOrder
    hayTelefono?: SortOrder
    hayTelevision?: SortOrder
    hayTerraza?: SortOrder
    hayZonaComunitaria?: SortOrder
    internetIncluido?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    superficie?: SortOrder
    plazasLibres?: SortOrder
    banos?: SortOrder
    dirigidoA?: SortOrder
    infoExtra?: SortOrder
    esDestacado?: SortOrder
    tipoAlojamiento?: SortOrder
    managerUsuarioId?: SortOrder
    direccion?: SortOrderInput | SortOrder
    ciudad?: SortOrderInput | SortOrder
    provincia?: SortOrderInput | SortOrder
    pais?: SortOrderInput | SortOrder
    codigoPostal?: SortOrderInput | SortOrder
    portal?: SortOrderInput | SortOrder
    piso?: SortOrderInput | SortOrder
    puerta?: SortOrderInput | SortOrder
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
    slug?: StringWithAggregatesFilter<"Alojamiento"> | string
    estado?: StringWithAggregatesFilter<"Alojamiento"> | string
    motivoRechazo?: StringNullableWithAggregatesFilter<"Alojamiento"> | string | null
    photoUrls?: StringNullableListFilter<"Alojamiento">
    postedDate?: DateTimeWithAggregatesFilter<"Alojamiento"> | Date | string
    aguaIncluido?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    descripcion?: StringWithAggregatesFilter<"Alojamiento"> | string
    electricidadIncluido?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    gasIncluido?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    habitaciones?: IntWithAggregatesFilter<"Alojamiento"> | number
    hayAireAcondicionado?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayAscensor?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayCalefaccion?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayGaraje?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayGas?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayGimnasio?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayHorno?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayInternet?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayLavadora?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayLavavajillas?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayMicroondas?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayMuebles?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayNevera?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayPiscina?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayPortero?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    haySecadora?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayTelefono?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayTelevision?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayTerraza?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    hayZonaComunitaria?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    internetIncluido?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    nombre?: StringWithAggregatesFilter<"Alojamiento"> | string
    precio?: FloatWithAggregatesFilter<"Alojamiento"> | number
    superficie?: IntWithAggregatesFilter<"Alojamiento"> | number
    plazasLibres?: IntWithAggregatesFilter<"Alojamiento"> | number
    banos?: FloatWithAggregatesFilter<"Alojamiento"> | number
    dirigidoA?: StringWithAggregatesFilter<"Alojamiento"> | string
    infoExtra?: StringWithAggregatesFilter<"Alojamiento"> | string
    esDestacado?: BoolWithAggregatesFilter<"Alojamiento"> | boolean
    tipoAlojamiento?: StringWithAggregatesFilter<"Alojamiento"> | string
    managerUsuarioId?: IntWithAggregatesFilter<"Alojamiento"> | number
    direccion?: StringNullableWithAggregatesFilter<"Alojamiento"> | string | null
    ciudad?: StringNullableWithAggregatesFilter<"Alojamiento"> | string | null
    provincia?: StringNullableWithAggregatesFilter<"Alojamiento"> | string | null
    pais?: StringNullableWithAggregatesFilter<"Alojamiento"> | string | null
    codigoPostal?: StringNullableWithAggregatesFilter<"Alojamiento"> | string | null
    portal?: StringNullableWithAggregatesFilter<"Alojamiento"> | string | null
    piso?: StringNullableWithAggregatesFilter<"Alojamiento"> | string | null
    puerta?: StringNullableWithAggregatesFilter<"Alojamiento"> | string | null
  }

  export type ConversacionWhereInput = {
    AND?: ConversacionWhereInput | ConversacionWhereInput[]
    OR?: ConversacionWhereInput[]
    NOT?: ConversacionWhereInput | ConversacionWhereInput[]
    id?: IntFilter<"Conversacion"> | number
    alojamientoId?: IntNullableFilter<"Conversacion"> | number | null
    createdAt?: DateTimeFilter<"Conversacion"> | Date | string
    estudianteId?: IntFilter<"Conversacion"> | number
    propietarioId?: IntFilter<"Conversacion"> | number
    ultimoMensajeId?: IntNullableFilter<"Conversacion"> | number | null
    estudianteVistoUltimo?: BoolFilter<"Conversacion"> | boolean
    propietarioVistoUltimo?: BoolFilter<"Conversacion"> | boolean
    esConversacionAdmin?: BoolFilter<"Conversacion"> | boolean
    alojamiento?: XOR<AlojamientoNullableScalarRelationFilter, AlojamientoWhereInput> | null
    estudiante?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    propietario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    mensajes?: MensajeListRelationFilter
    notificaciones?: NotificacionListRelationFilter
  }

  export type ConversacionOrderByWithRelationInput = {
    id?: SortOrder
    alojamientoId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    estudianteId?: SortOrder
    propietarioId?: SortOrder
    ultimoMensajeId?: SortOrderInput | SortOrder
    estudianteVistoUltimo?: SortOrder
    propietarioVistoUltimo?: SortOrder
    esConversacionAdmin?: SortOrder
    alojamiento?: AlojamientoOrderByWithRelationInput
    estudiante?: UsuarioOrderByWithRelationInput
    propietario?: UsuarioOrderByWithRelationInput
    mensajes?: MensajeOrderByRelationAggregateInput
    notificaciones?: NotificacionOrderByRelationAggregateInput
  }

  export type ConversacionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    estudianteId_propietarioId_alojamientoId?: ConversacionEstudianteIdPropietarioIdAlojamientoIdCompoundUniqueInput
    AND?: ConversacionWhereInput | ConversacionWhereInput[]
    OR?: ConversacionWhereInput[]
    NOT?: ConversacionWhereInput | ConversacionWhereInput[]
    alojamientoId?: IntNullableFilter<"Conversacion"> | number | null
    createdAt?: DateTimeFilter<"Conversacion"> | Date | string
    estudianteId?: IntFilter<"Conversacion"> | number
    propietarioId?: IntFilter<"Conversacion"> | number
    ultimoMensajeId?: IntNullableFilter<"Conversacion"> | number | null
    estudianteVistoUltimo?: BoolFilter<"Conversacion"> | boolean
    propietarioVistoUltimo?: BoolFilter<"Conversacion"> | boolean
    esConversacionAdmin?: BoolFilter<"Conversacion"> | boolean
    alojamiento?: XOR<AlojamientoNullableScalarRelationFilter, AlojamientoWhereInput> | null
    estudiante?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    propietario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    mensajes?: MensajeListRelationFilter
    notificaciones?: NotificacionListRelationFilter
  }, "id" | "estudianteId_propietarioId_alojamientoId">

  export type ConversacionOrderByWithAggregationInput = {
    id?: SortOrder
    alojamientoId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    estudianteId?: SortOrder
    propietarioId?: SortOrder
    ultimoMensajeId?: SortOrderInput | SortOrder
    estudianteVistoUltimo?: SortOrder
    propietarioVistoUltimo?: SortOrder
    esConversacionAdmin?: SortOrder
    _count?: ConversacionCountOrderByAggregateInput
    _avg?: ConversacionAvgOrderByAggregateInput
    _max?: ConversacionMaxOrderByAggregateInput
    _min?: ConversacionMinOrderByAggregateInput
    _sum?: ConversacionSumOrderByAggregateInput
  }

  export type ConversacionScalarWhereWithAggregatesInput = {
    AND?: ConversacionScalarWhereWithAggregatesInput | ConversacionScalarWhereWithAggregatesInput[]
    OR?: ConversacionScalarWhereWithAggregatesInput[]
    NOT?: ConversacionScalarWhereWithAggregatesInput | ConversacionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Conversacion"> | number
    alojamientoId?: IntNullableWithAggregatesFilter<"Conversacion"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Conversacion"> | Date | string
    estudianteId?: IntWithAggregatesFilter<"Conversacion"> | number
    propietarioId?: IntWithAggregatesFilter<"Conversacion"> | number
    ultimoMensajeId?: IntNullableWithAggregatesFilter<"Conversacion"> | number | null
    estudianteVistoUltimo?: BoolWithAggregatesFilter<"Conversacion"> | boolean
    propietarioVistoUltimo?: BoolWithAggregatesFilter<"Conversacion"> | boolean
    esConversacionAdmin?: BoolWithAggregatesFilter<"Conversacion"> | boolean
  }

  export type MensajeWhereInput = {
    AND?: MensajeWhereInput | MensajeWhereInput[]
    OR?: MensajeWhereInput[]
    NOT?: MensajeWhereInput | MensajeWhereInput[]
    id?: IntFilter<"Mensaje"> | number
    contenido?: StringFilter<"Mensaje"> | string
    conversacionId?: IntFilter<"Mensaje"> | number
    createdAt?: DateTimeFilter<"Mensaje"> | Date | string
    emisorId?: IntFilter<"Mensaje"> | number
    conversacion?: XOR<ConversacionScalarRelationFilter, ConversacionWhereInput>
    emisor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    notificaciones?: NotificacionListRelationFilter
  }

  export type MensajeOrderByWithRelationInput = {
    id?: SortOrder
    contenido?: SortOrder
    conversacionId?: SortOrder
    createdAt?: SortOrder
    emisorId?: SortOrder
    conversacion?: ConversacionOrderByWithRelationInput
    emisor?: UsuarioOrderByWithRelationInput
    notificaciones?: NotificacionOrderByRelationAggregateInput
  }

  export type MensajeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MensajeWhereInput | MensajeWhereInput[]
    OR?: MensajeWhereInput[]
    NOT?: MensajeWhereInput | MensajeWhereInput[]
    contenido?: StringFilter<"Mensaje"> | string
    conversacionId?: IntFilter<"Mensaje"> | number
    createdAt?: DateTimeFilter<"Mensaje"> | Date | string
    emisorId?: IntFilter<"Mensaje"> | number
    conversacion?: XOR<ConversacionScalarRelationFilter, ConversacionWhereInput>
    emisor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    notificaciones?: NotificacionListRelationFilter
  }, "id">

  export type MensajeOrderByWithAggregationInput = {
    id?: SortOrder
    contenido?: SortOrder
    conversacionId?: SortOrder
    createdAt?: SortOrder
    emisorId?: SortOrder
    _count?: MensajeCountOrderByAggregateInput
    _avg?: MensajeAvgOrderByAggregateInput
    _max?: MensajeMaxOrderByAggregateInput
    _min?: MensajeMinOrderByAggregateInput
    _sum?: MensajeSumOrderByAggregateInput
  }

  export type MensajeScalarWhereWithAggregatesInput = {
    AND?: MensajeScalarWhereWithAggregatesInput | MensajeScalarWhereWithAggregatesInput[]
    OR?: MensajeScalarWhereWithAggregatesInput[]
    NOT?: MensajeScalarWhereWithAggregatesInput | MensajeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mensaje"> | number
    contenido?: StringWithAggregatesFilter<"Mensaje"> | string
    conversacionId?: IntWithAggregatesFilter<"Mensaje"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Mensaje"> | Date | string
    emisorId?: IntWithAggregatesFilter<"Mensaje"> | number
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    telefono?: StringNullableFilter<"Usuario"> | string | null
    tipo?: EnumTipoUsuarioFilter<"Usuario"> | $Enums.TipoUsuario
    isEmailVerified?: BoolFilter<"Usuario"> | boolean
    isSuspended?: BoolFilter<"Usuario"> | boolean
    motivoSuspension?: StringNullableFilter<"Usuario"> | string | null
    emailVerificationToken?: StringNullableFilter<"Usuario"> | string | null
    emailVerificationExpiry?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    resetToken?: StringNullableFilter<"Usuario"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    alojamientos?: AlojamientoListRelationFilter
    estudianteConversaciones?: ConversacionListRelationFilter
    conversacionesComoPropietario?: ConversacionListRelationFilter
    mensajesRemitidos?: MensajeListRelationFilter
    notificaciones?: NotificacionListRelationFilter
    alojamientosFavoritos?: AlojamientoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    telefono?: SortOrderInput | SortOrder
    tipo?: SortOrder
    isEmailVerified?: SortOrder
    isSuspended?: SortOrder
    motivoSuspension?: SortOrderInput | SortOrder
    emailVerificationToken?: SortOrderInput | SortOrder
    emailVerificationExpiry?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    alojamientos?: AlojamientoOrderByRelationAggregateInput
    estudianteConversaciones?: ConversacionOrderByRelationAggregateInput
    conversacionesComoPropietario?: ConversacionOrderByRelationAggregateInput
    mensajesRemitidos?: MensajeOrderByRelationAggregateInput
    notificaciones?: NotificacionOrderByRelationAggregateInput
    alojamientosFavoritos?: AlojamientoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    telefono?: StringNullableFilter<"Usuario"> | string | null
    tipo?: EnumTipoUsuarioFilter<"Usuario"> | $Enums.TipoUsuario
    isEmailVerified?: BoolFilter<"Usuario"> | boolean
    isSuspended?: BoolFilter<"Usuario"> | boolean
    motivoSuspension?: StringNullableFilter<"Usuario"> | string | null
    emailVerificationToken?: StringNullableFilter<"Usuario"> | string | null
    emailVerificationExpiry?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    resetToken?: StringNullableFilter<"Usuario"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    alojamientos?: AlojamientoListRelationFilter
    estudianteConversaciones?: ConversacionListRelationFilter
    conversacionesComoPropietario?: ConversacionListRelationFilter
    mensajesRemitidos?: MensajeListRelationFilter
    notificaciones?: NotificacionListRelationFilter
    alojamientosFavoritos?: AlojamientoListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    telefono?: SortOrderInput | SortOrder
    tipo?: SortOrder
    isEmailVerified?: SortOrder
    isSuspended?: SortOrder
    motivoSuspension?: SortOrderInput | SortOrder
    emailVerificationToken?: SortOrderInput | SortOrder
    emailVerificationExpiry?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    telefono?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    tipo?: EnumTipoUsuarioWithAggregatesFilter<"Usuario"> | $Enums.TipoUsuario
    isEmailVerified?: BoolWithAggregatesFilter<"Usuario"> | boolean
    isSuspended?: BoolWithAggregatesFilter<"Usuario"> | boolean
    motivoSuspension?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    emailVerificationToken?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    emailVerificationExpiry?: DateTimeNullableWithAggregatesFilter<"Usuario"> | Date | string | null
    resetToken?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    resetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"Usuario"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type NotificacionWhereInput = {
    AND?: NotificacionWhereInput | NotificacionWhereInput[]
    OR?: NotificacionWhereInput[]
    NOT?: NotificacionWhereInput | NotificacionWhereInput[]
    id?: IntFilter<"Notificacion"> | number
    tipo?: EnumTipoNotificacionFilter<"Notificacion"> | $Enums.TipoNotificacion
    titulo?: StringFilter<"Notificacion"> | string
    descripcion?: StringFilter<"Notificacion"> | string
    isRead?: BoolFilter<"Notificacion"> | boolean
    createdAt?: DateTimeFilter<"Notificacion"> | Date | string
    usuarioId?: IntFilter<"Notificacion"> | number
    conversacionId?: IntNullableFilter<"Notificacion"> | number | null
    mensajeId?: IntNullableFilter<"Notificacion"> | number | null
    alojamientoId?: IntNullableFilter<"Notificacion"> | number | null
    alojamiento?: XOR<AlojamientoNullableScalarRelationFilter, AlojamientoWhereInput> | null
    conversacion?: XOR<ConversacionNullableScalarRelationFilter, ConversacionWhereInput> | null
    mensaje?: XOR<MensajeNullableScalarRelationFilter, MensajeWhereInput> | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type NotificacionOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    usuarioId?: SortOrder
    conversacionId?: SortOrderInput | SortOrder
    mensajeId?: SortOrderInput | SortOrder
    alojamientoId?: SortOrderInput | SortOrder
    alojamiento?: AlojamientoOrderByWithRelationInput
    conversacion?: ConversacionOrderByWithRelationInput
    mensaje?: MensajeOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type NotificacionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificacionWhereInput | NotificacionWhereInput[]
    OR?: NotificacionWhereInput[]
    NOT?: NotificacionWhereInput | NotificacionWhereInput[]
    tipo?: EnumTipoNotificacionFilter<"Notificacion"> | $Enums.TipoNotificacion
    titulo?: StringFilter<"Notificacion"> | string
    descripcion?: StringFilter<"Notificacion"> | string
    isRead?: BoolFilter<"Notificacion"> | boolean
    createdAt?: DateTimeFilter<"Notificacion"> | Date | string
    usuarioId?: IntFilter<"Notificacion"> | number
    conversacionId?: IntNullableFilter<"Notificacion"> | number | null
    mensajeId?: IntNullableFilter<"Notificacion"> | number | null
    alojamientoId?: IntNullableFilter<"Notificacion"> | number | null
    alojamiento?: XOR<AlojamientoNullableScalarRelationFilter, AlojamientoWhereInput> | null
    conversacion?: XOR<ConversacionNullableScalarRelationFilter, ConversacionWhereInput> | null
    mensaje?: XOR<MensajeNullableScalarRelationFilter, MensajeWhereInput> | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type NotificacionOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    usuarioId?: SortOrder
    conversacionId?: SortOrderInput | SortOrder
    mensajeId?: SortOrderInput | SortOrder
    alojamientoId?: SortOrderInput | SortOrder
    _count?: NotificacionCountOrderByAggregateInput
    _avg?: NotificacionAvgOrderByAggregateInput
    _max?: NotificacionMaxOrderByAggregateInput
    _min?: NotificacionMinOrderByAggregateInput
    _sum?: NotificacionSumOrderByAggregateInput
  }

  export type NotificacionScalarWhereWithAggregatesInput = {
    AND?: NotificacionScalarWhereWithAggregatesInput | NotificacionScalarWhereWithAggregatesInput[]
    OR?: NotificacionScalarWhereWithAggregatesInput[]
    NOT?: NotificacionScalarWhereWithAggregatesInput | NotificacionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notificacion"> | number
    tipo?: EnumTipoNotificacionWithAggregatesFilter<"Notificacion"> | $Enums.TipoNotificacion
    titulo?: StringWithAggregatesFilter<"Notificacion"> | string
    descripcion?: StringWithAggregatesFilter<"Notificacion"> | string
    isRead?: BoolWithAggregatesFilter<"Notificacion"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notificacion"> | Date | string
    usuarioId?: IntWithAggregatesFilter<"Notificacion"> | number
    conversacionId?: IntNullableWithAggregatesFilter<"Notificacion"> | number | null
    mensajeId?: IntNullableWithAggregatesFilter<"Notificacion"> | number | null
    alojamientoId?: IntNullableWithAggregatesFilter<"Notificacion"> | number | null
  }

  export type AlojamientoCreateInput = {
    slug: string
    estado?: string
    motivoRechazo?: string | null
    photoUrls?: AlojamientoCreatephotoUrlsInput | string[]
    postedDate?: Date | string
    aguaIncluido?: boolean
    descripcion: string
    electricidadIncluido?: boolean
    gasIncluido?: boolean
    habitaciones: number
    hayAireAcondicionado?: boolean
    hayAscensor?: boolean
    hayCalefaccion?: boolean
    hayGaraje?: boolean
    hayGas?: boolean
    hayGimnasio?: boolean
    hayHorno?: boolean
    hayInternet?: boolean
    hayLavadora?: boolean
    hayLavavajillas?: boolean
    hayMicroondas?: boolean
    hayMuebles?: boolean
    hayNevera?: boolean
    hayPiscina?: boolean
    hayPortero?: boolean
    haySecadora?: boolean
    hayTelefono?: boolean
    hayTelevision?: boolean
    hayTerraza?: boolean
    hayZonaComunitaria?: boolean
    internetIncluido?: boolean
    nombre: string
    precio: number
    superficie: number
    plazasLibres: number
    banos: number
    dirigidoA: string
    infoExtra: string
    esDestacado?: boolean
    tipoAlojamiento: string
    direccion?: string | null
    ciudad?: string | null
    provincia?: string | null
    pais?: string | null
    codigoPostal?: string | null
    portal?: string | null
    piso?: string | null
    puerta?: string | null
    propietario: UsuarioCreateNestedOneWithoutAlojamientosInput
    conversaciones?: ConversacionCreateNestedManyWithoutAlojamientoInput
    notificaciones?: NotificacionCreateNestedManyWithoutAlojamientoInput
    favoritedBy?: UsuarioCreateNestedManyWithoutAlojamientosFavoritosInput
  }

  export type AlojamientoUncheckedCreateInput = {
    id?: number
    slug: string
    estado?: string
    motivoRechazo?: string | null
    photoUrls?: AlojamientoCreatephotoUrlsInput | string[]
    postedDate?: Date | string
    aguaIncluido?: boolean
    descripcion: string
    electricidadIncluido?: boolean
    gasIncluido?: boolean
    habitaciones: number
    hayAireAcondicionado?: boolean
    hayAscensor?: boolean
    hayCalefaccion?: boolean
    hayGaraje?: boolean
    hayGas?: boolean
    hayGimnasio?: boolean
    hayHorno?: boolean
    hayInternet?: boolean
    hayLavadora?: boolean
    hayLavavajillas?: boolean
    hayMicroondas?: boolean
    hayMuebles?: boolean
    hayNevera?: boolean
    hayPiscina?: boolean
    hayPortero?: boolean
    haySecadora?: boolean
    hayTelefono?: boolean
    hayTelevision?: boolean
    hayTerraza?: boolean
    hayZonaComunitaria?: boolean
    internetIncluido?: boolean
    nombre: string
    precio: number
    superficie: number
    plazasLibres: number
    banos: number
    dirigidoA: string
    infoExtra: string
    esDestacado?: boolean
    tipoAlojamiento: string
    managerUsuarioId: number
    direccion?: string | null
    ciudad?: string | null
    provincia?: string | null
    pais?: string | null
    codigoPostal?: string | null
    portal?: string | null
    piso?: string | null
    puerta?: string | null
    conversaciones?: ConversacionUncheckedCreateNestedManyWithoutAlojamientoInput
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutAlojamientoInput
    favoritedBy?: UsuarioUncheckedCreateNestedManyWithoutAlojamientosFavoritosInput
  }

  export type AlojamientoUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    motivoRechazo?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    descripcion?: StringFieldUpdateOperationsInput | string
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    habitaciones?: IntFieldUpdateOperationsInput | number
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    dirigidoA?: StringFieldUpdateOperationsInput | string
    infoExtra?: StringFieldUpdateOperationsInput | string
    esDestacado?: BoolFieldUpdateOperationsInput | boolean
    tipoAlojamiento?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    provincia?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
    portal?: NullableStringFieldUpdateOperationsInput | string | null
    piso?: NullableStringFieldUpdateOperationsInput | string | null
    puerta?: NullableStringFieldUpdateOperationsInput | string | null
    propietario?: UsuarioUpdateOneRequiredWithoutAlojamientosNestedInput
    conversaciones?: ConversacionUpdateManyWithoutAlojamientoNestedInput
    notificaciones?: NotificacionUpdateManyWithoutAlojamientoNestedInput
    favoritedBy?: UsuarioUpdateManyWithoutAlojamientosFavoritosNestedInput
  }

  export type AlojamientoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    motivoRechazo?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    descripcion?: StringFieldUpdateOperationsInput | string
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    habitaciones?: IntFieldUpdateOperationsInput | number
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    dirigidoA?: StringFieldUpdateOperationsInput | string
    infoExtra?: StringFieldUpdateOperationsInput | string
    esDestacado?: BoolFieldUpdateOperationsInput | boolean
    tipoAlojamiento?: StringFieldUpdateOperationsInput | string
    managerUsuarioId?: IntFieldUpdateOperationsInput | number
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    provincia?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
    portal?: NullableStringFieldUpdateOperationsInput | string | null
    piso?: NullableStringFieldUpdateOperationsInput | string | null
    puerta?: NullableStringFieldUpdateOperationsInput | string | null
    conversaciones?: ConversacionUncheckedUpdateManyWithoutAlojamientoNestedInput
    notificaciones?: NotificacionUncheckedUpdateManyWithoutAlojamientoNestedInput
    favoritedBy?: UsuarioUncheckedUpdateManyWithoutAlojamientosFavoritosNestedInput
  }

  export type AlojamientoCreateManyInput = {
    id?: number
    slug: string
    estado?: string
    motivoRechazo?: string | null
    photoUrls?: AlojamientoCreatephotoUrlsInput | string[]
    postedDate?: Date | string
    aguaIncluido?: boolean
    descripcion: string
    electricidadIncluido?: boolean
    gasIncluido?: boolean
    habitaciones: number
    hayAireAcondicionado?: boolean
    hayAscensor?: boolean
    hayCalefaccion?: boolean
    hayGaraje?: boolean
    hayGas?: boolean
    hayGimnasio?: boolean
    hayHorno?: boolean
    hayInternet?: boolean
    hayLavadora?: boolean
    hayLavavajillas?: boolean
    hayMicroondas?: boolean
    hayMuebles?: boolean
    hayNevera?: boolean
    hayPiscina?: boolean
    hayPortero?: boolean
    haySecadora?: boolean
    hayTelefono?: boolean
    hayTelevision?: boolean
    hayTerraza?: boolean
    hayZonaComunitaria?: boolean
    internetIncluido?: boolean
    nombre: string
    precio: number
    superficie: number
    plazasLibres: number
    banos: number
    dirigidoA: string
    infoExtra: string
    esDestacado?: boolean
    tipoAlojamiento: string
    managerUsuarioId: number
    direccion?: string | null
    ciudad?: string | null
    provincia?: string | null
    pais?: string | null
    codigoPostal?: string | null
    portal?: string | null
    piso?: string | null
    puerta?: string | null
  }

  export type AlojamientoUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    motivoRechazo?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    descripcion?: StringFieldUpdateOperationsInput | string
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    habitaciones?: IntFieldUpdateOperationsInput | number
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    dirigidoA?: StringFieldUpdateOperationsInput | string
    infoExtra?: StringFieldUpdateOperationsInput | string
    esDestacado?: BoolFieldUpdateOperationsInput | boolean
    tipoAlojamiento?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    provincia?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
    portal?: NullableStringFieldUpdateOperationsInput | string | null
    piso?: NullableStringFieldUpdateOperationsInput | string | null
    puerta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlojamientoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    motivoRechazo?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    descripcion?: StringFieldUpdateOperationsInput | string
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    habitaciones?: IntFieldUpdateOperationsInput | number
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    dirigidoA?: StringFieldUpdateOperationsInput | string
    infoExtra?: StringFieldUpdateOperationsInput | string
    esDestacado?: BoolFieldUpdateOperationsInput | boolean
    tipoAlojamiento?: StringFieldUpdateOperationsInput | string
    managerUsuarioId?: IntFieldUpdateOperationsInput | number
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    provincia?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
    portal?: NullableStringFieldUpdateOperationsInput | string | null
    piso?: NullableStringFieldUpdateOperationsInput | string | null
    puerta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConversacionCreateInput = {
    createdAt?: Date | string
    ultimoMensajeId?: number | null
    estudianteVistoUltimo?: boolean
    propietarioVistoUltimo?: boolean
    esConversacionAdmin?: boolean
    alojamiento?: AlojamientoCreateNestedOneWithoutConversacionesInput
    estudiante: UsuarioCreateNestedOneWithoutEstudianteConversacionesInput
    propietario: UsuarioCreateNestedOneWithoutConversacionesComoPropietarioInput
    mensajes?: MensajeCreateNestedManyWithoutConversacionInput
    notificaciones?: NotificacionCreateNestedManyWithoutConversacionInput
  }

  export type ConversacionUncheckedCreateInput = {
    id?: number
    alojamientoId?: number | null
    createdAt?: Date | string
    estudianteId: number
    propietarioId: number
    ultimoMensajeId?: number | null
    estudianteVistoUltimo?: boolean
    propietarioVistoUltimo?: boolean
    esConversacionAdmin?: boolean
    mensajes?: MensajeUncheckedCreateNestedManyWithoutConversacionInput
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutConversacionInput
  }

  export type ConversacionUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoMensajeId?: NullableIntFieldUpdateOperationsInput | number | null
    estudianteVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    propietarioVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    esConversacionAdmin?: BoolFieldUpdateOperationsInput | boolean
    alojamiento?: AlojamientoUpdateOneWithoutConversacionesNestedInput
    estudiante?: UsuarioUpdateOneRequiredWithoutEstudianteConversacionesNestedInput
    propietario?: UsuarioUpdateOneRequiredWithoutConversacionesComoPropietarioNestedInput
    mensajes?: MensajeUpdateManyWithoutConversacionNestedInput
    notificaciones?: NotificacionUpdateManyWithoutConversacionNestedInput
  }

  export type ConversacionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    alojamientoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estudianteId?: IntFieldUpdateOperationsInput | number
    propietarioId?: IntFieldUpdateOperationsInput | number
    ultimoMensajeId?: NullableIntFieldUpdateOperationsInput | number | null
    estudianteVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    propietarioVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    esConversacionAdmin?: BoolFieldUpdateOperationsInput | boolean
    mensajes?: MensajeUncheckedUpdateManyWithoutConversacionNestedInput
    notificaciones?: NotificacionUncheckedUpdateManyWithoutConversacionNestedInput
  }

  export type ConversacionCreateManyInput = {
    id?: number
    alojamientoId?: number | null
    createdAt?: Date | string
    estudianteId: number
    propietarioId: number
    ultimoMensajeId?: number | null
    estudianteVistoUltimo?: boolean
    propietarioVistoUltimo?: boolean
    esConversacionAdmin?: boolean
  }

  export type ConversacionUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoMensajeId?: NullableIntFieldUpdateOperationsInput | number | null
    estudianteVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    propietarioVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    esConversacionAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ConversacionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    alojamientoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estudianteId?: IntFieldUpdateOperationsInput | number
    propietarioId?: IntFieldUpdateOperationsInput | number
    ultimoMensajeId?: NullableIntFieldUpdateOperationsInput | number | null
    estudianteVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    propietarioVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    esConversacionAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MensajeCreateInput = {
    contenido: string
    createdAt?: Date | string
    conversacion: ConversacionCreateNestedOneWithoutMensajesInput
    emisor: UsuarioCreateNestedOneWithoutMensajesRemitidosInput
    notificaciones?: NotificacionCreateNestedManyWithoutMensajeInput
  }

  export type MensajeUncheckedCreateInput = {
    id?: number
    contenido: string
    conversacionId: number
    createdAt?: Date | string
    emisorId: number
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutMensajeInput
  }

  export type MensajeUpdateInput = {
    contenido?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversacion?: ConversacionUpdateOneRequiredWithoutMensajesNestedInput
    emisor?: UsuarioUpdateOneRequiredWithoutMensajesRemitidosNestedInput
    notificaciones?: NotificacionUpdateManyWithoutMensajeNestedInput
  }

  export type MensajeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
    conversacionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emisorId?: IntFieldUpdateOperationsInput | number
    notificaciones?: NotificacionUncheckedUpdateManyWithoutMensajeNestedInput
  }

  export type MensajeCreateManyInput = {
    id?: number
    contenido: string
    conversacionId: number
    createdAt?: Date | string
    emisorId: number
  }

  export type MensajeUpdateManyMutationInput = {
    contenido?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
    conversacionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emisorId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateInput = {
    nombre: string
    email: string
    password: string
    telefono?: string | null
    tipo: $Enums.TipoUsuario
    isEmailVerified?: boolean
    isSuspended?: boolean
    motivoSuspension?: string | null
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    alojamientos?: AlojamientoCreateNestedManyWithoutPropietarioInput
    estudianteConversaciones?: ConversacionCreateNestedManyWithoutEstudianteInput
    conversacionesComoPropietario?: ConversacionCreateNestedManyWithoutPropietarioInput
    mensajesRemitidos?: MensajeCreateNestedManyWithoutEmisorInput
    notificaciones?: NotificacionCreateNestedManyWithoutUsuarioInput
    alojamientosFavoritos?: AlojamientoCreateNestedManyWithoutFavoritedByInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombre: string
    email: string
    password: string
    telefono?: string | null
    tipo: $Enums.TipoUsuario
    isEmailVerified?: boolean
    isSuspended?: boolean
    motivoSuspension?: string | null
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    alojamientos?: AlojamientoUncheckedCreateNestedManyWithoutPropietarioInput
    estudianteConversaciones?: ConversacionUncheckedCreateNestedManyWithoutEstudianteInput
    conversacionesComoPropietario?: ConversacionUncheckedCreateNestedManyWithoutPropietarioInput
    mensajesRemitidos?: MensajeUncheckedCreateNestedManyWithoutEmisorInput
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutUsuarioInput
    alojamientosFavoritos?: AlojamientoUncheckedCreateNestedManyWithoutFavoritedByInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    motivoSuspension?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alojamientos?: AlojamientoUpdateManyWithoutPropietarioNestedInput
    estudianteConversaciones?: ConversacionUpdateManyWithoutEstudianteNestedInput
    conversacionesComoPropietario?: ConversacionUpdateManyWithoutPropietarioNestedInput
    mensajesRemitidos?: MensajeUpdateManyWithoutEmisorNestedInput
    notificaciones?: NotificacionUpdateManyWithoutUsuarioNestedInput
    alojamientosFavoritos?: AlojamientoUpdateManyWithoutFavoritedByNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    motivoSuspension?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alojamientos?: AlojamientoUncheckedUpdateManyWithoutPropietarioNestedInput
    estudianteConversaciones?: ConversacionUncheckedUpdateManyWithoutEstudianteNestedInput
    conversacionesComoPropietario?: ConversacionUncheckedUpdateManyWithoutPropietarioNestedInput
    mensajesRemitidos?: MensajeUncheckedUpdateManyWithoutEmisorNestedInput
    notificaciones?: NotificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    alojamientosFavoritos?: AlojamientoUncheckedUpdateManyWithoutFavoritedByNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombre: string
    email: string
    password: string
    telefono?: string | null
    tipo: $Enums.TipoUsuario
    isEmailVerified?: boolean
    isSuspended?: boolean
    motivoSuspension?: string | null
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    motivoSuspension?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    motivoSuspension?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacionCreateInput = {
    tipo: $Enums.TipoNotificacion
    titulo: string
    descripcion: string
    isRead?: boolean
    createdAt?: Date | string
    alojamiento?: AlojamientoCreateNestedOneWithoutNotificacionesInput
    conversacion?: ConversacionCreateNestedOneWithoutNotificacionesInput
    mensaje?: MensajeCreateNestedOneWithoutNotificacionesInput
    usuario: UsuarioCreateNestedOneWithoutNotificacionesInput
  }

  export type NotificacionUncheckedCreateInput = {
    id?: number
    tipo: $Enums.TipoNotificacion
    titulo: string
    descripcion: string
    isRead?: boolean
    createdAt?: Date | string
    usuarioId: number
    conversacionId?: number | null
    mensajeId?: number | null
    alojamientoId?: number | null
  }

  export type NotificacionUpdateInput = {
    tipo?: EnumTipoNotificacionFieldUpdateOperationsInput | $Enums.TipoNotificacion
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alojamiento?: AlojamientoUpdateOneWithoutNotificacionesNestedInput
    conversacion?: ConversacionUpdateOneWithoutNotificacionesNestedInput
    mensaje?: MensajeUpdateOneWithoutNotificacionesNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutNotificacionesNestedInput
  }

  export type NotificacionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoNotificacionFieldUpdateOperationsInput | $Enums.TipoNotificacion
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    conversacionId?: NullableIntFieldUpdateOperationsInput | number | null
    mensajeId?: NullableIntFieldUpdateOperationsInput | number | null
    alojamientoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotificacionCreateManyInput = {
    id?: number
    tipo: $Enums.TipoNotificacion
    titulo: string
    descripcion: string
    isRead?: boolean
    createdAt?: Date | string
    usuarioId: number
    conversacionId?: number | null
    mensajeId?: number | null
    alojamientoId?: number | null
  }

  export type NotificacionUpdateManyMutationInput = {
    tipo?: EnumTipoNotificacionFieldUpdateOperationsInput | $Enums.TipoNotificacion
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoNotificacionFieldUpdateOperationsInput | $Enums.TipoNotificacion
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    conversacionId?: NullableIntFieldUpdateOperationsInput | number | null
    mensajeId?: NullableIntFieldUpdateOperationsInput | number | null
    alojamientoId?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type ConversacionListRelationFilter = {
    every?: ConversacionWhereInput
    some?: ConversacionWhereInput
    none?: ConversacionWhereInput
  }

  export type NotificacionListRelationFilter = {
    every?: NotificacionWhereInput
    some?: NotificacionWhereInput
    none?: NotificacionWhereInput
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ConversacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlojamientoCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    estado?: SortOrder
    motivoRechazo?: SortOrder
    photoUrls?: SortOrder
    postedDate?: SortOrder
    aguaIncluido?: SortOrder
    descripcion?: SortOrder
    electricidadIncluido?: SortOrder
    gasIncluido?: SortOrder
    habitaciones?: SortOrder
    hayAireAcondicionado?: SortOrder
    hayAscensor?: SortOrder
    hayCalefaccion?: SortOrder
    hayGaraje?: SortOrder
    hayGas?: SortOrder
    hayGimnasio?: SortOrder
    hayHorno?: SortOrder
    hayInternet?: SortOrder
    hayLavadora?: SortOrder
    hayLavavajillas?: SortOrder
    hayMicroondas?: SortOrder
    hayMuebles?: SortOrder
    hayNevera?: SortOrder
    hayPiscina?: SortOrder
    hayPortero?: SortOrder
    haySecadora?: SortOrder
    hayTelefono?: SortOrder
    hayTelevision?: SortOrder
    hayTerraza?: SortOrder
    hayZonaComunitaria?: SortOrder
    internetIncluido?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    superficie?: SortOrder
    plazasLibres?: SortOrder
    banos?: SortOrder
    dirigidoA?: SortOrder
    infoExtra?: SortOrder
    esDestacado?: SortOrder
    tipoAlojamiento?: SortOrder
    managerUsuarioId?: SortOrder
    direccion?: SortOrder
    ciudad?: SortOrder
    provincia?: SortOrder
    pais?: SortOrder
    codigoPostal?: SortOrder
    portal?: SortOrder
    piso?: SortOrder
    puerta?: SortOrder
  }

  export type AlojamientoAvgOrderByAggregateInput = {
    id?: SortOrder
    habitaciones?: SortOrder
    precio?: SortOrder
    superficie?: SortOrder
    plazasLibres?: SortOrder
    banos?: SortOrder
    managerUsuarioId?: SortOrder
  }

  export type AlojamientoMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    estado?: SortOrder
    motivoRechazo?: SortOrder
    postedDate?: SortOrder
    aguaIncluido?: SortOrder
    descripcion?: SortOrder
    electricidadIncluido?: SortOrder
    gasIncluido?: SortOrder
    habitaciones?: SortOrder
    hayAireAcondicionado?: SortOrder
    hayAscensor?: SortOrder
    hayCalefaccion?: SortOrder
    hayGaraje?: SortOrder
    hayGas?: SortOrder
    hayGimnasio?: SortOrder
    hayHorno?: SortOrder
    hayInternet?: SortOrder
    hayLavadora?: SortOrder
    hayLavavajillas?: SortOrder
    hayMicroondas?: SortOrder
    hayMuebles?: SortOrder
    hayNevera?: SortOrder
    hayPiscina?: SortOrder
    hayPortero?: SortOrder
    haySecadora?: SortOrder
    hayTelefono?: SortOrder
    hayTelevision?: SortOrder
    hayTerraza?: SortOrder
    hayZonaComunitaria?: SortOrder
    internetIncluido?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    superficie?: SortOrder
    plazasLibres?: SortOrder
    banos?: SortOrder
    dirigidoA?: SortOrder
    infoExtra?: SortOrder
    esDestacado?: SortOrder
    tipoAlojamiento?: SortOrder
    managerUsuarioId?: SortOrder
    direccion?: SortOrder
    ciudad?: SortOrder
    provincia?: SortOrder
    pais?: SortOrder
    codigoPostal?: SortOrder
    portal?: SortOrder
    piso?: SortOrder
    puerta?: SortOrder
  }

  export type AlojamientoMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    estado?: SortOrder
    motivoRechazo?: SortOrder
    postedDate?: SortOrder
    aguaIncluido?: SortOrder
    descripcion?: SortOrder
    electricidadIncluido?: SortOrder
    gasIncluido?: SortOrder
    habitaciones?: SortOrder
    hayAireAcondicionado?: SortOrder
    hayAscensor?: SortOrder
    hayCalefaccion?: SortOrder
    hayGaraje?: SortOrder
    hayGas?: SortOrder
    hayGimnasio?: SortOrder
    hayHorno?: SortOrder
    hayInternet?: SortOrder
    hayLavadora?: SortOrder
    hayLavavajillas?: SortOrder
    hayMicroondas?: SortOrder
    hayMuebles?: SortOrder
    hayNevera?: SortOrder
    hayPiscina?: SortOrder
    hayPortero?: SortOrder
    haySecadora?: SortOrder
    hayTelefono?: SortOrder
    hayTelevision?: SortOrder
    hayTerraza?: SortOrder
    hayZonaComunitaria?: SortOrder
    internetIncluido?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    superficie?: SortOrder
    plazasLibres?: SortOrder
    banos?: SortOrder
    dirigidoA?: SortOrder
    infoExtra?: SortOrder
    esDestacado?: SortOrder
    tipoAlojamiento?: SortOrder
    managerUsuarioId?: SortOrder
    direccion?: SortOrder
    ciudad?: SortOrder
    provincia?: SortOrder
    pais?: SortOrder
    codigoPostal?: SortOrder
    portal?: SortOrder
    piso?: SortOrder
    puerta?: SortOrder
  }

  export type AlojamientoSumOrderByAggregateInput = {
    id?: SortOrder
    habitaciones?: SortOrder
    precio?: SortOrder
    superficie?: SortOrder
    plazasLibres?: SortOrder
    banos?: SortOrder
    managerUsuarioId?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type AlojamientoNullableScalarRelationFilter = {
    is?: AlojamientoWhereInput | null
    isNot?: AlojamientoWhereInput | null
  }

  export type MensajeListRelationFilter = {
    every?: MensajeWhereInput
    some?: MensajeWhereInput
    none?: MensajeWhereInput
  }

  export type MensajeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversacionEstudianteIdPropietarioIdAlojamientoIdCompoundUniqueInput = {
    estudianteId: number
    propietarioId: number
    alojamientoId: number
  }

  export type ConversacionCountOrderByAggregateInput = {
    id?: SortOrder
    alojamientoId?: SortOrder
    createdAt?: SortOrder
    estudianteId?: SortOrder
    propietarioId?: SortOrder
    ultimoMensajeId?: SortOrder
    estudianteVistoUltimo?: SortOrder
    propietarioVistoUltimo?: SortOrder
    esConversacionAdmin?: SortOrder
  }

  export type ConversacionAvgOrderByAggregateInput = {
    id?: SortOrder
    alojamientoId?: SortOrder
    estudianteId?: SortOrder
    propietarioId?: SortOrder
    ultimoMensajeId?: SortOrder
  }

  export type ConversacionMaxOrderByAggregateInput = {
    id?: SortOrder
    alojamientoId?: SortOrder
    createdAt?: SortOrder
    estudianteId?: SortOrder
    propietarioId?: SortOrder
    ultimoMensajeId?: SortOrder
    estudianteVistoUltimo?: SortOrder
    propietarioVistoUltimo?: SortOrder
    esConversacionAdmin?: SortOrder
  }

  export type ConversacionMinOrderByAggregateInput = {
    id?: SortOrder
    alojamientoId?: SortOrder
    createdAt?: SortOrder
    estudianteId?: SortOrder
    propietarioId?: SortOrder
    ultimoMensajeId?: SortOrder
    estudianteVistoUltimo?: SortOrder
    propietarioVistoUltimo?: SortOrder
    esConversacionAdmin?: SortOrder
  }

  export type ConversacionSumOrderByAggregateInput = {
    id?: SortOrder
    alojamientoId?: SortOrder
    estudianteId?: SortOrder
    propietarioId?: SortOrder
    ultimoMensajeId?: SortOrder
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

  export type ConversacionScalarRelationFilter = {
    is?: ConversacionWhereInput
    isNot?: ConversacionWhereInput
  }

  export type MensajeCountOrderByAggregateInput = {
    id?: SortOrder
    contenido?: SortOrder
    conversacionId?: SortOrder
    createdAt?: SortOrder
    emisorId?: SortOrder
  }

  export type MensajeAvgOrderByAggregateInput = {
    id?: SortOrder
    conversacionId?: SortOrder
    emisorId?: SortOrder
  }

  export type MensajeMaxOrderByAggregateInput = {
    id?: SortOrder
    contenido?: SortOrder
    conversacionId?: SortOrder
    createdAt?: SortOrder
    emisorId?: SortOrder
  }

  export type MensajeMinOrderByAggregateInput = {
    id?: SortOrder
    contenido?: SortOrder
    conversacionId?: SortOrder
    createdAt?: SortOrder
    emisorId?: SortOrder
  }

  export type MensajeSumOrderByAggregateInput = {
    id?: SortOrder
    conversacionId?: SortOrder
    emisorId?: SortOrder
  }

  export type EnumTipoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioFilter<$PrismaModel> | $Enums.TipoUsuario
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AlojamientoListRelationFilter = {
    every?: AlojamientoWhereInput
    some?: AlojamientoWhereInput
    none?: AlojamientoWhereInput
  }

  export type AlojamientoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    telefono?: SortOrder
    tipo?: SortOrder
    isEmailVerified?: SortOrder
    isSuspended?: SortOrder
    motivoSuspension?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationExpiry?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    createdAt?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    telefono?: SortOrder
    tipo?: SortOrder
    isEmailVerified?: SortOrder
    isSuspended?: SortOrder
    motivoSuspension?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationExpiry?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    createdAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    telefono?: SortOrder
    tipo?: SortOrder
    isEmailVerified?: SortOrder
    isSuspended?: SortOrder
    motivoSuspension?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationExpiry?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    createdAt?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumTipoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.TipoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumTipoUsuarioFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumTipoNotificacionFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoNotificacion | EnumTipoNotificacionFieldRefInput<$PrismaModel>
    in?: $Enums.TipoNotificacion[] | ListEnumTipoNotificacionFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoNotificacion[] | ListEnumTipoNotificacionFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoNotificacionFilter<$PrismaModel> | $Enums.TipoNotificacion
  }

  export type ConversacionNullableScalarRelationFilter = {
    is?: ConversacionWhereInput | null
    isNot?: ConversacionWhereInput | null
  }

  export type MensajeNullableScalarRelationFilter = {
    is?: MensajeWhereInput | null
    isNot?: MensajeWhereInput | null
  }

  export type NotificacionCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    usuarioId?: SortOrder
    conversacionId?: SortOrder
    mensajeId?: SortOrder
    alojamientoId?: SortOrder
  }

  export type NotificacionAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    conversacionId?: SortOrder
    mensajeId?: SortOrder
    alojamientoId?: SortOrder
  }

  export type NotificacionMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    usuarioId?: SortOrder
    conversacionId?: SortOrder
    mensajeId?: SortOrder
    alojamientoId?: SortOrder
  }

  export type NotificacionMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    usuarioId?: SortOrder
    conversacionId?: SortOrder
    mensajeId?: SortOrder
    alojamientoId?: SortOrder
  }

  export type NotificacionSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    conversacionId?: SortOrder
    mensajeId?: SortOrder
    alojamientoId?: SortOrder
  }

  export type EnumTipoNotificacionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoNotificacion | EnumTipoNotificacionFieldRefInput<$PrismaModel>
    in?: $Enums.TipoNotificacion[] | ListEnumTipoNotificacionFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoNotificacion[] | ListEnumTipoNotificacionFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoNotificacionWithAggregatesFilter<$PrismaModel> | $Enums.TipoNotificacion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoNotificacionFilter<$PrismaModel>
    _max?: NestedEnumTipoNotificacionFilter<$PrismaModel>
  }

  export type AlojamientoCreatephotoUrlsInput = {
    set: string[]
  }

  export type UsuarioCreateNestedOneWithoutAlojamientosInput = {
    create?: XOR<UsuarioCreateWithoutAlojamientosInput, UsuarioUncheckedCreateWithoutAlojamientosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAlojamientosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ConversacionCreateNestedManyWithoutAlojamientoInput = {
    create?: XOR<ConversacionCreateWithoutAlojamientoInput, ConversacionUncheckedCreateWithoutAlojamientoInput> | ConversacionCreateWithoutAlojamientoInput[] | ConversacionUncheckedCreateWithoutAlojamientoInput[]
    connectOrCreate?: ConversacionCreateOrConnectWithoutAlojamientoInput | ConversacionCreateOrConnectWithoutAlojamientoInput[]
    createMany?: ConversacionCreateManyAlojamientoInputEnvelope
    connect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
  }

  export type NotificacionCreateNestedManyWithoutAlojamientoInput = {
    create?: XOR<NotificacionCreateWithoutAlojamientoInput, NotificacionUncheckedCreateWithoutAlojamientoInput> | NotificacionCreateWithoutAlojamientoInput[] | NotificacionUncheckedCreateWithoutAlojamientoInput[]
    connectOrCreate?: NotificacionCreateOrConnectWithoutAlojamientoInput | NotificacionCreateOrConnectWithoutAlojamientoInput[]
    createMany?: NotificacionCreateManyAlojamientoInputEnvelope
    connect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
  }

  export type UsuarioCreateNestedManyWithoutAlojamientosFavoritosInput = {
    create?: XOR<UsuarioCreateWithoutAlojamientosFavoritosInput, UsuarioUncheckedCreateWithoutAlojamientosFavoritosInput> | UsuarioCreateWithoutAlojamientosFavoritosInput[] | UsuarioUncheckedCreateWithoutAlojamientosFavoritosInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutAlojamientosFavoritosInput | UsuarioCreateOrConnectWithoutAlojamientosFavoritosInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type ConversacionUncheckedCreateNestedManyWithoutAlojamientoInput = {
    create?: XOR<ConversacionCreateWithoutAlojamientoInput, ConversacionUncheckedCreateWithoutAlojamientoInput> | ConversacionCreateWithoutAlojamientoInput[] | ConversacionUncheckedCreateWithoutAlojamientoInput[]
    connectOrCreate?: ConversacionCreateOrConnectWithoutAlojamientoInput | ConversacionCreateOrConnectWithoutAlojamientoInput[]
    createMany?: ConversacionCreateManyAlojamientoInputEnvelope
    connect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
  }

  export type NotificacionUncheckedCreateNestedManyWithoutAlojamientoInput = {
    create?: XOR<NotificacionCreateWithoutAlojamientoInput, NotificacionUncheckedCreateWithoutAlojamientoInput> | NotificacionCreateWithoutAlojamientoInput[] | NotificacionUncheckedCreateWithoutAlojamientoInput[]
    connectOrCreate?: NotificacionCreateOrConnectWithoutAlojamientoInput | NotificacionCreateOrConnectWithoutAlojamientoInput[]
    createMany?: NotificacionCreateManyAlojamientoInputEnvelope
    connect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutAlojamientosFavoritosInput = {
    create?: XOR<UsuarioCreateWithoutAlojamientosFavoritosInput, UsuarioUncheckedCreateWithoutAlojamientosFavoritosInput> | UsuarioCreateWithoutAlojamientosFavoritosInput[] | UsuarioUncheckedCreateWithoutAlojamientosFavoritosInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutAlojamientosFavoritosInput | UsuarioCreateOrConnectWithoutAlojamientosFavoritosInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AlojamientoUpdatephotoUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUpdateOneRequiredWithoutAlojamientosNestedInput = {
    create?: XOR<UsuarioCreateWithoutAlojamientosInput, UsuarioUncheckedCreateWithoutAlojamientosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAlojamientosInput
    upsert?: UsuarioUpsertWithoutAlojamientosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAlojamientosInput, UsuarioUpdateWithoutAlojamientosInput>, UsuarioUncheckedUpdateWithoutAlojamientosInput>
  }

  export type ConversacionUpdateManyWithoutAlojamientoNestedInput = {
    create?: XOR<ConversacionCreateWithoutAlojamientoInput, ConversacionUncheckedCreateWithoutAlojamientoInput> | ConversacionCreateWithoutAlojamientoInput[] | ConversacionUncheckedCreateWithoutAlojamientoInput[]
    connectOrCreate?: ConversacionCreateOrConnectWithoutAlojamientoInput | ConversacionCreateOrConnectWithoutAlojamientoInput[]
    upsert?: ConversacionUpsertWithWhereUniqueWithoutAlojamientoInput | ConversacionUpsertWithWhereUniqueWithoutAlojamientoInput[]
    createMany?: ConversacionCreateManyAlojamientoInputEnvelope
    set?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    disconnect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    delete?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    connect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    update?: ConversacionUpdateWithWhereUniqueWithoutAlojamientoInput | ConversacionUpdateWithWhereUniqueWithoutAlojamientoInput[]
    updateMany?: ConversacionUpdateManyWithWhereWithoutAlojamientoInput | ConversacionUpdateManyWithWhereWithoutAlojamientoInput[]
    deleteMany?: ConversacionScalarWhereInput | ConversacionScalarWhereInput[]
  }

  export type NotificacionUpdateManyWithoutAlojamientoNestedInput = {
    create?: XOR<NotificacionCreateWithoutAlojamientoInput, NotificacionUncheckedCreateWithoutAlojamientoInput> | NotificacionCreateWithoutAlojamientoInput[] | NotificacionUncheckedCreateWithoutAlojamientoInput[]
    connectOrCreate?: NotificacionCreateOrConnectWithoutAlojamientoInput | NotificacionCreateOrConnectWithoutAlojamientoInput[]
    upsert?: NotificacionUpsertWithWhereUniqueWithoutAlojamientoInput | NotificacionUpsertWithWhereUniqueWithoutAlojamientoInput[]
    createMany?: NotificacionCreateManyAlojamientoInputEnvelope
    set?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    disconnect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    delete?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    connect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    update?: NotificacionUpdateWithWhereUniqueWithoutAlojamientoInput | NotificacionUpdateWithWhereUniqueWithoutAlojamientoInput[]
    updateMany?: NotificacionUpdateManyWithWhereWithoutAlojamientoInput | NotificacionUpdateManyWithWhereWithoutAlojamientoInput[]
    deleteMany?: NotificacionScalarWhereInput | NotificacionScalarWhereInput[]
  }

  export type UsuarioUpdateManyWithoutAlojamientosFavoritosNestedInput = {
    create?: XOR<UsuarioCreateWithoutAlojamientosFavoritosInput, UsuarioUncheckedCreateWithoutAlojamientosFavoritosInput> | UsuarioCreateWithoutAlojamientosFavoritosInput[] | UsuarioUncheckedCreateWithoutAlojamientosFavoritosInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutAlojamientosFavoritosInput | UsuarioCreateOrConnectWithoutAlojamientosFavoritosInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutAlojamientosFavoritosInput | UsuarioUpsertWithWhereUniqueWithoutAlojamientosFavoritosInput[]
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutAlojamientosFavoritosInput | UsuarioUpdateWithWhereUniqueWithoutAlojamientosFavoritosInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutAlojamientosFavoritosInput | UsuarioUpdateManyWithWhereWithoutAlojamientosFavoritosInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type ConversacionUncheckedUpdateManyWithoutAlojamientoNestedInput = {
    create?: XOR<ConversacionCreateWithoutAlojamientoInput, ConversacionUncheckedCreateWithoutAlojamientoInput> | ConversacionCreateWithoutAlojamientoInput[] | ConversacionUncheckedCreateWithoutAlojamientoInput[]
    connectOrCreate?: ConversacionCreateOrConnectWithoutAlojamientoInput | ConversacionCreateOrConnectWithoutAlojamientoInput[]
    upsert?: ConversacionUpsertWithWhereUniqueWithoutAlojamientoInput | ConversacionUpsertWithWhereUniqueWithoutAlojamientoInput[]
    createMany?: ConversacionCreateManyAlojamientoInputEnvelope
    set?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    disconnect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    delete?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    connect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    update?: ConversacionUpdateWithWhereUniqueWithoutAlojamientoInput | ConversacionUpdateWithWhereUniqueWithoutAlojamientoInput[]
    updateMany?: ConversacionUpdateManyWithWhereWithoutAlojamientoInput | ConversacionUpdateManyWithWhereWithoutAlojamientoInput[]
    deleteMany?: ConversacionScalarWhereInput | ConversacionScalarWhereInput[]
  }

  export type NotificacionUncheckedUpdateManyWithoutAlojamientoNestedInput = {
    create?: XOR<NotificacionCreateWithoutAlojamientoInput, NotificacionUncheckedCreateWithoutAlojamientoInput> | NotificacionCreateWithoutAlojamientoInput[] | NotificacionUncheckedCreateWithoutAlojamientoInput[]
    connectOrCreate?: NotificacionCreateOrConnectWithoutAlojamientoInput | NotificacionCreateOrConnectWithoutAlojamientoInput[]
    upsert?: NotificacionUpsertWithWhereUniqueWithoutAlojamientoInput | NotificacionUpsertWithWhereUniqueWithoutAlojamientoInput[]
    createMany?: NotificacionCreateManyAlojamientoInputEnvelope
    set?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    disconnect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    delete?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    connect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    update?: NotificacionUpdateWithWhereUniqueWithoutAlojamientoInput | NotificacionUpdateWithWhereUniqueWithoutAlojamientoInput[]
    updateMany?: NotificacionUpdateManyWithWhereWithoutAlojamientoInput | NotificacionUpdateManyWithWhereWithoutAlojamientoInput[]
    deleteMany?: NotificacionScalarWhereInput | NotificacionScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutAlojamientosFavoritosNestedInput = {
    create?: XOR<UsuarioCreateWithoutAlojamientosFavoritosInput, UsuarioUncheckedCreateWithoutAlojamientosFavoritosInput> | UsuarioCreateWithoutAlojamientosFavoritosInput[] | UsuarioUncheckedCreateWithoutAlojamientosFavoritosInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutAlojamientosFavoritosInput | UsuarioCreateOrConnectWithoutAlojamientosFavoritosInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutAlojamientosFavoritosInput | UsuarioUpsertWithWhereUniqueWithoutAlojamientosFavoritosInput[]
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutAlojamientosFavoritosInput | UsuarioUpdateWithWhereUniqueWithoutAlojamientosFavoritosInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutAlojamientosFavoritosInput | UsuarioUpdateManyWithWhereWithoutAlojamientosFavoritosInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type AlojamientoCreateNestedOneWithoutConversacionesInput = {
    create?: XOR<AlojamientoCreateWithoutConversacionesInput, AlojamientoUncheckedCreateWithoutConversacionesInput>
    connectOrCreate?: AlojamientoCreateOrConnectWithoutConversacionesInput
    connect?: AlojamientoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutEstudianteConversacionesInput = {
    create?: XOR<UsuarioCreateWithoutEstudianteConversacionesInput, UsuarioUncheckedCreateWithoutEstudianteConversacionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEstudianteConversacionesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutConversacionesComoPropietarioInput = {
    create?: XOR<UsuarioCreateWithoutConversacionesComoPropietarioInput, UsuarioUncheckedCreateWithoutConversacionesComoPropietarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutConversacionesComoPropietarioInput
    connect?: UsuarioWhereUniqueInput
  }

  export type MensajeCreateNestedManyWithoutConversacionInput = {
    create?: XOR<MensajeCreateWithoutConversacionInput, MensajeUncheckedCreateWithoutConversacionInput> | MensajeCreateWithoutConversacionInput[] | MensajeUncheckedCreateWithoutConversacionInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutConversacionInput | MensajeCreateOrConnectWithoutConversacionInput[]
    createMany?: MensajeCreateManyConversacionInputEnvelope
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
  }

  export type NotificacionCreateNestedManyWithoutConversacionInput = {
    create?: XOR<NotificacionCreateWithoutConversacionInput, NotificacionUncheckedCreateWithoutConversacionInput> | NotificacionCreateWithoutConversacionInput[] | NotificacionUncheckedCreateWithoutConversacionInput[]
    connectOrCreate?: NotificacionCreateOrConnectWithoutConversacionInput | NotificacionCreateOrConnectWithoutConversacionInput[]
    createMany?: NotificacionCreateManyConversacionInputEnvelope
    connect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
  }

  export type MensajeUncheckedCreateNestedManyWithoutConversacionInput = {
    create?: XOR<MensajeCreateWithoutConversacionInput, MensajeUncheckedCreateWithoutConversacionInput> | MensajeCreateWithoutConversacionInput[] | MensajeUncheckedCreateWithoutConversacionInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutConversacionInput | MensajeCreateOrConnectWithoutConversacionInput[]
    createMany?: MensajeCreateManyConversacionInputEnvelope
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
  }

  export type NotificacionUncheckedCreateNestedManyWithoutConversacionInput = {
    create?: XOR<NotificacionCreateWithoutConversacionInput, NotificacionUncheckedCreateWithoutConversacionInput> | NotificacionCreateWithoutConversacionInput[] | NotificacionUncheckedCreateWithoutConversacionInput[]
    connectOrCreate?: NotificacionCreateOrConnectWithoutConversacionInput | NotificacionCreateOrConnectWithoutConversacionInput[]
    createMany?: NotificacionCreateManyConversacionInputEnvelope
    connect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AlojamientoUpdateOneWithoutConversacionesNestedInput = {
    create?: XOR<AlojamientoCreateWithoutConversacionesInput, AlojamientoUncheckedCreateWithoutConversacionesInput>
    connectOrCreate?: AlojamientoCreateOrConnectWithoutConversacionesInput
    upsert?: AlojamientoUpsertWithoutConversacionesInput
    disconnect?: AlojamientoWhereInput | boolean
    delete?: AlojamientoWhereInput | boolean
    connect?: AlojamientoWhereUniqueInput
    update?: XOR<XOR<AlojamientoUpdateToOneWithWhereWithoutConversacionesInput, AlojamientoUpdateWithoutConversacionesInput>, AlojamientoUncheckedUpdateWithoutConversacionesInput>
  }

  export type UsuarioUpdateOneRequiredWithoutEstudianteConversacionesNestedInput = {
    create?: XOR<UsuarioCreateWithoutEstudianteConversacionesInput, UsuarioUncheckedCreateWithoutEstudianteConversacionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEstudianteConversacionesInput
    upsert?: UsuarioUpsertWithoutEstudianteConversacionesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutEstudianteConversacionesInput, UsuarioUpdateWithoutEstudianteConversacionesInput>, UsuarioUncheckedUpdateWithoutEstudianteConversacionesInput>
  }

  export type UsuarioUpdateOneRequiredWithoutConversacionesComoPropietarioNestedInput = {
    create?: XOR<UsuarioCreateWithoutConversacionesComoPropietarioInput, UsuarioUncheckedCreateWithoutConversacionesComoPropietarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutConversacionesComoPropietarioInput
    upsert?: UsuarioUpsertWithoutConversacionesComoPropietarioInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutConversacionesComoPropietarioInput, UsuarioUpdateWithoutConversacionesComoPropietarioInput>, UsuarioUncheckedUpdateWithoutConversacionesComoPropietarioInput>
  }

  export type MensajeUpdateManyWithoutConversacionNestedInput = {
    create?: XOR<MensajeCreateWithoutConversacionInput, MensajeUncheckedCreateWithoutConversacionInput> | MensajeCreateWithoutConversacionInput[] | MensajeUncheckedCreateWithoutConversacionInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutConversacionInput | MensajeCreateOrConnectWithoutConversacionInput[]
    upsert?: MensajeUpsertWithWhereUniqueWithoutConversacionInput | MensajeUpsertWithWhereUniqueWithoutConversacionInput[]
    createMany?: MensajeCreateManyConversacionInputEnvelope
    set?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    disconnect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    delete?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    update?: MensajeUpdateWithWhereUniqueWithoutConversacionInput | MensajeUpdateWithWhereUniqueWithoutConversacionInput[]
    updateMany?: MensajeUpdateManyWithWhereWithoutConversacionInput | MensajeUpdateManyWithWhereWithoutConversacionInput[]
    deleteMany?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
  }

  export type NotificacionUpdateManyWithoutConversacionNestedInput = {
    create?: XOR<NotificacionCreateWithoutConversacionInput, NotificacionUncheckedCreateWithoutConversacionInput> | NotificacionCreateWithoutConversacionInput[] | NotificacionUncheckedCreateWithoutConversacionInput[]
    connectOrCreate?: NotificacionCreateOrConnectWithoutConversacionInput | NotificacionCreateOrConnectWithoutConversacionInput[]
    upsert?: NotificacionUpsertWithWhereUniqueWithoutConversacionInput | NotificacionUpsertWithWhereUniqueWithoutConversacionInput[]
    createMany?: NotificacionCreateManyConversacionInputEnvelope
    set?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    disconnect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    delete?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    connect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    update?: NotificacionUpdateWithWhereUniqueWithoutConversacionInput | NotificacionUpdateWithWhereUniqueWithoutConversacionInput[]
    updateMany?: NotificacionUpdateManyWithWhereWithoutConversacionInput | NotificacionUpdateManyWithWhereWithoutConversacionInput[]
    deleteMany?: NotificacionScalarWhereInput | NotificacionScalarWhereInput[]
  }

  export type MensajeUncheckedUpdateManyWithoutConversacionNestedInput = {
    create?: XOR<MensajeCreateWithoutConversacionInput, MensajeUncheckedCreateWithoutConversacionInput> | MensajeCreateWithoutConversacionInput[] | MensajeUncheckedCreateWithoutConversacionInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutConversacionInput | MensajeCreateOrConnectWithoutConversacionInput[]
    upsert?: MensajeUpsertWithWhereUniqueWithoutConversacionInput | MensajeUpsertWithWhereUniqueWithoutConversacionInput[]
    createMany?: MensajeCreateManyConversacionInputEnvelope
    set?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    disconnect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    delete?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    update?: MensajeUpdateWithWhereUniqueWithoutConversacionInput | MensajeUpdateWithWhereUniqueWithoutConversacionInput[]
    updateMany?: MensajeUpdateManyWithWhereWithoutConversacionInput | MensajeUpdateManyWithWhereWithoutConversacionInput[]
    deleteMany?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
  }

  export type NotificacionUncheckedUpdateManyWithoutConversacionNestedInput = {
    create?: XOR<NotificacionCreateWithoutConversacionInput, NotificacionUncheckedCreateWithoutConversacionInput> | NotificacionCreateWithoutConversacionInput[] | NotificacionUncheckedCreateWithoutConversacionInput[]
    connectOrCreate?: NotificacionCreateOrConnectWithoutConversacionInput | NotificacionCreateOrConnectWithoutConversacionInput[]
    upsert?: NotificacionUpsertWithWhereUniqueWithoutConversacionInput | NotificacionUpsertWithWhereUniqueWithoutConversacionInput[]
    createMany?: NotificacionCreateManyConversacionInputEnvelope
    set?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    disconnect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    delete?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    connect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    update?: NotificacionUpdateWithWhereUniqueWithoutConversacionInput | NotificacionUpdateWithWhereUniqueWithoutConversacionInput[]
    updateMany?: NotificacionUpdateManyWithWhereWithoutConversacionInput | NotificacionUpdateManyWithWhereWithoutConversacionInput[]
    deleteMany?: NotificacionScalarWhereInput | NotificacionScalarWhereInput[]
  }

  export type ConversacionCreateNestedOneWithoutMensajesInput = {
    create?: XOR<ConversacionCreateWithoutMensajesInput, ConversacionUncheckedCreateWithoutMensajesInput>
    connectOrCreate?: ConversacionCreateOrConnectWithoutMensajesInput
    connect?: ConversacionWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutMensajesRemitidosInput = {
    create?: XOR<UsuarioCreateWithoutMensajesRemitidosInput, UsuarioUncheckedCreateWithoutMensajesRemitidosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMensajesRemitidosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type NotificacionCreateNestedManyWithoutMensajeInput = {
    create?: XOR<NotificacionCreateWithoutMensajeInput, NotificacionUncheckedCreateWithoutMensajeInput> | NotificacionCreateWithoutMensajeInput[] | NotificacionUncheckedCreateWithoutMensajeInput[]
    connectOrCreate?: NotificacionCreateOrConnectWithoutMensajeInput | NotificacionCreateOrConnectWithoutMensajeInput[]
    createMany?: NotificacionCreateManyMensajeInputEnvelope
    connect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
  }

  export type NotificacionUncheckedCreateNestedManyWithoutMensajeInput = {
    create?: XOR<NotificacionCreateWithoutMensajeInput, NotificacionUncheckedCreateWithoutMensajeInput> | NotificacionCreateWithoutMensajeInput[] | NotificacionUncheckedCreateWithoutMensajeInput[]
    connectOrCreate?: NotificacionCreateOrConnectWithoutMensajeInput | NotificacionCreateOrConnectWithoutMensajeInput[]
    createMany?: NotificacionCreateManyMensajeInputEnvelope
    connect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
  }

  export type ConversacionUpdateOneRequiredWithoutMensajesNestedInput = {
    create?: XOR<ConversacionCreateWithoutMensajesInput, ConversacionUncheckedCreateWithoutMensajesInput>
    connectOrCreate?: ConversacionCreateOrConnectWithoutMensajesInput
    upsert?: ConversacionUpsertWithoutMensajesInput
    connect?: ConversacionWhereUniqueInput
    update?: XOR<XOR<ConversacionUpdateToOneWithWhereWithoutMensajesInput, ConversacionUpdateWithoutMensajesInput>, ConversacionUncheckedUpdateWithoutMensajesInput>
  }

  export type UsuarioUpdateOneRequiredWithoutMensajesRemitidosNestedInput = {
    create?: XOR<UsuarioCreateWithoutMensajesRemitidosInput, UsuarioUncheckedCreateWithoutMensajesRemitidosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMensajesRemitidosInput
    upsert?: UsuarioUpsertWithoutMensajesRemitidosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutMensajesRemitidosInput, UsuarioUpdateWithoutMensajesRemitidosInput>, UsuarioUncheckedUpdateWithoutMensajesRemitidosInput>
  }

  export type NotificacionUpdateManyWithoutMensajeNestedInput = {
    create?: XOR<NotificacionCreateWithoutMensajeInput, NotificacionUncheckedCreateWithoutMensajeInput> | NotificacionCreateWithoutMensajeInput[] | NotificacionUncheckedCreateWithoutMensajeInput[]
    connectOrCreate?: NotificacionCreateOrConnectWithoutMensajeInput | NotificacionCreateOrConnectWithoutMensajeInput[]
    upsert?: NotificacionUpsertWithWhereUniqueWithoutMensajeInput | NotificacionUpsertWithWhereUniqueWithoutMensajeInput[]
    createMany?: NotificacionCreateManyMensajeInputEnvelope
    set?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    disconnect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    delete?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    connect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    update?: NotificacionUpdateWithWhereUniqueWithoutMensajeInput | NotificacionUpdateWithWhereUniqueWithoutMensajeInput[]
    updateMany?: NotificacionUpdateManyWithWhereWithoutMensajeInput | NotificacionUpdateManyWithWhereWithoutMensajeInput[]
    deleteMany?: NotificacionScalarWhereInput | NotificacionScalarWhereInput[]
  }

  export type NotificacionUncheckedUpdateManyWithoutMensajeNestedInput = {
    create?: XOR<NotificacionCreateWithoutMensajeInput, NotificacionUncheckedCreateWithoutMensajeInput> | NotificacionCreateWithoutMensajeInput[] | NotificacionUncheckedCreateWithoutMensajeInput[]
    connectOrCreate?: NotificacionCreateOrConnectWithoutMensajeInput | NotificacionCreateOrConnectWithoutMensajeInput[]
    upsert?: NotificacionUpsertWithWhereUniqueWithoutMensajeInput | NotificacionUpsertWithWhereUniqueWithoutMensajeInput[]
    createMany?: NotificacionCreateManyMensajeInputEnvelope
    set?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    disconnect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    delete?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    connect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    update?: NotificacionUpdateWithWhereUniqueWithoutMensajeInput | NotificacionUpdateWithWhereUniqueWithoutMensajeInput[]
    updateMany?: NotificacionUpdateManyWithWhereWithoutMensajeInput | NotificacionUpdateManyWithWhereWithoutMensajeInput[]
    deleteMany?: NotificacionScalarWhereInput | NotificacionScalarWhereInput[]
  }

  export type AlojamientoCreateNestedManyWithoutPropietarioInput = {
    create?: XOR<AlojamientoCreateWithoutPropietarioInput, AlojamientoUncheckedCreateWithoutPropietarioInput> | AlojamientoCreateWithoutPropietarioInput[] | AlojamientoUncheckedCreateWithoutPropietarioInput[]
    connectOrCreate?: AlojamientoCreateOrConnectWithoutPropietarioInput | AlojamientoCreateOrConnectWithoutPropietarioInput[]
    createMany?: AlojamientoCreateManyPropietarioInputEnvelope
    connect?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
  }

  export type ConversacionCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<ConversacionCreateWithoutEstudianteInput, ConversacionUncheckedCreateWithoutEstudianteInput> | ConversacionCreateWithoutEstudianteInput[] | ConversacionUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: ConversacionCreateOrConnectWithoutEstudianteInput | ConversacionCreateOrConnectWithoutEstudianteInput[]
    createMany?: ConversacionCreateManyEstudianteInputEnvelope
    connect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
  }

  export type ConversacionCreateNestedManyWithoutPropietarioInput = {
    create?: XOR<ConversacionCreateWithoutPropietarioInput, ConversacionUncheckedCreateWithoutPropietarioInput> | ConversacionCreateWithoutPropietarioInput[] | ConversacionUncheckedCreateWithoutPropietarioInput[]
    connectOrCreate?: ConversacionCreateOrConnectWithoutPropietarioInput | ConversacionCreateOrConnectWithoutPropietarioInput[]
    createMany?: ConversacionCreateManyPropietarioInputEnvelope
    connect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
  }

  export type MensajeCreateNestedManyWithoutEmisorInput = {
    create?: XOR<MensajeCreateWithoutEmisorInput, MensajeUncheckedCreateWithoutEmisorInput> | MensajeCreateWithoutEmisorInput[] | MensajeUncheckedCreateWithoutEmisorInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutEmisorInput | MensajeCreateOrConnectWithoutEmisorInput[]
    createMany?: MensajeCreateManyEmisorInputEnvelope
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
  }

  export type NotificacionCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<NotificacionCreateWithoutUsuarioInput, NotificacionUncheckedCreateWithoutUsuarioInput> | NotificacionCreateWithoutUsuarioInput[] | NotificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NotificacionCreateOrConnectWithoutUsuarioInput | NotificacionCreateOrConnectWithoutUsuarioInput[]
    createMany?: NotificacionCreateManyUsuarioInputEnvelope
    connect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
  }

  export type AlojamientoCreateNestedManyWithoutFavoritedByInput = {
    create?: XOR<AlojamientoCreateWithoutFavoritedByInput, AlojamientoUncheckedCreateWithoutFavoritedByInput> | AlojamientoCreateWithoutFavoritedByInput[] | AlojamientoUncheckedCreateWithoutFavoritedByInput[]
    connectOrCreate?: AlojamientoCreateOrConnectWithoutFavoritedByInput | AlojamientoCreateOrConnectWithoutFavoritedByInput[]
    connect?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
  }

  export type AlojamientoUncheckedCreateNestedManyWithoutPropietarioInput = {
    create?: XOR<AlojamientoCreateWithoutPropietarioInput, AlojamientoUncheckedCreateWithoutPropietarioInput> | AlojamientoCreateWithoutPropietarioInput[] | AlojamientoUncheckedCreateWithoutPropietarioInput[]
    connectOrCreate?: AlojamientoCreateOrConnectWithoutPropietarioInput | AlojamientoCreateOrConnectWithoutPropietarioInput[]
    createMany?: AlojamientoCreateManyPropietarioInputEnvelope
    connect?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
  }

  export type ConversacionUncheckedCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<ConversacionCreateWithoutEstudianteInput, ConversacionUncheckedCreateWithoutEstudianteInput> | ConversacionCreateWithoutEstudianteInput[] | ConversacionUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: ConversacionCreateOrConnectWithoutEstudianteInput | ConversacionCreateOrConnectWithoutEstudianteInput[]
    createMany?: ConversacionCreateManyEstudianteInputEnvelope
    connect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
  }

  export type ConversacionUncheckedCreateNestedManyWithoutPropietarioInput = {
    create?: XOR<ConversacionCreateWithoutPropietarioInput, ConversacionUncheckedCreateWithoutPropietarioInput> | ConversacionCreateWithoutPropietarioInput[] | ConversacionUncheckedCreateWithoutPropietarioInput[]
    connectOrCreate?: ConversacionCreateOrConnectWithoutPropietarioInput | ConversacionCreateOrConnectWithoutPropietarioInput[]
    createMany?: ConversacionCreateManyPropietarioInputEnvelope
    connect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
  }

  export type MensajeUncheckedCreateNestedManyWithoutEmisorInput = {
    create?: XOR<MensajeCreateWithoutEmisorInput, MensajeUncheckedCreateWithoutEmisorInput> | MensajeCreateWithoutEmisorInput[] | MensajeUncheckedCreateWithoutEmisorInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutEmisorInput | MensajeCreateOrConnectWithoutEmisorInput[]
    createMany?: MensajeCreateManyEmisorInputEnvelope
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
  }

  export type NotificacionUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<NotificacionCreateWithoutUsuarioInput, NotificacionUncheckedCreateWithoutUsuarioInput> | NotificacionCreateWithoutUsuarioInput[] | NotificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NotificacionCreateOrConnectWithoutUsuarioInput | NotificacionCreateOrConnectWithoutUsuarioInput[]
    createMany?: NotificacionCreateManyUsuarioInputEnvelope
    connect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
  }

  export type AlojamientoUncheckedCreateNestedManyWithoutFavoritedByInput = {
    create?: XOR<AlojamientoCreateWithoutFavoritedByInput, AlojamientoUncheckedCreateWithoutFavoritedByInput> | AlojamientoCreateWithoutFavoritedByInput[] | AlojamientoUncheckedCreateWithoutFavoritedByInput[]
    connectOrCreate?: AlojamientoCreateOrConnectWithoutFavoritedByInput | AlojamientoCreateOrConnectWithoutFavoritedByInput[]
    connect?: AlojamientoWhereUniqueInput | AlojamientoWhereUniqueInput[]
  }

  export type EnumTipoUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.TipoUsuario
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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

  export type ConversacionUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<ConversacionCreateWithoutEstudianteInput, ConversacionUncheckedCreateWithoutEstudianteInput> | ConversacionCreateWithoutEstudianteInput[] | ConversacionUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: ConversacionCreateOrConnectWithoutEstudianteInput | ConversacionCreateOrConnectWithoutEstudianteInput[]
    upsert?: ConversacionUpsertWithWhereUniqueWithoutEstudianteInput | ConversacionUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: ConversacionCreateManyEstudianteInputEnvelope
    set?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    disconnect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    delete?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    connect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    update?: ConversacionUpdateWithWhereUniqueWithoutEstudianteInput | ConversacionUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: ConversacionUpdateManyWithWhereWithoutEstudianteInput | ConversacionUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: ConversacionScalarWhereInput | ConversacionScalarWhereInput[]
  }

  export type ConversacionUpdateManyWithoutPropietarioNestedInput = {
    create?: XOR<ConversacionCreateWithoutPropietarioInput, ConversacionUncheckedCreateWithoutPropietarioInput> | ConversacionCreateWithoutPropietarioInput[] | ConversacionUncheckedCreateWithoutPropietarioInput[]
    connectOrCreate?: ConversacionCreateOrConnectWithoutPropietarioInput | ConversacionCreateOrConnectWithoutPropietarioInput[]
    upsert?: ConversacionUpsertWithWhereUniqueWithoutPropietarioInput | ConversacionUpsertWithWhereUniqueWithoutPropietarioInput[]
    createMany?: ConversacionCreateManyPropietarioInputEnvelope
    set?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    disconnect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    delete?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    connect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    update?: ConversacionUpdateWithWhereUniqueWithoutPropietarioInput | ConversacionUpdateWithWhereUniqueWithoutPropietarioInput[]
    updateMany?: ConversacionUpdateManyWithWhereWithoutPropietarioInput | ConversacionUpdateManyWithWhereWithoutPropietarioInput[]
    deleteMany?: ConversacionScalarWhereInput | ConversacionScalarWhereInput[]
  }

  export type MensajeUpdateManyWithoutEmisorNestedInput = {
    create?: XOR<MensajeCreateWithoutEmisorInput, MensajeUncheckedCreateWithoutEmisorInput> | MensajeCreateWithoutEmisorInput[] | MensajeUncheckedCreateWithoutEmisorInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutEmisorInput | MensajeCreateOrConnectWithoutEmisorInput[]
    upsert?: MensajeUpsertWithWhereUniqueWithoutEmisorInput | MensajeUpsertWithWhereUniqueWithoutEmisorInput[]
    createMany?: MensajeCreateManyEmisorInputEnvelope
    set?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    disconnect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    delete?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    update?: MensajeUpdateWithWhereUniqueWithoutEmisorInput | MensajeUpdateWithWhereUniqueWithoutEmisorInput[]
    updateMany?: MensajeUpdateManyWithWhereWithoutEmisorInput | MensajeUpdateManyWithWhereWithoutEmisorInput[]
    deleteMany?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
  }

  export type NotificacionUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<NotificacionCreateWithoutUsuarioInput, NotificacionUncheckedCreateWithoutUsuarioInput> | NotificacionCreateWithoutUsuarioInput[] | NotificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NotificacionCreateOrConnectWithoutUsuarioInput | NotificacionCreateOrConnectWithoutUsuarioInput[]
    upsert?: NotificacionUpsertWithWhereUniqueWithoutUsuarioInput | NotificacionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: NotificacionCreateManyUsuarioInputEnvelope
    set?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    disconnect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    delete?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    connect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    update?: NotificacionUpdateWithWhereUniqueWithoutUsuarioInput | NotificacionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: NotificacionUpdateManyWithWhereWithoutUsuarioInput | NotificacionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: NotificacionScalarWhereInput | NotificacionScalarWhereInput[]
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

  export type ConversacionUncheckedUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<ConversacionCreateWithoutEstudianteInput, ConversacionUncheckedCreateWithoutEstudianteInput> | ConversacionCreateWithoutEstudianteInput[] | ConversacionUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: ConversacionCreateOrConnectWithoutEstudianteInput | ConversacionCreateOrConnectWithoutEstudianteInput[]
    upsert?: ConversacionUpsertWithWhereUniqueWithoutEstudianteInput | ConversacionUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: ConversacionCreateManyEstudianteInputEnvelope
    set?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    disconnect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    delete?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    connect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    update?: ConversacionUpdateWithWhereUniqueWithoutEstudianteInput | ConversacionUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: ConversacionUpdateManyWithWhereWithoutEstudianteInput | ConversacionUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: ConversacionScalarWhereInput | ConversacionScalarWhereInput[]
  }

  export type ConversacionUncheckedUpdateManyWithoutPropietarioNestedInput = {
    create?: XOR<ConversacionCreateWithoutPropietarioInput, ConversacionUncheckedCreateWithoutPropietarioInput> | ConversacionCreateWithoutPropietarioInput[] | ConversacionUncheckedCreateWithoutPropietarioInput[]
    connectOrCreate?: ConversacionCreateOrConnectWithoutPropietarioInput | ConversacionCreateOrConnectWithoutPropietarioInput[]
    upsert?: ConversacionUpsertWithWhereUniqueWithoutPropietarioInput | ConversacionUpsertWithWhereUniqueWithoutPropietarioInput[]
    createMany?: ConversacionCreateManyPropietarioInputEnvelope
    set?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    disconnect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    delete?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    connect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    update?: ConversacionUpdateWithWhereUniqueWithoutPropietarioInput | ConversacionUpdateWithWhereUniqueWithoutPropietarioInput[]
    updateMany?: ConversacionUpdateManyWithWhereWithoutPropietarioInput | ConversacionUpdateManyWithWhereWithoutPropietarioInput[]
    deleteMany?: ConversacionScalarWhereInput | ConversacionScalarWhereInput[]
  }

  export type MensajeUncheckedUpdateManyWithoutEmisorNestedInput = {
    create?: XOR<MensajeCreateWithoutEmisorInput, MensajeUncheckedCreateWithoutEmisorInput> | MensajeCreateWithoutEmisorInput[] | MensajeUncheckedCreateWithoutEmisorInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutEmisorInput | MensajeCreateOrConnectWithoutEmisorInput[]
    upsert?: MensajeUpsertWithWhereUniqueWithoutEmisorInput | MensajeUpsertWithWhereUniqueWithoutEmisorInput[]
    createMany?: MensajeCreateManyEmisorInputEnvelope
    set?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    disconnect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    delete?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    update?: MensajeUpdateWithWhereUniqueWithoutEmisorInput | MensajeUpdateWithWhereUniqueWithoutEmisorInput[]
    updateMany?: MensajeUpdateManyWithWhereWithoutEmisorInput | MensajeUpdateManyWithWhereWithoutEmisorInput[]
    deleteMany?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
  }

  export type NotificacionUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<NotificacionCreateWithoutUsuarioInput, NotificacionUncheckedCreateWithoutUsuarioInput> | NotificacionCreateWithoutUsuarioInput[] | NotificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NotificacionCreateOrConnectWithoutUsuarioInput | NotificacionCreateOrConnectWithoutUsuarioInput[]
    upsert?: NotificacionUpsertWithWhereUniqueWithoutUsuarioInput | NotificacionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: NotificacionCreateManyUsuarioInputEnvelope
    set?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    disconnect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    delete?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    connect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    update?: NotificacionUpdateWithWhereUniqueWithoutUsuarioInput | NotificacionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: NotificacionUpdateManyWithWhereWithoutUsuarioInput | NotificacionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: NotificacionScalarWhereInput | NotificacionScalarWhereInput[]
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

  export type AlojamientoCreateNestedOneWithoutNotificacionesInput = {
    create?: XOR<AlojamientoCreateWithoutNotificacionesInput, AlojamientoUncheckedCreateWithoutNotificacionesInput>
    connectOrCreate?: AlojamientoCreateOrConnectWithoutNotificacionesInput
    connect?: AlojamientoWhereUniqueInput
  }

  export type ConversacionCreateNestedOneWithoutNotificacionesInput = {
    create?: XOR<ConversacionCreateWithoutNotificacionesInput, ConversacionUncheckedCreateWithoutNotificacionesInput>
    connectOrCreate?: ConversacionCreateOrConnectWithoutNotificacionesInput
    connect?: ConversacionWhereUniqueInput
  }

  export type MensajeCreateNestedOneWithoutNotificacionesInput = {
    create?: XOR<MensajeCreateWithoutNotificacionesInput, MensajeUncheckedCreateWithoutNotificacionesInput>
    connectOrCreate?: MensajeCreateOrConnectWithoutNotificacionesInput
    connect?: MensajeWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutNotificacionesInput = {
    create?: XOR<UsuarioCreateWithoutNotificacionesInput, UsuarioUncheckedCreateWithoutNotificacionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutNotificacionesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EnumTipoNotificacionFieldUpdateOperationsInput = {
    set?: $Enums.TipoNotificacion
  }

  export type AlojamientoUpdateOneWithoutNotificacionesNestedInput = {
    create?: XOR<AlojamientoCreateWithoutNotificacionesInput, AlojamientoUncheckedCreateWithoutNotificacionesInput>
    connectOrCreate?: AlojamientoCreateOrConnectWithoutNotificacionesInput
    upsert?: AlojamientoUpsertWithoutNotificacionesInput
    disconnect?: AlojamientoWhereInput | boolean
    delete?: AlojamientoWhereInput | boolean
    connect?: AlojamientoWhereUniqueInput
    update?: XOR<XOR<AlojamientoUpdateToOneWithWhereWithoutNotificacionesInput, AlojamientoUpdateWithoutNotificacionesInput>, AlojamientoUncheckedUpdateWithoutNotificacionesInput>
  }

  export type ConversacionUpdateOneWithoutNotificacionesNestedInput = {
    create?: XOR<ConversacionCreateWithoutNotificacionesInput, ConversacionUncheckedCreateWithoutNotificacionesInput>
    connectOrCreate?: ConversacionCreateOrConnectWithoutNotificacionesInput
    upsert?: ConversacionUpsertWithoutNotificacionesInput
    disconnect?: ConversacionWhereInput | boolean
    delete?: ConversacionWhereInput | boolean
    connect?: ConversacionWhereUniqueInput
    update?: XOR<XOR<ConversacionUpdateToOneWithWhereWithoutNotificacionesInput, ConversacionUpdateWithoutNotificacionesInput>, ConversacionUncheckedUpdateWithoutNotificacionesInput>
  }

  export type MensajeUpdateOneWithoutNotificacionesNestedInput = {
    create?: XOR<MensajeCreateWithoutNotificacionesInput, MensajeUncheckedCreateWithoutNotificacionesInput>
    connectOrCreate?: MensajeCreateOrConnectWithoutNotificacionesInput
    upsert?: MensajeUpsertWithoutNotificacionesInput
    disconnect?: MensajeWhereInput | boolean
    delete?: MensajeWhereInput | boolean
    connect?: MensajeWhereUniqueInput
    update?: XOR<XOR<MensajeUpdateToOneWithWhereWithoutNotificacionesInput, MensajeUpdateWithoutNotificacionesInput>, MensajeUncheckedUpdateWithoutNotificacionesInput>
  }

  export type UsuarioUpdateOneRequiredWithoutNotificacionesNestedInput = {
    create?: XOR<UsuarioCreateWithoutNotificacionesInput, UsuarioUncheckedCreateWithoutNotificacionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutNotificacionesInput
    upsert?: UsuarioUpsertWithoutNotificacionesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutNotificacionesInput, UsuarioUpdateWithoutNotificacionesInput>, UsuarioUncheckedUpdateWithoutNotificacionesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumTipoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioFilter<$PrismaModel> | $Enums.TipoUsuario
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.TipoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumTipoUsuarioFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTipoNotificacionFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoNotificacion | EnumTipoNotificacionFieldRefInput<$PrismaModel>
    in?: $Enums.TipoNotificacion[] | ListEnumTipoNotificacionFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoNotificacion[] | ListEnumTipoNotificacionFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoNotificacionFilter<$PrismaModel> | $Enums.TipoNotificacion
  }

  export type NestedEnumTipoNotificacionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoNotificacion | EnumTipoNotificacionFieldRefInput<$PrismaModel>
    in?: $Enums.TipoNotificacion[] | ListEnumTipoNotificacionFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoNotificacion[] | ListEnumTipoNotificacionFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoNotificacionWithAggregatesFilter<$PrismaModel> | $Enums.TipoNotificacion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoNotificacionFilter<$PrismaModel>
    _max?: NestedEnumTipoNotificacionFilter<$PrismaModel>
  }

  export type UsuarioCreateWithoutAlojamientosInput = {
    nombre: string
    email: string
    password: string
    telefono?: string | null
    tipo: $Enums.TipoUsuario
    isEmailVerified?: boolean
    isSuspended?: boolean
    motivoSuspension?: string | null
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    estudianteConversaciones?: ConversacionCreateNestedManyWithoutEstudianteInput
    conversacionesComoPropietario?: ConversacionCreateNestedManyWithoutPropietarioInput
    mensajesRemitidos?: MensajeCreateNestedManyWithoutEmisorInput
    notificaciones?: NotificacionCreateNestedManyWithoutUsuarioInput
    alojamientosFavoritos?: AlojamientoCreateNestedManyWithoutFavoritedByInput
  }

  export type UsuarioUncheckedCreateWithoutAlojamientosInput = {
    id?: number
    nombre: string
    email: string
    password: string
    telefono?: string | null
    tipo: $Enums.TipoUsuario
    isEmailVerified?: boolean
    isSuspended?: boolean
    motivoSuspension?: string | null
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    estudianteConversaciones?: ConversacionUncheckedCreateNestedManyWithoutEstudianteInput
    conversacionesComoPropietario?: ConversacionUncheckedCreateNestedManyWithoutPropietarioInput
    mensajesRemitidos?: MensajeUncheckedCreateNestedManyWithoutEmisorInput
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutUsuarioInput
    alojamientosFavoritos?: AlojamientoUncheckedCreateNestedManyWithoutFavoritedByInput
  }

  export type UsuarioCreateOrConnectWithoutAlojamientosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAlojamientosInput, UsuarioUncheckedCreateWithoutAlojamientosInput>
  }

  export type ConversacionCreateWithoutAlojamientoInput = {
    createdAt?: Date | string
    ultimoMensajeId?: number | null
    estudianteVistoUltimo?: boolean
    propietarioVistoUltimo?: boolean
    esConversacionAdmin?: boolean
    estudiante: UsuarioCreateNestedOneWithoutEstudianteConversacionesInput
    propietario: UsuarioCreateNestedOneWithoutConversacionesComoPropietarioInput
    mensajes?: MensajeCreateNestedManyWithoutConversacionInput
    notificaciones?: NotificacionCreateNestedManyWithoutConversacionInput
  }

  export type ConversacionUncheckedCreateWithoutAlojamientoInput = {
    id?: number
    createdAt?: Date | string
    estudianteId: number
    propietarioId: number
    ultimoMensajeId?: number | null
    estudianteVistoUltimo?: boolean
    propietarioVistoUltimo?: boolean
    esConversacionAdmin?: boolean
    mensajes?: MensajeUncheckedCreateNestedManyWithoutConversacionInput
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutConversacionInput
  }

  export type ConversacionCreateOrConnectWithoutAlojamientoInput = {
    where: ConversacionWhereUniqueInput
    create: XOR<ConversacionCreateWithoutAlojamientoInput, ConversacionUncheckedCreateWithoutAlojamientoInput>
  }

  export type ConversacionCreateManyAlojamientoInputEnvelope = {
    data: ConversacionCreateManyAlojamientoInput | ConversacionCreateManyAlojamientoInput[]
    skipDuplicates?: boolean
  }

  export type NotificacionCreateWithoutAlojamientoInput = {
    tipo: $Enums.TipoNotificacion
    titulo: string
    descripcion: string
    isRead?: boolean
    createdAt?: Date | string
    conversacion?: ConversacionCreateNestedOneWithoutNotificacionesInput
    mensaje?: MensajeCreateNestedOneWithoutNotificacionesInput
    usuario: UsuarioCreateNestedOneWithoutNotificacionesInput
  }

  export type NotificacionUncheckedCreateWithoutAlojamientoInput = {
    id?: number
    tipo: $Enums.TipoNotificacion
    titulo: string
    descripcion: string
    isRead?: boolean
    createdAt?: Date | string
    usuarioId: number
    conversacionId?: number | null
    mensajeId?: number | null
  }

  export type NotificacionCreateOrConnectWithoutAlojamientoInput = {
    where: NotificacionWhereUniqueInput
    create: XOR<NotificacionCreateWithoutAlojamientoInput, NotificacionUncheckedCreateWithoutAlojamientoInput>
  }

  export type NotificacionCreateManyAlojamientoInputEnvelope = {
    data: NotificacionCreateManyAlojamientoInput | NotificacionCreateManyAlojamientoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioCreateWithoutAlojamientosFavoritosInput = {
    nombre: string
    email: string
    password: string
    telefono?: string | null
    tipo: $Enums.TipoUsuario
    isEmailVerified?: boolean
    isSuspended?: boolean
    motivoSuspension?: string | null
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    alojamientos?: AlojamientoCreateNestedManyWithoutPropietarioInput
    estudianteConversaciones?: ConversacionCreateNestedManyWithoutEstudianteInput
    conversacionesComoPropietario?: ConversacionCreateNestedManyWithoutPropietarioInput
    mensajesRemitidos?: MensajeCreateNestedManyWithoutEmisorInput
    notificaciones?: NotificacionCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutAlojamientosFavoritosInput = {
    id?: number
    nombre: string
    email: string
    password: string
    telefono?: string | null
    tipo: $Enums.TipoUsuario
    isEmailVerified?: boolean
    isSuspended?: boolean
    motivoSuspension?: string | null
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    alojamientos?: AlojamientoUncheckedCreateNestedManyWithoutPropietarioInput
    estudianteConversaciones?: ConversacionUncheckedCreateNestedManyWithoutEstudianteInput
    conversacionesComoPropietario?: ConversacionUncheckedCreateNestedManyWithoutPropietarioInput
    mensajesRemitidos?: MensajeUncheckedCreateNestedManyWithoutEmisorInput
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutAlojamientosFavoritosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAlojamientosFavoritosInput, UsuarioUncheckedCreateWithoutAlojamientosFavoritosInput>
  }

  export type UsuarioUpsertWithoutAlojamientosInput = {
    update: XOR<UsuarioUpdateWithoutAlojamientosInput, UsuarioUncheckedUpdateWithoutAlojamientosInput>
    create: XOR<UsuarioCreateWithoutAlojamientosInput, UsuarioUncheckedCreateWithoutAlojamientosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAlojamientosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAlojamientosInput, UsuarioUncheckedUpdateWithoutAlojamientosInput>
  }

  export type UsuarioUpdateWithoutAlojamientosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    motivoSuspension?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estudianteConversaciones?: ConversacionUpdateManyWithoutEstudianteNestedInput
    conversacionesComoPropietario?: ConversacionUpdateManyWithoutPropietarioNestedInput
    mensajesRemitidos?: MensajeUpdateManyWithoutEmisorNestedInput
    notificaciones?: NotificacionUpdateManyWithoutUsuarioNestedInput
    alojamientosFavoritos?: AlojamientoUpdateManyWithoutFavoritedByNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAlojamientosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    motivoSuspension?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estudianteConversaciones?: ConversacionUncheckedUpdateManyWithoutEstudianteNestedInput
    conversacionesComoPropietario?: ConversacionUncheckedUpdateManyWithoutPropietarioNestedInput
    mensajesRemitidos?: MensajeUncheckedUpdateManyWithoutEmisorNestedInput
    notificaciones?: NotificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    alojamientosFavoritos?: AlojamientoUncheckedUpdateManyWithoutFavoritedByNestedInput
  }

  export type ConversacionUpsertWithWhereUniqueWithoutAlojamientoInput = {
    where: ConversacionWhereUniqueInput
    update: XOR<ConversacionUpdateWithoutAlojamientoInput, ConversacionUncheckedUpdateWithoutAlojamientoInput>
    create: XOR<ConversacionCreateWithoutAlojamientoInput, ConversacionUncheckedCreateWithoutAlojamientoInput>
  }

  export type ConversacionUpdateWithWhereUniqueWithoutAlojamientoInput = {
    where: ConversacionWhereUniqueInput
    data: XOR<ConversacionUpdateWithoutAlojamientoInput, ConversacionUncheckedUpdateWithoutAlojamientoInput>
  }

  export type ConversacionUpdateManyWithWhereWithoutAlojamientoInput = {
    where: ConversacionScalarWhereInput
    data: XOR<ConversacionUpdateManyMutationInput, ConversacionUncheckedUpdateManyWithoutAlojamientoInput>
  }

  export type ConversacionScalarWhereInput = {
    AND?: ConversacionScalarWhereInput | ConversacionScalarWhereInput[]
    OR?: ConversacionScalarWhereInput[]
    NOT?: ConversacionScalarWhereInput | ConversacionScalarWhereInput[]
    id?: IntFilter<"Conversacion"> | number
    alojamientoId?: IntNullableFilter<"Conversacion"> | number | null
    createdAt?: DateTimeFilter<"Conversacion"> | Date | string
    estudianteId?: IntFilter<"Conversacion"> | number
    propietarioId?: IntFilter<"Conversacion"> | number
    ultimoMensajeId?: IntNullableFilter<"Conversacion"> | number | null
    estudianteVistoUltimo?: BoolFilter<"Conversacion"> | boolean
    propietarioVistoUltimo?: BoolFilter<"Conversacion"> | boolean
    esConversacionAdmin?: BoolFilter<"Conversacion"> | boolean
  }

  export type NotificacionUpsertWithWhereUniqueWithoutAlojamientoInput = {
    where: NotificacionWhereUniqueInput
    update: XOR<NotificacionUpdateWithoutAlojamientoInput, NotificacionUncheckedUpdateWithoutAlojamientoInput>
    create: XOR<NotificacionCreateWithoutAlojamientoInput, NotificacionUncheckedCreateWithoutAlojamientoInput>
  }

  export type NotificacionUpdateWithWhereUniqueWithoutAlojamientoInput = {
    where: NotificacionWhereUniqueInput
    data: XOR<NotificacionUpdateWithoutAlojamientoInput, NotificacionUncheckedUpdateWithoutAlojamientoInput>
  }

  export type NotificacionUpdateManyWithWhereWithoutAlojamientoInput = {
    where: NotificacionScalarWhereInput
    data: XOR<NotificacionUpdateManyMutationInput, NotificacionUncheckedUpdateManyWithoutAlojamientoInput>
  }

  export type NotificacionScalarWhereInput = {
    AND?: NotificacionScalarWhereInput | NotificacionScalarWhereInput[]
    OR?: NotificacionScalarWhereInput[]
    NOT?: NotificacionScalarWhereInput | NotificacionScalarWhereInput[]
    id?: IntFilter<"Notificacion"> | number
    tipo?: EnumTipoNotificacionFilter<"Notificacion"> | $Enums.TipoNotificacion
    titulo?: StringFilter<"Notificacion"> | string
    descripcion?: StringFilter<"Notificacion"> | string
    isRead?: BoolFilter<"Notificacion"> | boolean
    createdAt?: DateTimeFilter<"Notificacion"> | Date | string
    usuarioId?: IntFilter<"Notificacion"> | number
    conversacionId?: IntNullableFilter<"Notificacion"> | number | null
    mensajeId?: IntNullableFilter<"Notificacion"> | number | null
    alojamientoId?: IntNullableFilter<"Notificacion"> | number | null
  }

  export type UsuarioUpsertWithWhereUniqueWithoutAlojamientosFavoritosInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutAlojamientosFavoritosInput, UsuarioUncheckedUpdateWithoutAlojamientosFavoritosInput>
    create: XOR<UsuarioCreateWithoutAlojamientosFavoritosInput, UsuarioUncheckedCreateWithoutAlojamientosFavoritosInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutAlojamientosFavoritosInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutAlojamientosFavoritosInput, UsuarioUncheckedUpdateWithoutAlojamientosFavoritosInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutAlojamientosFavoritosInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutAlojamientosFavoritosInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    telefono?: StringNullableFilter<"Usuario"> | string | null
    tipo?: EnumTipoUsuarioFilter<"Usuario"> | $Enums.TipoUsuario
    isEmailVerified?: BoolFilter<"Usuario"> | boolean
    isSuspended?: BoolFilter<"Usuario"> | boolean
    motivoSuspension?: StringNullableFilter<"Usuario"> | string | null
    emailVerificationToken?: StringNullableFilter<"Usuario"> | string | null
    emailVerificationExpiry?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    resetToken?: StringNullableFilter<"Usuario"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
  }

  export type AlojamientoCreateWithoutConversacionesInput = {
    slug: string
    estado?: string
    motivoRechazo?: string | null
    photoUrls?: AlojamientoCreatephotoUrlsInput | string[]
    postedDate?: Date | string
    aguaIncluido?: boolean
    descripcion: string
    electricidadIncluido?: boolean
    gasIncluido?: boolean
    habitaciones: number
    hayAireAcondicionado?: boolean
    hayAscensor?: boolean
    hayCalefaccion?: boolean
    hayGaraje?: boolean
    hayGas?: boolean
    hayGimnasio?: boolean
    hayHorno?: boolean
    hayInternet?: boolean
    hayLavadora?: boolean
    hayLavavajillas?: boolean
    hayMicroondas?: boolean
    hayMuebles?: boolean
    hayNevera?: boolean
    hayPiscina?: boolean
    hayPortero?: boolean
    haySecadora?: boolean
    hayTelefono?: boolean
    hayTelevision?: boolean
    hayTerraza?: boolean
    hayZonaComunitaria?: boolean
    internetIncluido?: boolean
    nombre: string
    precio: number
    superficie: number
    plazasLibres: number
    banos: number
    dirigidoA: string
    infoExtra: string
    esDestacado?: boolean
    tipoAlojamiento: string
    direccion?: string | null
    ciudad?: string | null
    provincia?: string | null
    pais?: string | null
    codigoPostal?: string | null
    portal?: string | null
    piso?: string | null
    puerta?: string | null
    propietario: UsuarioCreateNestedOneWithoutAlojamientosInput
    notificaciones?: NotificacionCreateNestedManyWithoutAlojamientoInput
    favoritedBy?: UsuarioCreateNestedManyWithoutAlojamientosFavoritosInput
  }

  export type AlojamientoUncheckedCreateWithoutConversacionesInput = {
    id?: number
    slug: string
    estado?: string
    motivoRechazo?: string | null
    photoUrls?: AlojamientoCreatephotoUrlsInput | string[]
    postedDate?: Date | string
    aguaIncluido?: boolean
    descripcion: string
    electricidadIncluido?: boolean
    gasIncluido?: boolean
    habitaciones: number
    hayAireAcondicionado?: boolean
    hayAscensor?: boolean
    hayCalefaccion?: boolean
    hayGaraje?: boolean
    hayGas?: boolean
    hayGimnasio?: boolean
    hayHorno?: boolean
    hayInternet?: boolean
    hayLavadora?: boolean
    hayLavavajillas?: boolean
    hayMicroondas?: boolean
    hayMuebles?: boolean
    hayNevera?: boolean
    hayPiscina?: boolean
    hayPortero?: boolean
    haySecadora?: boolean
    hayTelefono?: boolean
    hayTelevision?: boolean
    hayTerraza?: boolean
    hayZonaComunitaria?: boolean
    internetIncluido?: boolean
    nombre: string
    precio: number
    superficie: number
    plazasLibres: number
    banos: number
    dirigidoA: string
    infoExtra: string
    esDestacado?: boolean
    tipoAlojamiento: string
    managerUsuarioId: number
    direccion?: string | null
    ciudad?: string | null
    provincia?: string | null
    pais?: string | null
    codigoPostal?: string | null
    portal?: string | null
    piso?: string | null
    puerta?: string | null
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutAlojamientoInput
    favoritedBy?: UsuarioUncheckedCreateNestedManyWithoutAlojamientosFavoritosInput
  }

  export type AlojamientoCreateOrConnectWithoutConversacionesInput = {
    where: AlojamientoWhereUniqueInput
    create: XOR<AlojamientoCreateWithoutConversacionesInput, AlojamientoUncheckedCreateWithoutConversacionesInput>
  }

  export type UsuarioCreateWithoutEstudianteConversacionesInput = {
    nombre: string
    email: string
    password: string
    telefono?: string | null
    tipo: $Enums.TipoUsuario
    isEmailVerified?: boolean
    isSuspended?: boolean
    motivoSuspension?: string | null
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    alojamientos?: AlojamientoCreateNestedManyWithoutPropietarioInput
    conversacionesComoPropietario?: ConversacionCreateNestedManyWithoutPropietarioInput
    mensajesRemitidos?: MensajeCreateNestedManyWithoutEmisorInput
    notificaciones?: NotificacionCreateNestedManyWithoutUsuarioInput
    alojamientosFavoritos?: AlojamientoCreateNestedManyWithoutFavoritedByInput
  }

  export type UsuarioUncheckedCreateWithoutEstudianteConversacionesInput = {
    id?: number
    nombre: string
    email: string
    password: string
    telefono?: string | null
    tipo: $Enums.TipoUsuario
    isEmailVerified?: boolean
    isSuspended?: boolean
    motivoSuspension?: string | null
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    alojamientos?: AlojamientoUncheckedCreateNestedManyWithoutPropietarioInput
    conversacionesComoPropietario?: ConversacionUncheckedCreateNestedManyWithoutPropietarioInput
    mensajesRemitidos?: MensajeUncheckedCreateNestedManyWithoutEmisorInput
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutUsuarioInput
    alojamientosFavoritos?: AlojamientoUncheckedCreateNestedManyWithoutFavoritedByInput
  }

  export type UsuarioCreateOrConnectWithoutEstudianteConversacionesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutEstudianteConversacionesInput, UsuarioUncheckedCreateWithoutEstudianteConversacionesInput>
  }

  export type UsuarioCreateWithoutConversacionesComoPropietarioInput = {
    nombre: string
    email: string
    password: string
    telefono?: string | null
    tipo: $Enums.TipoUsuario
    isEmailVerified?: boolean
    isSuspended?: boolean
    motivoSuspension?: string | null
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    alojamientos?: AlojamientoCreateNestedManyWithoutPropietarioInput
    estudianteConversaciones?: ConversacionCreateNestedManyWithoutEstudianteInput
    mensajesRemitidos?: MensajeCreateNestedManyWithoutEmisorInput
    notificaciones?: NotificacionCreateNestedManyWithoutUsuarioInput
    alojamientosFavoritos?: AlojamientoCreateNestedManyWithoutFavoritedByInput
  }

  export type UsuarioUncheckedCreateWithoutConversacionesComoPropietarioInput = {
    id?: number
    nombre: string
    email: string
    password: string
    telefono?: string | null
    tipo: $Enums.TipoUsuario
    isEmailVerified?: boolean
    isSuspended?: boolean
    motivoSuspension?: string | null
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    alojamientos?: AlojamientoUncheckedCreateNestedManyWithoutPropietarioInput
    estudianteConversaciones?: ConversacionUncheckedCreateNestedManyWithoutEstudianteInput
    mensajesRemitidos?: MensajeUncheckedCreateNestedManyWithoutEmisorInput
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutUsuarioInput
    alojamientosFavoritos?: AlojamientoUncheckedCreateNestedManyWithoutFavoritedByInput
  }

  export type UsuarioCreateOrConnectWithoutConversacionesComoPropietarioInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutConversacionesComoPropietarioInput, UsuarioUncheckedCreateWithoutConversacionesComoPropietarioInput>
  }

  export type MensajeCreateWithoutConversacionInput = {
    contenido: string
    createdAt?: Date | string
    emisor: UsuarioCreateNestedOneWithoutMensajesRemitidosInput
    notificaciones?: NotificacionCreateNestedManyWithoutMensajeInput
  }

  export type MensajeUncheckedCreateWithoutConversacionInput = {
    id?: number
    contenido: string
    createdAt?: Date | string
    emisorId: number
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutMensajeInput
  }

  export type MensajeCreateOrConnectWithoutConversacionInput = {
    where: MensajeWhereUniqueInput
    create: XOR<MensajeCreateWithoutConversacionInput, MensajeUncheckedCreateWithoutConversacionInput>
  }

  export type MensajeCreateManyConversacionInputEnvelope = {
    data: MensajeCreateManyConversacionInput | MensajeCreateManyConversacionInput[]
    skipDuplicates?: boolean
  }

  export type NotificacionCreateWithoutConversacionInput = {
    tipo: $Enums.TipoNotificacion
    titulo: string
    descripcion: string
    isRead?: boolean
    createdAt?: Date | string
    alojamiento?: AlojamientoCreateNestedOneWithoutNotificacionesInput
    mensaje?: MensajeCreateNestedOneWithoutNotificacionesInput
    usuario: UsuarioCreateNestedOneWithoutNotificacionesInput
  }

  export type NotificacionUncheckedCreateWithoutConversacionInput = {
    id?: number
    tipo: $Enums.TipoNotificacion
    titulo: string
    descripcion: string
    isRead?: boolean
    createdAt?: Date | string
    usuarioId: number
    mensajeId?: number | null
    alojamientoId?: number | null
  }

  export type NotificacionCreateOrConnectWithoutConversacionInput = {
    where: NotificacionWhereUniqueInput
    create: XOR<NotificacionCreateWithoutConversacionInput, NotificacionUncheckedCreateWithoutConversacionInput>
  }

  export type NotificacionCreateManyConversacionInputEnvelope = {
    data: NotificacionCreateManyConversacionInput | NotificacionCreateManyConversacionInput[]
    skipDuplicates?: boolean
  }

  export type AlojamientoUpsertWithoutConversacionesInput = {
    update: XOR<AlojamientoUpdateWithoutConversacionesInput, AlojamientoUncheckedUpdateWithoutConversacionesInput>
    create: XOR<AlojamientoCreateWithoutConversacionesInput, AlojamientoUncheckedCreateWithoutConversacionesInput>
    where?: AlojamientoWhereInput
  }

  export type AlojamientoUpdateToOneWithWhereWithoutConversacionesInput = {
    where?: AlojamientoWhereInput
    data: XOR<AlojamientoUpdateWithoutConversacionesInput, AlojamientoUncheckedUpdateWithoutConversacionesInput>
  }

  export type AlojamientoUpdateWithoutConversacionesInput = {
    slug?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    motivoRechazo?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    descripcion?: StringFieldUpdateOperationsInput | string
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    habitaciones?: IntFieldUpdateOperationsInput | number
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    dirigidoA?: StringFieldUpdateOperationsInput | string
    infoExtra?: StringFieldUpdateOperationsInput | string
    esDestacado?: BoolFieldUpdateOperationsInput | boolean
    tipoAlojamiento?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    provincia?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
    portal?: NullableStringFieldUpdateOperationsInput | string | null
    piso?: NullableStringFieldUpdateOperationsInput | string | null
    puerta?: NullableStringFieldUpdateOperationsInput | string | null
    propietario?: UsuarioUpdateOneRequiredWithoutAlojamientosNestedInput
    notificaciones?: NotificacionUpdateManyWithoutAlojamientoNestedInput
    favoritedBy?: UsuarioUpdateManyWithoutAlojamientosFavoritosNestedInput
  }

  export type AlojamientoUncheckedUpdateWithoutConversacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    motivoRechazo?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    descripcion?: StringFieldUpdateOperationsInput | string
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    habitaciones?: IntFieldUpdateOperationsInput | number
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    dirigidoA?: StringFieldUpdateOperationsInput | string
    infoExtra?: StringFieldUpdateOperationsInput | string
    esDestacado?: BoolFieldUpdateOperationsInput | boolean
    tipoAlojamiento?: StringFieldUpdateOperationsInput | string
    managerUsuarioId?: IntFieldUpdateOperationsInput | number
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    provincia?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
    portal?: NullableStringFieldUpdateOperationsInput | string | null
    piso?: NullableStringFieldUpdateOperationsInput | string | null
    puerta?: NullableStringFieldUpdateOperationsInput | string | null
    notificaciones?: NotificacionUncheckedUpdateManyWithoutAlojamientoNestedInput
    favoritedBy?: UsuarioUncheckedUpdateManyWithoutAlojamientosFavoritosNestedInput
  }

  export type UsuarioUpsertWithoutEstudianteConversacionesInput = {
    update: XOR<UsuarioUpdateWithoutEstudianteConversacionesInput, UsuarioUncheckedUpdateWithoutEstudianteConversacionesInput>
    create: XOR<UsuarioCreateWithoutEstudianteConversacionesInput, UsuarioUncheckedCreateWithoutEstudianteConversacionesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutEstudianteConversacionesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutEstudianteConversacionesInput, UsuarioUncheckedUpdateWithoutEstudianteConversacionesInput>
  }

  export type UsuarioUpdateWithoutEstudianteConversacionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    motivoSuspension?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alojamientos?: AlojamientoUpdateManyWithoutPropietarioNestedInput
    conversacionesComoPropietario?: ConversacionUpdateManyWithoutPropietarioNestedInput
    mensajesRemitidos?: MensajeUpdateManyWithoutEmisorNestedInput
    notificaciones?: NotificacionUpdateManyWithoutUsuarioNestedInput
    alojamientosFavoritos?: AlojamientoUpdateManyWithoutFavoritedByNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutEstudianteConversacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    motivoSuspension?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alojamientos?: AlojamientoUncheckedUpdateManyWithoutPropietarioNestedInput
    conversacionesComoPropietario?: ConversacionUncheckedUpdateManyWithoutPropietarioNestedInput
    mensajesRemitidos?: MensajeUncheckedUpdateManyWithoutEmisorNestedInput
    notificaciones?: NotificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    alojamientosFavoritos?: AlojamientoUncheckedUpdateManyWithoutFavoritedByNestedInput
  }

  export type UsuarioUpsertWithoutConversacionesComoPropietarioInput = {
    update: XOR<UsuarioUpdateWithoutConversacionesComoPropietarioInput, UsuarioUncheckedUpdateWithoutConversacionesComoPropietarioInput>
    create: XOR<UsuarioCreateWithoutConversacionesComoPropietarioInput, UsuarioUncheckedCreateWithoutConversacionesComoPropietarioInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutConversacionesComoPropietarioInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutConversacionesComoPropietarioInput, UsuarioUncheckedUpdateWithoutConversacionesComoPropietarioInput>
  }

  export type UsuarioUpdateWithoutConversacionesComoPropietarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    motivoSuspension?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alojamientos?: AlojamientoUpdateManyWithoutPropietarioNestedInput
    estudianteConversaciones?: ConversacionUpdateManyWithoutEstudianteNestedInput
    mensajesRemitidos?: MensajeUpdateManyWithoutEmisorNestedInput
    notificaciones?: NotificacionUpdateManyWithoutUsuarioNestedInput
    alojamientosFavoritos?: AlojamientoUpdateManyWithoutFavoritedByNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutConversacionesComoPropietarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    motivoSuspension?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alojamientos?: AlojamientoUncheckedUpdateManyWithoutPropietarioNestedInput
    estudianteConversaciones?: ConversacionUncheckedUpdateManyWithoutEstudianteNestedInput
    mensajesRemitidos?: MensajeUncheckedUpdateManyWithoutEmisorNestedInput
    notificaciones?: NotificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    alojamientosFavoritos?: AlojamientoUncheckedUpdateManyWithoutFavoritedByNestedInput
  }

  export type MensajeUpsertWithWhereUniqueWithoutConversacionInput = {
    where: MensajeWhereUniqueInput
    update: XOR<MensajeUpdateWithoutConversacionInput, MensajeUncheckedUpdateWithoutConversacionInput>
    create: XOR<MensajeCreateWithoutConversacionInput, MensajeUncheckedCreateWithoutConversacionInput>
  }

  export type MensajeUpdateWithWhereUniqueWithoutConversacionInput = {
    where: MensajeWhereUniqueInput
    data: XOR<MensajeUpdateWithoutConversacionInput, MensajeUncheckedUpdateWithoutConversacionInput>
  }

  export type MensajeUpdateManyWithWhereWithoutConversacionInput = {
    where: MensajeScalarWhereInput
    data: XOR<MensajeUpdateManyMutationInput, MensajeUncheckedUpdateManyWithoutConversacionInput>
  }

  export type MensajeScalarWhereInput = {
    AND?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
    OR?: MensajeScalarWhereInput[]
    NOT?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
    id?: IntFilter<"Mensaje"> | number
    contenido?: StringFilter<"Mensaje"> | string
    conversacionId?: IntFilter<"Mensaje"> | number
    createdAt?: DateTimeFilter<"Mensaje"> | Date | string
    emisorId?: IntFilter<"Mensaje"> | number
  }

  export type NotificacionUpsertWithWhereUniqueWithoutConversacionInput = {
    where: NotificacionWhereUniqueInput
    update: XOR<NotificacionUpdateWithoutConversacionInput, NotificacionUncheckedUpdateWithoutConversacionInput>
    create: XOR<NotificacionCreateWithoutConversacionInput, NotificacionUncheckedCreateWithoutConversacionInput>
  }

  export type NotificacionUpdateWithWhereUniqueWithoutConversacionInput = {
    where: NotificacionWhereUniqueInput
    data: XOR<NotificacionUpdateWithoutConversacionInput, NotificacionUncheckedUpdateWithoutConversacionInput>
  }

  export type NotificacionUpdateManyWithWhereWithoutConversacionInput = {
    where: NotificacionScalarWhereInput
    data: XOR<NotificacionUpdateManyMutationInput, NotificacionUncheckedUpdateManyWithoutConversacionInput>
  }

  export type ConversacionCreateWithoutMensajesInput = {
    createdAt?: Date | string
    ultimoMensajeId?: number | null
    estudianteVistoUltimo?: boolean
    propietarioVistoUltimo?: boolean
    esConversacionAdmin?: boolean
    alojamiento?: AlojamientoCreateNestedOneWithoutConversacionesInput
    estudiante: UsuarioCreateNestedOneWithoutEstudianteConversacionesInput
    propietario: UsuarioCreateNestedOneWithoutConversacionesComoPropietarioInput
    notificaciones?: NotificacionCreateNestedManyWithoutConversacionInput
  }

  export type ConversacionUncheckedCreateWithoutMensajesInput = {
    id?: number
    alojamientoId?: number | null
    createdAt?: Date | string
    estudianteId: number
    propietarioId: number
    ultimoMensajeId?: number | null
    estudianteVistoUltimo?: boolean
    propietarioVistoUltimo?: boolean
    esConversacionAdmin?: boolean
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutConversacionInput
  }

  export type ConversacionCreateOrConnectWithoutMensajesInput = {
    where: ConversacionWhereUniqueInput
    create: XOR<ConversacionCreateWithoutMensajesInput, ConversacionUncheckedCreateWithoutMensajesInput>
  }

  export type UsuarioCreateWithoutMensajesRemitidosInput = {
    nombre: string
    email: string
    password: string
    telefono?: string | null
    tipo: $Enums.TipoUsuario
    isEmailVerified?: boolean
    isSuspended?: boolean
    motivoSuspension?: string | null
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    alojamientos?: AlojamientoCreateNestedManyWithoutPropietarioInput
    estudianteConversaciones?: ConversacionCreateNestedManyWithoutEstudianteInput
    conversacionesComoPropietario?: ConversacionCreateNestedManyWithoutPropietarioInput
    notificaciones?: NotificacionCreateNestedManyWithoutUsuarioInput
    alojamientosFavoritos?: AlojamientoCreateNestedManyWithoutFavoritedByInput
  }

  export type UsuarioUncheckedCreateWithoutMensajesRemitidosInput = {
    id?: number
    nombre: string
    email: string
    password: string
    telefono?: string | null
    tipo: $Enums.TipoUsuario
    isEmailVerified?: boolean
    isSuspended?: boolean
    motivoSuspension?: string | null
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    alojamientos?: AlojamientoUncheckedCreateNestedManyWithoutPropietarioInput
    estudianteConversaciones?: ConversacionUncheckedCreateNestedManyWithoutEstudianteInput
    conversacionesComoPropietario?: ConversacionUncheckedCreateNestedManyWithoutPropietarioInput
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutUsuarioInput
    alojamientosFavoritos?: AlojamientoUncheckedCreateNestedManyWithoutFavoritedByInput
  }

  export type UsuarioCreateOrConnectWithoutMensajesRemitidosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutMensajesRemitidosInput, UsuarioUncheckedCreateWithoutMensajesRemitidosInput>
  }

  export type NotificacionCreateWithoutMensajeInput = {
    tipo: $Enums.TipoNotificacion
    titulo: string
    descripcion: string
    isRead?: boolean
    createdAt?: Date | string
    alojamiento?: AlojamientoCreateNestedOneWithoutNotificacionesInput
    conversacion?: ConversacionCreateNestedOneWithoutNotificacionesInput
    usuario: UsuarioCreateNestedOneWithoutNotificacionesInput
  }

  export type NotificacionUncheckedCreateWithoutMensajeInput = {
    id?: number
    tipo: $Enums.TipoNotificacion
    titulo: string
    descripcion: string
    isRead?: boolean
    createdAt?: Date | string
    usuarioId: number
    conversacionId?: number | null
    alojamientoId?: number | null
  }

  export type NotificacionCreateOrConnectWithoutMensajeInput = {
    where: NotificacionWhereUniqueInput
    create: XOR<NotificacionCreateWithoutMensajeInput, NotificacionUncheckedCreateWithoutMensajeInput>
  }

  export type NotificacionCreateManyMensajeInputEnvelope = {
    data: NotificacionCreateManyMensajeInput | NotificacionCreateManyMensajeInput[]
    skipDuplicates?: boolean
  }

  export type ConversacionUpsertWithoutMensajesInput = {
    update: XOR<ConversacionUpdateWithoutMensajesInput, ConversacionUncheckedUpdateWithoutMensajesInput>
    create: XOR<ConversacionCreateWithoutMensajesInput, ConversacionUncheckedCreateWithoutMensajesInput>
    where?: ConversacionWhereInput
  }

  export type ConversacionUpdateToOneWithWhereWithoutMensajesInput = {
    where?: ConversacionWhereInput
    data: XOR<ConversacionUpdateWithoutMensajesInput, ConversacionUncheckedUpdateWithoutMensajesInput>
  }

  export type ConversacionUpdateWithoutMensajesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoMensajeId?: NullableIntFieldUpdateOperationsInput | number | null
    estudianteVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    propietarioVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    esConversacionAdmin?: BoolFieldUpdateOperationsInput | boolean
    alojamiento?: AlojamientoUpdateOneWithoutConversacionesNestedInput
    estudiante?: UsuarioUpdateOneRequiredWithoutEstudianteConversacionesNestedInput
    propietario?: UsuarioUpdateOneRequiredWithoutConversacionesComoPropietarioNestedInput
    notificaciones?: NotificacionUpdateManyWithoutConversacionNestedInput
  }

  export type ConversacionUncheckedUpdateWithoutMensajesInput = {
    id?: IntFieldUpdateOperationsInput | number
    alojamientoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estudianteId?: IntFieldUpdateOperationsInput | number
    propietarioId?: IntFieldUpdateOperationsInput | number
    ultimoMensajeId?: NullableIntFieldUpdateOperationsInput | number | null
    estudianteVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    propietarioVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    esConversacionAdmin?: BoolFieldUpdateOperationsInput | boolean
    notificaciones?: NotificacionUncheckedUpdateManyWithoutConversacionNestedInput
  }

  export type UsuarioUpsertWithoutMensajesRemitidosInput = {
    update: XOR<UsuarioUpdateWithoutMensajesRemitidosInput, UsuarioUncheckedUpdateWithoutMensajesRemitidosInput>
    create: XOR<UsuarioCreateWithoutMensajesRemitidosInput, UsuarioUncheckedCreateWithoutMensajesRemitidosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutMensajesRemitidosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutMensajesRemitidosInput, UsuarioUncheckedUpdateWithoutMensajesRemitidosInput>
  }

  export type UsuarioUpdateWithoutMensajesRemitidosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    motivoSuspension?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alojamientos?: AlojamientoUpdateManyWithoutPropietarioNestedInput
    estudianteConversaciones?: ConversacionUpdateManyWithoutEstudianteNestedInput
    conversacionesComoPropietario?: ConversacionUpdateManyWithoutPropietarioNestedInput
    notificaciones?: NotificacionUpdateManyWithoutUsuarioNestedInput
    alojamientosFavoritos?: AlojamientoUpdateManyWithoutFavoritedByNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutMensajesRemitidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    motivoSuspension?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alojamientos?: AlojamientoUncheckedUpdateManyWithoutPropietarioNestedInput
    estudianteConversaciones?: ConversacionUncheckedUpdateManyWithoutEstudianteNestedInput
    conversacionesComoPropietario?: ConversacionUncheckedUpdateManyWithoutPropietarioNestedInput
    notificaciones?: NotificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    alojamientosFavoritos?: AlojamientoUncheckedUpdateManyWithoutFavoritedByNestedInput
  }

  export type NotificacionUpsertWithWhereUniqueWithoutMensajeInput = {
    where: NotificacionWhereUniqueInput
    update: XOR<NotificacionUpdateWithoutMensajeInput, NotificacionUncheckedUpdateWithoutMensajeInput>
    create: XOR<NotificacionCreateWithoutMensajeInput, NotificacionUncheckedCreateWithoutMensajeInput>
  }

  export type NotificacionUpdateWithWhereUniqueWithoutMensajeInput = {
    where: NotificacionWhereUniqueInput
    data: XOR<NotificacionUpdateWithoutMensajeInput, NotificacionUncheckedUpdateWithoutMensajeInput>
  }

  export type NotificacionUpdateManyWithWhereWithoutMensajeInput = {
    where: NotificacionScalarWhereInput
    data: XOR<NotificacionUpdateManyMutationInput, NotificacionUncheckedUpdateManyWithoutMensajeInput>
  }

  export type AlojamientoCreateWithoutPropietarioInput = {
    slug: string
    estado?: string
    motivoRechazo?: string | null
    photoUrls?: AlojamientoCreatephotoUrlsInput | string[]
    postedDate?: Date | string
    aguaIncluido?: boolean
    descripcion: string
    electricidadIncluido?: boolean
    gasIncluido?: boolean
    habitaciones: number
    hayAireAcondicionado?: boolean
    hayAscensor?: boolean
    hayCalefaccion?: boolean
    hayGaraje?: boolean
    hayGas?: boolean
    hayGimnasio?: boolean
    hayHorno?: boolean
    hayInternet?: boolean
    hayLavadora?: boolean
    hayLavavajillas?: boolean
    hayMicroondas?: boolean
    hayMuebles?: boolean
    hayNevera?: boolean
    hayPiscina?: boolean
    hayPortero?: boolean
    haySecadora?: boolean
    hayTelefono?: boolean
    hayTelevision?: boolean
    hayTerraza?: boolean
    hayZonaComunitaria?: boolean
    internetIncluido?: boolean
    nombre: string
    precio: number
    superficie: number
    plazasLibres: number
    banos: number
    dirigidoA: string
    infoExtra: string
    esDestacado?: boolean
    tipoAlojamiento: string
    direccion?: string | null
    ciudad?: string | null
    provincia?: string | null
    pais?: string | null
    codigoPostal?: string | null
    portal?: string | null
    piso?: string | null
    puerta?: string | null
    conversaciones?: ConversacionCreateNestedManyWithoutAlojamientoInput
    notificaciones?: NotificacionCreateNestedManyWithoutAlojamientoInput
    favoritedBy?: UsuarioCreateNestedManyWithoutAlojamientosFavoritosInput
  }

  export type AlojamientoUncheckedCreateWithoutPropietarioInput = {
    id?: number
    slug: string
    estado?: string
    motivoRechazo?: string | null
    photoUrls?: AlojamientoCreatephotoUrlsInput | string[]
    postedDate?: Date | string
    aguaIncluido?: boolean
    descripcion: string
    electricidadIncluido?: boolean
    gasIncluido?: boolean
    habitaciones: number
    hayAireAcondicionado?: boolean
    hayAscensor?: boolean
    hayCalefaccion?: boolean
    hayGaraje?: boolean
    hayGas?: boolean
    hayGimnasio?: boolean
    hayHorno?: boolean
    hayInternet?: boolean
    hayLavadora?: boolean
    hayLavavajillas?: boolean
    hayMicroondas?: boolean
    hayMuebles?: boolean
    hayNevera?: boolean
    hayPiscina?: boolean
    hayPortero?: boolean
    haySecadora?: boolean
    hayTelefono?: boolean
    hayTelevision?: boolean
    hayTerraza?: boolean
    hayZonaComunitaria?: boolean
    internetIncluido?: boolean
    nombre: string
    precio: number
    superficie: number
    plazasLibres: number
    banos: number
    dirigidoA: string
    infoExtra: string
    esDestacado?: boolean
    tipoAlojamiento: string
    direccion?: string | null
    ciudad?: string | null
    provincia?: string | null
    pais?: string | null
    codigoPostal?: string | null
    portal?: string | null
    piso?: string | null
    puerta?: string | null
    conversaciones?: ConversacionUncheckedCreateNestedManyWithoutAlojamientoInput
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutAlojamientoInput
    favoritedBy?: UsuarioUncheckedCreateNestedManyWithoutAlojamientosFavoritosInput
  }

  export type AlojamientoCreateOrConnectWithoutPropietarioInput = {
    where: AlojamientoWhereUniqueInput
    create: XOR<AlojamientoCreateWithoutPropietarioInput, AlojamientoUncheckedCreateWithoutPropietarioInput>
  }

  export type AlojamientoCreateManyPropietarioInputEnvelope = {
    data: AlojamientoCreateManyPropietarioInput | AlojamientoCreateManyPropietarioInput[]
    skipDuplicates?: boolean
  }

  export type ConversacionCreateWithoutEstudianteInput = {
    createdAt?: Date | string
    ultimoMensajeId?: number | null
    estudianteVistoUltimo?: boolean
    propietarioVistoUltimo?: boolean
    esConversacionAdmin?: boolean
    alojamiento?: AlojamientoCreateNestedOneWithoutConversacionesInput
    propietario: UsuarioCreateNestedOneWithoutConversacionesComoPropietarioInput
    mensajes?: MensajeCreateNestedManyWithoutConversacionInput
    notificaciones?: NotificacionCreateNestedManyWithoutConversacionInput
  }

  export type ConversacionUncheckedCreateWithoutEstudianteInput = {
    id?: number
    alojamientoId?: number | null
    createdAt?: Date | string
    propietarioId: number
    ultimoMensajeId?: number | null
    estudianteVistoUltimo?: boolean
    propietarioVistoUltimo?: boolean
    esConversacionAdmin?: boolean
    mensajes?: MensajeUncheckedCreateNestedManyWithoutConversacionInput
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutConversacionInput
  }

  export type ConversacionCreateOrConnectWithoutEstudianteInput = {
    where: ConversacionWhereUniqueInput
    create: XOR<ConversacionCreateWithoutEstudianteInput, ConversacionUncheckedCreateWithoutEstudianteInput>
  }

  export type ConversacionCreateManyEstudianteInputEnvelope = {
    data: ConversacionCreateManyEstudianteInput | ConversacionCreateManyEstudianteInput[]
    skipDuplicates?: boolean
  }

  export type ConversacionCreateWithoutPropietarioInput = {
    createdAt?: Date | string
    ultimoMensajeId?: number | null
    estudianteVistoUltimo?: boolean
    propietarioVistoUltimo?: boolean
    esConversacionAdmin?: boolean
    alojamiento?: AlojamientoCreateNestedOneWithoutConversacionesInput
    estudiante: UsuarioCreateNestedOneWithoutEstudianteConversacionesInput
    mensajes?: MensajeCreateNestedManyWithoutConversacionInput
    notificaciones?: NotificacionCreateNestedManyWithoutConversacionInput
  }

  export type ConversacionUncheckedCreateWithoutPropietarioInput = {
    id?: number
    alojamientoId?: number | null
    createdAt?: Date | string
    estudianteId: number
    ultimoMensajeId?: number | null
    estudianteVistoUltimo?: boolean
    propietarioVistoUltimo?: boolean
    esConversacionAdmin?: boolean
    mensajes?: MensajeUncheckedCreateNestedManyWithoutConversacionInput
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutConversacionInput
  }

  export type ConversacionCreateOrConnectWithoutPropietarioInput = {
    where: ConversacionWhereUniqueInput
    create: XOR<ConversacionCreateWithoutPropietarioInput, ConversacionUncheckedCreateWithoutPropietarioInput>
  }

  export type ConversacionCreateManyPropietarioInputEnvelope = {
    data: ConversacionCreateManyPropietarioInput | ConversacionCreateManyPropietarioInput[]
    skipDuplicates?: boolean
  }

  export type MensajeCreateWithoutEmisorInput = {
    contenido: string
    createdAt?: Date | string
    conversacion: ConversacionCreateNestedOneWithoutMensajesInput
    notificaciones?: NotificacionCreateNestedManyWithoutMensajeInput
  }

  export type MensajeUncheckedCreateWithoutEmisorInput = {
    id?: number
    contenido: string
    conversacionId: number
    createdAt?: Date | string
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutMensajeInput
  }

  export type MensajeCreateOrConnectWithoutEmisorInput = {
    where: MensajeWhereUniqueInput
    create: XOR<MensajeCreateWithoutEmisorInput, MensajeUncheckedCreateWithoutEmisorInput>
  }

  export type MensajeCreateManyEmisorInputEnvelope = {
    data: MensajeCreateManyEmisorInput | MensajeCreateManyEmisorInput[]
    skipDuplicates?: boolean
  }

  export type NotificacionCreateWithoutUsuarioInput = {
    tipo: $Enums.TipoNotificacion
    titulo: string
    descripcion: string
    isRead?: boolean
    createdAt?: Date | string
    alojamiento?: AlojamientoCreateNestedOneWithoutNotificacionesInput
    conversacion?: ConversacionCreateNestedOneWithoutNotificacionesInput
    mensaje?: MensajeCreateNestedOneWithoutNotificacionesInput
  }

  export type NotificacionUncheckedCreateWithoutUsuarioInput = {
    id?: number
    tipo: $Enums.TipoNotificacion
    titulo: string
    descripcion: string
    isRead?: boolean
    createdAt?: Date | string
    conversacionId?: number | null
    mensajeId?: number | null
    alojamientoId?: number | null
  }

  export type NotificacionCreateOrConnectWithoutUsuarioInput = {
    where: NotificacionWhereUniqueInput
    create: XOR<NotificacionCreateWithoutUsuarioInput, NotificacionUncheckedCreateWithoutUsuarioInput>
  }

  export type NotificacionCreateManyUsuarioInputEnvelope = {
    data: NotificacionCreateManyUsuarioInput | NotificacionCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type AlojamientoCreateWithoutFavoritedByInput = {
    slug: string
    estado?: string
    motivoRechazo?: string | null
    photoUrls?: AlojamientoCreatephotoUrlsInput | string[]
    postedDate?: Date | string
    aguaIncluido?: boolean
    descripcion: string
    electricidadIncluido?: boolean
    gasIncluido?: boolean
    habitaciones: number
    hayAireAcondicionado?: boolean
    hayAscensor?: boolean
    hayCalefaccion?: boolean
    hayGaraje?: boolean
    hayGas?: boolean
    hayGimnasio?: boolean
    hayHorno?: boolean
    hayInternet?: boolean
    hayLavadora?: boolean
    hayLavavajillas?: boolean
    hayMicroondas?: boolean
    hayMuebles?: boolean
    hayNevera?: boolean
    hayPiscina?: boolean
    hayPortero?: boolean
    haySecadora?: boolean
    hayTelefono?: boolean
    hayTelevision?: boolean
    hayTerraza?: boolean
    hayZonaComunitaria?: boolean
    internetIncluido?: boolean
    nombre: string
    precio: number
    superficie: number
    plazasLibres: number
    banos: number
    dirigidoA: string
    infoExtra: string
    esDestacado?: boolean
    tipoAlojamiento: string
    direccion?: string | null
    ciudad?: string | null
    provincia?: string | null
    pais?: string | null
    codigoPostal?: string | null
    portal?: string | null
    piso?: string | null
    puerta?: string | null
    propietario: UsuarioCreateNestedOneWithoutAlojamientosInput
    conversaciones?: ConversacionCreateNestedManyWithoutAlojamientoInput
    notificaciones?: NotificacionCreateNestedManyWithoutAlojamientoInput
  }

  export type AlojamientoUncheckedCreateWithoutFavoritedByInput = {
    id?: number
    slug: string
    estado?: string
    motivoRechazo?: string | null
    photoUrls?: AlojamientoCreatephotoUrlsInput | string[]
    postedDate?: Date | string
    aguaIncluido?: boolean
    descripcion: string
    electricidadIncluido?: boolean
    gasIncluido?: boolean
    habitaciones: number
    hayAireAcondicionado?: boolean
    hayAscensor?: boolean
    hayCalefaccion?: boolean
    hayGaraje?: boolean
    hayGas?: boolean
    hayGimnasio?: boolean
    hayHorno?: boolean
    hayInternet?: boolean
    hayLavadora?: boolean
    hayLavavajillas?: boolean
    hayMicroondas?: boolean
    hayMuebles?: boolean
    hayNevera?: boolean
    hayPiscina?: boolean
    hayPortero?: boolean
    haySecadora?: boolean
    hayTelefono?: boolean
    hayTelevision?: boolean
    hayTerraza?: boolean
    hayZonaComunitaria?: boolean
    internetIncluido?: boolean
    nombre: string
    precio: number
    superficie: number
    plazasLibres: number
    banos: number
    dirigidoA: string
    infoExtra: string
    esDestacado?: boolean
    tipoAlojamiento: string
    managerUsuarioId: number
    direccion?: string | null
    ciudad?: string | null
    provincia?: string | null
    pais?: string | null
    codigoPostal?: string | null
    portal?: string | null
    piso?: string | null
    puerta?: string | null
    conversaciones?: ConversacionUncheckedCreateNestedManyWithoutAlojamientoInput
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutAlojamientoInput
  }

  export type AlojamientoCreateOrConnectWithoutFavoritedByInput = {
    where: AlojamientoWhereUniqueInput
    create: XOR<AlojamientoCreateWithoutFavoritedByInput, AlojamientoUncheckedCreateWithoutFavoritedByInput>
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
    slug?: StringFilter<"Alojamiento"> | string
    estado?: StringFilter<"Alojamiento"> | string
    motivoRechazo?: StringNullableFilter<"Alojamiento"> | string | null
    photoUrls?: StringNullableListFilter<"Alojamiento">
    postedDate?: DateTimeFilter<"Alojamiento"> | Date | string
    aguaIncluido?: BoolFilter<"Alojamiento"> | boolean
    descripcion?: StringFilter<"Alojamiento"> | string
    electricidadIncluido?: BoolFilter<"Alojamiento"> | boolean
    gasIncluido?: BoolFilter<"Alojamiento"> | boolean
    habitaciones?: IntFilter<"Alojamiento"> | number
    hayAireAcondicionado?: BoolFilter<"Alojamiento"> | boolean
    hayAscensor?: BoolFilter<"Alojamiento"> | boolean
    hayCalefaccion?: BoolFilter<"Alojamiento"> | boolean
    hayGaraje?: BoolFilter<"Alojamiento"> | boolean
    hayGas?: BoolFilter<"Alojamiento"> | boolean
    hayGimnasio?: BoolFilter<"Alojamiento"> | boolean
    hayHorno?: BoolFilter<"Alojamiento"> | boolean
    hayInternet?: BoolFilter<"Alojamiento"> | boolean
    hayLavadora?: BoolFilter<"Alojamiento"> | boolean
    hayLavavajillas?: BoolFilter<"Alojamiento"> | boolean
    hayMicroondas?: BoolFilter<"Alojamiento"> | boolean
    hayMuebles?: BoolFilter<"Alojamiento"> | boolean
    hayNevera?: BoolFilter<"Alojamiento"> | boolean
    hayPiscina?: BoolFilter<"Alojamiento"> | boolean
    hayPortero?: BoolFilter<"Alojamiento"> | boolean
    haySecadora?: BoolFilter<"Alojamiento"> | boolean
    hayTelefono?: BoolFilter<"Alojamiento"> | boolean
    hayTelevision?: BoolFilter<"Alojamiento"> | boolean
    hayTerraza?: BoolFilter<"Alojamiento"> | boolean
    hayZonaComunitaria?: BoolFilter<"Alojamiento"> | boolean
    internetIncluido?: BoolFilter<"Alojamiento"> | boolean
    nombre?: StringFilter<"Alojamiento"> | string
    precio?: FloatFilter<"Alojamiento"> | number
    superficie?: IntFilter<"Alojamiento"> | number
    plazasLibres?: IntFilter<"Alojamiento"> | number
    banos?: FloatFilter<"Alojamiento"> | number
    dirigidoA?: StringFilter<"Alojamiento"> | string
    infoExtra?: StringFilter<"Alojamiento"> | string
    esDestacado?: BoolFilter<"Alojamiento"> | boolean
    tipoAlojamiento?: StringFilter<"Alojamiento"> | string
    managerUsuarioId?: IntFilter<"Alojamiento"> | number
    direccion?: StringNullableFilter<"Alojamiento"> | string | null
    ciudad?: StringNullableFilter<"Alojamiento"> | string | null
    provincia?: StringNullableFilter<"Alojamiento"> | string | null
    pais?: StringNullableFilter<"Alojamiento"> | string | null
    codigoPostal?: StringNullableFilter<"Alojamiento"> | string | null
    portal?: StringNullableFilter<"Alojamiento"> | string | null
    piso?: StringNullableFilter<"Alojamiento"> | string | null
    puerta?: StringNullableFilter<"Alojamiento"> | string | null
  }

  export type ConversacionUpsertWithWhereUniqueWithoutEstudianteInput = {
    where: ConversacionWhereUniqueInput
    update: XOR<ConversacionUpdateWithoutEstudianteInput, ConversacionUncheckedUpdateWithoutEstudianteInput>
    create: XOR<ConversacionCreateWithoutEstudianteInput, ConversacionUncheckedCreateWithoutEstudianteInput>
  }

  export type ConversacionUpdateWithWhereUniqueWithoutEstudianteInput = {
    where: ConversacionWhereUniqueInput
    data: XOR<ConversacionUpdateWithoutEstudianteInput, ConversacionUncheckedUpdateWithoutEstudianteInput>
  }

  export type ConversacionUpdateManyWithWhereWithoutEstudianteInput = {
    where: ConversacionScalarWhereInput
    data: XOR<ConversacionUpdateManyMutationInput, ConversacionUncheckedUpdateManyWithoutEstudianteInput>
  }

  export type ConversacionUpsertWithWhereUniqueWithoutPropietarioInput = {
    where: ConversacionWhereUniqueInput
    update: XOR<ConversacionUpdateWithoutPropietarioInput, ConversacionUncheckedUpdateWithoutPropietarioInput>
    create: XOR<ConversacionCreateWithoutPropietarioInput, ConversacionUncheckedCreateWithoutPropietarioInput>
  }

  export type ConversacionUpdateWithWhereUniqueWithoutPropietarioInput = {
    where: ConversacionWhereUniqueInput
    data: XOR<ConversacionUpdateWithoutPropietarioInput, ConversacionUncheckedUpdateWithoutPropietarioInput>
  }

  export type ConversacionUpdateManyWithWhereWithoutPropietarioInput = {
    where: ConversacionScalarWhereInput
    data: XOR<ConversacionUpdateManyMutationInput, ConversacionUncheckedUpdateManyWithoutPropietarioInput>
  }

  export type MensajeUpsertWithWhereUniqueWithoutEmisorInput = {
    where: MensajeWhereUniqueInput
    update: XOR<MensajeUpdateWithoutEmisorInput, MensajeUncheckedUpdateWithoutEmisorInput>
    create: XOR<MensajeCreateWithoutEmisorInput, MensajeUncheckedCreateWithoutEmisorInput>
  }

  export type MensajeUpdateWithWhereUniqueWithoutEmisorInput = {
    where: MensajeWhereUniqueInput
    data: XOR<MensajeUpdateWithoutEmisorInput, MensajeUncheckedUpdateWithoutEmisorInput>
  }

  export type MensajeUpdateManyWithWhereWithoutEmisorInput = {
    where: MensajeScalarWhereInput
    data: XOR<MensajeUpdateManyMutationInput, MensajeUncheckedUpdateManyWithoutEmisorInput>
  }

  export type NotificacionUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: NotificacionWhereUniqueInput
    update: XOR<NotificacionUpdateWithoutUsuarioInput, NotificacionUncheckedUpdateWithoutUsuarioInput>
    create: XOR<NotificacionCreateWithoutUsuarioInput, NotificacionUncheckedCreateWithoutUsuarioInput>
  }

  export type NotificacionUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: NotificacionWhereUniqueInput
    data: XOR<NotificacionUpdateWithoutUsuarioInput, NotificacionUncheckedUpdateWithoutUsuarioInput>
  }

  export type NotificacionUpdateManyWithWhereWithoutUsuarioInput = {
    where: NotificacionScalarWhereInput
    data: XOR<NotificacionUpdateManyMutationInput, NotificacionUncheckedUpdateManyWithoutUsuarioInput>
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

  export type AlojamientoCreateWithoutNotificacionesInput = {
    slug: string
    estado?: string
    motivoRechazo?: string | null
    photoUrls?: AlojamientoCreatephotoUrlsInput | string[]
    postedDate?: Date | string
    aguaIncluido?: boolean
    descripcion: string
    electricidadIncluido?: boolean
    gasIncluido?: boolean
    habitaciones: number
    hayAireAcondicionado?: boolean
    hayAscensor?: boolean
    hayCalefaccion?: boolean
    hayGaraje?: boolean
    hayGas?: boolean
    hayGimnasio?: boolean
    hayHorno?: boolean
    hayInternet?: boolean
    hayLavadora?: boolean
    hayLavavajillas?: boolean
    hayMicroondas?: boolean
    hayMuebles?: boolean
    hayNevera?: boolean
    hayPiscina?: boolean
    hayPortero?: boolean
    haySecadora?: boolean
    hayTelefono?: boolean
    hayTelevision?: boolean
    hayTerraza?: boolean
    hayZonaComunitaria?: boolean
    internetIncluido?: boolean
    nombre: string
    precio: number
    superficie: number
    plazasLibres: number
    banos: number
    dirigidoA: string
    infoExtra: string
    esDestacado?: boolean
    tipoAlojamiento: string
    direccion?: string | null
    ciudad?: string | null
    provincia?: string | null
    pais?: string | null
    codigoPostal?: string | null
    portal?: string | null
    piso?: string | null
    puerta?: string | null
    propietario: UsuarioCreateNestedOneWithoutAlojamientosInput
    conversaciones?: ConversacionCreateNestedManyWithoutAlojamientoInput
    favoritedBy?: UsuarioCreateNestedManyWithoutAlojamientosFavoritosInput
  }

  export type AlojamientoUncheckedCreateWithoutNotificacionesInput = {
    id?: number
    slug: string
    estado?: string
    motivoRechazo?: string | null
    photoUrls?: AlojamientoCreatephotoUrlsInput | string[]
    postedDate?: Date | string
    aguaIncluido?: boolean
    descripcion: string
    electricidadIncluido?: boolean
    gasIncluido?: boolean
    habitaciones: number
    hayAireAcondicionado?: boolean
    hayAscensor?: boolean
    hayCalefaccion?: boolean
    hayGaraje?: boolean
    hayGas?: boolean
    hayGimnasio?: boolean
    hayHorno?: boolean
    hayInternet?: boolean
    hayLavadora?: boolean
    hayLavavajillas?: boolean
    hayMicroondas?: boolean
    hayMuebles?: boolean
    hayNevera?: boolean
    hayPiscina?: boolean
    hayPortero?: boolean
    haySecadora?: boolean
    hayTelefono?: boolean
    hayTelevision?: boolean
    hayTerraza?: boolean
    hayZonaComunitaria?: boolean
    internetIncluido?: boolean
    nombre: string
    precio: number
    superficie: number
    plazasLibres: number
    banos: number
    dirigidoA: string
    infoExtra: string
    esDestacado?: boolean
    tipoAlojamiento: string
    managerUsuarioId: number
    direccion?: string | null
    ciudad?: string | null
    provincia?: string | null
    pais?: string | null
    codigoPostal?: string | null
    portal?: string | null
    piso?: string | null
    puerta?: string | null
    conversaciones?: ConversacionUncheckedCreateNestedManyWithoutAlojamientoInput
    favoritedBy?: UsuarioUncheckedCreateNestedManyWithoutAlojamientosFavoritosInput
  }

  export type AlojamientoCreateOrConnectWithoutNotificacionesInput = {
    where: AlojamientoWhereUniqueInput
    create: XOR<AlojamientoCreateWithoutNotificacionesInput, AlojamientoUncheckedCreateWithoutNotificacionesInput>
  }

  export type ConversacionCreateWithoutNotificacionesInput = {
    createdAt?: Date | string
    ultimoMensajeId?: number | null
    estudianteVistoUltimo?: boolean
    propietarioVistoUltimo?: boolean
    esConversacionAdmin?: boolean
    alojamiento?: AlojamientoCreateNestedOneWithoutConversacionesInput
    estudiante: UsuarioCreateNestedOneWithoutEstudianteConversacionesInput
    propietario: UsuarioCreateNestedOneWithoutConversacionesComoPropietarioInput
    mensajes?: MensajeCreateNestedManyWithoutConversacionInput
  }

  export type ConversacionUncheckedCreateWithoutNotificacionesInput = {
    id?: number
    alojamientoId?: number | null
    createdAt?: Date | string
    estudianteId: number
    propietarioId: number
    ultimoMensajeId?: number | null
    estudianteVistoUltimo?: boolean
    propietarioVistoUltimo?: boolean
    esConversacionAdmin?: boolean
    mensajes?: MensajeUncheckedCreateNestedManyWithoutConversacionInput
  }

  export type ConversacionCreateOrConnectWithoutNotificacionesInput = {
    where: ConversacionWhereUniqueInput
    create: XOR<ConversacionCreateWithoutNotificacionesInput, ConversacionUncheckedCreateWithoutNotificacionesInput>
  }

  export type MensajeCreateWithoutNotificacionesInput = {
    contenido: string
    createdAt?: Date | string
    conversacion: ConversacionCreateNestedOneWithoutMensajesInput
    emisor: UsuarioCreateNestedOneWithoutMensajesRemitidosInput
  }

  export type MensajeUncheckedCreateWithoutNotificacionesInput = {
    id?: number
    contenido: string
    conversacionId: number
    createdAt?: Date | string
    emisorId: number
  }

  export type MensajeCreateOrConnectWithoutNotificacionesInput = {
    where: MensajeWhereUniqueInput
    create: XOR<MensajeCreateWithoutNotificacionesInput, MensajeUncheckedCreateWithoutNotificacionesInput>
  }

  export type UsuarioCreateWithoutNotificacionesInput = {
    nombre: string
    email: string
    password: string
    telefono?: string | null
    tipo: $Enums.TipoUsuario
    isEmailVerified?: boolean
    isSuspended?: boolean
    motivoSuspension?: string | null
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    alojamientos?: AlojamientoCreateNestedManyWithoutPropietarioInput
    estudianteConversaciones?: ConversacionCreateNestedManyWithoutEstudianteInput
    conversacionesComoPropietario?: ConversacionCreateNestedManyWithoutPropietarioInput
    mensajesRemitidos?: MensajeCreateNestedManyWithoutEmisorInput
    alojamientosFavoritos?: AlojamientoCreateNestedManyWithoutFavoritedByInput
  }

  export type UsuarioUncheckedCreateWithoutNotificacionesInput = {
    id?: number
    nombre: string
    email: string
    password: string
    telefono?: string | null
    tipo: $Enums.TipoUsuario
    isEmailVerified?: boolean
    isSuspended?: boolean
    motivoSuspension?: string | null
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    alojamientos?: AlojamientoUncheckedCreateNestedManyWithoutPropietarioInput
    estudianteConversaciones?: ConversacionUncheckedCreateNestedManyWithoutEstudianteInput
    conversacionesComoPropietario?: ConversacionUncheckedCreateNestedManyWithoutPropietarioInput
    mensajesRemitidos?: MensajeUncheckedCreateNestedManyWithoutEmisorInput
    alojamientosFavoritos?: AlojamientoUncheckedCreateNestedManyWithoutFavoritedByInput
  }

  export type UsuarioCreateOrConnectWithoutNotificacionesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutNotificacionesInput, UsuarioUncheckedCreateWithoutNotificacionesInput>
  }

  export type AlojamientoUpsertWithoutNotificacionesInput = {
    update: XOR<AlojamientoUpdateWithoutNotificacionesInput, AlojamientoUncheckedUpdateWithoutNotificacionesInput>
    create: XOR<AlojamientoCreateWithoutNotificacionesInput, AlojamientoUncheckedCreateWithoutNotificacionesInput>
    where?: AlojamientoWhereInput
  }

  export type AlojamientoUpdateToOneWithWhereWithoutNotificacionesInput = {
    where?: AlojamientoWhereInput
    data: XOR<AlojamientoUpdateWithoutNotificacionesInput, AlojamientoUncheckedUpdateWithoutNotificacionesInput>
  }

  export type AlojamientoUpdateWithoutNotificacionesInput = {
    slug?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    motivoRechazo?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    descripcion?: StringFieldUpdateOperationsInput | string
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    habitaciones?: IntFieldUpdateOperationsInput | number
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    dirigidoA?: StringFieldUpdateOperationsInput | string
    infoExtra?: StringFieldUpdateOperationsInput | string
    esDestacado?: BoolFieldUpdateOperationsInput | boolean
    tipoAlojamiento?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    provincia?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
    portal?: NullableStringFieldUpdateOperationsInput | string | null
    piso?: NullableStringFieldUpdateOperationsInput | string | null
    puerta?: NullableStringFieldUpdateOperationsInput | string | null
    propietario?: UsuarioUpdateOneRequiredWithoutAlojamientosNestedInput
    conversaciones?: ConversacionUpdateManyWithoutAlojamientoNestedInput
    favoritedBy?: UsuarioUpdateManyWithoutAlojamientosFavoritosNestedInput
  }

  export type AlojamientoUncheckedUpdateWithoutNotificacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    motivoRechazo?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    descripcion?: StringFieldUpdateOperationsInput | string
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    habitaciones?: IntFieldUpdateOperationsInput | number
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    dirigidoA?: StringFieldUpdateOperationsInput | string
    infoExtra?: StringFieldUpdateOperationsInput | string
    esDestacado?: BoolFieldUpdateOperationsInput | boolean
    tipoAlojamiento?: StringFieldUpdateOperationsInput | string
    managerUsuarioId?: IntFieldUpdateOperationsInput | number
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    provincia?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
    portal?: NullableStringFieldUpdateOperationsInput | string | null
    piso?: NullableStringFieldUpdateOperationsInput | string | null
    puerta?: NullableStringFieldUpdateOperationsInput | string | null
    conversaciones?: ConversacionUncheckedUpdateManyWithoutAlojamientoNestedInput
    favoritedBy?: UsuarioUncheckedUpdateManyWithoutAlojamientosFavoritosNestedInput
  }

  export type ConversacionUpsertWithoutNotificacionesInput = {
    update: XOR<ConversacionUpdateWithoutNotificacionesInput, ConversacionUncheckedUpdateWithoutNotificacionesInput>
    create: XOR<ConversacionCreateWithoutNotificacionesInput, ConversacionUncheckedCreateWithoutNotificacionesInput>
    where?: ConversacionWhereInput
  }

  export type ConversacionUpdateToOneWithWhereWithoutNotificacionesInput = {
    where?: ConversacionWhereInput
    data: XOR<ConversacionUpdateWithoutNotificacionesInput, ConversacionUncheckedUpdateWithoutNotificacionesInput>
  }

  export type ConversacionUpdateWithoutNotificacionesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoMensajeId?: NullableIntFieldUpdateOperationsInput | number | null
    estudianteVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    propietarioVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    esConversacionAdmin?: BoolFieldUpdateOperationsInput | boolean
    alojamiento?: AlojamientoUpdateOneWithoutConversacionesNestedInput
    estudiante?: UsuarioUpdateOneRequiredWithoutEstudianteConversacionesNestedInput
    propietario?: UsuarioUpdateOneRequiredWithoutConversacionesComoPropietarioNestedInput
    mensajes?: MensajeUpdateManyWithoutConversacionNestedInput
  }

  export type ConversacionUncheckedUpdateWithoutNotificacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    alojamientoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estudianteId?: IntFieldUpdateOperationsInput | number
    propietarioId?: IntFieldUpdateOperationsInput | number
    ultimoMensajeId?: NullableIntFieldUpdateOperationsInput | number | null
    estudianteVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    propietarioVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    esConversacionAdmin?: BoolFieldUpdateOperationsInput | boolean
    mensajes?: MensajeUncheckedUpdateManyWithoutConversacionNestedInput
  }

  export type MensajeUpsertWithoutNotificacionesInput = {
    update: XOR<MensajeUpdateWithoutNotificacionesInput, MensajeUncheckedUpdateWithoutNotificacionesInput>
    create: XOR<MensajeCreateWithoutNotificacionesInput, MensajeUncheckedCreateWithoutNotificacionesInput>
    where?: MensajeWhereInput
  }

  export type MensajeUpdateToOneWithWhereWithoutNotificacionesInput = {
    where?: MensajeWhereInput
    data: XOR<MensajeUpdateWithoutNotificacionesInput, MensajeUncheckedUpdateWithoutNotificacionesInput>
  }

  export type MensajeUpdateWithoutNotificacionesInput = {
    contenido?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversacion?: ConversacionUpdateOneRequiredWithoutMensajesNestedInput
    emisor?: UsuarioUpdateOneRequiredWithoutMensajesRemitidosNestedInput
  }

  export type MensajeUncheckedUpdateWithoutNotificacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
    conversacionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emisorId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioUpsertWithoutNotificacionesInput = {
    update: XOR<UsuarioUpdateWithoutNotificacionesInput, UsuarioUncheckedUpdateWithoutNotificacionesInput>
    create: XOR<UsuarioCreateWithoutNotificacionesInput, UsuarioUncheckedCreateWithoutNotificacionesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutNotificacionesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutNotificacionesInput, UsuarioUncheckedUpdateWithoutNotificacionesInput>
  }

  export type UsuarioUpdateWithoutNotificacionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    motivoSuspension?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alojamientos?: AlojamientoUpdateManyWithoutPropietarioNestedInput
    estudianteConversaciones?: ConversacionUpdateManyWithoutEstudianteNestedInput
    conversacionesComoPropietario?: ConversacionUpdateManyWithoutPropietarioNestedInput
    mensajesRemitidos?: MensajeUpdateManyWithoutEmisorNestedInput
    alojamientosFavoritos?: AlojamientoUpdateManyWithoutFavoritedByNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutNotificacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    motivoSuspension?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alojamientos?: AlojamientoUncheckedUpdateManyWithoutPropietarioNestedInput
    estudianteConversaciones?: ConversacionUncheckedUpdateManyWithoutEstudianteNestedInput
    conversacionesComoPropietario?: ConversacionUncheckedUpdateManyWithoutPropietarioNestedInput
    mensajesRemitidos?: MensajeUncheckedUpdateManyWithoutEmisorNestedInput
    alojamientosFavoritos?: AlojamientoUncheckedUpdateManyWithoutFavoritedByNestedInput
  }

  export type ConversacionCreateManyAlojamientoInput = {
    id?: number
    createdAt?: Date | string
    estudianteId: number
    propietarioId: number
    ultimoMensajeId?: number | null
    estudianteVistoUltimo?: boolean
    propietarioVistoUltimo?: boolean
    esConversacionAdmin?: boolean
  }

  export type NotificacionCreateManyAlojamientoInput = {
    id?: number
    tipo: $Enums.TipoNotificacion
    titulo: string
    descripcion: string
    isRead?: boolean
    createdAt?: Date | string
    usuarioId: number
    conversacionId?: number | null
    mensajeId?: number | null
  }

  export type ConversacionUpdateWithoutAlojamientoInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoMensajeId?: NullableIntFieldUpdateOperationsInput | number | null
    estudianteVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    propietarioVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    esConversacionAdmin?: BoolFieldUpdateOperationsInput | boolean
    estudiante?: UsuarioUpdateOneRequiredWithoutEstudianteConversacionesNestedInput
    propietario?: UsuarioUpdateOneRequiredWithoutConversacionesComoPropietarioNestedInput
    mensajes?: MensajeUpdateManyWithoutConversacionNestedInput
    notificaciones?: NotificacionUpdateManyWithoutConversacionNestedInput
  }

  export type ConversacionUncheckedUpdateWithoutAlojamientoInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estudianteId?: IntFieldUpdateOperationsInput | number
    propietarioId?: IntFieldUpdateOperationsInput | number
    ultimoMensajeId?: NullableIntFieldUpdateOperationsInput | number | null
    estudianteVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    propietarioVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    esConversacionAdmin?: BoolFieldUpdateOperationsInput | boolean
    mensajes?: MensajeUncheckedUpdateManyWithoutConversacionNestedInput
    notificaciones?: NotificacionUncheckedUpdateManyWithoutConversacionNestedInput
  }

  export type ConversacionUncheckedUpdateManyWithoutAlojamientoInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estudianteId?: IntFieldUpdateOperationsInput | number
    propietarioId?: IntFieldUpdateOperationsInput | number
    ultimoMensajeId?: NullableIntFieldUpdateOperationsInput | number | null
    estudianteVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    propietarioVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    esConversacionAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificacionUpdateWithoutAlojamientoInput = {
    tipo?: EnumTipoNotificacionFieldUpdateOperationsInput | $Enums.TipoNotificacion
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversacion?: ConversacionUpdateOneWithoutNotificacionesNestedInput
    mensaje?: MensajeUpdateOneWithoutNotificacionesNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutNotificacionesNestedInput
  }

  export type NotificacionUncheckedUpdateWithoutAlojamientoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoNotificacionFieldUpdateOperationsInput | $Enums.TipoNotificacion
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    conversacionId?: NullableIntFieldUpdateOperationsInput | number | null
    mensajeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotificacionUncheckedUpdateManyWithoutAlojamientoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoNotificacionFieldUpdateOperationsInput | $Enums.TipoNotificacion
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    conversacionId?: NullableIntFieldUpdateOperationsInput | number | null
    mensajeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsuarioUpdateWithoutAlojamientosFavoritosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    motivoSuspension?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alojamientos?: AlojamientoUpdateManyWithoutPropietarioNestedInput
    estudianteConversaciones?: ConversacionUpdateManyWithoutEstudianteNestedInput
    conversacionesComoPropietario?: ConversacionUpdateManyWithoutPropietarioNestedInput
    mensajesRemitidos?: MensajeUpdateManyWithoutEmisorNestedInput
    notificaciones?: NotificacionUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAlojamientosFavoritosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    motivoSuspension?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alojamientos?: AlojamientoUncheckedUpdateManyWithoutPropietarioNestedInput
    estudianteConversaciones?: ConversacionUncheckedUpdateManyWithoutEstudianteNestedInput
    conversacionesComoPropietario?: ConversacionUncheckedUpdateManyWithoutPropietarioNestedInput
    mensajesRemitidos?: MensajeUncheckedUpdateManyWithoutEmisorNestedInput
    notificaciones?: NotificacionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutAlojamientosFavoritosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    motivoSuspension?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeCreateManyConversacionInput = {
    id?: number
    contenido: string
    createdAt?: Date | string
    emisorId: number
  }

  export type NotificacionCreateManyConversacionInput = {
    id?: number
    tipo: $Enums.TipoNotificacion
    titulo: string
    descripcion: string
    isRead?: boolean
    createdAt?: Date | string
    usuarioId: number
    mensajeId?: number | null
    alojamientoId?: number | null
  }

  export type MensajeUpdateWithoutConversacionInput = {
    contenido?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emisor?: UsuarioUpdateOneRequiredWithoutMensajesRemitidosNestedInput
    notificaciones?: NotificacionUpdateManyWithoutMensajeNestedInput
  }

  export type MensajeUncheckedUpdateWithoutConversacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emisorId?: IntFieldUpdateOperationsInput | number
    notificaciones?: NotificacionUncheckedUpdateManyWithoutMensajeNestedInput
  }

  export type MensajeUncheckedUpdateManyWithoutConversacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emisorId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificacionUpdateWithoutConversacionInput = {
    tipo?: EnumTipoNotificacionFieldUpdateOperationsInput | $Enums.TipoNotificacion
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alojamiento?: AlojamientoUpdateOneWithoutNotificacionesNestedInput
    mensaje?: MensajeUpdateOneWithoutNotificacionesNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutNotificacionesNestedInput
  }

  export type NotificacionUncheckedUpdateWithoutConversacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoNotificacionFieldUpdateOperationsInput | $Enums.TipoNotificacion
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    mensajeId?: NullableIntFieldUpdateOperationsInput | number | null
    alojamientoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotificacionUncheckedUpdateManyWithoutConversacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoNotificacionFieldUpdateOperationsInput | $Enums.TipoNotificacion
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    mensajeId?: NullableIntFieldUpdateOperationsInput | number | null
    alojamientoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotificacionCreateManyMensajeInput = {
    id?: number
    tipo: $Enums.TipoNotificacion
    titulo: string
    descripcion: string
    isRead?: boolean
    createdAt?: Date | string
    usuarioId: number
    conversacionId?: number | null
    alojamientoId?: number | null
  }

  export type NotificacionUpdateWithoutMensajeInput = {
    tipo?: EnumTipoNotificacionFieldUpdateOperationsInput | $Enums.TipoNotificacion
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alojamiento?: AlojamientoUpdateOneWithoutNotificacionesNestedInput
    conversacion?: ConversacionUpdateOneWithoutNotificacionesNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutNotificacionesNestedInput
  }

  export type NotificacionUncheckedUpdateWithoutMensajeInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoNotificacionFieldUpdateOperationsInput | $Enums.TipoNotificacion
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    conversacionId?: NullableIntFieldUpdateOperationsInput | number | null
    alojamientoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotificacionUncheckedUpdateManyWithoutMensajeInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoNotificacionFieldUpdateOperationsInput | $Enums.TipoNotificacion
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    conversacionId?: NullableIntFieldUpdateOperationsInput | number | null
    alojamientoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AlojamientoCreateManyPropietarioInput = {
    id?: number
    slug: string
    estado?: string
    motivoRechazo?: string | null
    photoUrls?: AlojamientoCreatephotoUrlsInput | string[]
    postedDate?: Date | string
    aguaIncluido?: boolean
    descripcion: string
    electricidadIncluido?: boolean
    gasIncluido?: boolean
    habitaciones: number
    hayAireAcondicionado?: boolean
    hayAscensor?: boolean
    hayCalefaccion?: boolean
    hayGaraje?: boolean
    hayGas?: boolean
    hayGimnasio?: boolean
    hayHorno?: boolean
    hayInternet?: boolean
    hayLavadora?: boolean
    hayLavavajillas?: boolean
    hayMicroondas?: boolean
    hayMuebles?: boolean
    hayNevera?: boolean
    hayPiscina?: boolean
    hayPortero?: boolean
    haySecadora?: boolean
    hayTelefono?: boolean
    hayTelevision?: boolean
    hayTerraza?: boolean
    hayZonaComunitaria?: boolean
    internetIncluido?: boolean
    nombre: string
    precio: number
    superficie: number
    plazasLibres: number
    banos: number
    dirigidoA: string
    infoExtra: string
    esDestacado?: boolean
    tipoAlojamiento: string
    direccion?: string | null
    ciudad?: string | null
    provincia?: string | null
    pais?: string | null
    codigoPostal?: string | null
    portal?: string | null
    piso?: string | null
    puerta?: string | null
  }

  export type ConversacionCreateManyEstudianteInput = {
    id?: number
    alojamientoId?: number | null
    createdAt?: Date | string
    propietarioId: number
    ultimoMensajeId?: number | null
    estudianteVistoUltimo?: boolean
    propietarioVistoUltimo?: boolean
    esConversacionAdmin?: boolean
  }

  export type ConversacionCreateManyPropietarioInput = {
    id?: number
    alojamientoId?: number | null
    createdAt?: Date | string
    estudianteId: number
    ultimoMensajeId?: number | null
    estudianteVistoUltimo?: boolean
    propietarioVistoUltimo?: boolean
    esConversacionAdmin?: boolean
  }

  export type MensajeCreateManyEmisorInput = {
    id?: number
    contenido: string
    conversacionId: number
    createdAt?: Date | string
  }

  export type NotificacionCreateManyUsuarioInput = {
    id?: number
    tipo: $Enums.TipoNotificacion
    titulo: string
    descripcion: string
    isRead?: boolean
    createdAt?: Date | string
    conversacionId?: number | null
    mensajeId?: number | null
    alojamientoId?: number | null
  }

  export type AlojamientoUpdateWithoutPropietarioInput = {
    slug?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    motivoRechazo?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    descripcion?: StringFieldUpdateOperationsInput | string
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    habitaciones?: IntFieldUpdateOperationsInput | number
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    dirigidoA?: StringFieldUpdateOperationsInput | string
    infoExtra?: StringFieldUpdateOperationsInput | string
    esDestacado?: BoolFieldUpdateOperationsInput | boolean
    tipoAlojamiento?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    provincia?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
    portal?: NullableStringFieldUpdateOperationsInput | string | null
    piso?: NullableStringFieldUpdateOperationsInput | string | null
    puerta?: NullableStringFieldUpdateOperationsInput | string | null
    conversaciones?: ConversacionUpdateManyWithoutAlojamientoNestedInput
    notificaciones?: NotificacionUpdateManyWithoutAlojamientoNestedInput
    favoritedBy?: UsuarioUpdateManyWithoutAlojamientosFavoritosNestedInput
  }

  export type AlojamientoUncheckedUpdateWithoutPropietarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    motivoRechazo?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    descripcion?: StringFieldUpdateOperationsInput | string
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    habitaciones?: IntFieldUpdateOperationsInput | number
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    dirigidoA?: StringFieldUpdateOperationsInput | string
    infoExtra?: StringFieldUpdateOperationsInput | string
    esDestacado?: BoolFieldUpdateOperationsInput | boolean
    tipoAlojamiento?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    provincia?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
    portal?: NullableStringFieldUpdateOperationsInput | string | null
    piso?: NullableStringFieldUpdateOperationsInput | string | null
    puerta?: NullableStringFieldUpdateOperationsInput | string | null
    conversaciones?: ConversacionUncheckedUpdateManyWithoutAlojamientoNestedInput
    notificaciones?: NotificacionUncheckedUpdateManyWithoutAlojamientoNestedInput
    favoritedBy?: UsuarioUncheckedUpdateManyWithoutAlojamientosFavoritosNestedInput
  }

  export type AlojamientoUncheckedUpdateManyWithoutPropietarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    motivoRechazo?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    descripcion?: StringFieldUpdateOperationsInput | string
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    habitaciones?: IntFieldUpdateOperationsInput | number
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    dirigidoA?: StringFieldUpdateOperationsInput | string
    infoExtra?: StringFieldUpdateOperationsInput | string
    esDestacado?: BoolFieldUpdateOperationsInput | boolean
    tipoAlojamiento?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    provincia?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
    portal?: NullableStringFieldUpdateOperationsInput | string | null
    piso?: NullableStringFieldUpdateOperationsInput | string | null
    puerta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConversacionUpdateWithoutEstudianteInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoMensajeId?: NullableIntFieldUpdateOperationsInput | number | null
    estudianteVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    propietarioVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    esConversacionAdmin?: BoolFieldUpdateOperationsInput | boolean
    alojamiento?: AlojamientoUpdateOneWithoutConversacionesNestedInput
    propietario?: UsuarioUpdateOneRequiredWithoutConversacionesComoPropietarioNestedInput
    mensajes?: MensajeUpdateManyWithoutConversacionNestedInput
    notificaciones?: NotificacionUpdateManyWithoutConversacionNestedInput
  }

  export type ConversacionUncheckedUpdateWithoutEstudianteInput = {
    id?: IntFieldUpdateOperationsInput | number
    alojamientoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propietarioId?: IntFieldUpdateOperationsInput | number
    ultimoMensajeId?: NullableIntFieldUpdateOperationsInput | number | null
    estudianteVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    propietarioVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    esConversacionAdmin?: BoolFieldUpdateOperationsInput | boolean
    mensajes?: MensajeUncheckedUpdateManyWithoutConversacionNestedInput
    notificaciones?: NotificacionUncheckedUpdateManyWithoutConversacionNestedInput
  }

  export type ConversacionUncheckedUpdateManyWithoutEstudianteInput = {
    id?: IntFieldUpdateOperationsInput | number
    alojamientoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propietarioId?: IntFieldUpdateOperationsInput | number
    ultimoMensajeId?: NullableIntFieldUpdateOperationsInput | number | null
    estudianteVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    propietarioVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    esConversacionAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ConversacionUpdateWithoutPropietarioInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoMensajeId?: NullableIntFieldUpdateOperationsInput | number | null
    estudianteVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    propietarioVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    esConversacionAdmin?: BoolFieldUpdateOperationsInput | boolean
    alojamiento?: AlojamientoUpdateOneWithoutConversacionesNestedInput
    estudiante?: UsuarioUpdateOneRequiredWithoutEstudianteConversacionesNestedInput
    mensajes?: MensajeUpdateManyWithoutConversacionNestedInput
    notificaciones?: NotificacionUpdateManyWithoutConversacionNestedInput
  }

  export type ConversacionUncheckedUpdateWithoutPropietarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    alojamientoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estudianteId?: IntFieldUpdateOperationsInput | number
    ultimoMensajeId?: NullableIntFieldUpdateOperationsInput | number | null
    estudianteVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    propietarioVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    esConversacionAdmin?: BoolFieldUpdateOperationsInput | boolean
    mensajes?: MensajeUncheckedUpdateManyWithoutConversacionNestedInput
    notificaciones?: NotificacionUncheckedUpdateManyWithoutConversacionNestedInput
  }

  export type ConversacionUncheckedUpdateManyWithoutPropietarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    alojamientoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estudianteId?: IntFieldUpdateOperationsInput | number
    ultimoMensajeId?: NullableIntFieldUpdateOperationsInput | number | null
    estudianteVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    propietarioVistoUltimo?: BoolFieldUpdateOperationsInput | boolean
    esConversacionAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MensajeUpdateWithoutEmisorInput = {
    contenido?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversacion?: ConversacionUpdateOneRequiredWithoutMensajesNestedInput
    notificaciones?: NotificacionUpdateManyWithoutMensajeNestedInput
  }

  export type MensajeUncheckedUpdateWithoutEmisorInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
    conversacionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificaciones?: NotificacionUncheckedUpdateManyWithoutMensajeNestedInput
  }

  export type MensajeUncheckedUpdateManyWithoutEmisorInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
    conversacionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacionUpdateWithoutUsuarioInput = {
    tipo?: EnumTipoNotificacionFieldUpdateOperationsInput | $Enums.TipoNotificacion
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alojamiento?: AlojamientoUpdateOneWithoutNotificacionesNestedInput
    conversacion?: ConversacionUpdateOneWithoutNotificacionesNestedInput
    mensaje?: MensajeUpdateOneWithoutNotificacionesNestedInput
  }

  export type NotificacionUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoNotificacionFieldUpdateOperationsInput | $Enums.TipoNotificacion
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversacionId?: NullableIntFieldUpdateOperationsInput | number | null
    mensajeId?: NullableIntFieldUpdateOperationsInput | number | null
    alojamientoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotificacionUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoNotificacionFieldUpdateOperationsInput | $Enums.TipoNotificacion
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversacionId?: NullableIntFieldUpdateOperationsInput | number | null
    mensajeId?: NullableIntFieldUpdateOperationsInput | number | null
    alojamientoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AlojamientoUpdateWithoutFavoritedByInput = {
    slug?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    motivoRechazo?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    descripcion?: StringFieldUpdateOperationsInput | string
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    habitaciones?: IntFieldUpdateOperationsInput | number
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    dirigidoA?: StringFieldUpdateOperationsInput | string
    infoExtra?: StringFieldUpdateOperationsInput | string
    esDestacado?: BoolFieldUpdateOperationsInput | boolean
    tipoAlojamiento?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    provincia?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
    portal?: NullableStringFieldUpdateOperationsInput | string | null
    piso?: NullableStringFieldUpdateOperationsInput | string | null
    puerta?: NullableStringFieldUpdateOperationsInput | string | null
    propietario?: UsuarioUpdateOneRequiredWithoutAlojamientosNestedInput
    conversaciones?: ConversacionUpdateManyWithoutAlojamientoNestedInput
    notificaciones?: NotificacionUpdateManyWithoutAlojamientoNestedInput
  }

  export type AlojamientoUncheckedUpdateWithoutFavoritedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    motivoRechazo?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    descripcion?: StringFieldUpdateOperationsInput | string
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    habitaciones?: IntFieldUpdateOperationsInput | number
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    dirigidoA?: StringFieldUpdateOperationsInput | string
    infoExtra?: StringFieldUpdateOperationsInput | string
    esDestacado?: BoolFieldUpdateOperationsInput | boolean
    tipoAlojamiento?: StringFieldUpdateOperationsInput | string
    managerUsuarioId?: IntFieldUpdateOperationsInput | number
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    provincia?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
    portal?: NullableStringFieldUpdateOperationsInput | string | null
    piso?: NullableStringFieldUpdateOperationsInput | string | null
    puerta?: NullableStringFieldUpdateOperationsInput | string | null
    conversaciones?: ConversacionUncheckedUpdateManyWithoutAlojamientoNestedInput
    notificaciones?: NotificacionUncheckedUpdateManyWithoutAlojamientoNestedInput
  }

  export type AlojamientoUncheckedUpdateManyWithoutFavoritedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    motivoRechazo?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: AlojamientoUpdatephotoUrlsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    aguaIncluido?: BoolFieldUpdateOperationsInput | boolean
    descripcion?: StringFieldUpdateOperationsInput | string
    electricidadIncluido?: BoolFieldUpdateOperationsInput | boolean
    gasIncluido?: BoolFieldUpdateOperationsInput | boolean
    habitaciones?: IntFieldUpdateOperationsInput | number
    hayAireAcondicionado?: BoolFieldUpdateOperationsInput | boolean
    hayAscensor?: BoolFieldUpdateOperationsInput | boolean
    hayCalefaccion?: BoolFieldUpdateOperationsInput | boolean
    hayGaraje?: BoolFieldUpdateOperationsInput | boolean
    hayGas?: BoolFieldUpdateOperationsInput | boolean
    hayGimnasio?: BoolFieldUpdateOperationsInput | boolean
    hayHorno?: BoolFieldUpdateOperationsInput | boolean
    hayInternet?: BoolFieldUpdateOperationsInput | boolean
    hayLavadora?: BoolFieldUpdateOperationsInput | boolean
    hayLavavajillas?: BoolFieldUpdateOperationsInput | boolean
    hayMicroondas?: BoolFieldUpdateOperationsInput | boolean
    hayMuebles?: BoolFieldUpdateOperationsInput | boolean
    hayNevera?: BoolFieldUpdateOperationsInput | boolean
    hayPiscina?: BoolFieldUpdateOperationsInput | boolean
    hayPortero?: BoolFieldUpdateOperationsInput | boolean
    haySecadora?: BoolFieldUpdateOperationsInput | boolean
    hayTelefono?: BoolFieldUpdateOperationsInput | boolean
    hayTelevision?: BoolFieldUpdateOperationsInput | boolean
    hayTerraza?: BoolFieldUpdateOperationsInput | boolean
    hayZonaComunitaria?: BoolFieldUpdateOperationsInput | boolean
    internetIncluido?: BoolFieldUpdateOperationsInput | boolean
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    superficie?: IntFieldUpdateOperationsInput | number
    plazasLibres?: IntFieldUpdateOperationsInput | number
    banos?: FloatFieldUpdateOperationsInput | number
    dirigidoA?: StringFieldUpdateOperationsInput | string
    infoExtra?: StringFieldUpdateOperationsInput | string
    esDestacado?: BoolFieldUpdateOperationsInput | boolean
    tipoAlojamiento?: StringFieldUpdateOperationsInput | string
    managerUsuarioId?: IntFieldUpdateOperationsInput | number
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    provincia?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
    portal?: NullableStringFieldUpdateOperationsInput | string | null
    piso?: NullableStringFieldUpdateOperationsInput | string | null
    puerta?: NullableStringFieldUpdateOperationsInput | string | null
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