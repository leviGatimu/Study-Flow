
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectDoc
 * 
 */
export type ProjectDoc = $Result.DefaultSelection<Prisma.$ProjectDocPayload>
/**
 * Model ChatSession
 * 
 */
export type ChatSession = $Result.DefaultSelection<Prisma.$ChatSessionPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>
/**
 * Model ScheduleTemplate
 * 
 */
export type ScheduleTemplate = $Result.DefaultSelection<Prisma.$ScheduleTemplatePayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model MarkedDay
 * 
 */
export type MarkedDay = $Result.DefaultSelection<Prisma.$MarkedDayPayload>
/**
 * Model UserProgress
 * 
 */
export type UserProgress = $Result.DefaultSelection<Prisma.$UserProgressPayload>
/**
 * Model Resource
 * 
 */
export type Resource = $Result.DefaultSelection<Prisma.$ResourcePayload>
/**
 * Model ExamEvent
 * 
 */
export type ExamEvent = $Result.DefaultSelection<Prisma.$ExamEventPayload>
/**
 * Model WeeklySummary
 * 
 */
export type WeeklySummary = $Result.DefaultSelection<Prisma.$WeeklySummaryPayload>
/**
 * Model MasteryItem
 * 
 */
export type MasteryItem = $Result.DefaultSelection<Prisma.$MasteryItemPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs>;

  /**
   * `prisma.projectDoc`: Exposes CRUD operations for the **ProjectDoc** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectDocs
    * const projectDocs = await prisma.projectDoc.findMany()
    * ```
    */
  get projectDoc(): Prisma.ProjectDocDelegate<ExtArgs>;

  /**
   * `prisma.chatSession`: Exposes CRUD operations for the **ChatSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatSessions
    * const chatSessions = await prisma.chatSession.findMany()
    * ```
    */
  get chatSession(): Prisma.ChatSessionDelegate<ExtArgs>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs>;

  /**
   * `prisma.scheduleTemplate`: Exposes CRUD operations for the **ScheduleTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScheduleTemplates
    * const scheduleTemplates = await prisma.scheduleTemplate.findMany()
    * ```
    */
  get scheduleTemplate(): Prisma.ScheduleTemplateDelegate<ExtArgs>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs>;

  /**
   * `prisma.markedDay`: Exposes CRUD operations for the **MarkedDay** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarkedDays
    * const markedDays = await prisma.markedDay.findMany()
    * ```
    */
  get markedDay(): Prisma.MarkedDayDelegate<ExtArgs>;

  /**
   * `prisma.userProgress`: Exposes CRUD operations for the **UserProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProgresses
    * const userProgresses = await prisma.userProgress.findMany()
    * ```
    */
  get userProgress(): Prisma.UserProgressDelegate<ExtArgs>;

  /**
   * `prisma.resource`: Exposes CRUD operations for the **Resource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resources
    * const resources = await prisma.resource.findMany()
    * ```
    */
  get resource(): Prisma.ResourceDelegate<ExtArgs>;

  /**
   * `prisma.examEvent`: Exposes CRUD operations for the **ExamEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExamEvents
    * const examEvents = await prisma.examEvent.findMany()
    * ```
    */
  get examEvent(): Prisma.ExamEventDelegate<ExtArgs>;

  /**
   * `prisma.weeklySummary`: Exposes CRUD operations for the **WeeklySummary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeeklySummaries
    * const weeklySummaries = await prisma.weeklySummary.findMany()
    * ```
    */
  get weeklySummary(): Prisma.WeeklySummaryDelegate<ExtArgs>;

  /**
   * `prisma.masteryItem`: Exposes CRUD operations for the **MasteryItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MasteryItems
    * const masteryItems = await prisma.masteryItem.findMany()
    * ```
    */
  get masteryItem(): Prisma.MasteryItemDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
    User: 'User',
    Project: 'Project',
    ProjectDoc: 'ProjectDoc',
    ChatSession: 'ChatSession',
    ChatMessage: 'ChatMessage',
    ScheduleTemplate: 'ScheduleTemplate',
    Task: 'Task',
    MarkedDay: 'MarkedDay',
    UserProgress: 'UserProgress',
    Resource: 'Resource',
    ExamEvent: 'ExamEvent',
    WeeklySummary: 'WeeklySummary',
    MasteryItem: 'MasteryItem'
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
      modelProps: "user" | "project" | "projectDoc" | "chatSession" | "chatMessage" | "scheduleTemplate" | "task" | "markedDay" | "userProgress" | "resource" | "examEvent" | "weeklySummary" | "masteryItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectDoc: {
        payload: Prisma.$ProjectDocPayload<ExtArgs>
        fields: Prisma.ProjectDocFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectDocFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDocPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectDocFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDocPayload>
          }
          findFirst: {
            args: Prisma.ProjectDocFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDocPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectDocFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDocPayload>
          }
          findMany: {
            args: Prisma.ProjectDocFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDocPayload>[]
          }
          create: {
            args: Prisma.ProjectDocCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDocPayload>
          }
          createMany: {
            args: Prisma.ProjectDocCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectDocCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDocPayload>[]
          }
          delete: {
            args: Prisma.ProjectDocDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDocPayload>
          }
          update: {
            args: Prisma.ProjectDocUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDocPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDocDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectDocUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectDocUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDocPayload>
          }
          aggregate: {
            args: Prisma.ProjectDocAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectDoc>
          }
          groupBy: {
            args: Prisma.ProjectDocGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectDocGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectDocCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectDocCountAggregateOutputType> | number
          }
        }
      }
      ChatSession: {
        payload: Prisma.$ChatSessionPayload<ExtArgs>
        fields: Prisma.ChatSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          findFirst: {
            args: Prisma.ChatSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          findMany: {
            args: Prisma.ChatSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          create: {
            args: Prisma.ChatSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          createMany: {
            args: Prisma.ChatSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          delete: {
            args: Prisma.ChatSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          update: {
            args: Prisma.ChatSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          deleteMany: {
            args: Prisma.ChatSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          aggregate: {
            args: Prisma.ChatSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatSession>
          }
          groupBy: {
            args: Prisma.ChatSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ChatSessionCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
      ScheduleTemplate: {
        payload: Prisma.$ScheduleTemplatePayload<ExtArgs>
        fields: Prisma.ScheduleTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleTemplatePayload>
          }
          findFirst: {
            args: Prisma.ScheduleTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleTemplatePayload>
          }
          findMany: {
            args: Prisma.ScheduleTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleTemplatePayload>[]
          }
          create: {
            args: Prisma.ScheduleTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleTemplatePayload>
          }
          createMany: {
            args: Prisma.ScheduleTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleTemplatePayload>[]
          }
          delete: {
            args: Prisma.ScheduleTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleTemplatePayload>
          }
          update: {
            args: Prisma.ScheduleTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleTemplatePayload>
          }
          deleteMany: {
            args: Prisma.ScheduleTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ScheduleTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleTemplatePayload>
          }
          aggregate: {
            args: Prisma.ScheduleTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScheduleTemplate>
          }
          groupBy: {
            args: Prisma.ScheduleTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleTemplateCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      MarkedDay: {
        payload: Prisma.$MarkedDayPayload<ExtArgs>
        fields: Prisma.MarkedDayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarkedDayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkedDayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarkedDayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkedDayPayload>
          }
          findFirst: {
            args: Prisma.MarkedDayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkedDayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarkedDayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkedDayPayload>
          }
          findMany: {
            args: Prisma.MarkedDayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkedDayPayload>[]
          }
          create: {
            args: Prisma.MarkedDayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkedDayPayload>
          }
          createMany: {
            args: Prisma.MarkedDayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarkedDayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkedDayPayload>[]
          }
          delete: {
            args: Prisma.MarkedDayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkedDayPayload>
          }
          update: {
            args: Prisma.MarkedDayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkedDayPayload>
          }
          deleteMany: {
            args: Prisma.MarkedDayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarkedDayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MarkedDayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkedDayPayload>
          }
          aggregate: {
            args: Prisma.MarkedDayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarkedDay>
          }
          groupBy: {
            args: Prisma.MarkedDayGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarkedDayGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarkedDayCountArgs<ExtArgs>
            result: $Utils.Optional<MarkedDayCountAggregateOutputType> | number
          }
        }
      }
      UserProgress: {
        payload: Prisma.$UserProgressPayload<ExtArgs>
        fields: Prisma.UserProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgressPayload>
          }
          findFirst: {
            args: Prisma.UserProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgressPayload>
          }
          findMany: {
            args: Prisma.UserProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgressPayload>[]
          }
          create: {
            args: Prisma.UserProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgressPayload>
          }
          createMany: {
            args: Prisma.UserProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgressPayload>[]
          }
          delete: {
            args: Prisma.UserProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgressPayload>
          }
          update: {
            args: Prisma.UserProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgressPayload>
          }
          deleteMany: {
            args: Prisma.UserProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgressPayload>
          }
          aggregate: {
            args: Prisma.UserProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProgress>
          }
          groupBy: {
            args: Prisma.UserProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProgressCountArgs<ExtArgs>
            result: $Utils.Optional<UserProgressCountAggregateOutputType> | number
          }
        }
      }
      Resource: {
        payload: Prisma.$ResourcePayload<ExtArgs>
        fields: Prisma.ResourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          findFirst: {
            args: Prisma.ResourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          findMany: {
            args: Prisma.ResourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          create: {
            args: Prisma.ResourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          createMany: {
            args: Prisma.ResourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          delete: {
            args: Prisma.ResourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          update: {
            args: Prisma.ResourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          deleteMany: {
            args: Prisma.ResourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          aggregate: {
            args: Prisma.ResourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResource>
          }
          groupBy: {
            args: Prisma.ResourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResourceCountArgs<ExtArgs>
            result: $Utils.Optional<ResourceCountAggregateOutputType> | number
          }
        }
      }
      ExamEvent: {
        payload: Prisma.$ExamEventPayload<ExtArgs>
        fields: Prisma.ExamEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamEventPayload>
          }
          findFirst: {
            args: Prisma.ExamEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamEventPayload>
          }
          findMany: {
            args: Prisma.ExamEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamEventPayload>[]
          }
          create: {
            args: Prisma.ExamEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamEventPayload>
          }
          createMany: {
            args: Prisma.ExamEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamEventPayload>[]
          }
          delete: {
            args: Prisma.ExamEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamEventPayload>
          }
          update: {
            args: Prisma.ExamEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamEventPayload>
          }
          deleteMany: {
            args: Prisma.ExamEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExamEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamEventPayload>
          }
          aggregate: {
            args: Prisma.ExamEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExamEvent>
          }
          groupBy: {
            args: Prisma.ExamEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamEventCountArgs<ExtArgs>
            result: $Utils.Optional<ExamEventCountAggregateOutputType> | number
          }
        }
      }
      WeeklySummary: {
        payload: Prisma.$WeeklySummaryPayload<ExtArgs>
        fields: Prisma.WeeklySummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeeklySummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeeklySummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>
          }
          findFirst: {
            args: Prisma.WeeklySummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeeklySummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>
          }
          findMany: {
            args: Prisma.WeeklySummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>[]
          }
          create: {
            args: Prisma.WeeklySummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>
          }
          createMany: {
            args: Prisma.WeeklySummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeeklySummaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>[]
          }
          delete: {
            args: Prisma.WeeklySummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>
          }
          update: {
            args: Prisma.WeeklySummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>
          }
          deleteMany: {
            args: Prisma.WeeklySummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeeklySummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WeeklySummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>
          }
          aggregate: {
            args: Prisma.WeeklySummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeeklySummary>
          }
          groupBy: {
            args: Prisma.WeeklySummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeeklySummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeeklySummaryCountArgs<ExtArgs>
            result: $Utils.Optional<WeeklySummaryCountAggregateOutputType> | number
          }
        }
      }
      MasteryItem: {
        payload: Prisma.$MasteryItemPayload<ExtArgs>
        fields: Prisma.MasteryItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MasteryItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasteryItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MasteryItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasteryItemPayload>
          }
          findFirst: {
            args: Prisma.MasteryItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasteryItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MasteryItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasteryItemPayload>
          }
          findMany: {
            args: Prisma.MasteryItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasteryItemPayload>[]
          }
          create: {
            args: Prisma.MasteryItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasteryItemPayload>
          }
          createMany: {
            args: Prisma.MasteryItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MasteryItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasteryItemPayload>[]
          }
          delete: {
            args: Prisma.MasteryItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasteryItemPayload>
          }
          update: {
            args: Prisma.MasteryItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasteryItemPayload>
          }
          deleteMany: {
            args: Prisma.MasteryItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MasteryItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MasteryItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasteryItemPayload>
          }
          aggregate: {
            args: Prisma.MasteryItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMasteryItem>
          }
          groupBy: {
            args: Prisma.MasteryItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MasteryItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MasteryItemCountArgs<ExtArgs>
            result: $Utils.Optional<MasteryItemCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    templates: number
    tasks: number
    resources: number
    examEvents: number
    weeklySummaries: number
    masteryItems: number
    markedDays: number
    chatSessions: number
    projects: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templates?: boolean | UserCountOutputTypeCountTemplatesArgs
    tasks?: boolean | UserCountOutputTypeCountTasksArgs
    resources?: boolean | UserCountOutputTypeCountResourcesArgs
    examEvents?: boolean | UserCountOutputTypeCountExamEventsArgs
    weeklySummaries?: boolean | UserCountOutputTypeCountWeeklySummariesArgs
    masteryItems?: boolean | UserCountOutputTypeCountMasteryItemsArgs
    markedDays?: boolean | UserCountOutputTypeCountMarkedDaysArgs
    chatSessions?: boolean | UserCountOutputTypeCountChatSessionsArgs
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleTemplateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExamEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamEventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWeeklySummariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklySummaryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMasteryItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasteryItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMarkedDaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarkedDayWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    docs: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    docs?: boolean | ProjectCountOutputTypeCountDocsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountDocsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectDocWhereInput
  }


  /**
   * Count Type ChatSessionCountOutputType
   */

  export type ChatSessionCountOutputType = {
    messages: number
  }

  export type ChatSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatSessionCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatSessionCountOutputType without action
   */
  export type ChatSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSessionCountOutputType
     */
    select?: ChatSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatSessionCountOutputType without action
   */
  export type ChatSessionCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }


  /**
   * Count Type ScheduleTemplateCountOutputType
   */

  export type ScheduleTemplateCountOutputType = {
    tasks: number
  }

  export type ScheduleTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | ScheduleTemplateCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * ScheduleTemplateCountOutputType without action
   */
  export type ScheduleTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleTemplateCountOutputType
     */
    select?: ScheduleTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScheduleTemplateCountOutputType without action
   */
  export type ScheduleTemplateCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    passwordHash: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    passwordHash: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    passwordHash: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    passwordHash: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    templates?: boolean | User$templatesArgs<ExtArgs>
    tasks?: boolean | User$tasksArgs<ExtArgs>
    resources?: boolean | User$resourcesArgs<ExtArgs>
    examEvents?: boolean | User$examEventsArgs<ExtArgs>
    weeklySummaries?: boolean | User$weeklySummariesArgs<ExtArgs>
    masteryItems?: boolean | User$masteryItemsArgs<ExtArgs>
    markedDays?: boolean | User$markedDaysArgs<ExtArgs>
    progress?: boolean | User$progressArgs<ExtArgs>
    chatSessions?: boolean | User$chatSessionsArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    createdAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templates?: boolean | User$templatesArgs<ExtArgs>
    tasks?: boolean | User$tasksArgs<ExtArgs>
    resources?: boolean | User$resourcesArgs<ExtArgs>
    examEvents?: boolean | User$examEventsArgs<ExtArgs>
    weeklySummaries?: boolean | User$weeklySummariesArgs<ExtArgs>
    masteryItems?: boolean | User$masteryItemsArgs<ExtArgs>
    markedDays?: boolean | User$markedDaysArgs<ExtArgs>
    progress?: boolean | User$progressArgs<ExtArgs>
    chatSessions?: boolean | User$chatSessionsArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      templates: Prisma.$ScheduleTemplatePayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      resources: Prisma.$ResourcePayload<ExtArgs>[]
      examEvents: Prisma.$ExamEventPayload<ExtArgs>[]
      weeklySummaries: Prisma.$WeeklySummaryPayload<ExtArgs>[]
      masteryItems: Prisma.$MasteryItemPayload<ExtArgs>[]
      markedDays: Prisma.$MarkedDayPayload<ExtArgs>[]
      progress: Prisma.$UserProgressPayload<ExtArgs> | null
      chatSessions: Prisma.$ChatSessionPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      passwordHash: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    templates<T extends User$templatesArgs<ExtArgs> = {}>(args?: Subset<T, User$templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleTemplatePayload<ExtArgs>, T, "findMany"> | Null>
    tasks<T extends User$tasksArgs<ExtArgs> = {}>(args?: Subset<T, User$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
    resources<T extends User$resourcesArgs<ExtArgs> = {}>(args?: Subset<T, User$resourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findMany"> | Null>
    examEvents<T extends User$examEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$examEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamEventPayload<ExtArgs>, T, "findMany"> | Null>
    weeklySummaries<T extends User$weeklySummariesArgs<ExtArgs> = {}>(args?: Subset<T, User$weeklySummariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "findMany"> | Null>
    masteryItems<T extends User$masteryItemsArgs<ExtArgs> = {}>(args?: Subset<T, User$masteryItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasteryItemPayload<ExtArgs>, T, "findMany"> | Null>
    markedDays<T extends User$markedDaysArgs<ExtArgs> = {}>(args?: Subset<T, User$markedDaysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkedDayPayload<ExtArgs>, T, "findMany"> | Null>
    progress<T extends User$progressArgs<ExtArgs> = {}>(args?: Subset<T, User$progressArgs<ExtArgs>>): Prisma__UserProgressClient<$Result.GetResult<Prisma.$UserProgressPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    chatSessions<T extends User$chatSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findMany"> | Null>
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.templates
   */
  export type User$templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleTemplate
     */
    select?: ScheduleTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleTemplateInclude<ExtArgs> | null
    where?: ScheduleTemplateWhereInput
    orderBy?: ScheduleTemplateOrderByWithRelationInput | ScheduleTemplateOrderByWithRelationInput[]
    cursor?: ScheduleTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleTemplateScalarFieldEnum | ScheduleTemplateScalarFieldEnum[]
  }

  /**
   * User.tasks
   */
  export type User$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.resources
   */
  export type User$resourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    where?: ResourceWhereInput
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    cursor?: ResourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * User.examEvents
   */
  export type User$examEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamEvent
     */
    select?: ExamEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamEventInclude<ExtArgs> | null
    where?: ExamEventWhereInput
    orderBy?: ExamEventOrderByWithRelationInput | ExamEventOrderByWithRelationInput[]
    cursor?: ExamEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamEventScalarFieldEnum | ExamEventScalarFieldEnum[]
  }

  /**
   * User.weeklySummaries
   */
  export type User$weeklySummariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    where?: WeeklySummaryWhereInput
    orderBy?: WeeklySummaryOrderByWithRelationInput | WeeklySummaryOrderByWithRelationInput[]
    cursor?: WeeklySummaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeeklySummaryScalarFieldEnum | WeeklySummaryScalarFieldEnum[]
  }

  /**
   * User.masteryItems
   */
  export type User$masteryItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasteryItem
     */
    select?: MasteryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasteryItemInclude<ExtArgs> | null
    where?: MasteryItemWhereInput
    orderBy?: MasteryItemOrderByWithRelationInput | MasteryItemOrderByWithRelationInput[]
    cursor?: MasteryItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MasteryItemScalarFieldEnum | MasteryItemScalarFieldEnum[]
  }

  /**
   * User.markedDays
   */
  export type User$markedDaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarkedDay
     */
    select?: MarkedDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkedDayInclude<ExtArgs> | null
    where?: MarkedDayWhereInput
    orderBy?: MarkedDayOrderByWithRelationInput | MarkedDayOrderByWithRelationInput[]
    cursor?: MarkedDayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarkedDayScalarFieldEnum | MarkedDayScalarFieldEnum[]
  }

  /**
   * User.progress
   */
  export type User$progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null
    where?: UserProgressWhereInput
  }

  /**
   * User.chatSessions
   */
  export type User$chatSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    where?: ChatSessionWhereInput
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    cursor?: ChatSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    progress: number | null
  }

  export type ProjectSumAggregateOutputType = {
    progress: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    status: string | null
    progress: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    status: string | null
    progress: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    status: number
    progress: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    progress?: true
  }

  export type ProjectSumAggregateInputType = {
    progress?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    status?: true
    progress?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    status?: true
    progress?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    status?: true
    progress?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    userId: string
    title: string
    description: string | null
    status: string
    progress: number
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    progress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    docs?: boolean | Project$docsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    progress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    progress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    docs?: boolean | Project$docsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      docs: Prisma.$ProjectDocPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      description: string | null
      status: string
      progress: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    docs<T extends Project$docsArgs<ExtArgs> = {}>(args?: Subset<T, Project$docsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDocPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Project model
   */ 
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly userId: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly status: FieldRef<"Project", 'String'>
    readonly progress: FieldRef<"Project", 'Int'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
  }

  /**
   * Project.docs
   */
  export type Project$docsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDoc
     */
    select?: ProjectDocSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocInclude<ExtArgs> | null
    where?: ProjectDocWhereInput
    orderBy?: ProjectDocOrderByWithRelationInput | ProjectDocOrderByWithRelationInput[]
    cursor?: ProjectDocWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectDocScalarFieldEnum | ProjectDocScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ProjectDoc
   */

  export type AggregateProjectDoc = {
    _count: ProjectDocCountAggregateOutputType | null
    _min: ProjectDocMinAggregateOutputType | null
    _max: ProjectDocMaxAggregateOutputType | null
  }

  export type ProjectDocMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectDocMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectDocCountAggregateOutputType = {
    id: number
    projectId: number
    title: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectDocMinAggregateInputType = {
    id?: true
    projectId?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectDocMaxAggregateInputType = {
    id?: true
    projectId?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectDocCountAggregateInputType = {
    id?: true
    projectId?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectDocAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectDoc to aggregate.
     */
    where?: ProjectDocWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDocs to fetch.
     */
    orderBy?: ProjectDocOrderByWithRelationInput | ProjectDocOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectDocWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDocs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDocs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectDocs
    **/
    _count?: true | ProjectDocCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectDocMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectDocMaxAggregateInputType
  }

  export type GetProjectDocAggregateType<T extends ProjectDocAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectDoc]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectDoc[P]>
      : GetScalarType<T[P], AggregateProjectDoc[P]>
  }




  export type ProjectDocGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectDocWhereInput
    orderBy?: ProjectDocOrderByWithAggregationInput | ProjectDocOrderByWithAggregationInput[]
    by: ProjectDocScalarFieldEnum[] | ProjectDocScalarFieldEnum
    having?: ProjectDocScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectDocCountAggregateInputType | true
    _min?: ProjectDocMinAggregateInputType
    _max?: ProjectDocMaxAggregateInputType
  }

  export type ProjectDocGroupByOutputType = {
    id: string
    projectId: string
    title: string
    content: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectDocCountAggregateOutputType | null
    _min: ProjectDocMinAggregateOutputType | null
    _max: ProjectDocMaxAggregateOutputType | null
  }

  type GetProjectDocGroupByPayload<T extends ProjectDocGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectDocGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectDocGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectDocGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectDocGroupByOutputType[P]>
        }
      >
    >


  export type ProjectDocSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectDoc"]>

  export type ProjectDocSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectDoc"]>

  export type ProjectDocSelectScalar = {
    id?: boolean
    projectId?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectDocInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectDocIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectDocPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectDoc"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      title: string
      content: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["projectDoc"]>
    composites: {}
  }

  type ProjectDocGetPayload<S extends boolean | null | undefined | ProjectDocDefaultArgs> = $Result.GetResult<Prisma.$ProjectDocPayload, S>

  type ProjectDocCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectDocFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectDocCountAggregateInputType | true
    }

  export interface ProjectDocDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectDoc'], meta: { name: 'ProjectDoc' } }
    /**
     * Find zero or one ProjectDoc that matches the filter.
     * @param {ProjectDocFindUniqueArgs} args - Arguments to find a ProjectDoc
     * @example
     * // Get one ProjectDoc
     * const projectDoc = await prisma.projectDoc.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectDocFindUniqueArgs>(args: SelectSubset<T, ProjectDocFindUniqueArgs<ExtArgs>>): Prisma__ProjectDocClient<$Result.GetResult<Prisma.$ProjectDocPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProjectDoc that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectDocFindUniqueOrThrowArgs} args - Arguments to find a ProjectDoc
     * @example
     * // Get one ProjectDoc
     * const projectDoc = await prisma.projectDoc.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectDocFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectDocFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectDocClient<$Result.GetResult<Prisma.$ProjectDocPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProjectDoc that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDocFindFirstArgs} args - Arguments to find a ProjectDoc
     * @example
     * // Get one ProjectDoc
     * const projectDoc = await prisma.projectDoc.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectDocFindFirstArgs>(args?: SelectSubset<T, ProjectDocFindFirstArgs<ExtArgs>>): Prisma__ProjectDocClient<$Result.GetResult<Prisma.$ProjectDocPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProjectDoc that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDocFindFirstOrThrowArgs} args - Arguments to find a ProjectDoc
     * @example
     * // Get one ProjectDoc
     * const projectDoc = await prisma.projectDoc.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectDocFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectDocFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectDocClient<$Result.GetResult<Prisma.$ProjectDocPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProjectDocs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDocFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectDocs
     * const projectDocs = await prisma.projectDoc.findMany()
     * 
     * // Get first 10 ProjectDocs
     * const projectDocs = await prisma.projectDoc.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectDocWithIdOnly = await prisma.projectDoc.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectDocFindManyArgs>(args?: SelectSubset<T, ProjectDocFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDocPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProjectDoc.
     * @param {ProjectDocCreateArgs} args - Arguments to create a ProjectDoc.
     * @example
     * // Create one ProjectDoc
     * const ProjectDoc = await prisma.projectDoc.create({
     *   data: {
     *     // ... data to create a ProjectDoc
     *   }
     * })
     * 
     */
    create<T extends ProjectDocCreateArgs>(args: SelectSubset<T, ProjectDocCreateArgs<ExtArgs>>): Prisma__ProjectDocClient<$Result.GetResult<Prisma.$ProjectDocPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProjectDocs.
     * @param {ProjectDocCreateManyArgs} args - Arguments to create many ProjectDocs.
     * @example
     * // Create many ProjectDocs
     * const projectDoc = await prisma.projectDoc.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectDocCreateManyArgs>(args?: SelectSubset<T, ProjectDocCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectDocs and returns the data saved in the database.
     * @param {ProjectDocCreateManyAndReturnArgs} args - Arguments to create many ProjectDocs.
     * @example
     * // Create many ProjectDocs
     * const projectDoc = await prisma.projectDoc.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectDocs and only return the `id`
     * const projectDocWithIdOnly = await prisma.projectDoc.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectDocCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectDocCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDocPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProjectDoc.
     * @param {ProjectDocDeleteArgs} args - Arguments to delete one ProjectDoc.
     * @example
     * // Delete one ProjectDoc
     * const ProjectDoc = await prisma.projectDoc.delete({
     *   where: {
     *     // ... filter to delete one ProjectDoc
     *   }
     * })
     * 
     */
    delete<T extends ProjectDocDeleteArgs>(args: SelectSubset<T, ProjectDocDeleteArgs<ExtArgs>>): Prisma__ProjectDocClient<$Result.GetResult<Prisma.$ProjectDocPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProjectDoc.
     * @param {ProjectDocUpdateArgs} args - Arguments to update one ProjectDoc.
     * @example
     * // Update one ProjectDoc
     * const projectDoc = await prisma.projectDoc.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectDocUpdateArgs>(args: SelectSubset<T, ProjectDocUpdateArgs<ExtArgs>>): Prisma__ProjectDocClient<$Result.GetResult<Prisma.$ProjectDocPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProjectDocs.
     * @param {ProjectDocDeleteManyArgs} args - Arguments to filter ProjectDocs to delete.
     * @example
     * // Delete a few ProjectDocs
     * const { count } = await prisma.projectDoc.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDocDeleteManyArgs>(args?: SelectSubset<T, ProjectDocDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectDocs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDocUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectDocs
     * const projectDoc = await prisma.projectDoc.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectDocUpdateManyArgs>(args: SelectSubset<T, ProjectDocUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectDoc.
     * @param {ProjectDocUpsertArgs} args - Arguments to update or create a ProjectDoc.
     * @example
     * // Update or create a ProjectDoc
     * const projectDoc = await prisma.projectDoc.upsert({
     *   create: {
     *     // ... data to create a ProjectDoc
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectDoc we want to update
     *   }
     * })
     */
    upsert<T extends ProjectDocUpsertArgs>(args: SelectSubset<T, ProjectDocUpsertArgs<ExtArgs>>): Prisma__ProjectDocClient<$Result.GetResult<Prisma.$ProjectDocPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProjectDocs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDocCountArgs} args - Arguments to filter ProjectDocs to count.
     * @example
     * // Count the number of ProjectDocs
     * const count = await prisma.projectDoc.count({
     *   where: {
     *     // ... the filter for the ProjectDocs we want to count
     *   }
     * })
    **/
    count<T extends ProjectDocCountArgs>(
      args?: Subset<T, ProjectDocCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectDocCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectDoc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDocAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectDocAggregateArgs>(args: Subset<T, ProjectDocAggregateArgs>): Prisma.PrismaPromise<GetProjectDocAggregateType<T>>

    /**
     * Group by ProjectDoc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDocGroupByArgs} args - Group by arguments.
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
      T extends ProjectDocGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectDocGroupByArgs['orderBy'] }
        : { orderBy?: ProjectDocGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectDocGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectDocGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectDoc model
   */
  readonly fields: ProjectDocFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectDoc.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectDocClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ProjectDoc model
   */ 
  interface ProjectDocFieldRefs {
    readonly id: FieldRef<"ProjectDoc", 'String'>
    readonly projectId: FieldRef<"ProjectDoc", 'String'>
    readonly title: FieldRef<"ProjectDoc", 'String'>
    readonly content: FieldRef<"ProjectDoc", 'String'>
    readonly createdAt: FieldRef<"ProjectDoc", 'DateTime'>
    readonly updatedAt: FieldRef<"ProjectDoc", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectDoc findUnique
   */
  export type ProjectDocFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDoc
     */
    select?: ProjectDocSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDoc to fetch.
     */
    where: ProjectDocWhereUniqueInput
  }

  /**
   * ProjectDoc findUniqueOrThrow
   */
  export type ProjectDocFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDoc
     */
    select?: ProjectDocSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDoc to fetch.
     */
    where: ProjectDocWhereUniqueInput
  }

  /**
   * ProjectDoc findFirst
   */
  export type ProjectDocFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDoc
     */
    select?: ProjectDocSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDoc to fetch.
     */
    where?: ProjectDocWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDocs to fetch.
     */
    orderBy?: ProjectDocOrderByWithRelationInput | ProjectDocOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectDocs.
     */
    cursor?: ProjectDocWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDocs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDocs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectDocs.
     */
    distinct?: ProjectDocScalarFieldEnum | ProjectDocScalarFieldEnum[]
  }

  /**
   * ProjectDoc findFirstOrThrow
   */
  export type ProjectDocFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDoc
     */
    select?: ProjectDocSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDoc to fetch.
     */
    where?: ProjectDocWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDocs to fetch.
     */
    orderBy?: ProjectDocOrderByWithRelationInput | ProjectDocOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectDocs.
     */
    cursor?: ProjectDocWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDocs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDocs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectDocs.
     */
    distinct?: ProjectDocScalarFieldEnum | ProjectDocScalarFieldEnum[]
  }

  /**
   * ProjectDoc findMany
   */
  export type ProjectDocFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDoc
     */
    select?: ProjectDocSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDocs to fetch.
     */
    where?: ProjectDocWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDocs to fetch.
     */
    orderBy?: ProjectDocOrderByWithRelationInput | ProjectDocOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectDocs.
     */
    cursor?: ProjectDocWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDocs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDocs.
     */
    skip?: number
    distinct?: ProjectDocScalarFieldEnum | ProjectDocScalarFieldEnum[]
  }

  /**
   * ProjectDoc create
   */
  export type ProjectDocCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDoc
     */
    select?: ProjectDocSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectDoc.
     */
    data: XOR<ProjectDocCreateInput, ProjectDocUncheckedCreateInput>
  }

  /**
   * ProjectDoc createMany
   */
  export type ProjectDocCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectDocs.
     */
    data: ProjectDocCreateManyInput | ProjectDocCreateManyInput[]
  }

  /**
   * ProjectDoc createManyAndReturn
   */
  export type ProjectDocCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDoc
     */
    select?: ProjectDocSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProjectDocs.
     */
    data: ProjectDocCreateManyInput | ProjectDocCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectDoc update
   */
  export type ProjectDocUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDoc
     */
    select?: ProjectDocSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectDoc.
     */
    data: XOR<ProjectDocUpdateInput, ProjectDocUncheckedUpdateInput>
    /**
     * Choose, which ProjectDoc to update.
     */
    where: ProjectDocWhereUniqueInput
  }

  /**
   * ProjectDoc updateMany
   */
  export type ProjectDocUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectDocs.
     */
    data: XOR<ProjectDocUpdateManyMutationInput, ProjectDocUncheckedUpdateManyInput>
    /**
     * Filter which ProjectDocs to update
     */
    where?: ProjectDocWhereInput
  }

  /**
   * ProjectDoc upsert
   */
  export type ProjectDocUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDoc
     */
    select?: ProjectDocSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectDoc to update in case it exists.
     */
    where: ProjectDocWhereUniqueInput
    /**
     * In case the ProjectDoc found by the `where` argument doesn't exist, create a new ProjectDoc with this data.
     */
    create: XOR<ProjectDocCreateInput, ProjectDocUncheckedCreateInput>
    /**
     * In case the ProjectDoc was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectDocUpdateInput, ProjectDocUncheckedUpdateInput>
  }

  /**
   * ProjectDoc delete
   */
  export type ProjectDocDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDoc
     */
    select?: ProjectDocSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocInclude<ExtArgs> | null
    /**
     * Filter which ProjectDoc to delete.
     */
    where: ProjectDocWhereUniqueInput
  }

  /**
   * ProjectDoc deleteMany
   */
  export type ProjectDocDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectDocs to delete
     */
    where?: ProjectDocWhereInput
  }

  /**
   * ProjectDoc without action
   */
  export type ProjectDocDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDoc
     */
    select?: ProjectDocSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocInclude<ExtArgs> | null
  }


  /**
   * Model ChatSession
   */

  export type AggregateChatSession = {
    _count: ChatSessionCountAggregateOutputType | null
    _min: ChatSessionMinAggregateOutputType | null
    _max: ChatSessionMaxAggregateOutputType | null
  }

  export type ChatSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatSessionCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatSessionMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatSessionCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatSession to aggregate.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatSessions
    **/
    _count?: true | ChatSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatSessionMaxAggregateInputType
  }

  export type GetChatSessionAggregateType<T extends ChatSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateChatSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatSession[P]>
      : GetScalarType<T[P], AggregateChatSession[P]>
  }




  export type ChatSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatSessionWhereInput
    orderBy?: ChatSessionOrderByWithAggregationInput | ChatSessionOrderByWithAggregationInput[]
    by: ChatSessionScalarFieldEnum[] | ChatSessionScalarFieldEnum
    having?: ChatSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatSessionCountAggregateInputType | true
    _min?: ChatSessionMinAggregateInputType
    _max?: ChatSessionMaxAggregateInputType
  }

  export type ChatSessionGroupByOutputType = {
    id: string
    userId: string
    title: string
    createdAt: Date
    updatedAt: Date
    _count: ChatSessionCountAggregateOutputType | null
    _min: ChatSessionMinAggregateOutputType | null
    _max: ChatSessionMaxAggregateOutputType | null
  }

  type GetChatSessionGroupByPayload<T extends ChatSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ChatSessionGroupByOutputType[P]>
        }
      >
    >


  export type ChatSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | ChatSession$messagesArgs<ExtArgs>
    _count?: boolean | ChatSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | ChatSession$messagesArgs<ExtArgs>
    _count?: boolean | ChatSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      messages: Prisma.$ChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatSession"]>
    composites: {}
  }

  type ChatSessionGetPayload<S extends boolean | null | undefined | ChatSessionDefaultArgs> = $Result.GetResult<Prisma.$ChatSessionPayload, S>

  type ChatSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChatSessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChatSessionCountAggregateInputType | true
    }

  export interface ChatSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatSession'], meta: { name: 'ChatSession' } }
    /**
     * Find zero or one ChatSession that matches the filter.
     * @param {ChatSessionFindUniqueArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatSessionFindUniqueArgs>(args: SelectSubset<T, ChatSessionFindUniqueArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ChatSession that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ChatSessionFindUniqueOrThrowArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ChatSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindFirstArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatSessionFindFirstArgs>(args?: SelectSubset<T, ChatSessionFindFirstArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ChatSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindFirstOrThrowArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ChatSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatSessions
     * const chatSessions = await prisma.chatSession.findMany()
     * 
     * // Get first 10 ChatSessions
     * const chatSessions = await prisma.chatSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatSessionFindManyArgs>(args?: SelectSubset<T, ChatSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ChatSession.
     * @param {ChatSessionCreateArgs} args - Arguments to create a ChatSession.
     * @example
     * // Create one ChatSession
     * const ChatSession = await prisma.chatSession.create({
     *   data: {
     *     // ... data to create a ChatSession
     *   }
     * })
     * 
     */
    create<T extends ChatSessionCreateArgs>(args: SelectSubset<T, ChatSessionCreateArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ChatSessions.
     * @param {ChatSessionCreateManyArgs} args - Arguments to create many ChatSessions.
     * @example
     * // Create many ChatSessions
     * const chatSession = await prisma.chatSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatSessionCreateManyArgs>(args?: SelectSubset<T, ChatSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatSessions and returns the data saved in the database.
     * @param {ChatSessionCreateManyAndReturnArgs} args - Arguments to create many ChatSessions.
     * @example
     * // Create many ChatSessions
     * const chatSession = await prisma.chatSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatSessions and only return the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ChatSession.
     * @param {ChatSessionDeleteArgs} args - Arguments to delete one ChatSession.
     * @example
     * // Delete one ChatSession
     * const ChatSession = await prisma.chatSession.delete({
     *   where: {
     *     // ... filter to delete one ChatSession
     *   }
     * })
     * 
     */
    delete<T extends ChatSessionDeleteArgs>(args: SelectSubset<T, ChatSessionDeleteArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ChatSession.
     * @param {ChatSessionUpdateArgs} args - Arguments to update one ChatSession.
     * @example
     * // Update one ChatSession
     * const chatSession = await prisma.chatSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatSessionUpdateArgs>(args: SelectSubset<T, ChatSessionUpdateArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ChatSessions.
     * @param {ChatSessionDeleteManyArgs} args - Arguments to filter ChatSessions to delete.
     * @example
     * // Delete a few ChatSessions
     * const { count } = await prisma.chatSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatSessionDeleteManyArgs>(args?: SelectSubset<T, ChatSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatSessions
     * const chatSession = await prisma.chatSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatSessionUpdateManyArgs>(args: SelectSubset<T, ChatSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatSession.
     * @param {ChatSessionUpsertArgs} args - Arguments to update or create a ChatSession.
     * @example
     * // Update or create a ChatSession
     * const chatSession = await prisma.chatSession.upsert({
     *   create: {
     *     // ... data to create a ChatSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatSession we want to update
     *   }
     * })
     */
    upsert<T extends ChatSessionUpsertArgs>(args: SelectSubset<T, ChatSessionUpsertArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ChatSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionCountArgs} args - Arguments to filter ChatSessions to count.
     * @example
     * // Count the number of ChatSessions
     * const count = await prisma.chatSession.count({
     *   where: {
     *     // ... the filter for the ChatSessions we want to count
     *   }
     * })
    **/
    count<T extends ChatSessionCountArgs>(
      args?: Subset<T, ChatSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatSessionAggregateArgs>(args: Subset<T, ChatSessionAggregateArgs>): Prisma.PrismaPromise<GetChatSessionAggregateType<T>>

    /**
     * Group by ChatSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionGroupByArgs} args - Group by arguments.
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
      T extends ChatSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatSessionGroupByArgs['orderBy'] }
        : { orderBy?: ChatSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatSession model
   */
  readonly fields: ChatSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    messages<T extends ChatSession$messagesArgs<ExtArgs> = {}>(args?: Subset<T, ChatSession$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the ChatSession model
   */ 
  interface ChatSessionFieldRefs {
    readonly id: FieldRef<"ChatSession", 'String'>
    readonly userId: FieldRef<"ChatSession", 'String'>
    readonly title: FieldRef<"ChatSession", 'String'>
    readonly createdAt: FieldRef<"ChatSession", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatSession findUnique
   */
  export type ChatSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession findUniqueOrThrow
   */
  export type ChatSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession findFirst
   */
  export type ChatSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession findFirstOrThrow
   */
  export type ChatSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession findMany
   */
  export type ChatSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSessions to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession create
   */
  export type ChatSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatSession.
     */
    data: XOR<ChatSessionCreateInput, ChatSessionUncheckedCreateInput>
  }

  /**
   * ChatSession createMany
   */
  export type ChatSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatSessions.
     */
    data: ChatSessionCreateManyInput | ChatSessionCreateManyInput[]
  }

  /**
   * ChatSession createManyAndReturn
   */
  export type ChatSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ChatSessions.
     */
    data: ChatSessionCreateManyInput | ChatSessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatSession update
   */
  export type ChatSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatSession.
     */
    data: XOR<ChatSessionUpdateInput, ChatSessionUncheckedUpdateInput>
    /**
     * Choose, which ChatSession to update.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession updateMany
   */
  export type ChatSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatSessions.
     */
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyInput>
    /**
     * Filter which ChatSessions to update
     */
    where?: ChatSessionWhereInput
  }

  /**
   * ChatSession upsert
   */
  export type ChatSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatSession to update in case it exists.
     */
    where: ChatSessionWhereUniqueInput
    /**
     * In case the ChatSession found by the `where` argument doesn't exist, create a new ChatSession with this data.
     */
    create: XOR<ChatSessionCreateInput, ChatSessionUncheckedCreateInput>
    /**
     * In case the ChatSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatSessionUpdateInput, ChatSessionUncheckedUpdateInput>
  }

  /**
   * ChatSession delete
   */
  export type ChatSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter which ChatSession to delete.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession deleteMany
   */
  export type ChatSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatSessions to delete
     */
    where?: ChatSessionWhereInput
  }

  /**
   * ChatSession.messages
   */
  export type ChatSession$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatSession without action
   */
  export type ChatSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    role: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    role: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    sessionId: number
    role: number
    content: number
    createdAt: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    sessionId?: true
    role?: true
    content?: true
    createdAt?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    sessionId?: true
    role?: true
    content?: true
    createdAt?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    sessionId?: true
    role?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    sessionId: string
    role: string
    content: string
    createdAt: Date
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    session?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    session?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    sessionId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      session: Prisma.$ChatSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      role: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
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
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends ChatSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatSessionDefaultArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ChatMessage model
   */ 
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly sessionId: FieldRef<"ChatMessage", 'String'>
    readonly role: FieldRef<"ChatMessage", 'String'>
    readonly content: FieldRef<"ChatMessage", 'String'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }


  /**
   * Model ScheduleTemplate
   */

  export type AggregateScheduleTemplate = {
    _count: ScheduleTemplateCountAggregateOutputType | null
    _avg: ScheduleTemplateAvgAggregateOutputType | null
    _sum: ScheduleTemplateSumAggregateOutputType | null
    _min: ScheduleTemplateMinAggregateOutputType | null
    _max: ScheduleTemplateMaxAggregateOutputType | null
  }

  export type ScheduleTemplateAvgAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type ScheduleTemplateSumAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type ScheduleTemplateMinAggregateOutputType = {
    id: string | null
    userId: string | null
    dayOfWeek: number | null
    subject: string | null
    startTime: string | null
    endTime: string | null
    deadlineDay: string | null
    type: string | null
  }

  export type ScheduleTemplateMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    dayOfWeek: number | null
    subject: string | null
    startTime: string | null
    endTime: string | null
    deadlineDay: string | null
    type: string | null
  }

  export type ScheduleTemplateCountAggregateOutputType = {
    id: number
    userId: number
    dayOfWeek: number
    subject: number
    startTime: number
    endTime: number
    deadlineDay: number
    type: number
    _all: number
  }


  export type ScheduleTemplateAvgAggregateInputType = {
    dayOfWeek?: true
  }

  export type ScheduleTemplateSumAggregateInputType = {
    dayOfWeek?: true
  }

  export type ScheduleTemplateMinAggregateInputType = {
    id?: true
    userId?: true
    dayOfWeek?: true
    subject?: true
    startTime?: true
    endTime?: true
    deadlineDay?: true
    type?: true
  }

  export type ScheduleTemplateMaxAggregateInputType = {
    id?: true
    userId?: true
    dayOfWeek?: true
    subject?: true
    startTime?: true
    endTime?: true
    deadlineDay?: true
    type?: true
  }

  export type ScheduleTemplateCountAggregateInputType = {
    id?: true
    userId?: true
    dayOfWeek?: true
    subject?: true
    startTime?: true
    endTime?: true
    deadlineDay?: true
    type?: true
    _all?: true
  }

  export type ScheduleTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduleTemplate to aggregate.
     */
    where?: ScheduleTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleTemplates to fetch.
     */
    orderBy?: ScheduleTemplateOrderByWithRelationInput | ScheduleTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScheduleTemplates
    **/
    _count?: true | ScheduleTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduleTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduleTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleTemplateMaxAggregateInputType
  }

  export type GetScheduleTemplateAggregateType<T extends ScheduleTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateScheduleTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScheduleTemplate[P]>
      : GetScalarType<T[P], AggregateScheduleTemplate[P]>
  }




  export type ScheduleTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleTemplateWhereInput
    orderBy?: ScheduleTemplateOrderByWithAggregationInput | ScheduleTemplateOrderByWithAggregationInput[]
    by: ScheduleTemplateScalarFieldEnum[] | ScheduleTemplateScalarFieldEnum
    having?: ScheduleTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleTemplateCountAggregateInputType | true
    _avg?: ScheduleTemplateAvgAggregateInputType
    _sum?: ScheduleTemplateSumAggregateInputType
    _min?: ScheduleTemplateMinAggregateInputType
    _max?: ScheduleTemplateMaxAggregateInputType
  }

  export type ScheduleTemplateGroupByOutputType = {
    id: string
    userId: string
    dayOfWeek: number
    subject: string
    startTime: string
    endTime: string
    deadlineDay: string
    type: string
    _count: ScheduleTemplateCountAggregateOutputType | null
    _avg: ScheduleTemplateAvgAggregateOutputType | null
    _sum: ScheduleTemplateSumAggregateOutputType | null
    _min: ScheduleTemplateMinAggregateOutputType | null
    _max: ScheduleTemplateMaxAggregateOutputType | null
  }

  type GetScheduleTemplateGroupByPayload<T extends ScheduleTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleTemplateGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dayOfWeek?: boolean
    subject?: boolean
    startTime?: boolean
    endTime?: boolean
    deadlineDay?: boolean
    type?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tasks?: boolean | ScheduleTemplate$tasksArgs<ExtArgs>
    _count?: boolean | ScheduleTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduleTemplate"]>

  export type ScheduleTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dayOfWeek?: boolean
    subject?: boolean
    startTime?: boolean
    endTime?: boolean
    deadlineDay?: boolean
    type?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduleTemplate"]>

  export type ScheduleTemplateSelectScalar = {
    id?: boolean
    userId?: boolean
    dayOfWeek?: boolean
    subject?: boolean
    startTime?: boolean
    endTime?: boolean
    deadlineDay?: boolean
    type?: boolean
  }

  export type ScheduleTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tasks?: boolean | ScheduleTemplate$tasksArgs<ExtArgs>
    _count?: boolean | ScheduleTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScheduleTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ScheduleTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScheduleTemplate"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      dayOfWeek: number
      subject: string
      startTime: string
      endTime: string
      deadlineDay: string
      type: string
    }, ExtArgs["result"]["scheduleTemplate"]>
    composites: {}
  }

  type ScheduleTemplateGetPayload<S extends boolean | null | undefined | ScheduleTemplateDefaultArgs> = $Result.GetResult<Prisma.$ScheduleTemplatePayload, S>

  type ScheduleTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ScheduleTemplateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ScheduleTemplateCountAggregateInputType | true
    }

  export interface ScheduleTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScheduleTemplate'], meta: { name: 'ScheduleTemplate' } }
    /**
     * Find zero or one ScheduleTemplate that matches the filter.
     * @param {ScheduleTemplateFindUniqueArgs} args - Arguments to find a ScheduleTemplate
     * @example
     * // Get one ScheduleTemplate
     * const scheduleTemplate = await prisma.scheduleTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleTemplateFindUniqueArgs>(args: SelectSubset<T, ScheduleTemplateFindUniqueArgs<ExtArgs>>): Prisma__ScheduleTemplateClient<$Result.GetResult<Prisma.$ScheduleTemplatePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ScheduleTemplate that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ScheduleTemplateFindUniqueOrThrowArgs} args - Arguments to find a ScheduleTemplate
     * @example
     * // Get one ScheduleTemplate
     * const scheduleTemplate = await prisma.scheduleTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleTemplateClient<$Result.GetResult<Prisma.$ScheduleTemplatePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ScheduleTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleTemplateFindFirstArgs} args - Arguments to find a ScheduleTemplate
     * @example
     * // Get one ScheduleTemplate
     * const scheduleTemplate = await prisma.scheduleTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleTemplateFindFirstArgs>(args?: SelectSubset<T, ScheduleTemplateFindFirstArgs<ExtArgs>>): Prisma__ScheduleTemplateClient<$Result.GetResult<Prisma.$ScheduleTemplatePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ScheduleTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleTemplateFindFirstOrThrowArgs} args - Arguments to find a ScheduleTemplate
     * @example
     * // Get one ScheduleTemplate
     * const scheduleTemplate = await prisma.scheduleTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleTemplateClient<$Result.GetResult<Prisma.$ScheduleTemplatePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ScheduleTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScheduleTemplates
     * const scheduleTemplates = await prisma.scheduleTemplate.findMany()
     * 
     * // Get first 10 ScheduleTemplates
     * const scheduleTemplates = await prisma.scheduleTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleTemplateWithIdOnly = await prisma.scheduleTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleTemplateFindManyArgs>(args?: SelectSubset<T, ScheduleTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleTemplatePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ScheduleTemplate.
     * @param {ScheduleTemplateCreateArgs} args - Arguments to create a ScheduleTemplate.
     * @example
     * // Create one ScheduleTemplate
     * const ScheduleTemplate = await prisma.scheduleTemplate.create({
     *   data: {
     *     // ... data to create a ScheduleTemplate
     *   }
     * })
     * 
     */
    create<T extends ScheduleTemplateCreateArgs>(args: SelectSubset<T, ScheduleTemplateCreateArgs<ExtArgs>>): Prisma__ScheduleTemplateClient<$Result.GetResult<Prisma.$ScheduleTemplatePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ScheduleTemplates.
     * @param {ScheduleTemplateCreateManyArgs} args - Arguments to create many ScheduleTemplates.
     * @example
     * // Create many ScheduleTemplates
     * const scheduleTemplate = await prisma.scheduleTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleTemplateCreateManyArgs>(args?: SelectSubset<T, ScheduleTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScheduleTemplates and returns the data saved in the database.
     * @param {ScheduleTemplateCreateManyAndReturnArgs} args - Arguments to create many ScheduleTemplates.
     * @example
     * // Create many ScheduleTemplates
     * const scheduleTemplate = await prisma.scheduleTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScheduleTemplates and only return the `id`
     * const scheduleTemplateWithIdOnly = await prisma.scheduleTemplate.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleTemplatePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ScheduleTemplate.
     * @param {ScheduleTemplateDeleteArgs} args - Arguments to delete one ScheduleTemplate.
     * @example
     * // Delete one ScheduleTemplate
     * const ScheduleTemplate = await prisma.scheduleTemplate.delete({
     *   where: {
     *     // ... filter to delete one ScheduleTemplate
     *   }
     * })
     * 
     */
    delete<T extends ScheduleTemplateDeleteArgs>(args: SelectSubset<T, ScheduleTemplateDeleteArgs<ExtArgs>>): Prisma__ScheduleTemplateClient<$Result.GetResult<Prisma.$ScheduleTemplatePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ScheduleTemplate.
     * @param {ScheduleTemplateUpdateArgs} args - Arguments to update one ScheduleTemplate.
     * @example
     * // Update one ScheduleTemplate
     * const scheduleTemplate = await prisma.scheduleTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleTemplateUpdateArgs>(args: SelectSubset<T, ScheduleTemplateUpdateArgs<ExtArgs>>): Prisma__ScheduleTemplateClient<$Result.GetResult<Prisma.$ScheduleTemplatePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ScheduleTemplates.
     * @param {ScheduleTemplateDeleteManyArgs} args - Arguments to filter ScheduleTemplates to delete.
     * @example
     * // Delete a few ScheduleTemplates
     * const { count } = await prisma.scheduleTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleTemplateDeleteManyArgs>(args?: SelectSubset<T, ScheduleTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduleTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScheduleTemplates
     * const scheduleTemplate = await prisma.scheduleTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleTemplateUpdateManyArgs>(args: SelectSubset<T, ScheduleTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ScheduleTemplate.
     * @param {ScheduleTemplateUpsertArgs} args - Arguments to update or create a ScheduleTemplate.
     * @example
     * // Update or create a ScheduleTemplate
     * const scheduleTemplate = await prisma.scheduleTemplate.upsert({
     *   create: {
     *     // ... data to create a ScheduleTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScheduleTemplate we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleTemplateUpsertArgs>(args: SelectSubset<T, ScheduleTemplateUpsertArgs<ExtArgs>>): Prisma__ScheduleTemplateClient<$Result.GetResult<Prisma.$ScheduleTemplatePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ScheduleTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleTemplateCountArgs} args - Arguments to filter ScheduleTemplates to count.
     * @example
     * // Count the number of ScheduleTemplates
     * const count = await prisma.scheduleTemplate.count({
     *   where: {
     *     // ... the filter for the ScheduleTemplates we want to count
     *   }
     * })
    **/
    count<T extends ScheduleTemplateCountArgs>(
      args?: Subset<T, ScheduleTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScheduleTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduleTemplateAggregateArgs>(args: Subset<T, ScheduleTemplateAggregateArgs>): Prisma.PrismaPromise<GetScheduleTemplateAggregateType<T>>

    /**
     * Group by ScheduleTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleTemplateGroupByArgs} args - Group by arguments.
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
      T extends ScheduleTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleTemplateGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScheduleTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScheduleTemplate model
   */
  readonly fields: ScheduleTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScheduleTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tasks<T extends ScheduleTemplate$tasksArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleTemplate$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the ScheduleTemplate model
   */ 
  interface ScheduleTemplateFieldRefs {
    readonly id: FieldRef<"ScheduleTemplate", 'String'>
    readonly userId: FieldRef<"ScheduleTemplate", 'String'>
    readonly dayOfWeek: FieldRef<"ScheduleTemplate", 'Int'>
    readonly subject: FieldRef<"ScheduleTemplate", 'String'>
    readonly startTime: FieldRef<"ScheduleTemplate", 'String'>
    readonly endTime: FieldRef<"ScheduleTemplate", 'String'>
    readonly deadlineDay: FieldRef<"ScheduleTemplate", 'String'>
    readonly type: FieldRef<"ScheduleTemplate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ScheduleTemplate findUnique
   */
  export type ScheduleTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleTemplate
     */
    select?: ScheduleTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleTemplate to fetch.
     */
    where: ScheduleTemplateWhereUniqueInput
  }

  /**
   * ScheduleTemplate findUniqueOrThrow
   */
  export type ScheduleTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleTemplate
     */
    select?: ScheduleTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleTemplate to fetch.
     */
    where: ScheduleTemplateWhereUniqueInput
  }

  /**
   * ScheduleTemplate findFirst
   */
  export type ScheduleTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleTemplate
     */
    select?: ScheduleTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleTemplate to fetch.
     */
    where?: ScheduleTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleTemplates to fetch.
     */
    orderBy?: ScheduleTemplateOrderByWithRelationInput | ScheduleTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduleTemplates.
     */
    cursor?: ScheduleTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduleTemplates.
     */
    distinct?: ScheduleTemplateScalarFieldEnum | ScheduleTemplateScalarFieldEnum[]
  }

  /**
   * ScheduleTemplate findFirstOrThrow
   */
  export type ScheduleTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleTemplate
     */
    select?: ScheduleTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleTemplate to fetch.
     */
    where?: ScheduleTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleTemplates to fetch.
     */
    orderBy?: ScheduleTemplateOrderByWithRelationInput | ScheduleTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduleTemplates.
     */
    cursor?: ScheduleTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduleTemplates.
     */
    distinct?: ScheduleTemplateScalarFieldEnum | ScheduleTemplateScalarFieldEnum[]
  }

  /**
   * ScheduleTemplate findMany
   */
  export type ScheduleTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleTemplate
     */
    select?: ScheduleTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleTemplates to fetch.
     */
    where?: ScheduleTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleTemplates to fetch.
     */
    orderBy?: ScheduleTemplateOrderByWithRelationInput | ScheduleTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScheduleTemplates.
     */
    cursor?: ScheduleTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleTemplates.
     */
    skip?: number
    distinct?: ScheduleTemplateScalarFieldEnum | ScheduleTemplateScalarFieldEnum[]
  }

  /**
   * ScheduleTemplate create
   */
  export type ScheduleTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleTemplate
     */
    select?: ScheduleTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a ScheduleTemplate.
     */
    data: XOR<ScheduleTemplateCreateInput, ScheduleTemplateUncheckedCreateInput>
  }

  /**
   * ScheduleTemplate createMany
   */
  export type ScheduleTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScheduleTemplates.
     */
    data: ScheduleTemplateCreateManyInput | ScheduleTemplateCreateManyInput[]
  }

  /**
   * ScheduleTemplate createManyAndReturn
   */
  export type ScheduleTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleTemplate
     */
    select?: ScheduleTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ScheduleTemplates.
     */
    data: ScheduleTemplateCreateManyInput | ScheduleTemplateCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleTemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScheduleTemplate update
   */
  export type ScheduleTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleTemplate
     */
    select?: ScheduleTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a ScheduleTemplate.
     */
    data: XOR<ScheduleTemplateUpdateInput, ScheduleTemplateUncheckedUpdateInput>
    /**
     * Choose, which ScheduleTemplate to update.
     */
    where: ScheduleTemplateWhereUniqueInput
  }

  /**
   * ScheduleTemplate updateMany
   */
  export type ScheduleTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScheduleTemplates.
     */
    data: XOR<ScheduleTemplateUpdateManyMutationInput, ScheduleTemplateUncheckedUpdateManyInput>
    /**
     * Filter which ScheduleTemplates to update
     */
    where?: ScheduleTemplateWhereInput
  }

  /**
   * ScheduleTemplate upsert
   */
  export type ScheduleTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleTemplate
     */
    select?: ScheduleTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the ScheduleTemplate to update in case it exists.
     */
    where: ScheduleTemplateWhereUniqueInput
    /**
     * In case the ScheduleTemplate found by the `where` argument doesn't exist, create a new ScheduleTemplate with this data.
     */
    create: XOR<ScheduleTemplateCreateInput, ScheduleTemplateUncheckedCreateInput>
    /**
     * In case the ScheduleTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleTemplateUpdateInput, ScheduleTemplateUncheckedUpdateInput>
  }

  /**
   * ScheduleTemplate delete
   */
  export type ScheduleTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleTemplate
     */
    select?: ScheduleTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleTemplateInclude<ExtArgs> | null
    /**
     * Filter which ScheduleTemplate to delete.
     */
    where: ScheduleTemplateWhereUniqueInput
  }

  /**
   * ScheduleTemplate deleteMany
   */
  export type ScheduleTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduleTemplates to delete
     */
    where?: ScheduleTemplateWhereInput
  }

  /**
   * ScheduleTemplate.tasks
   */
  export type ScheduleTemplate$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * ScheduleTemplate without action
   */
  export type ScheduleTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleTemplate
     */
    select?: ScheduleTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleTemplateInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    userId: string | null
    templateId: string | null
    date: Date | null
    startTime: string | null
    endTime: string | null
    subject: string | null
    isDone: boolean | null
    isMissed: boolean | null
    isDeleted: boolean | null
    type: string | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    templateId: string | null
    date: Date | null
    startTime: string | null
    endTime: string | null
    subject: string | null
    isDone: boolean | null
    isMissed: boolean | null
    isDeleted: boolean | null
    type: string | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    userId: number
    templateId: number
    date: number
    startTime: number
    endTime: number
    subject: number
    isDone: number
    isMissed: number
    isDeleted: number
    type: number
    _all: number
  }


  export type TaskMinAggregateInputType = {
    id?: true
    userId?: true
    templateId?: true
    date?: true
    startTime?: true
    endTime?: true
    subject?: true
    isDone?: true
    isMissed?: true
    isDeleted?: true
    type?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    userId?: true
    templateId?: true
    date?: true
    startTime?: true
    endTime?: true
    subject?: true
    isDone?: true
    isMissed?: true
    isDeleted?: true
    type?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    userId?: true
    templateId?: true
    date?: true
    startTime?: true
    endTime?: true
    subject?: true
    isDone?: true
    isMissed?: true
    isDeleted?: true
    type?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    userId: string
    templateId: string | null
    date: Date
    startTime: string
    endTime: string
    subject: string
    isDone: boolean
    isMissed: boolean
    isDeleted: boolean
    type: string
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    templateId?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    subject?: boolean
    isDone?: boolean
    isMissed?: boolean
    isDeleted?: boolean
    type?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | Task$templateArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    templateId?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    subject?: boolean
    isDone?: boolean
    isMissed?: boolean
    isDeleted?: boolean
    type?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | Task$templateArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    userId?: boolean
    templateId?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    subject?: boolean
    isDone?: boolean
    isMissed?: boolean
    isDeleted?: boolean
    type?: boolean
  }

  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | Task$templateArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | Task$templateArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      template: Prisma.$ScheduleTemplatePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      templateId: string | null
      date: Date
      startTime: string
      endTime: string
      subject: string
      isDone: boolean
      isMissed: boolean
      isDeleted: boolean
      type: string
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    template<T extends Task$templateArgs<ExtArgs> = {}>(args?: Subset<T, Task$templateArgs<ExtArgs>>): Prisma__ScheduleTemplateClient<$Result.GetResult<Prisma.$ScheduleTemplatePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Task model
   */ 
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly userId: FieldRef<"Task", 'String'>
    readonly templateId: FieldRef<"Task", 'String'>
    readonly date: FieldRef<"Task", 'DateTime'>
    readonly startTime: FieldRef<"Task", 'String'>
    readonly endTime: FieldRef<"Task", 'String'>
    readonly subject: FieldRef<"Task", 'String'>
    readonly isDone: FieldRef<"Task", 'Boolean'>
    readonly isMissed: FieldRef<"Task", 'Boolean'>
    readonly isDeleted: FieldRef<"Task", 'Boolean'>
    readonly type: FieldRef<"Task", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
  }

  /**
   * Task.template
   */
  export type Task$templateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleTemplate
     */
    select?: ScheduleTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleTemplateInclude<ExtArgs> | null
    where?: ScheduleTemplateWhereInput
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model MarkedDay
   */

  export type AggregateMarkedDay = {
    _count: MarkedDayCountAggregateOutputType | null
    _min: MarkedDayMinAggregateOutputType | null
    _max: MarkedDayMaxAggregateOutputType | null
  }

  export type MarkedDayMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
  }

  export type MarkedDayMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
  }

  export type MarkedDayCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    _all: number
  }


  export type MarkedDayMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
  }

  export type MarkedDayMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
  }

  export type MarkedDayCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    _all?: true
  }

  export type MarkedDayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarkedDay to aggregate.
     */
    where?: MarkedDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarkedDays to fetch.
     */
    orderBy?: MarkedDayOrderByWithRelationInput | MarkedDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarkedDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarkedDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarkedDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarkedDays
    **/
    _count?: true | MarkedDayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarkedDayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarkedDayMaxAggregateInputType
  }

  export type GetMarkedDayAggregateType<T extends MarkedDayAggregateArgs> = {
        [P in keyof T & keyof AggregateMarkedDay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarkedDay[P]>
      : GetScalarType<T[P], AggregateMarkedDay[P]>
  }




  export type MarkedDayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarkedDayWhereInput
    orderBy?: MarkedDayOrderByWithAggregationInput | MarkedDayOrderByWithAggregationInput[]
    by: MarkedDayScalarFieldEnum[] | MarkedDayScalarFieldEnum
    having?: MarkedDayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarkedDayCountAggregateInputType | true
    _min?: MarkedDayMinAggregateInputType
    _max?: MarkedDayMaxAggregateInputType
  }

  export type MarkedDayGroupByOutputType = {
    id: string
    userId: string
    date: Date
    _count: MarkedDayCountAggregateOutputType | null
    _min: MarkedDayMinAggregateOutputType | null
    _max: MarkedDayMaxAggregateOutputType | null
  }

  type GetMarkedDayGroupByPayload<T extends MarkedDayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarkedDayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarkedDayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarkedDayGroupByOutputType[P]>
            : GetScalarType<T[P], MarkedDayGroupByOutputType[P]>
        }
      >
    >


  export type MarkedDaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["markedDay"]>

  export type MarkedDaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["markedDay"]>

  export type MarkedDaySelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
  }

  export type MarkedDayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MarkedDayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MarkedDayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarkedDay"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: Date
    }, ExtArgs["result"]["markedDay"]>
    composites: {}
  }

  type MarkedDayGetPayload<S extends boolean | null | undefined | MarkedDayDefaultArgs> = $Result.GetResult<Prisma.$MarkedDayPayload, S>

  type MarkedDayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MarkedDayFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MarkedDayCountAggregateInputType | true
    }

  export interface MarkedDayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarkedDay'], meta: { name: 'MarkedDay' } }
    /**
     * Find zero or one MarkedDay that matches the filter.
     * @param {MarkedDayFindUniqueArgs} args - Arguments to find a MarkedDay
     * @example
     * // Get one MarkedDay
     * const markedDay = await prisma.markedDay.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarkedDayFindUniqueArgs>(args: SelectSubset<T, MarkedDayFindUniqueArgs<ExtArgs>>): Prisma__MarkedDayClient<$Result.GetResult<Prisma.$MarkedDayPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MarkedDay that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MarkedDayFindUniqueOrThrowArgs} args - Arguments to find a MarkedDay
     * @example
     * // Get one MarkedDay
     * const markedDay = await prisma.markedDay.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarkedDayFindUniqueOrThrowArgs>(args: SelectSubset<T, MarkedDayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarkedDayClient<$Result.GetResult<Prisma.$MarkedDayPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MarkedDay that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkedDayFindFirstArgs} args - Arguments to find a MarkedDay
     * @example
     * // Get one MarkedDay
     * const markedDay = await prisma.markedDay.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarkedDayFindFirstArgs>(args?: SelectSubset<T, MarkedDayFindFirstArgs<ExtArgs>>): Prisma__MarkedDayClient<$Result.GetResult<Prisma.$MarkedDayPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MarkedDay that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkedDayFindFirstOrThrowArgs} args - Arguments to find a MarkedDay
     * @example
     * // Get one MarkedDay
     * const markedDay = await prisma.markedDay.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarkedDayFindFirstOrThrowArgs>(args?: SelectSubset<T, MarkedDayFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarkedDayClient<$Result.GetResult<Prisma.$MarkedDayPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MarkedDays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkedDayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarkedDays
     * const markedDays = await prisma.markedDay.findMany()
     * 
     * // Get first 10 MarkedDays
     * const markedDays = await prisma.markedDay.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const markedDayWithIdOnly = await prisma.markedDay.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarkedDayFindManyArgs>(args?: SelectSubset<T, MarkedDayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkedDayPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MarkedDay.
     * @param {MarkedDayCreateArgs} args - Arguments to create a MarkedDay.
     * @example
     * // Create one MarkedDay
     * const MarkedDay = await prisma.markedDay.create({
     *   data: {
     *     // ... data to create a MarkedDay
     *   }
     * })
     * 
     */
    create<T extends MarkedDayCreateArgs>(args: SelectSubset<T, MarkedDayCreateArgs<ExtArgs>>): Prisma__MarkedDayClient<$Result.GetResult<Prisma.$MarkedDayPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MarkedDays.
     * @param {MarkedDayCreateManyArgs} args - Arguments to create many MarkedDays.
     * @example
     * // Create many MarkedDays
     * const markedDay = await prisma.markedDay.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarkedDayCreateManyArgs>(args?: SelectSubset<T, MarkedDayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MarkedDays and returns the data saved in the database.
     * @param {MarkedDayCreateManyAndReturnArgs} args - Arguments to create many MarkedDays.
     * @example
     * // Create many MarkedDays
     * const markedDay = await prisma.markedDay.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MarkedDays and only return the `id`
     * const markedDayWithIdOnly = await prisma.markedDay.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarkedDayCreateManyAndReturnArgs>(args?: SelectSubset<T, MarkedDayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkedDayPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MarkedDay.
     * @param {MarkedDayDeleteArgs} args - Arguments to delete one MarkedDay.
     * @example
     * // Delete one MarkedDay
     * const MarkedDay = await prisma.markedDay.delete({
     *   where: {
     *     // ... filter to delete one MarkedDay
     *   }
     * })
     * 
     */
    delete<T extends MarkedDayDeleteArgs>(args: SelectSubset<T, MarkedDayDeleteArgs<ExtArgs>>): Prisma__MarkedDayClient<$Result.GetResult<Prisma.$MarkedDayPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MarkedDay.
     * @param {MarkedDayUpdateArgs} args - Arguments to update one MarkedDay.
     * @example
     * // Update one MarkedDay
     * const markedDay = await prisma.markedDay.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarkedDayUpdateArgs>(args: SelectSubset<T, MarkedDayUpdateArgs<ExtArgs>>): Prisma__MarkedDayClient<$Result.GetResult<Prisma.$MarkedDayPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MarkedDays.
     * @param {MarkedDayDeleteManyArgs} args - Arguments to filter MarkedDays to delete.
     * @example
     * // Delete a few MarkedDays
     * const { count } = await prisma.markedDay.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarkedDayDeleteManyArgs>(args?: SelectSubset<T, MarkedDayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarkedDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkedDayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarkedDays
     * const markedDay = await prisma.markedDay.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarkedDayUpdateManyArgs>(args: SelectSubset<T, MarkedDayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MarkedDay.
     * @param {MarkedDayUpsertArgs} args - Arguments to update or create a MarkedDay.
     * @example
     * // Update or create a MarkedDay
     * const markedDay = await prisma.markedDay.upsert({
     *   create: {
     *     // ... data to create a MarkedDay
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarkedDay we want to update
     *   }
     * })
     */
    upsert<T extends MarkedDayUpsertArgs>(args: SelectSubset<T, MarkedDayUpsertArgs<ExtArgs>>): Prisma__MarkedDayClient<$Result.GetResult<Prisma.$MarkedDayPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MarkedDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkedDayCountArgs} args - Arguments to filter MarkedDays to count.
     * @example
     * // Count the number of MarkedDays
     * const count = await prisma.markedDay.count({
     *   where: {
     *     // ... the filter for the MarkedDays we want to count
     *   }
     * })
    **/
    count<T extends MarkedDayCountArgs>(
      args?: Subset<T, MarkedDayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarkedDayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarkedDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkedDayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarkedDayAggregateArgs>(args: Subset<T, MarkedDayAggregateArgs>): Prisma.PrismaPromise<GetMarkedDayAggregateType<T>>

    /**
     * Group by MarkedDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkedDayGroupByArgs} args - Group by arguments.
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
      T extends MarkedDayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarkedDayGroupByArgs['orderBy'] }
        : { orderBy?: MarkedDayGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarkedDayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarkedDayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarkedDay model
   */
  readonly fields: MarkedDayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarkedDay.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarkedDayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the MarkedDay model
   */ 
  interface MarkedDayFieldRefs {
    readonly id: FieldRef<"MarkedDay", 'String'>
    readonly userId: FieldRef<"MarkedDay", 'String'>
    readonly date: FieldRef<"MarkedDay", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MarkedDay findUnique
   */
  export type MarkedDayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarkedDay
     */
    select?: MarkedDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkedDayInclude<ExtArgs> | null
    /**
     * Filter, which MarkedDay to fetch.
     */
    where: MarkedDayWhereUniqueInput
  }

  /**
   * MarkedDay findUniqueOrThrow
   */
  export type MarkedDayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarkedDay
     */
    select?: MarkedDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkedDayInclude<ExtArgs> | null
    /**
     * Filter, which MarkedDay to fetch.
     */
    where: MarkedDayWhereUniqueInput
  }

  /**
   * MarkedDay findFirst
   */
  export type MarkedDayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarkedDay
     */
    select?: MarkedDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkedDayInclude<ExtArgs> | null
    /**
     * Filter, which MarkedDay to fetch.
     */
    where?: MarkedDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarkedDays to fetch.
     */
    orderBy?: MarkedDayOrderByWithRelationInput | MarkedDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarkedDays.
     */
    cursor?: MarkedDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarkedDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarkedDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarkedDays.
     */
    distinct?: MarkedDayScalarFieldEnum | MarkedDayScalarFieldEnum[]
  }

  /**
   * MarkedDay findFirstOrThrow
   */
  export type MarkedDayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarkedDay
     */
    select?: MarkedDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkedDayInclude<ExtArgs> | null
    /**
     * Filter, which MarkedDay to fetch.
     */
    where?: MarkedDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarkedDays to fetch.
     */
    orderBy?: MarkedDayOrderByWithRelationInput | MarkedDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarkedDays.
     */
    cursor?: MarkedDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarkedDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarkedDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarkedDays.
     */
    distinct?: MarkedDayScalarFieldEnum | MarkedDayScalarFieldEnum[]
  }

  /**
   * MarkedDay findMany
   */
  export type MarkedDayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarkedDay
     */
    select?: MarkedDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkedDayInclude<ExtArgs> | null
    /**
     * Filter, which MarkedDays to fetch.
     */
    where?: MarkedDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarkedDays to fetch.
     */
    orderBy?: MarkedDayOrderByWithRelationInput | MarkedDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarkedDays.
     */
    cursor?: MarkedDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarkedDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarkedDays.
     */
    skip?: number
    distinct?: MarkedDayScalarFieldEnum | MarkedDayScalarFieldEnum[]
  }

  /**
   * MarkedDay create
   */
  export type MarkedDayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarkedDay
     */
    select?: MarkedDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkedDayInclude<ExtArgs> | null
    /**
     * The data needed to create a MarkedDay.
     */
    data: XOR<MarkedDayCreateInput, MarkedDayUncheckedCreateInput>
  }

  /**
   * MarkedDay createMany
   */
  export type MarkedDayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarkedDays.
     */
    data: MarkedDayCreateManyInput | MarkedDayCreateManyInput[]
  }

  /**
   * MarkedDay createManyAndReturn
   */
  export type MarkedDayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarkedDay
     */
    select?: MarkedDaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MarkedDays.
     */
    data: MarkedDayCreateManyInput | MarkedDayCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkedDayIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MarkedDay update
   */
  export type MarkedDayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarkedDay
     */
    select?: MarkedDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkedDayInclude<ExtArgs> | null
    /**
     * The data needed to update a MarkedDay.
     */
    data: XOR<MarkedDayUpdateInput, MarkedDayUncheckedUpdateInput>
    /**
     * Choose, which MarkedDay to update.
     */
    where: MarkedDayWhereUniqueInput
  }

  /**
   * MarkedDay updateMany
   */
  export type MarkedDayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarkedDays.
     */
    data: XOR<MarkedDayUpdateManyMutationInput, MarkedDayUncheckedUpdateManyInput>
    /**
     * Filter which MarkedDays to update
     */
    where?: MarkedDayWhereInput
  }

  /**
   * MarkedDay upsert
   */
  export type MarkedDayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarkedDay
     */
    select?: MarkedDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkedDayInclude<ExtArgs> | null
    /**
     * The filter to search for the MarkedDay to update in case it exists.
     */
    where: MarkedDayWhereUniqueInput
    /**
     * In case the MarkedDay found by the `where` argument doesn't exist, create a new MarkedDay with this data.
     */
    create: XOR<MarkedDayCreateInput, MarkedDayUncheckedCreateInput>
    /**
     * In case the MarkedDay was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarkedDayUpdateInput, MarkedDayUncheckedUpdateInput>
  }

  /**
   * MarkedDay delete
   */
  export type MarkedDayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarkedDay
     */
    select?: MarkedDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkedDayInclude<ExtArgs> | null
    /**
     * Filter which MarkedDay to delete.
     */
    where: MarkedDayWhereUniqueInput
  }

  /**
   * MarkedDay deleteMany
   */
  export type MarkedDayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarkedDays to delete
     */
    where?: MarkedDayWhereInput
  }

  /**
   * MarkedDay without action
   */
  export type MarkedDayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarkedDay
     */
    select?: MarkedDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkedDayInclude<ExtArgs> | null
  }


  /**
   * Model UserProgress
   */

  export type AggregateUserProgress = {
    _count: UserProgressCountAggregateOutputType | null
    _avg: UserProgressAvgAggregateOutputType | null
    _sum: UserProgressSumAggregateOutputType | null
    _min: UserProgressMinAggregateOutputType | null
    _max: UserProgressMaxAggregateOutputType | null
  }

  export type UserProgressAvgAggregateOutputType = {
    currentStreak: number | null
    longestStreak: number | null
    focusSessions: number | null
    totalFocusMinutes: number | null
    xp: number | null
    level: number | null
  }

  export type UserProgressSumAggregateOutputType = {
    currentStreak: number | null
    longestStreak: number | null
    focusSessions: number | null
    totalFocusMinutes: number | null
    xp: number | null
    level: number | null
  }

  export type UserProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    currentStreak: number | null
    longestStreak: number | null
    lastActiveDate: Date | null
    geminiApiKey: string | null
    focusSessions: number | null
    totalFocusMinutes: number | null
    xp: number | null
    level: number | null
  }

  export type UserProgressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    currentStreak: number | null
    longestStreak: number | null
    lastActiveDate: Date | null
    geminiApiKey: string | null
    focusSessions: number | null
    totalFocusMinutes: number | null
    xp: number | null
    level: number | null
  }

  export type UserProgressCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    currentStreak: number
    longestStreak: number
    lastActiveDate: number
    geminiApiKey: number
    focusSessions: number
    totalFocusMinutes: number
    xp: number
    level: number
    _all: number
  }


  export type UserProgressAvgAggregateInputType = {
    currentStreak?: true
    longestStreak?: true
    focusSessions?: true
    totalFocusMinutes?: true
    xp?: true
    level?: true
  }

  export type UserProgressSumAggregateInputType = {
    currentStreak?: true
    longestStreak?: true
    focusSessions?: true
    totalFocusMinutes?: true
    xp?: true
    level?: true
  }

  export type UserProgressMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    currentStreak?: true
    longestStreak?: true
    lastActiveDate?: true
    geminiApiKey?: true
    focusSessions?: true
    totalFocusMinutes?: true
    xp?: true
    level?: true
  }

  export type UserProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    currentStreak?: true
    longestStreak?: true
    lastActiveDate?: true
    geminiApiKey?: true
    focusSessions?: true
    totalFocusMinutes?: true
    xp?: true
    level?: true
  }

  export type UserProgressCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    currentStreak?: true
    longestStreak?: true
    lastActiveDate?: true
    geminiApiKey?: true
    focusSessions?: true
    totalFocusMinutes?: true
    xp?: true
    level?: true
    _all?: true
  }

  export type UserProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProgress to aggregate.
     */
    where?: UserProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProgresses to fetch.
     */
    orderBy?: UserProgressOrderByWithRelationInput | UserProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProgresses
    **/
    _count?: true | UserProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProgressMaxAggregateInputType
  }

  export type GetUserProgressAggregateType<T extends UserProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProgress[P]>
      : GetScalarType<T[P], AggregateUserProgress[P]>
  }




  export type UserProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProgressWhereInput
    orderBy?: UserProgressOrderByWithAggregationInput | UserProgressOrderByWithAggregationInput[]
    by: UserProgressScalarFieldEnum[] | UserProgressScalarFieldEnum
    having?: UserProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProgressCountAggregateInputType | true
    _avg?: UserProgressAvgAggregateInputType
    _sum?: UserProgressSumAggregateInputType
    _min?: UserProgressMinAggregateInputType
    _max?: UserProgressMaxAggregateInputType
  }

  export type UserProgressGroupByOutputType = {
    id: string
    userId: string
    name: string
    currentStreak: number
    longestStreak: number
    lastActiveDate: Date | null
    geminiApiKey: string | null
    focusSessions: number
    totalFocusMinutes: number
    xp: number
    level: number
    _count: UserProgressCountAggregateOutputType | null
    _avg: UserProgressAvgAggregateOutputType | null
    _sum: UserProgressSumAggregateOutputType | null
    _min: UserProgressMinAggregateOutputType | null
    _max: UserProgressMaxAggregateOutputType | null
  }

  type GetUserProgressGroupByPayload<T extends UserProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProgressGroupByOutputType[P]>
            : GetScalarType<T[P], UserProgressGroupByOutputType[P]>
        }
      >
    >


  export type UserProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    currentStreak?: boolean
    longestStreak?: boolean
    lastActiveDate?: boolean
    geminiApiKey?: boolean
    focusSessions?: boolean
    totalFocusMinutes?: boolean
    xp?: boolean
    level?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProgress"]>

  export type UserProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    currentStreak?: boolean
    longestStreak?: boolean
    lastActiveDate?: boolean
    geminiApiKey?: boolean
    focusSessions?: boolean
    totalFocusMinutes?: boolean
    xp?: boolean
    level?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProgress"]>

  export type UserProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    currentStreak?: boolean
    longestStreak?: boolean
    lastActiveDate?: boolean
    geminiApiKey?: boolean
    focusSessions?: boolean
    totalFocusMinutes?: boolean
    xp?: boolean
    level?: boolean
  }

  export type UserProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      currentStreak: number
      longestStreak: number
      lastActiveDate: Date | null
      geminiApiKey: string | null
      focusSessions: number
      totalFocusMinutes: number
      xp: number
      level: number
    }, ExtArgs["result"]["userProgress"]>
    composites: {}
  }

  type UserProgressGetPayload<S extends boolean | null | undefined | UserProgressDefaultArgs> = $Result.GetResult<Prisma.$UserProgressPayload, S>

  type UserProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserProgressFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserProgressCountAggregateInputType | true
    }

  export interface UserProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProgress'], meta: { name: 'UserProgress' } }
    /**
     * Find zero or one UserProgress that matches the filter.
     * @param {UserProgressFindUniqueArgs} args - Arguments to find a UserProgress
     * @example
     * // Get one UserProgress
     * const userProgress = await prisma.userProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProgressFindUniqueArgs>(args: SelectSubset<T, UserProgressFindUniqueArgs<ExtArgs>>): Prisma__UserProgressClient<$Result.GetResult<Prisma.$UserProgressPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserProgress that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserProgressFindUniqueOrThrowArgs} args - Arguments to find a UserProgress
     * @example
     * // Get one UserProgress
     * const userProgress = await prisma.userProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProgressClient<$Result.GetResult<Prisma.$UserProgressPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgressFindFirstArgs} args - Arguments to find a UserProgress
     * @example
     * // Get one UserProgress
     * const userProgress = await prisma.userProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProgressFindFirstArgs>(args?: SelectSubset<T, UserProgressFindFirstArgs<ExtArgs>>): Prisma__UserProgressClient<$Result.GetResult<Prisma.$UserProgressPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgressFindFirstOrThrowArgs} args - Arguments to find a UserProgress
     * @example
     * // Get one UserProgress
     * const userProgress = await prisma.userProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProgressClient<$Result.GetResult<Prisma.$UserProgressPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProgresses
     * const userProgresses = await prisma.userProgress.findMany()
     * 
     * // Get first 10 UserProgresses
     * const userProgresses = await prisma.userProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProgressWithIdOnly = await prisma.userProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProgressFindManyArgs>(args?: SelectSubset<T, UserProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProgressPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserProgress.
     * @param {UserProgressCreateArgs} args - Arguments to create a UserProgress.
     * @example
     * // Create one UserProgress
     * const UserProgress = await prisma.userProgress.create({
     *   data: {
     *     // ... data to create a UserProgress
     *   }
     * })
     * 
     */
    create<T extends UserProgressCreateArgs>(args: SelectSubset<T, UserProgressCreateArgs<ExtArgs>>): Prisma__UserProgressClient<$Result.GetResult<Prisma.$UserProgressPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserProgresses.
     * @param {UserProgressCreateManyArgs} args - Arguments to create many UserProgresses.
     * @example
     * // Create many UserProgresses
     * const userProgress = await prisma.userProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProgressCreateManyArgs>(args?: SelectSubset<T, UserProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProgresses and returns the data saved in the database.
     * @param {UserProgressCreateManyAndReturnArgs} args - Arguments to create many UserProgresses.
     * @example
     * // Create many UserProgresses
     * const userProgress = await prisma.userProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProgresses and only return the `id`
     * const userProgressWithIdOnly = await prisma.userProgress.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProgressPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserProgress.
     * @param {UserProgressDeleteArgs} args - Arguments to delete one UserProgress.
     * @example
     * // Delete one UserProgress
     * const UserProgress = await prisma.userProgress.delete({
     *   where: {
     *     // ... filter to delete one UserProgress
     *   }
     * })
     * 
     */
    delete<T extends UserProgressDeleteArgs>(args: SelectSubset<T, UserProgressDeleteArgs<ExtArgs>>): Prisma__UserProgressClient<$Result.GetResult<Prisma.$UserProgressPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserProgress.
     * @param {UserProgressUpdateArgs} args - Arguments to update one UserProgress.
     * @example
     * // Update one UserProgress
     * const userProgress = await prisma.userProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProgressUpdateArgs>(args: SelectSubset<T, UserProgressUpdateArgs<ExtArgs>>): Prisma__UserProgressClient<$Result.GetResult<Prisma.$UserProgressPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserProgresses.
     * @param {UserProgressDeleteManyArgs} args - Arguments to filter UserProgresses to delete.
     * @example
     * // Delete a few UserProgresses
     * const { count } = await prisma.userProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProgressDeleteManyArgs>(args?: SelectSubset<T, UserProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProgresses
     * const userProgress = await prisma.userProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProgressUpdateManyArgs>(args: SelectSubset<T, UserProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserProgress.
     * @param {UserProgressUpsertArgs} args - Arguments to update or create a UserProgress.
     * @example
     * // Update or create a UserProgress
     * const userProgress = await prisma.userProgress.upsert({
     *   create: {
     *     // ... data to create a UserProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProgress we want to update
     *   }
     * })
     */
    upsert<T extends UserProgressUpsertArgs>(args: SelectSubset<T, UserProgressUpsertArgs<ExtArgs>>): Prisma__UserProgressClient<$Result.GetResult<Prisma.$UserProgressPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgressCountArgs} args - Arguments to filter UserProgresses to count.
     * @example
     * // Count the number of UserProgresses
     * const count = await prisma.userProgress.count({
     *   where: {
     *     // ... the filter for the UserProgresses we want to count
     *   }
     * })
    **/
    count<T extends UserProgressCountArgs>(
      args?: Subset<T, UserProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProgressAggregateArgs>(args: Subset<T, UserProgressAggregateArgs>): Prisma.PrismaPromise<GetUserProgressAggregateType<T>>

    /**
     * Group by UserProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgressGroupByArgs} args - Group by arguments.
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
      T extends UserProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProgressGroupByArgs['orderBy'] }
        : { orderBy?: UserProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProgress model
   */
  readonly fields: UserProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UserProgress model
   */ 
  interface UserProgressFieldRefs {
    readonly id: FieldRef<"UserProgress", 'String'>
    readonly userId: FieldRef<"UserProgress", 'String'>
    readonly name: FieldRef<"UserProgress", 'String'>
    readonly currentStreak: FieldRef<"UserProgress", 'Int'>
    readonly longestStreak: FieldRef<"UserProgress", 'Int'>
    readonly lastActiveDate: FieldRef<"UserProgress", 'DateTime'>
    readonly geminiApiKey: FieldRef<"UserProgress", 'String'>
    readonly focusSessions: FieldRef<"UserProgress", 'Int'>
    readonly totalFocusMinutes: FieldRef<"UserProgress", 'Int'>
    readonly xp: FieldRef<"UserProgress", 'Int'>
    readonly level: FieldRef<"UserProgress", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserProgress findUnique
   */
  export type UserProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserProgress to fetch.
     */
    where: UserProgressWhereUniqueInput
  }

  /**
   * UserProgress findUniqueOrThrow
   */
  export type UserProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserProgress to fetch.
     */
    where: UserProgressWhereUniqueInput
  }

  /**
   * UserProgress findFirst
   */
  export type UserProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserProgress to fetch.
     */
    where?: UserProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProgresses to fetch.
     */
    orderBy?: UserProgressOrderByWithRelationInput | UserProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProgresses.
     */
    cursor?: UserProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProgresses.
     */
    distinct?: UserProgressScalarFieldEnum | UserProgressScalarFieldEnum[]
  }

  /**
   * UserProgress findFirstOrThrow
   */
  export type UserProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserProgress to fetch.
     */
    where?: UserProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProgresses to fetch.
     */
    orderBy?: UserProgressOrderByWithRelationInput | UserProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProgresses.
     */
    cursor?: UserProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProgresses.
     */
    distinct?: UserProgressScalarFieldEnum | UserProgressScalarFieldEnum[]
  }

  /**
   * UserProgress findMany
   */
  export type UserProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserProgresses to fetch.
     */
    where?: UserProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProgresses to fetch.
     */
    orderBy?: UserProgressOrderByWithRelationInput | UserProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProgresses.
     */
    cursor?: UserProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProgresses.
     */
    skip?: number
    distinct?: UserProgressScalarFieldEnum | UserProgressScalarFieldEnum[]
  }

  /**
   * UserProgress create
   */
  export type UserProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProgress.
     */
    data: XOR<UserProgressCreateInput, UserProgressUncheckedCreateInput>
  }

  /**
   * UserProgress createMany
   */
  export type UserProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProgresses.
     */
    data: UserProgressCreateManyInput | UserProgressCreateManyInput[]
  }

  /**
   * UserProgress createManyAndReturn
   */
  export type UserProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserProgresses.
     */
    data: UserProgressCreateManyInput | UserProgressCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProgress update
   */
  export type UserProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProgress.
     */
    data: XOR<UserProgressUpdateInput, UserProgressUncheckedUpdateInput>
    /**
     * Choose, which UserProgress to update.
     */
    where: UserProgressWhereUniqueInput
  }

  /**
   * UserProgress updateMany
   */
  export type UserProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProgresses.
     */
    data: XOR<UserProgressUpdateManyMutationInput, UserProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserProgresses to update
     */
    where?: UserProgressWhereInput
  }

  /**
   * UserProgress upsert
   */
  export type UserProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProgress to update in case it exists.
     */
    where: UserProgressWhereUniqueInput
    /**
     * In case the UserProgress found by the `where` argument doesn't exist, create a new UserProgress with this data.
     */
    create: XOR<UserProgressCreateInput, UserProgressUncheckedCreateInput>
    /**
     * In case the UserProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProgressUpdateInput, UserProgressUncheckedUpdateInput>
  }

  /**
   * UserProgress delete
   */
  export type UserProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null
    /**
     * Filter which UserProgress to delete.
     */
    where: UserProgressWhereUniqueInput
  }

  /**
   * UserProgress deleteMany
   */
  export type UserProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProgresses to delete
     */
    where?: UserProgressWhereInput
  }

  /**
   * UserProgress without action
   */
  export type UserProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null
  }


  /**
   * Model Resource
   */

  export type AggregateResource = {
    _count: ResourceCountAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  export type ResourceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    subject: string | null
    title: string | null
    type: string | null
    url: string | null
    createdAt: Date | null
  }

  export type ResourceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    subject: string | null
    title: string | null
    type: string | null
    url: string | null
    createdAt: Date | null
  }

  export type ResourceCountAggregateOutputType = {
    id: number
    userId: number
    subject: number
    title: number
    type: number
    url: number
    createdAt: number
    _all: number
  }


  export type ResourceMinAggregateInputType = {
    id?: true
    userId?: true
    subject?: true
    title?: true
    type?: true
    url?: true
    createdAt?: true
  }

  export type ResourceMaxAggregateInputType = {
    id?: true
    userId?: true
    subject?: true
    title?: true
    type?: true
    url?: true
    createdAt?: true
  }

  export type ResourceCountAggregateInputType = {
    id?: true
    userId?: true
    subject?: true
    title?: true
    type?: true
    url?: true
    createdAt?: true
    _all?: true
  }

  export type ResourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resource to aggregate.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resources
    **/
    _count?: true | ResourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResourceMaxAggregateInputType
  }

  export type GetResourceAggregateType<T extends ResourceAggregateArgs> = {
        [P in keyof T & keyof AggregateResource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResource[P]>
      : GetScalarType<T[P], AggregateResource[P]>
  }




  export type ResourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceWhereInput
    orderBy?: ResourceOrderByWithAggregationInput | ResourceOrderByWithAggregationInput[]
    by: ResourceScalarFieldEnum[] | ResourceScalarFieldEnum
    having?: ResourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResourceCountAggregateInputType | true
    _min?: ResourceMinAggregateInputType
    _max?: ResourceMaxAggregateInputType
  }

  export type ResourceGroupByOutputType = {
    id: string
    userId: string
    subject: string
    title: string
    type: string
    url: string
    createdAt: Date
    _count: ResourceCountAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  type GetResourceGroupByPayload<T extends ResourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResourceGroupByOutputType[P]>
            : GetScalarType<T[P], ResourceGroupByOutputType[P]>
        }
      >
    >


  export type ResourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subject?: boolean
    title?: boolean
    type?: boolean
    url?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subject?: boolean
    title?: boolean
    type?: boolean
    url?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectScalar = {
    id?: boolean
    userId?: boolean
    subject?: boolean
    title?: boolean
    type?: boolean
    url?: boolean
    createdAt?: boolean
  }

  export type ResourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ResourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ResourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resource"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      subject: string
      title: string
      type: string
      url: string
      createdAt: Date
    }, ExtArgs["result"]["resource"]>
    composites: {}
  }

  type ResourceGetPayload<S extends boolean | null | undefined | ResourceDefaultArgs> = $Result.GetResult<Prisma.$ResourcePayload, S>

  type ResourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ResourceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ResourceCountAggregateInputType | true
    }

  export interface ResourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resource'], meta: { name: 'Resource' } }
    /**
     * Find zero or one Resource that matches the filter.
     * @param {ResourceFindUniqueArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResourceFindUniqueArgs>(args: SelectSubset<T, ResourceFindUniqueArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Resource that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ResourceFindUniqueOrThrowArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResourceFindUniqueOrThrowArgs>(args: SelectSubset<T, ResourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Resource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindFirstArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResourceFindFirstArgs>(args?: SelectSubset<T, ResourceFindFirstArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Resource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindFirstOrThrowArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResourceFindFirstOrThrowArgs>(args?: SelectSubset<T, ResourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Resources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resources
     * const resources = await prisma.resource.findMany()
     * 
     * // Get first 10 Resources
     * const resources = await prisma.resource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resourceWithIdOnly = await prisma.resource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResourceFindManyArgs>(args?: SelectSubset<T, ResourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Resource.
     * @param {ResourceCreateArgs} args - Arguments to create a Resource.
     * @example
     * // Create one Resource
     * const Resource = await prisma.resource.create({
     *   data: {
     *     // ... data to create a Resource
     *   }
     * })
     * 
     */
    create<T extends ResourceCreateArgs>(args: SelectSubset<T, ResourceCreateArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Resources.
     * @param {ResourceCreateManyArgs} args - Arguments to create many Resources.
     * @example
     * // Create many Resources
     * const resource = await prisma.resource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResourceCreateManyArgs>(args?: SelectSubset<T, ResourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resources and returns the data saved in the database.
     * @param {ResourceCreateManyAndReturnArgs} args - Arguments to create many Resources.
     * @example
     * // Create many Resources
     * const resource = await prisma.resource.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resources and only return the `id`
     * const resourceWithIdOnly = await prisma.resource.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResourceCreateManyAndReturnArgs>(args?: SelectSubset<T, ResourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Resource.
     * @param {ResourceDeleteArgs} args - Arguments to delete one Resource.
     * @example
     * // Delete one Resource
     * const Resource = await prisma.resource.delete({
     *   where: {
     *     // ... filter to delete one Resource
     *   }
     * })
     * 
     */
    delete<T extends ResourceDeleteArgs>(args: SelectSubset<T, ResourceDeleteArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Resource.
     * @param {ResourceUpdateArgs} args - Arguments to update one Resource.
     * @example
     * // Update one Resource
     * const resource = await prisma.resource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResourceUpdateArgs>(args: SelectSubset<T, ResourceUpdateArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Resources.
     * @param {ResourceDeleteManyArgs} args - Arguments to filter Resources to delete.
     * @example
     * // Delete a few Resources
     * const { count } = await prisma.resource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResourceDeleteManyArgs>(args?: SelectSubset<T, ResourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resources
     * const resource = await prisma.resource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResourceUpdateManyArgs>(args: SelectSubset<T, ResourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Resource.
     * @param {ResourceUpsertArgs} args - Arguments to update or create a Resource.
     * @example
     * // Update or create a Resource
     * const resource = await prisma.resource.upsert({
     *   create: {
     *     // ... data to create a Resource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resource we want to update
     *   }
     * })
     */
    upsert<T extends ResourceUpsertArgs>(args: SelectSubset<T, ResourceUpsertArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceCountArgs} args - Arguments to filter Resources to count.
     * @example
     * // Count the number of Resources
     * const count = await prisma.resource.count({
     *   where: {
     *     // ... the filter for the Resources we want to count
     *   }
     * })
    **/
    count<T extends ResourceCountArgs>(
      args?: Subset<T, ResourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResourceAggregateArgs>(args: Subset<T, ResourceAggregateArgs>): Prisma.PrismaPromise<GetResourceAggregateType<T>>

    /**
     * Group by Resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceGroupByArgs} args - Group by arguments.
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
      T extends ResourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResourceGroupByArgs['orderBy'] }
        : { orderBy?: ResourceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resource model
   */
  readonly fields: ResourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Resource model
   */ 
  interface ResourceFieldRefs {
    readonly id: FieldRef<"Resource", 'String'>
    readonly userId: FieldRef<"Resource", 'String'>
    readonly subject: FieldRef<"Resource", 'String'>
    readonly title: FieldRef<"Resource", 'String'>
    readonly type: FieldRef<"Resource", 'String'>
    readonly url: FieldRef<"Resource", 'String'>
    readonly createdAt: FieldRef<"Resource", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Resource findUnique
   */
  export type ResourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource findUniqueOrThrow
   */
  export type ResourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource findFirst
   */
  export type ResourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource findFirstOrThrow
   */
  export type ResourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource findMany
   */
  export type ResourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resources to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource create
   */
  export type ResourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The data needed to create a Resource.
     */
    data: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
  }

  /**
   * Resource createMany
   */
  export type ResourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resources.
     */
    data: ResourceCreateManyInput | ResourceCreateManyInput[]
  }

  /**
   * Resource createManyAndReturn
   */
  export type ResourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Resources.
     */
    data: ResourceCreateManyInput | ResourceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resource update
   */
  export type ResourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The data needed to update a Resource.
     */
    data: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
    /**
     * Choose, which Resource to update.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource updateMany
   */
  export type ResourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resources.
     */
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyInput>
    /**
     * Filter which Resources to update
     */
    where?: ResourceWhereInput
  }

  /**
   * Resource upsert
   */
  export type ResourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The filter to search for the Resource to update in case it exists.
     */
    where: ResourceWhereUniqueInput
    /**
     * In case the Resource found by the `where` argument doesn't exist, create a new Resource with this data.
     */
    create: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
    /**
     * In case the Resource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
  }

  /**
   * Resource delete
   */
  export type ResourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter which Resource to delete.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource deleteMany
   */
  export type ResourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resources to delete
     */
    where?: ResourceWhereInput
  }

  /**
   * Resource without action
   */
  export type ResourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
  }


  /**
   * Model ExamEvent
   */

  export type AggregateExamEvent = {
    _count: ExamEventCountAggregateOutputType | null
    _min: ExamEventMinAggregateOutputType | null
    _max: ExamEventMaxAggregateOutputType | null
  }

  export type ExamEventMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    date: Date | null
    priority: string | null
    createdAt: Date | null
  }

  export type ExamEventMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    date: Date | null
    priority: string | null
    createdAt: Date | null
  }

  export type ExamEventCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    date: number
    priority: number
    createdAt: number
    _all: number
  }


  export type ExamEventMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    date?: true
    priority?: true
    createdAt?: true
  }

  export type ExamEventMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    date?: true
    priority?: true
    createdAt?: true
  }

  export type ExamEventCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    date?: true
    priority?: true
    createdAt?: true
    _all?: true
  }

  export type ExamEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamEvent to aggregate.
     */
    where?: ExamEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamEvents to fetch.
     */
    orderBy?: ExamEventOrderByWithRelationInput | ExamEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExamEvents
    **/
    _count?: true | ExamEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamEventMaxAggregateInputType
  }

  export type GetExamEventAggregateType<T extends ExamEventAggregateArgs> = {
        [P in keyof T & keyof AggregateExamEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExamEvent[P]>
      : GetScalarType<T[P], AggregateExamEvent[P]>
  }




  export type ExamEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamEventWhereInput
    orderBy?: ExamEventOrderByWithAggregationInput | ExamEventOrderByWithAggregationInput[]
    by: ExamEventScalarFieldEnum[] | ExamEventScalarFieldEnum
    having?: ExamEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamEventCountAggregateInputType | true
    _min?: ExamEventMinAggregateInputType
    _max?: ExamEventMaxAggregateInputType
  }

  export type ExamEventGroupByOutputType = {
    id: string
    userId: string
    title: string
    date: Date
    priority: string
    createdAt: Date
    _count: ExamEventCountAggregateOutputType | null
    _min: ExamEventMinAggregateOutputType | null
    _max: ExamEventMaxAggregateOutputType | null
  }

  type GetExamEventGroupByPayload<T extends ExamEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamEventGroupByOutputType[P]>
            : GetScalarType<T[P], ExamEventGroupByOutputType[P]>
        }
      >
    >


  export type ExamEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    date?: boolean
    priority?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examEvent"]>

  export type ExamEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    date?: boolean
    priority?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examEvent"]>

  export type ExamEventSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    date?: boolean
    priority?: boolean
    createdAt?: boolean
  }

  export type ExamEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExamEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ExamEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExamEvent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      date: Date
      priority: string
      createdAt: Date
    }, ExtArgs["result"]["examEvent"]>
    composites: {}
  }

  type ExamEventGetPayload<S extends boolean | null | undefined | ExamEventDefaultArgs> = $Result.GetResult<Prisma.$ExamEventPayload, S>

  type ExamEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExamEventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExamEventCountAggregateInputType | true
    }

  export interface ExamEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExamEvent'], meta: { name: 'ExamEvent' } }
    /**
     * Find zero or one ExamEvent that matches the filter.
     * @param {ExamEventFindUniqueArgs} args - Arguments to find a ExamEvent
     * @example
     * // Get one ExamEvent
     * const examEvent = await prisma.examEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamEventFindUniqueArgs>(args: SelectSubset<T, ExamEventFindUniqueArgs<ExtArgs>>): Prisma__ExamEventClient<$Result.GetResult<Prisma.$ExamEventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ExamEvent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ExamEventFindUniqueOrThrowArgs} args - Arguments to find a ExamEvent
     * @example
     * // Get one ExamEvent
     * const examEvent = await prisma.examEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamEventFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamEventClient<$Result.GetResult<Prisma.$ExamEventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ExamEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamEventFindFirstArgs} args - Arguments to find a ExamEvent
     * @example
     * // Get one ExamEvent
     * const examEvent = await prisma.examEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamEventFindFirstArgs>(args?: SelectSubset<T, ExamEventFindFirstArgs<ExtArgs>>): Prisma__ExamEventClient<$Result.GetResult<Prisma.$ExamEventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ExamEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamEventFindFirstOrThrowArgs} args - Arguments to find a ExamEvent
     * @example
     * // Get one ExamEvent
     * const examEvent = await prisma.examEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamEventFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamEventClient<$Result.GetResult<Prisma.$ExamEventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ExamEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExamEvents
     * const examEvents = await prisma.examEvent.findMany()
     * 
     * // Get first 10 ExamEvents
     * const examEvents = await prisma.examEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examEventWithIdOnly = await prisma.examEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamEventFindManyArgs>(args?: SelectSubset<T, ExamEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamEventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ExamEvent.
     * @param {ExamEventCreateArgs} args - Arguments to create a ExamEvent.
     * @example
     * // Create one ExamEvent
     * const ExamEvent = await prisma.examEvent.create({
     *   data: {
     *     // ... data to create a ExamEvent
     *   }
     * })
     * 
     */
    create<T extends ExamEventCreateArgs>(args: SelectSubset<T, ExamEventCreateArgs<ExtArgs>>): Prisma__ExamEventClient<$Result.GetResult<Prisma.$ExamEventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ExamEvents.
     * @param {ExamEventCreateManyArgs} args - Arguments to create many ExamEvents.
     * @example
     * // Create many ExamEvents
     * const examEvent = await prisma.examEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamEventCreateManyArgs>(args?: SelectSubset<T, ExamEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExamEvents and returns the data saved in the database.
     * @param {ExamEventCreateManyAndReturnArgs} args - Arguments to create many ExamEvents.
     * @example
     * // Create many ExamEvents
     * const examEvent = await prisma.examEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExamEvents and only return the `id`
     * const examEventWithIdOnly = await prisma.examEvent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamEventCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamEventPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ExamEvent.
     * @param {ExamEventDeleteArgs} args - Arguments to delete one ExamEvent.
     * @example
     * // Delete one ExamEvent
     * const ExamEvent = await prisma.examEvent.delete({
     *   where: {
     *     // ... filter to delete one ExamEvent
     *   }
     * })
     * 
     */
    delete<T extends ExamEventDeleteArgs>(args: SelectSubset<T, ExamEventDeleteArgs<ExtArgs>>): Prisma__ExamEventClient<$Result.GetResult<Prisma.$ExamEventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ExamEvent.
     * @param {ExamEventUpdateArgs} args - Arguments to update one ExamEvent.
     * @example
     * // Update one ExamEvent
     * const examEvent = await prisma.examEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamEventUpdateArgs>(args: SelectSubset<T, ExamEventUpdateArgs<ExtArgs>>): Prisma__ExamEventClient<$Result.GetResult<Prisma.$ExamEventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ExamEvents.
     * @param {ExamEventDeleteManyArgs} args - Arguments to filter ExamEvents to delete.
     * @example
     * // Delete a few ExamEvents
     * const { count } = await prisma.examEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamEventDeleteManyArgs>(args?: SelectSubset<T, ExamEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExamEvents
     * const examEvent = await prisma.examEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamEventUpdateManyArgs>(args: SelectSubset<T, ExamEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExamEvent.
     * @param {ExamEventUpsertArgs} args - Arguments to update or create a ExamEvent.
     * @example
     * // Update or create a ExamEvent
     * const examEvent = await prisma.examEvent.upsert({
     *   create: {
     *     // ... data to create a ExamEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExamEvent we want to update
     *   }
     * })
     */
    upsert<T extends ExamEventUpsertArgs>(args: SelectSubset<T, ExamEventUpsertArgs<ExtArgs>>): Prisma__ExamEventClient<$Result.GetResult<Prisma.$ExamEventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ExamEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamEventCountArgs} args - Arguments to filter ExamEvents to count.
     * @example
     * // Count the number of ExamEvents
     * const count = await prisma.examEvent.count({
     *   where: {
     *     // ... the filter for the ExamEvents we want to count
     *   }
     * })
    **/
    count<T extends ExamEventCountArgs>(
      args?: Subset<T, ExamEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExamEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamEventAggregateArgs>(args: Subset<T, ExamEventAggregateArgs>): Prisma.PrismaPromise<GetExamEventAggregateType<T>>

    /**
     * Group by ExamEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamEventGroupByArgs} args - Group by arguments.
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
      T extends ExamEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamEventGroupByArgs['orderBy'] }
        : { orderBy?: ExamEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExamEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExamEvent model
   */
  readonly fields: ExamEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExamEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ExamEvent model
   */ 
  interface ExamEventFieldRefs {
    readonly id: FieldRef<"ExamEvent", 'String'>
    readonly userId: FieldRef<"ExamEvent", 'String'>
    readonly title: FieldRef<"ExamEvent", 'String'>
    readonly date: FieldRef<"ExamEvent", 'DateTime'>
    readonly priority: FieldRef<"ExamEvent", 'String'>
    readonly createdAt: FieldRef<"ExamEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExamEvent findUnique
   */
  export type ExamEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamEvent
     */
    select?: ExamEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamEventInclude<ExtArgs> | null
    /**
     * Filter, which ExamEvent to fetch.
     */
    where: ExamEventWhereUniqueInput
  }

  /**
   * ExamEvent findUniqueOrThrow
   */
  export type ExamEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamEvent
     */
    select?: ExamEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamEventInclude<ExtArgs> | null
    /**
     * Filter, which ExamEvent to fetch.
     */
    where: ExamEventWhereUniqueInput
  }

  /**
   * ExamEvent findFirst
   */
  export type ExamEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamEvent
     */
    select?: ExamEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamEventInclude<ExtArgs> | null
    /**
     * Filter, which ExamEvent to fetch.
     */
    where?: ExamEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamEvents to fetch.
     */
    orderBy?: ExamEventOrderByWithRelationInput | ExamEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamEvents.
     */
    cursor?: ExamEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamEvents.
     */
    distinct?: ExamEventScalarFieldEnum | ExamEventScalarFieldEnum[]
  }

  /**
   * ExamEvent findFirstOrThrow
   */
  export type ExamEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamEvent
     */
    select?: ExamEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamEventInclude<ExtArgs> | null
    /**
     * Filter, which ExamEvent to fetch.
     */
    where?: ExamEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamEvents to fetch.
     */
    orderBy?: ExamEventOrderByWithRelationInput | ExamEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamEvents.
     */
    cursor?: ExamEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamEvents.
     */
    distinct?: ExamEventScalarFieldEnum | ExamEventScalarFieldEnum[]
  }

  /**
   * ExamEvent findMany
   */
  export type ExamEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamEvent
     */
    select?: ExamEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamEventInclude<ExtArgs> | null
    /**
     * Filter, which ExamEvents to fetch.
     */
    where?: ExamEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamEvents to fetch.
     */
    orderBy?: ExamEventOrderByWithRelationInput | ExamEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExamEvents.
     */
    cursor?: ExamEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamEvents.
     */
    skip?: number
    distinct?: ExamEventScalarFieldEnum | ExamEventScalarFieldEnum[]
  }

  /**
   * ExamEvent create
   */
  export type ExamEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamEvent
     */
    select?: ExamEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamEventInclude<ExtArgs> | null
    /**
     * The data needed to create a ExamEvent.
     */
    data: XOR<ExamEventCreateInput, ExamEventUncheckedCreateInput>
  }

  /**
   * ExamEvent createMany
   */
  export type ExamEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExamEvents.
     */
    data: ExamEventCreateManyInput | ExamEventCreateManyInput[]
  }

  /**
   * ExamEvent createManyAndReturn
   */
  export type ExamEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamEvent
     */
    select?: ExamEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ExamEvents.
     */
    data: ExamEventCreateManyInput | ExamEventCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamEvent update
   */
  export type ExamEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamEvent
     */
    select?: ExamEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamEventInclude<ExtArgs> | null
    /**
     * The data needed to update a ExamEvent.
     */
    data: XOR<ExamEventUpdateInput, ExamEventUncheckedUpdateInput>
    /**
     * Choose, which ExamEvent to update.
     */
    where: ExamEventWhereUniqueInput
  }

  /**
   * ExamEvent updateMany
   */
  export type ExamEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExamEvents.
     */
    data: XOR<ExamEventUpdateManyMutationInput, ExamEventUncheckedUpdateManyInput>
    /**
     * Filter which ExamEvents to update
     */
    where?: ExamEventWhereInput
  }

  /**
   * ExamEvent upsert
   */
  export type ExamEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamEvent
     */
    select?: ExamEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamEventInclude<ExtArgs> | null
    /**
     * The filter to search for the ExamEvent to update in case it exists.
     */
    where: ExamEventWhereUniqueInput
    /**
     * In case the ExamEvent found by the `where` argument doesn't exist, create a new ExamEvent with this data.
     */
    create: XOR<ExamEventCreateInput, ExamEventUncheckedCreateInput>
    /**
     * In case the ExamEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamEventUpdateInput, ExamEventUncheckedUpdateInput>
  }

  /**
   * ExamEvent delete
   */
  export type ExamEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamEvent
     */
    select?: ExamEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamEventInclude<ExtArgs> | null
    /**
     * Filter which ExamEvent to delete.
     */
    where: ExamEventWhereUniqueInput
  }

  /**
   * ExamEvent deleteMany
   */
  export type ExamEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamEvents to delete
     */
    where?: ExamEventWhereInput
  }

  /**
   * ExamEvent without action
   */
  export type ExamEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamEvent
     */
    select?: ExamEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamEventInclude<ExtArgs> | null
  }


  /**
   * Model WeeklySummary
   */

  export type AggregateWeeklySummary = {
    _count: WeeklySummaryCountAggregateOutputType | null
    _avg: WeeklySummaryAvgAggregateOutputType | null
    _sum: WeeklySummarySumAggregateOutputType | null
    _min: WeeklySummaryMinAggregateOutputType | null
    _max: WeeklySummaryMaxAggregateOutputType | null
  }

  export type WeeklySummaryAvgAggregateOutputType = {
    totalMinutes: number | null
  }

  export type WeeklySummarySumAggregateOutputType = {
    totalMinutes: number | null
  }

  export type WeeklySummaryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    startDate: Date | null
    endDate: Date | null
    grade: string | null
    totalMinutes: number | null
    subjectBreakdown: string | null
    createdAt: Date | null
  }

  export type WeeklySummaryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    startDate: Date | null
    endDate: Date | null
    grade: string | null
    totalMinutes: number | null
    subjectBreakdown: string | null
    createdAt: Date | null
  }

  export type WeeklySummaryCountAggregateOutputType = {
    id: number
    userId: number
    startDate: number
    endDate: number
    grade: number
    totalMinutes: number
    subjectBreakdown: number
    createdAt: number
    _all: number
  }


  export type WeeklySummaryAvgAggregateInputType = {
    totalMinutes?: true
  }

  export type WeeklySummarySumAggregateInputType = {
    totalMinutes?: true
  }

  export type WeeklySummaryMinAggregateInputType = {
    id?: true
    userId?: true
    startDate?: true
    endDate?: true
    grade?: true
    totalMinutes?: true
    subjectBreakdown?: true
    createdAt?: true
  }

  export type WeeklySummaryMaxAggregateInputType = {
    id?: true
    userId?: true
    startDate?: true
    endDate?: true
    grade?: true
    totalMinutes?: true
    subjectBreakdown?: true
    createdAt?: true
  }

  export type WeeklySummaryCountAggregateInputType = {
    id?: true
    userId?: true
    startDate?: true
    endDate?: true
    grade?: true
    totalMinutes?: true
    subjectBreakdown?: true
    createdAt?: true
    _all?: true
  }

  export type WeeklySummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklySummary to aggregate.
     */
    where?: WeeklySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklySummaries to fetch.
     */
    orderBy?: WeeklySummaryOrderByWithRelationInput | WeeklySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeeklySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklySummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeeklySummaries
    **/
    _count?: true | WeeklySummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeeklySummaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeeklySummarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeeklySummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeeklySummaryMaxAggregateInputType
  }

  export type GetWeeklySummaryAggregateType<T extends WeeklySummaryAggregateArgs> = {
        [P in keyof T & keyof AggregateWeeklySummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeeklySummary[P]>
      : GetScalarType<T[P], AggregateWeeklySummary[P]>
  }




  export type WeeklySummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklySummaryWhereInput
    orderBy?: WeeklySummaryOrderByWithAggregationInput | WeeklySummaryOrderByWithAggregationInput[]
    by: WeeklySummaryScalarFieldEnum[] | WeeklySummaryScalarFieldEnum
    having?: WeeklySummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeeklySummaryCountAggregateInputType | true
    _avg?: WeeklySummaryAvgAggregateInputType
    _sum?: WeeklySummarySumAggregateInputType
    _min?: WeeklySummaryMinAggregateInputType
    _max?: WeeklySummaryMaxAggregateInputType
  }

  export type WeeklySummaryGroupByOutputType = {
    id: string
    userId: string
    startDate: Date
    endDate: Date
    grade: string
    totalMinutes: number
    subjectBreakdown: string
    createdAt: Date
    _count: WeeklySummaryCountAggregateOutputType | null
    _avg: WeeklySummaryAvgAggregateOutputType | null
    _sum: WeeklySummarySumAggregateOutputType | null
    _min: WeeklySummaryMinAggregateOutputType | null
    _max: WeeklySummaryMaxAggregateOutputType | null
  }

  type GetWeeklySummaryGroupByPayload<T extends WeeklySummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeeklySummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeeklySummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeeklySummaryGroupByOutputType[P]>
            : GetScalarType<T[P], WeeklySummaryGroupByOutputType[P]>
        }
      >
    >


  export type WeeklySummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startDate?: boolean
    endDate?: boolean
    grade?: boolean
    totalMinutes?: boolean
    subjectBreakdown?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklySummary"]>

  export type WeeklySummarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startDate?: boolean
    endDate?: boolean
    grade?: boolean
    totalMinutes?: boolean
    subjectBreakdown?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklySummary"]>

  export type WeeklySummarySelectScalar = {
    id?: boolean
    userId?: boolean
    startDate?: boolean
    endDate?: boolean
    grade?: boolean
    totalMinutes?: boolean
    subjectBreakdown?: boolean
    createdAt?: boolean
  }

  export type WeeklySummaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WeeklySummaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WeeklySummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeeklySummary"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      startDate: Date
      endDate: Date
      grade: string
      totalMinutes: number
      subjectBreakdown: string
      createdAt: Date
    }, ExtArgs["result"]["weeklySummary"]>
    composites: {}
  }

  type WeeklySummaryGetPayload<S extends boolean | null | undefined | WeeklySummaryDefaultArgs> = $Result.GetResult<Prisma.$WeeklySummaryPayload, S>

  type WeeklySummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WeeklySummaryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WeeklySummaryCountAggregateInputType | true
    }

  export interface WeeklySummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeeklySummary'], meta: { name: 'WeeklySummary' } }
    /**
     * Find zero or one WeeklySummary that matches the filter.
     * @param {WeeklySummaryFindUniqueArgs} args - Arguments to find a WeeklySummary
     * @example
     * // Get one WeeklySummary
     * const weeklySummary = await prisma.weeklySummary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeeklySummaryFindUniqueArgs>(args: SelectSubset<T, WeeklySummaryFindUniqueArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WeeklySummary that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WeeklySummaryFindUniqueOrThrowArgs} args - Arguments to find a WeeklySummary
     * @example
     * // Get one WeeklySummary
     * const weeklySummary = await prisma.weeklySummary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeeklySummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, WeeklySummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WeeklySummary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySummaryFindFirstArgs} args - Arguments to find a WeeklySummary
     * @example
     * // Get one WeeklySummary
     * const weeklySummary = await prisma.weeklySummary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeeklySummaryFindFirstArgs>(args?: SelectSubset<T, WeeklySummaryFindFirstArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WeeklySummary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySummaryFindFirstOrThrowArgs} args - Arguments to find a WeeklySummary
     * @example
     * // Get one WeeklySummary
     * const weeklySummary = await prisma.weeklySummary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeeklySummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, WeeklySummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WeeklySummaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeeklySummaries
     * const weeklySummaries = await prisma.weeklySummary.findMany()
     * 
     * // Get first 10 WeeklySummaries
     * const weeklySummaries = await prisma.weeklySummary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weeklySummaryWithIdOnly = await prisma.weeklySummary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeeklySummaryFindManyArgs>(args?: SelectSubset<T, WeeklySummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WeeklySummary.
     * @param {WeeklySummaryCreateArgs} args - Arguments to create a WeeklySummary.
     * @example
     * // Create one WeeklySummary
     * const WeeklySummary = await prisma.weeklySummary.create({
     *   data: {
     *     // ... data to create a WeeklySummary
     *   }
     * })
     * 
     */
    create<T extends WeeklySummaryCreateArgs>(args: SelectSubset<T, WeeklySummaryCreateArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WeeklySummaries.
     * @param {WeeklySummaryCreateManyArgs} args - Arguments to create many WeeklySummaries.
     * @example
     * // Create many WeeklySummaries
     * const weeklySummary = await prisma.weeklySummary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeeklySummaryCreateManyArgs>(args?: SelectSubset<T, WeeklySummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeeklySummaries and returns the data saved in the database.
     * @param {WeeklySummaryCreateManyAndReturnArgs} args - Arguments to create many WeeklySummaries.
     * @example
     * // Create many WeeklySummaries
     * const weeklySummary = await prisma.weeklySummary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeeklySummaries and only return the `id`
     * const weeklySummaryWithIdOnly = await prisma.weeklySummary.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeeklySummaryCreateManyAndReturnArgs>(args?: SelectSubset<T, WeeklySummaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WeeklySummary.
     * @param {WeeklySummaryDeleteArgs} args - Arguments to delete one WeeklySummary.
     * @example
     * // Delete one WeeklySummary
     * const WeeklySummary = await prisma.weeklySummary.delete({
     *   where: {
     *     // ... filter to delete one WeeklySummary
     *   }
     * })
     * 
     */
    delete<T extends WeeklySummaryDeleteArgs>(args: SelectSubset<T, WeeklySummaryDeleteArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WeeklySummary.
     * @param {WeeklySummaryUpdateArgs} args - Arguments to update one WeeklySummary.
     * @example
     * // Update one WeeklySummary
     * const weeklySummary = await prisma.weeklySummary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeeklySummaryUpdateArgs>(args: SelectSubset<T, WeeklySummaryUpdateArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WeeklySummaries.
     * @param {WeeklySummaryDeleteManyArgs} args - Arguments to filter WeeklySummaries to delete.
     * @example
     * // Delete a few WeeklySummaries
     * const { count } = await prisma.weeklySummary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeeklySummaryDeleteManyArgs>(args?: SelectSubset<T, WeeklySummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklySummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeeklySummaries
     * const weeklySummary = await prisma.weeklySummary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeeklySummaryUpdateManyArgs>(args: SelectSubset<T, WeeklySummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WeeklySummary.
     * @param {WeeklySummaryUpsertArgs} args - Arguments to update or create a WeeklySummary.
     * @example
     * // Update or create a WeeklySummary
     * const weeklySummary = await prisma.weeklySummary.upsert({
     *   create: {
     *     // ... data to create a WeeklySummary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeeklySummary we want to update
     *   }
     * })
     */
    upsert<T extends WeeklySummaryUpsertArgs>(args: SelectSubset<T, WeeklySummaryUpsertArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WeeklySummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySummaryCountArgs} args - Arguments to filter WeeklySummaries to count.
     * @example
     * // Count the number of WeeklySummaries
     * const count = await prisma.weeklySummary.count({
     *   where: {
     *     // ... the filter for the WeeklySummaries we want to count
     *   }
     * })
    **/
    count<T extends WeeklySummaryCountArgs>(
      args?: Subset<T, WeeklySummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeeklySummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeeklySummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeeklySummaryAggregateArgs>(args: Subset<T, WeeklySummaryAggregateArgs>): Prisma.PrismaPromise<GetWeeklySummaryAggregateType<T>>

    /**
     * Group by WeeklySummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySummaryGroupByArgs} args - Group by arguments.
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
      T extends WeeklySummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeeklySummaryGroupByArgs['orderBy'] }
        : { orderBy?: WeeklySummaryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeeklySummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeeklySummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeeklySummary model
   */
  readonly fields: WeeklySummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeeklySummary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeeklySummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the WeeklySummary model
   */ 
  interface WeeklySummaryFieldRefs {
    readonly id: FieldRef<"WeeklySummary", 'String'>
    readonly userId: FieldRef<"WeeklySummary", 'String'>
    readonly startDate: FieldRef<"WeeklySummary", 'DateTime'>
    readonly endDate: FieldRef<"WeeklySummary", 'DateTime'>
    readonly grade: FieldRef<"WeeklySummary", 'String'>
    readonly totalMinutes: FieldRef<"WeeklySummary", 'Int'>
    readonly subjectBreakdown: FieldRef<"WeeklySummary", 'String'>
    readonly createdAt: FieldRef<"WeeklySummary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WeeklySummary findUnique
   */
  export type WeeklySummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * Filter, which WeeklySummary to fetch.
     */
    where: WeeklySummaryWhereUniqueInput
  }

  /**
   * WeeklySummary findUniqueOrThrow
   */
  export type WeeklySummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * Filter, which WeeklySummary to fetch.
     */
    where: WeeklySummaryWhereUniqueInput
  }

  /**
   * WeeklySummary findFirst
   */
  export type WeeklySummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * Filter, which WeeklySummary to fetch.
     */
    where?: WeeklySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklySummaries to fetch.
     */
    orderBy?: WeeklySummaryOrderByWithRelationInput | WeeklySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklySummaries.
     */
    cursor?: WeeklySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklySummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklySummaries.
     */
    distinct?: WeeklySummaryScalarFieldEnum | WeeklySummaryScalarFieldEnum[]
  }

  /**
   * WeeklySummary findFirstOrThrow
   */
  export type WeeklySummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * Filter, which WeeklySummary to fetch.
     */
    where?: WeeklySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklySummaries to fetch.
     */
    orderBy?: WeeklySummaryOrderByWithRelationInput | WeeklySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklySummaries.
     */
    cursor?: WeeklySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklySummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklySummaries.
     */
    distinct?: WeeklySummaryScalarFieldEnum | WeeklySummaryScalarFieldEnum[]
  }

  /**
   * WeeklySummary findMany
   */
  export type WeeklySummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * Filter, which WeeklySummaries to fetch.
     */
    where?: WeeklySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklySummaries to fetch.
     */
    orderBy?: WeeklySummaryOrderByWithRelationInput | WeeklySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeeklySummaries.
     */
    cursor?: WeeklySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklySummaries.
     */
    skip?: number
    distinct?: WeeklySummaryScalarFieldEnum | WeeklySummaryScalarFieldEnum[]
  }

  /**
   * WeeklySummary create
   */
  export type WeeklySummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * The data needed to create a WeeklySummary.
     */
    data: XOR<WeeklySummaryCreateInput, WeeklySummaryUncheckedCreateInput>
  }

  /**
   * WeeklySummary createMany
   */
  export type WeeklySummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeeklySummaries.
     */
    data: WeeklySummaryCreateManyInput | WeeklySummaryCreateManyInput[]
  }

  /**
   * WeeklySummary createManyAndReturn
   */
  export type WeeklySummaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WeeklySummaries.
     */
    data: WeeklySummaryCreateManyInput | WeeklySummaryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeeklySummary update
   */
  export type WeeklySummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * The data needed to update a WeeklySummary.
     */
    data: XOR<WeeklySummaryUpdateInput, WeeklySummaryUncheckedUpdateInput>
    /**
     * Choose, which WeeklySummary to update.
     */
    where: WeeklySummaryWhereUniqueInput
  }

  /**
   * WeeklySummary updateMany
   */
  export type WeeklySummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeeklySummaries.
     */
    data: XOR<WeeklySummaryUpdateManyMutationInput, WeeklySummaryUncheckedUpdateManyInput>
    /**
     * Filter which WeeklySummaries to update
     */
    where?: WeeklySummaryWhereInput
  }

  /**
   * WeeklySummary upsert
   */
  export type WeeklySummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * The filter to search for the WeeklySummary to update in case it exists.
     */
    where: WeeklySummaryWhereUniqueInput
    /**
     * In case the WeeklySummary found by the `where` argument doesn't exist, create a new WeeklySummary with this data.
     */
    create: XOR<WeeklySummaryCreateInput, WeeklySummaryUncheckedCreateInput>
    /**
     * In case the WeeklySummary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeeklySummaryUpdateInput, WeeklySummaryUncheckedUpdateInput>
  }

  /**
   * WeeklySummary delete
   */
  export type WeeklySummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * Filter which WeeklySummary to delete.
     */
    where: WeeklySummaryWhereUniqueInput
  }

  /**
   * WeeklySummary deleteMany
   */
  export type WeeklySummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklySummaries to delete
     */
    where?: WeeklySummaryWhereInput
  }

  /**
   * WeeklySummary without action
   */
  export type WeeklySummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
  }


  /**
   * Model MasteryItem
   */

  export type AggregateMasteryItem = {
    _count: MasteryItemCountAggregateOutputType | null
    _min: MasteryItemMinAggregateOutputType | null
    _max: MasteryItemMaxAggregateOutputType | null
  }

  export type MasteryItemMinAggregateOutputType = {
    id: string | null
    userId: string | null
    subject: string | null
    title: string | null
    isCompleted: boolean | null
    createdAt: Date | null
  }

  export type MasteryItemMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    subject: string | null
    title: string | null
    isCompleted: boolean | null
    createdAt: Date | null
  }

  export type MasteryItemCountAggregateOutputType = {
    id: number
    userId: number
    subject: number
    title: number
    isCompleted: number
    createdAt: number
    _all: number
  }


  export type MasteryItemMinAggregateInputType = {
    id?: true
    userId?: true
    subject?: true
    title?: true
    isCompleted?: true
    createdAt?: true
  }

  export type MasteryItemMaxAggregateInputType = {
    id?: true
    userId?: true
    subject?: true
    title?: true
    isCompleted?: true
    createdAt?: true
  }

  export type MasteryItemCountAggregateInputType = {
    id?: true
    userId?: true
    subject?: true
    title?: true
    isCompleted?: true
    createdAt?: true
    _all?: true
  }

  export type MasteryItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasteryItem to aggregate.
     */
    where?: MasteryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasteryItems to fetch.
     */
    orderBy?: MasteryItemOrderByWithRelationInput | MasteryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MasteryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasteryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasteryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MasteryItems
    **/
    _count?: true | MasteryItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MasteryItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MasteryItemMaxAggregateInputType
  }

  export type GetMasteryItemAggregateType<T extends MasteryItemAggregateArgs> = {
        [P in keyof T & keyof AggregateMasteryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMasteryItem[P]>
      : GetScalarType<T[P], AggregateMasteryItem[P]>
  }




  export type MasteryItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasteryItemWhereInput
    orderBy?: MasteryItemOrderByWithAggregationInput | MasteryItemOrderByWithAggregationInput[]
    by: MasteryItemScalarFieldEnum[] | MasteryItemScalarFieldEnum
    having?: MasteryItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MasteryItemCountAggregateInputType | true
    _min?: MasteryItemMinAggregateInputType
    _max?: MasteryItemMaxAggregateInputType
  }

  export type MasteryItemGroupByOutputType = {
    id: string
    userId: string
    subject: string
    title: string
    isCompleted: boolean
    createdAt: Date
    _count: MasteryItemCountAggregateOutputType | null
    _min: MasteryItemMinAggregateOutputType | null
    _max: MasteryItemMaxAggregateOutputType | null
  }

  type GetMasteryItemGroupByPayload<T extends MasteryItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MasteryItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MasteryItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MasteryItemGroupByOutputType[P]>
            : GetScalarType<T[P], MasteryItemGroupByOutputType[P]>
        }
      >
    >


  export type MasteryItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subject?: boolean
    title?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masteryItem"]>

  export type MasteryItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subject?: boolean
    title?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masteryItem"]>

  export type MasteryItemSelectScalar = {
    id?: boolean
    userId?: boolean
    subject?: boolean
    title?: boolean
    isCompleted?: boolean
    createdAt?: boolean
  }

  export type MasteryItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MasteryItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MasteryItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MasteryItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      subject: string
      title: string
      isCompleted: boolean
      createdAt: Date
    }, ExtArgs["result"]["masteryItem"]>
    composites: {}
  }

  type MasteryItemGetPayload<S extends boolean | null | undefined | MasteryItemDefaultArgs> = $Result.GetResult<Prisma.$MasteryItemPayload, S>

  type MasteryItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MasteryItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MasteryItemCountAggregateInputType | true
    }

  export interface MasteryItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MasteryItem'], meta: { name: 'MasteryItem' } }
    /**
     * Find zero or one MasteryItem that matches the filter.
     * @param {MasteryItemFindUniqueArgs} args - Arguments to find a MasteryItem
     * @example
     * // Get one MasteryItem
     * const masteryItem = await prisma.masteryItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MasteryItemFindUniqueArgs>(args: SelectSubset<T, MasteryItemFindUniqueArgs<ExtArgs>>): Prisma__MasteryItemClient<$Result.GetResult<Prisma.$MasteryItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MasteryItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MasteryItemFindUniqueOrThrowArgs} args - Arguments to find a MasteryItem
     * @example
     * // Get one MasteryItem
     * const masteryItem = await prisma.masteryItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MasteryItemFindUniqueOrThrowArgs>(args: SelectSubset<T, MasteryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MasteryItemClient<$Result.GetResult<Prisma.$MasteryItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MasteryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasteryItemFindFirstArgs} args - Arguments to find a MasteryItem
     * @example
     * // Get one MasteryItem
     * const masteryItem = await prisma.masteryItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MasteryItemFindFirstArgs>(args?: SelectSubset<T, MasteryItemFindFirstArgs<ExtArgs>>): Prisma__MasteryItemClient<$Result.GetResult<Prisma.$MasteryItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MasteryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasteryItemFindFirstOrThrowArgs} args - Arguments to find a MasteryItem
     * @example
     * // Get one MasteryItem
     * const masteryItem = await prisma.masteryItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MasteryItemFindFirstOrThrowArgs>(args?: SelectSubset<T, MasteryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MasteryItemClient<$Result.GetResult<Prisma.$MasteryItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MasteryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasteryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MasteryItems
     * const masteryItems = await prisma.masteryItem.findMany()
     * 
     * // Get first 10 MasteryItems
     * const masteryItems = await prisma.masteryItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const masteryItemWithIdOnly = await prisma.masteryItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MasteryItemFindManyArgs>(args?: SelectSubset<T, MasteryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasteryItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MasteryItem.
     * @param {MasteryItemCreateArgs} args - Arguments to create a MasteryItem.
     * @example
     * // Create one MasteryItem
     * const MasteryItem = await prisma.masteryItem.create({
     *   data: {
     *     // ... data to create a MasteryItem
     *   }
     * })
     * 
     */
    create<T extends MasteryItemCreateArgs>(args: SelectSubset<T, MasteryItemCreateArgs<ExtArgs>>): Prisma__MasteryItemClient<$Result.GetResult<Prisma.$MasteryItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MasteryItems.
     * @param {MasteryItemCreateManyArgs} args - Arguments to create many MasteryItems.
     * @example
     * // Create many MasteryItems
     * const masteryItem = await prisma.masteryItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MasteryItemCreateManyArgs>(args?: SelectSubset<T, MasteryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MasteryItems and returns the data saved in the database.
     * @param {MasteryItemCreateManyAndReturnArgs} args - Arguments to create many MasteryItems.
     * @example
     * // Create many MasteryItems
     * const masteryItem = await prisma.masteryItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MasteryItems and only return the `id`
     * const masteryItemWithIdOnly = await prisma.masteryItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MasteryItemCreateManyAndReturnArgs>(args?: SelectSubset<T, MasteryItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasteryItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MasteryItem.
     * @param {MasteryItemDeleteArgs} args - Arguments to delete one MasteryItem.
     * @example
     * // Delete one MasteryItem
     * const MasteryItem = await prisma.masteryItem.delete({
     *   where: {
     *     // ... filter to delete one MasteryItem
     *   }
     * })
     * 
     */
    delete<T extends MasteryItemDeleteArgs>(args: SelectSubset<T, MasteryItemDeleteArgs<ExtArgs>>): Prisma__MasteryItemClient<$Result.GetResult<Prisma.$MasteryItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MasteryItem.
     * @param {MasteryItemUpdateArgs} args - Arguments to update one MasteryItem.
     * @example
     * // Update one MasteryItem
     * const masteryItem = await prisma.masteryItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MasteryItemUpdateArgs>(args: SelectSubset<T, MasteryItemUpdateArgs<ExtArgs>>): Prisma__MasteryItemClient<$Result.GetResult<Prisma.$MasteryItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MasteryItems.
     * @param {MasteryItemDeleteManyArgs} args - Arguments to filter MasteryItems to delete.
     * @example
     * // Delete a few MasteryItems
     * const { count } = await prisma.masteryItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MasteryItemDeleteManyArgs>(args?: SelectSubset<T, MasteryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasteryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasteryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MasteryItems
     * const masteryItem = await prisma.masteryItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MasteryItemUpdateManyArgs>(args: SelectSubset<T, MasteryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MasteryItem.
     * @param {MasteryItemUpsertArgs} args - Arguments to update or create a MasteryItem.
     * @example
     * // Update or create a MasteryItem
     * const masteryItem = await prisma.masteryItem.upsert({
     *   create: {
     *     // ... data to create a MasteryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MasteryItem we want to update
     *   }
     * })
     */
    upsert<T extends MasteryItemUpsertArgs>(args: SelectSubset<T, MasteryItemUpsertArgs<ExtArgs>>): Prisma__MasteryItemClient<$Result.GetResult<Prisma.$MasteryItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MasteryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasteryItemCountArgs} args - Arguments to filter MasteryItems to count.
     * @example
     * // Count the number of MasteryItems
     * const count = await prisma.masteryItem.count({
     *   where: {
     *     // ... the filter for the MasteryItems we want to count
     *   }
     * })
    **/
    count<T extends MasteryItemCountArgs>(
      args?: Subset<T, MasteryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MasteryItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MasteryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasteryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MasteryItemAggregateArgs>(args: Subset<T, MasteryItemAggregateArgs>): Prisma.PrismaPromise<GetMasteryItemAggregateType<T>>

    /**
     * Group by MasteryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasteryItemGroupByArgs} args - Group by arguments.
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
      T extends MasteryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MasteryItemGroupByArgs['orderBy'] }
        : { orderBy?: MasteryItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MasteryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMasteryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MasteryItem model
   */
  readonly fields: MasteryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MasteryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MasteryItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the MasteryItem model
   */ 
  interface MasteryItemFieldRefs {
    readonly id: FieldRef<"MasteryItem", 'String'>
    readonly userId: FieldRef<"MasteryItem", 'String'>
    readonly subject: FieldRef<"MasteryItem", 'String'>
    readonly title: FieldRef<"MasteryItem", 'String'>
    readonly isCompleted: FieldRef<"MasteryItem", 'Boolean'>
    readonly createdAt: FieldRef<"MasteryItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MasteryItem findUnique
   */
  export type MasteryItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasteryItem
     */
    select?: MasteryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasteryItemInclude<ExtArgs> | null
    /**
     * Filter, which MasteryItem to fetch.
     */
    where: MasteryItemWhereUniqueInput
  }

  /**
   * MasteryItem findUniqueOrThrow
   */
  export type MasteryItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasteryItem
     */
    select?: MasteryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasteryItemInclude<ExtArgs> | null
    /**
     * Filter, which MasteryItem to fetch.
     */
    where: MasteryItemWhereUniqueInput
  }

  /**
   * MasteryItem findFirst
   */
  export type MasteryItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasteryItem
     */
    select?: MasteryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasteryItemInclude<ExtArgs> | null
    /**
     * Filter, which MasteryItem to fetch.
     */
    where?: MasteryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasteryItems to fetch.
     */
    orderBy?: MasteryItemOrderByWithRelationInput | MasteryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasteryItems.
     */
    cursor?: MasteryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasteryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasteryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasteryItems.
     */
    distinct?: MasteryItemScalarFieldEnum | MasteryItemScalarFieldEnum[]
  }

  /**
   * MasteryItem findFirstOrThrow
   */
  export type MasteryItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasteryItem
     */
    select?: MasteryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasteryItemInclude<ExtArgs> | null
    /**
     * Filter, which MasteryItem to fetch.
     */
    where?: MasteryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasteryItems to fetch.
     */
    orderBy?: MasteryItemOrderByWithRelationInput | MasteryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasteryItems.
     */
    cursor?: MasteryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasteryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasteryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasteryItems.
     */
    distinct?: MasteryItemScalarFieldEnum | MasteryItemScalarFieldEnum[]
  }

  /**
   * MasteryItem findMany
   */
  export type MasteryItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasteryItem
     */
    select?: MasteryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasteryItemInclude<ExtArgs> | null
    /**
     * Filter, which MasteryItems to fetch.
     */
    where?: MasteryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasteryItems to fetch.
     */
    orderBy?: MasteryItemOrderByWithRelationInput | MasteryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MasteryItems.
     */
    cursor?: MasteryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasteryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasteryItems.
     */
    skip?: number
    distinct?: MasteryItemScalarFieldEnum | MasteryItemScalarFieldEnum[]
  }

  /**
   * MasteryItem create
   */
  export type MasteryItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasteryItem
     */
    select?: MasteryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasteryItemInclude<ExtArgs> | null
    /**
     * The data needed to create a MasteryItem.
     */
    data: XOR<MasteryItemCreateInput, MasteryItemUncheckedCreateInput>
  }

  /**
   * MasteryItem createMany
   */
  export type MasteryItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MasteryItems.
     */
    data: MasteryItemCreateManyInput | MasteryItemCreateManyInput[]
  }

  /**
   * MasteryItem createManyAndReturn
   */
  export type MasteryItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasteryItem
     */
    select?: MasteryItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MasteryItems.
     */
    data: MasteryItemCreateManyInput | MasteryItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasteryItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MasteryItem update
   */
  export type MasteryItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasteryItem
     */
    select?: MasteryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasteryItemInclude<ExtArgs> | null
    /**
     * The data needed to update a MasteryItem.
     */
    data: XOR<MasteryItemUpdateInput, MasteryItemUncheckedUpdateInput>
    /**
     * Choose, which MasteryItem to update.
     */
    where: MasteryItemWhereUniqueInput
  }

  /**
   * MasteryItem updateMany
   */
  export type MasteryItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MasteryItems.
     */
    data: XOR<MasteryItemUpdateManyMutationInput, MasteryItemUncheckedUpdateManyInput>
    /**
     * Filter which MasteryItems to update
     */
    where?: MasteryItemWhereInput
  }

  /**
   * MasteryItem upsert
   */
  export type MasteryItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasteryItem
     */
    select?: MasteryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasteryItemInclude<ExtArgs> | null
    /**
     * The filter to search for the MasteryItem to update in case it exists.
     */
    where: MasteryItemWhereUniqueInput
    /**
     * In case the MasteryItem found by the `where` argument doesn't exist, create a new MasteryItem with this data.
     */
    create: XOR<MasteryItemCreateInput, MasteryItemUncheckedCreateInput>
    /**
     * In case the MasteryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MasteryItemUpdateInput, MasteryItemUncheckedUpdateInput>
  }

  /**
   * MasteryItem delete
   */
  export type MasteryItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasteryItem
     */
    select?: MasteryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasteryItemInclude<ExtArgs> | null
    /**
     * Filter which MasteryItem to delete.
     */
    where: MasteryItemWhereUniqueInput
  }

  /**
   * MasteryItem deleteMany
   */
  export type MasteryItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasteryItems to delete
     */
    where?: MasteryItemWhereInput
  }

  /**
   * MasteryItem without action
   */
  export type MasteryItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasteryItem
     */
    select?: MasteryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasteryItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    description: 'description',
    status: 'status',
    progress: 'progress',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectDocScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    title: 'title',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectDocScalarFieldEnum = (typeof ProjectDocScalarFieldEnum)[keyof typeof ProjectDocScalarFieldEnum]


  export const ChatSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatSessionScalarFieldEnum = (typeof ChatSessionScalarFieldEnum)[keyof typeof ChatSessionScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    role: 'role',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const ScheduleTemplateScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    dayOfWeek: 'dayOfWeek',
    subject: 'subject',
    startTime: 'startTime',
    endTime: 'endTime',
    deadlineDay: 'deadlineDay',
    type: 'type'
  };

  export type ScheduleTemplateScalarFieldEnum = (typeof ScheduleTemplateScalarFieldEnum)[keyof typeof ScheduleTemplateScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    templateId: 'templateId',
    date: 'date',
    startTime: 'startTime',
    endTime: 'endTime',
    subject: 'subject',
    isDone: 'isDone',
    isMissed: 'isMissed',
    isDeleted: 'isDeleted',
    type: 'type'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const MarkedDayScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date'
  };

  export type MarkedDayScalarFieldEnum = (typeof MarkedDayScalarFieldEnum)[keyof typeof MarkedDayScalarFieldEnum]


  export const UserProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    currentStreak: 'currentStreak',
    longestStreak: 'longestStreak',
    lastActiveDate: 'lastActiveDate',
    geminiApiKey: 'geminiApiKey',
    focusSessions: 'focusSessions',
    totalFocusMinutes: 'totalFocusMinutes',
    xp: 'xp',
    level: 'level'
  };

  export type UserProgressScalarFieldEnum = (typeof UserProgressScalarFieldEnum)[keyof typeof UserProgressScalarFieldEnum]


  export const ResourceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    subject: 'subject',
    title: 'title',
    type: 'type',
    url: 'url',
    createdAt: 'createdAt'
  };

  export type ResourceScalarFieldEnum = (typeof ResourceScalarFieldEnum)[keyof typeof ResourceScalarFieldEnum]


  export const ExamEventScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    date: 'date',
    priority: 'priority',
    createdAt: 'createdAt'
  };

  export type ExamEventScalarFieldEnum = (typeof ExamEventScalarFieldEnum)[keyof typeof ExamEventScalarFieldEnum]


  export const WeeklySummaryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    startDate: 'startDate',
    endDate: 'endDate',
    grade: 'grade',
    totalMinutes: 'totalMinutes',
    subjectBreakdown: 'subjectBreakdown',
    createdAt: 'createdAt'
  };

  export type WeeklySummaryScalarFieldEnum = (typeof WeeklySummaryScalarFieldEnum)[keyof typeof WeeklySummaryScalarFieldEnum]


  export const MasteryItemScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    subject: 'subject',
    title: 'title',
    isCompleted: 'isCompleted',
    createdAt: 'createdAt'
  };

  export type MasteryItemScalarFieldEnum = (typeof MasteryItemScalarFieldEnum)[keyof typeof MasteryItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    templates?: ScheduleTemplateListRelationFilter
    tasks?: TaskListRelationFilter
    resources?: ResourceListRelationFilter
    examEvents?: ExamEventListRelationFilter
    weeklySummaries?: WeeklySummaryListRelationFilter
    masteryItems?: MasteryItemListRelationFilter
    markedDays?: MarkedDayListRelationFilter
    progress?: XOR<UserProgressNullableRelationFilter, UserProgressWhereInput> | null
    chatSessions?: ChatSessionListRelationFilter
    projects?: ProjectListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    templates?: ScheduleTemplateOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
    resources?: ResourceOrderByRelationAggregateInput
    examEvents?: ExamEventOrderByRelationAggregateInput
    weeklySummaries?: WeeklySummaryOrderByRelationAggregateInput
    masteryItems?: MasteryItemOrderByRelationAggregateInput
    markedDays?: MarkedDayOrderByRelationAggregateInput
    progress?: UserProgressOrderByWithRelationInput
    chatSessions?: ChatSessionOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    templates?: ScheduleTemplateListRelationFilter
    tasks?: TaskListRelationFilter
    resources?: ResourceListRelationFilter
    examEvents?: ExamEventListRelationFilter
    weeklySummaries?: WeeklySummaryListRelationFilter
    masteryItems?: MasteryItemListRelationFilter
    markedDays?: MarkedDayListRelationFilter
    progress?: XOR<UserProgressNullableRelationFilter, UserProgressWhereInput> | null
    chatSessions?: ChatSessionListRelationFilter
    projects?: ProjectListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    userId?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    status?: StringFilter<"Project"> | string
    progress?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    docs?: ProjectDocListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    docs?: ProjectDocOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    userId?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    status?: StringFilter<"Project"> | string
    progress?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    docs?: ProjectDocListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    userId?: StringWithAggregatesFilter<"Project"> | string
    title?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    status?: StringWithAggregatesFilter<"Project"> | string
    progress?: IntWithAggregatesFilter<"Project"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ProjectDocWhereInput = {
    AND?: ProjectDocWhereInput | ProjectDocWhereInput[]
    OR?: ProjectDocWhereInput[]
    NOT?: ProjectDocWhereInput | ProjectDocWhereInput[]
    id?: StringFilter<"ProjectDoc"> | string
    projectId?: StringFilter<"ProjectDoc"> | string
    title?: StringFilter<"ProjectDoc"> | string
    content?: StringFilter<"ProjectDoc"> | string
    createdAt?: DateTimeFilter<"ProjectDoc"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectDoc"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }

  export type ProjectDocOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ProjectDocWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectDocWhereInput | ProjectDocWhereInput[]
    OR?: ProjectDocWhereInput[]
    NOT?: ProjectDocWhereInput | ProjectDocWhereInput[]
    projectId?: StringFilter<"ProjectDoc"> | string
    title?: StringFilter<"ProjectDoc"> | string
    content?: StringFilter<"ProjectDoc"> | string
    createdAt?: DateTimeFilter<"ProjectDoc"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectDoc"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }, "id">

  export type ProjectDocOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectDocCountOrderByAggregateInput
    _max?: ProjectDocMaxOrderByAggregateInput
    _min?: ProjectDocMinOrderByAggregateInput
  }

  export type ProjectDocScalarWhereWithAggregatesInput = {
    AND?: ProjectDocScalarWhereWithAggregatesInput | ProjectDocScalarWhereWithAggregatesInput[]
    OR?: ProjectDocScalarWhereWithAggregatesInput[]
    NOT?: ProjectDocScalarWhereWithAggregatesInput | ProjectDocScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectDoc"> | string
    projectId?: StringWithAggregatesFilter<"ProjectDoc"> | string
    title?: StringWithAggregatesFilter<"ProjectDoc"> | string
    content?: StringWithAggregatesFilter<"ProjectDoc"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProjectDoc"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectDoc"> | Date | string
  }

  export type ChatSessionWhereInput = {
    AND?: ChatSessionWhereInput | ChatSessionWhereInput[]
    OR?: ChatSessionWhereInput[]
    NOT?: ChatSessionWhereInput | ChatSessionWhereInput[]
    id?: StringFilter<"ChatSession"> | string
    userId?: StringFilter<"ChatSession"> | string
    title?: StringFilter<"ChatSession"> | string
    createdAt?: DateTimeFilter<"ChatSession"> | Date | string
    updatedAt?: DateTimeFilter<"ChatSession"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    messages?: ChatMessageListRelationFilter
  }

  export type ChatSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    messages?: ChatMessageOrderByRelationAggregateInput
  }

  export type ChatSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatSessionWhereInput | ChatSessionWhereInput[]
    OR?: ChatSessionWhereInput[]
    NOT?: ChatSessionWhereInput | ChatSessionWhereInput[]
    userId?: StringFilter<"ChatSession"> | string
    title?: StringFilter<"ChatSession"> | string
    createdAt?: DateTimeFilter<"ChatSession"> | Date | string
    updatedAt?: DateTimeFilter<"ChatSession"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    messages?: ChatMessageListRelationFilter
  }, "id">

  export type ChatSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatSessionCountOrderByAggregateInput
    _max?: ChatSessionMaxOrderByAggregateInput
    _min?: ChatSessionMinOrderByAggregateInput
  }

  export type ChatSessionScalarWhereWithAggregatesInput = {
    AND?: ChatSessionScalarWhereWithAggregatesInput | ChatSessionScalarWhereWithAggregatesInput[]
    OR?: ChatSessionScalarWhereWithAggregatesInput[]
    NOT?: ChatSessionScalarWhereWithAggregatesInput | ChatSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatSession"> | string
    userId?: StringWithAggregatesFilter<"ChatSession"> | string
    title?: StringWithAggregatesFilter<"ChatSession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatSession"> | Date | string
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    sessionId?: StringFilter<"ChatMessage"> | string
    role?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    session?: XOR<ChatSessionRelationFilter, ChatSessionWhereInput>
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    session?: ChatSessionOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    sessionId?: StringFilter<"ChatMessage"> | string
    role?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    session?: XOR<ChatSessionRelationFilter, ChatSessionWhereInput>
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessage"> | string
    sessionId?: StringWithAggregatesFilter<"ChatMessage"> | string
    role?: StringWithAggregatesFilter<"ChatMessage"> | string
    content?: StringWithAggregatesFilter<"ChatMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type ScheduleTemplateWhereInput = {
    AND?: ScheduleTemplateWhereInput | ScheduleTemplateWhereInput[]
    OR?: ScheduleTemplateWhereInput[]
    NOT?: ScheduleTemplateWhereInput | ScheduleTemplateWhereInput[]
    id?: StringFilter<"ScheduleTemplate"> | string
    userId?: StringFilter<"ScheduleTemplate"> | string
    dayOfWeek?: IntFilter<"ScheduleTemplate"> | number
    subject?: StringFilter<"ScheduleTemplate"> | string
    startTime?: StringFilter<"ScheduleTemplate"> | string
    endTime?: StringFilter<"ScheduleTemplate"> | string
    deadlineDay?: StringFilter<"ScheduleTemplate"> | string
    type?: StringFilter<"ScheduleTemplate"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    tasks?: TaskListRelationFilter
  }

  export type ScheduleTemplateOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    dayOfWeek?: SortOrder
    subject?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    deadlineDay?: SortOrder
    type?: SortOrder
    user?: UserOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type ScheduleTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScheduleTemplateWhereInput | ScheduleTemplateWhereInput[]
    OR?: ScheduleTemplateWhereInput[]
    NOT?: ScheduleTemplateWhereInput | ScheduleTemplateWhereInput[]
    userId?: StringFilter<"ScheduleTemplate"> | string
    dayOfWeek?: IntFilter<"ScheduleTemplate"> | number
    subject?: StringFilter<"ScheduleTemplate"> | string
    startTime?: StringFilter<"ScheduleTemplate"> | string
    endTime?: StringFilter<"ScheduleTemplate"> | string
    deadlineDay?: StringFilter<"ScheduleTemplate"> | string
    type?: StringFilter<"ScheduleTemplate"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    tasks?: TaskListRelationFilter
  }, "id">

  export type ScheduleTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    dayOfWeek?: SortOrder
    subject?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    deadlineDay?: SortOrder
    type?: SortOrder
    _count?: ScheduleTemplateCountOrderByAggregateInput
    _avg?: ScheduleTemplateAvgOrderByAggregateInput
    _max?: ScheduleTemplateMaxOrderByAggregateInput
    _min?: ScheduleTemplateMinOrderByAggregateInput
    _sum?: ScheduleTemplateSumOrderByAggregateInput
  }

  export type ScheduleTemplateScalarWhereWithAggregatesInput = {
    AND?: ScheduleTemplateScalarWhereWithAggregatesInput | ScheduleTemplateScalarWhereWithAggregatesInput[]
    OR?: ScheduleTemplateScalarWhereWithAggregatesInput[]
    NOT?: ScheduleTemplateScalarWhereWithAggregatesInput | ScheduleTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScheduleTemplate"> | string
    userId?: StringWithAggregatesFilter<"ScheduleTemplate"> | string
    dayOfWeek?: IntWithAggregatesFilter<"ScheduleTemplate"> | number
    subject?: StringWithAggregatesFilter<"ScheduleTemplate"> | string
    startTime?: StringWithAggregatesFilter<"ScheduleTemplate"> | string
    endTime?: StringWithAggregatesFilter<"ScheduleTemplate"> | string
    deadlineDay?: StringWithAggregatesFilter<"ScheduleTemplate"> | string
    type?: StringWithAggregatesFilter<"ScheduleTemplate"> | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    userId?: StringFilter<"Task"> | string
    templateId?: StringNullableFilter<"Task"> | string | null
    date?: DateTimeFilter<"Task"> | Date | string
    startTime?: StringFilter<"Task"> | string
    endTime?: StringFilter<"Task"> | string
    subject?: StringFilter<"Task"> | string
    isDone?: BoolFilter<"Task"> | boolean
    isMissed?: BoolFilter<"Task"> | boolean
    isDeleted?: BoolFilter<"Task"> | boolean
    type?: StringFilter<"Task"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    template?: XOR<ScheduleTemplateNullableRelationFilter, ScheduleTemplateWhereInput> | null
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    templateId?: SortOrderInput | SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    subject?: SortOrder
    isDone?: SortOrder
    isMissed?: SortOrder
    isDeleted?: SortOrder
    type?: SortOrder
    user?: UserOrderByWithRelationInput
    template?: ScheduleTemplateOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    templateId_date?: TaskTemplateIdDateCompoundUniqueInput
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    userId?: StringFilter<"Task"> | string
    templateId?: StringNullableFilter<"Task"> | string | null
    date?: DateTimeFilter<"Task"> | Date | string
    startTime?: StringFilter<"Task"> | string
    endTime?: StringFilter<"Task"> | string
    subject?: StringFilter<"Task"> | string
    isDone?: BoolFilter<"Task"> | boolean
    isMissed?: BoolFilter<"Task"> | boolean
    isDeleted?: BoolFilter<"Task"> | boolean
    type?: StringFilter<"Task"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    template?: XOR<ScheduleTemplateNullableRelationFilter, ScheduleTemplateWhereInput> | null
  }, "id" | "templateId_date">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    templateId?: SortOrderInput | SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    subject?: SortOrder
    isDone?: SortOrder
    isMissed?: SortOrder
    isDeleted?: SortOrder
    type?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    userId?: StringWithAggregatesFilter<"Task"> | string
    templateId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    date?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    startTime?: StringWithAggregatesFilter<"Task"> | string
    endTime?: StringWithAggregatesFilter<"Task"> | string
    subject?: StringWithAggregatesFilter<"Task"> | string
    isDone?: BoolWithAggregatesFilter<"Task"> | boolean
    isMissed?: BoolWithAggregatesFilter<"Task"> | boolean
    isDeleted?: BoolWithAggregatesFilter<"Task"> | boolean
    type?: StringWithAggregatesFilter<"Task"> | string
  }

  export type MarkedDayWhereInput = {
    AND?: MarkedDayWhereInput | MarkedDayWhereInput[]
    OR?: MarkedDayWhereInput[]
    NOT?: MarkedDayWhereInput | MarkedDayWhereInput[]
    id?: StringFilter<"MarkedDay"> | string
    userId?: StringFilter<"MarkedDay"> | string
    date?: DateTimeFilter<"MarkedDay"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type MarkedDayOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MarkedDayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_date?: MarkedDayUserIdDateCompoundUniqueInput
    AND?: MarkedDayWhereInput | MarkedDayWhereInput[]
    OR?: MarkedDayWhereInput[]
    NOT?: MarkedDayWhereInput | MarkedDayWhereInput[]
    userId?: StringFilter<"MarkedDay"> | string
    date?: DateTimeFilter<"MarkedDay"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId_date">

  export type MarkedDayOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    _count?: MarkedDayCountOrderByAggregateInput
    _max?: MarkedDayMaxOrderByAggregateInput
    _min?: MarkedDayMinOrderByAggregateInput
  }

  export type MarkedDayScalarWhereWithAggregatesInput = {
    AND?: MarkedDayScalarWhereWithAggregatesInput | MarkedDayScalarWhereWithAggregatesInput[]
    OR?: MarkedDayScalarWhereWithAggregatesInput[]
    NOT?: MarkedDayScalarWhereWithAggregatesInput | MarkedDayScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MarkedDay"> | string
    userId?: StringWithAggregatesFilter<"MarkedDay"> | string
    date?: DateTimeWithAggregatesFilter<"MarkedDay"> | Date | string
  }

  export type UserProgressWhereInput = {
    AND?: UserProgressWhereInput | UserProgressWhereInput[]
    OR?: UserProgressWhereInput[]
    NOT?: UserProgressWhereInput | UserProgressWhereInput[]
    id?: StringFilter<"UserProgress"> | string
    userId?: StringFilter<"UserProgress"> | string
    name?: StringFilter<"UserProgress"> | string
    currentStreak?: IntFilter<"UserProgress"> | number
    longestStreak?: IntFilter<"UserProgress"> | number
    lastActiveDate?: DateTimeNullableFilter<"UserProgress"> | Date | string | null
    geminiApiKey?: StringNullableFilter<"UserProgress"> | string | null
    focusSessions?: IntFilter<"UserProgress"> | number
    totalFocusMinutes?: IntFilter<"UserProgress"> | number
    xp?: IntFilter<"UserProgress"> | number
    level?: IntFilter<"UserProgress"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    lastActiveDate?: SortOrderInput | SortOrder
    geminiApiKey?: SortOrderInput | SortOrder
    focusSessions?: SortOrder
    totalFocusMinutes?: SortOrder
    xp?: SortOrder
    level?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserProgressWhereInput | UserProgressWhereInput[]
    OR?: UserProgressWhereInput[]
    NOT?: UserProgressWhereInput | UserProgressWhereInput[]
    name?: StringFilter<"UserProgress"> | string
    currentStreak?: IntFilter<"UserProgress"> | number
    longestStreak?: IntFilter<"UserProgress"> | number
    lastActiveDate?: DateTimeNullableFilter<"UserProgress"> | Date | string | null
    geminiApiKey?: StringNullableFilter<"UserProgress"> | string | null
    focusSessions?: IntFilter<"UserProgress"> | number
    totalFocusMinutes?: IntFilter<"UserProgress"> | number
    xp?: IntFilter<"UserProgress"> | number
    level?: IntFilter<"UserProgress"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    lastActiveDate?: SortOrderInput | SortOrder
    geminiApiKey?: SortOrderInput | SortOrder
    focusSessions?: SortOrder
    totalFocusMinutes?: SortOrder
    xp?: SortOrder
    level?: SortOrder
    _count?: UserProgressCountOrderByAggregateInput
    _avg?: UserProgressAvgOrderByAggregateInput
    _max?: UserProgressMaxOrderByAggregateInput
    _min?: UserProgressMinOrderByAggregateInput
    _sum?: UserProgressSumOrderByAggregateInput
  }

  export type UserProgressScalarWhereWithAggregatesInput = {
    AND?: UserProgressScalarWhereWithAggregatesInput | UserProgressScalarWhereWithAggregatesInput[]
    OR?: UserProgressScalarWhereWithAggregatesInput[]
    NOT?: UserProgressScalarWhereWithAggregatesInput | UserProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProgress"> | string
    userId?: StringWithAggregatesFilter<"UserProgress"> | string
    name?: StringWithAggregatesFilter<"UserProgress"> | string
    currentStreak?: IntWithAggregatesFilter<"UserProgress"> | number
    longestStreak?: IntWithAggregatesFilter<"UserProgress"> | number
    lastActiveDate?: DateTimeNullableWithAggregatesFilter<"UserProgress"> | Date | string | null
    geminiApiKey?: StringNullableWithAggregatesFilter<"UserProgress"> | string | null
    focusSessions?: IntWithAggregatesFilter<"UserProgress"> | number
    totalFocusMinutes?: IntWithAggregatesFilter<"UserProgress"> | number
    xp?: IntWithAggregatesFilter<"UserProgress"> | number
    level?: IntWithAggregatesFilter<"UserProgress"> | number
  }

  export type ResourceWhereInput = {
    AND?: ResourceWhereInput | ResourceWhereInput[]
    OR?: ResourceWhereInput[]
    NOT?: ResourceWhereInput | ResourceWhereInput[]
    id?: StringFilter<"Resource"> | string
    userId?: StringFilter<"Resource"> | string
    subject?: StringFilter<"Resource"> | string
    title?: StringFilter<"Resource"> | string
    type?: StringFilter<"Resource"> | string
    url?: StringFilter<"Resource"> | string
    createdAt?: DateTimeFilter<"Resource"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ResourceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    subject?: SortOrder
    title?: SortOrder
    type?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ResourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResourceWhereInput | ResourceWhereInput[]
    OR?: ResourceWhereInput[]
    NOT?: ResourceWhereInput | ResourceWhereInput[]
    userId?: StringFilter<"Resource"> | string
    subject?: StringFilter<"Resource"> | string
    title?: StringFilter<"Resource"> | string
    type?: StringFilter<"Resource"> | string
    url?: StringFilter<"Resource"> | string
    createdAt?: DateTimeFilter<"Resource"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ResourceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    subject?: SortOrder
    title?: SortOrder
    type?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    _count?: ResourceCountOrderByAggregateInput
    _max?: ResourceMaxOrderByAggregateInput
    _min?: ResourceMinOrderByAggregateInput
  }

  export type ResourceScalarWhereWithAggregatesInput = {
    AND?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
    OR?: ResourceScalarWhereWithAggregatesInput[]
    NOT?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Resource"> | string
    userId?: StringWithAggregatesFilter<"Resource"> | string
    subject?: StringWithAggregatesFilter<"Resource"> | string
    title?: StringWithAggregatesFilter<"Resource"> | string
    type?: StringWithAggregatesFilter<"Resource"> | string
    url?: StringWithAggregatesFilter<"Resource"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Resource"> | Date | string
  }

  export type ExamEventWhereInput = {
    AND?: ExamEventWhereInput | ExamEventWhereInput[]
    OR?: ExamEventWhereInput[]
    NOT?: ExamEventWhereInput | ExamEventWhereInput[]
    id?: StringFilter<"ExamEvent"> | string
    userId?: StringFilter<"ExamEvent"> | string
    title?: StringFilter<"ExamEvent"> | string
    date?: DateTimeFilter<"ExamEvent"> | Date | string
    priority?: StringFilter<"ExamEvent"> | string
    createdAt?: DateTimeFilter<"ExamEvent"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ExamEventOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    date?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ExamEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExamEventWhereInput | ExamEventWhereInput[]
    OR?: ExamEventWhereInput[]
    NOT?: ExamEventWhereInput | ExamEventWhereInput[]
    userId?: StringFilter<"ExamEvent"> | string
    title?: StringFilter<"ExamEvent"> | string
    date?: DateTimeFilter<"ExamEvent"> | Date | string
    priority?: StringFilter<"ExamEvent"> | string
    createdAt?: DateTimeFilter<"ExamEvent"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ExamEventOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    date?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    _count?: ExamEventCountOrderByAggregateInput
    _max?: ExamEventMaxOrderByAggregateInput
    _min?: ExamEventMinOrderByAggregateInput
  }

  export type ExamEventScalarWhereWithAggregatesInput = {
    AND?: ExamEventScalarWhereWithAggregatesInput | ExamEventScalarWhereWithAggregatesInput[]
    OR?: ExamEventScalarWhereWithAggregatesInput[]
    NOT?: ExamEventScalarWhereWithAggregatesInput | ExamEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExamEvent"> | string
    userId?: StringWithAggregatesFilter<"ExamEvent"> | string
    title?: StringWithAggregatesFilter<"ExamEvent"> | string
    date?: DateTimeWithAggregatesFilter<"ExamEvent"> | Date | string
    priority?: StringWithAggregatesFilter<"ExamEvent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ExamEvent"> | Date | string
  }

  export type WeeklySummaryWhereInput = {
    AND?: WeeklySummaryWhereInput | WeeklySummaryWhereInput[]
    OR?: WeeklySummaryWhereInput[]
    NOT?: WeeklySummaryWhereInput | WeeklySummaryWhereInput[]
    id?: StringFilter<"WeeklySummary"> | string
    userId?: StringFilter<"WeeklySummary"> | string
    startDate?: DateTimeFilter<"WeeklySummary"> | Date | string
    endDate?: DateTimeFilter<"WeeklySummary"> | Date | string
    grade?: StringFilter<"WeeklySummary"> | string
    totalMinutes?: IntFilter<"WeeklySummary"> | number
    subjectBreakdown?: StringFilter<"WeeklySummary"> | string
    createdAt?: DateTimeFilter<"WeeklySummary"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type WeeklySummaryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    grade?: SortOrder
    totalMinutes?: SortOrder
    subjectBreakdown?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WeeklySummaryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_startDate_endDate?: WeeklySummaryUserIdStartDateEndDateCompoundUniqueInput
    AND?: WeeklySummaryWhereInput | WeeklySummaryWhereInput[]
    OR?: WeeklySummaryWhereInput[]
    NOT?: WeeklySummaryWhereInput | WeeklySummaryWhereInput[]
    userId?: StringFilter<"WeeklySummary"> | string
    startDate?: DateTimeFilter<"WeeklySummary"> | Date | string
    endDate?: DateTimeFilter<"WeeklySummary"> | Date | string
    grade?: StringFilter<"WeeklySummary"> | string
    totalMinutes?: IntFilter<"WeeklySummary"> | number
    subjectBreakdown?: StringFilter<"WeeklySummary"> | string
    createdAt?: DateTimeFilter<"WeeklySummary"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId_startDate_endDate">

  export type WeeklySummaryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    grade?: SortOrder
    totalMinutes?: SortOrder
    subjectBreakdown?: SortOrder
    createdAt?: SortOrder
    _count?: WeeklySummaryCountOrderByAggregateInput
    _avg?: WeeklySummaryAvgOrderByAggregateInput
    _max?: WeeklySummaryMaxOrderByAggregateInput
    _min?: WeeklySummaryMinOrderByAggregateInput
    _sum?: WeeklySummarySumOrderByAggregateInput
  }

  export type WeeklySummaryScalarWhereWithAggregatesInput = {
    AND?: WeeklySummaryScalarWhereWithAggregatesInput | WeeklySummaryScalarWhereWithAggregatesInput[]
    OR?: WeeklySummaryScalarWhereWithAggregatesInput[]
    NOT?: WeeklySummaryScalarWhereWithAggregatesInput | WeeklySummaryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WeeklySummary"> | string
    userId?: StringWithAggregatesFilter<"WeeklySummary"> | string
    startDate?: DateTimeWithAggregatesFilter<"WeeklySummary"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"WeeklySummary"> | Date | string
    grade?: StringWithAggregatesFilter<"WeeklySummary"> | string
    totalMinutes?: IntWithAggregatesFilter<"WeeklySummary"> | number
    subjectBreakdown?: StringWithAggregatesFilter<"WeeklySummary"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WeeklySummary"> | Date | string
  }

  export type MasteryItemWhereInput = {
    AND?: MasteryItemWhereInput | MasteryItemWhereInput[]
    OR?: MasteryItemWhereInput[]
    NOT?: MasteryItemWhereInput | MasteryItemWhereInput[]
    id?: StringFilter<"MasteryItem"> | string
    userId?: StringFilter<"MasteryItem"> | string
    subject?: StringFilter<"MasteryItem"> | string
    title?: StringFilter<"MasteryItem"> | string
    isCompleted?: BoolFilter<"MasteryItem"> | boolean
    createdAt?: DateTimeFilter<"MasteryItem"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type MasteryItemOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    subject?: SortOrder
    title?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MasteryItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MasteryItemWhereInput | MasteryItemWhereInput[]
    OR?: MasteryItemWhereInput[]
    NOT?: MasteryItemWhereInput | MasteryItemWhereInput[]
    userId?: StringFilter<"MasteryItem"> | string
    subject?: StringFilter<"MasteryItem"> | string
    title?: StringFilter<"MasteryItem"> | string
    isCompleted?: BoolFilter<"MasteryItem"> | boolean
    createdAt?: DateTimeFilter<"MasteryItem"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type MasteryItemOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    subject?: SortOrder
    title?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    _count?: MasteryItemCountOrderByAggregateInput
    _max?: MasteryItemMaxOrderByAggregateInput
    _min?: MasteryItemMinOrderByAggregateInput
  }

  export type MasteryItemScalarWhereWithAggregatesInput = {
    AND?: MasteryItemScalarWhereWithAggregatesInput | MasteryItemScalarWhereWithAggregatesInput[]
    OR?: MasteryItemScalarWhereWithAggregatesInput[]
    NOT?: MasteryItemScalarWhereWithAggregatesInput | MasteryItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MasteryItem"> | string
    userId?: StringWithAggregatesFilter<"MasteryItem"> | string
    subject?: StringWithAggregatesFilter<"MasteryItem"> | string
    title?: StringWithAggregatesFilter<"MasteryItem"> | string
    isCompleted?: BoolWithAggregatesFilter<"MasteryItem"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MasteryItem"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    passwordHash: string
    createdAt?: Date | string
    templates?: ScheduleTemplateCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    resources?: ResourceCreateNestedManyWithoutUserInput
    examEvents?: ExamEventCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryCreateNestedManyWithoutUserInput
    masteryItems?: MasteryItemCreateNestedManyWithoutUserInput
    markedDays?: MarkedDayCreateNestedManyWithoutUserInput
    progress?: UserProgressCreateNestedOneWithoutUserInput
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    passwordHash: string
    createdAt?: Date | string
    templates?: ScheduleTemplateUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    resources?: ResourceUncheckedCreateNestedManyWithoutUserInput
    examEvents?: ExamEventUncheckedCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryUncheckedCreateNestedManyWithoutUserInput
    masteryItems?: MasteryItemUncheckedCreateNestedManyWithoutUserInput
    markedDays?: MarkedDayUncheckedCreateNestedManyWithoutUserInput
    progress?: UserProgressUncheckedCreateNestedOneWithoutUserInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: ScheduleTemplateUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    resources?: ResourceUpdateManyWithoutUserNestedInput
    examEvents?: ExamEventUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUpdateManyWithoutUserNestedInput
    masteryItems?: MasteryItemUpdateManyWithoutUserNestedInput
    markedDays?: MarkedDayUpdateManyWithoutUserNestedInput
    progress?: UserProgressUpdateOneWithoutUserNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: ScheduleTemplateUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    resources?: ResourceUncheckedUpdateManyWithoutUserNestedInput
    examEvents?: ExamEventUncheckedUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUncheckedUpdateManyWithoutUserNestedInput
    masteryItems?: MasteryItemUncheckedUpdateManyWithoutUserNestedInput
    markedDays?: MarkedDayUncheckedUpdateManyWithoutUserNestedInput
    progress?: UserProgressUncheckedUpdateOneWithoutUserNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    passwordHash: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    docs?: ProjectDocCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    status?: string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    docs?: ProjectDocUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    docs?: ProjectDocUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    docs?: ProjectDocUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    status?: string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDocCreateInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutDocsInput
  }

  export type ProjectDocUncheckedCreateInput = {
    id?: string
    projectId: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectDocUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutDocsNestedInput
  }

  export type ProjectDocUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDocCreateManyInput = {
    id?: string
    projectId: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectDocUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDocUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionCreateInput = {
    id?: string
    title?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChatSessionsInput
    messages?: ChatMessageCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionUncheckedCreateInput = {
    id?: string
    userId: string
    title?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatSessionsNestedInput
    messages?: ChatMessageUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionCreateManyInput = {
    id?: string
    userId: string
    title?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
    session: ChatSessionCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: string
    sessionId: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: ChatSessionUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    sessionId: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleTemplateCreateInput = {
    id?: string
    dayOfWeek: number
    subject: string
    startTime: string
    endTime: string
    deadlineDay: string
    type: string
    user: UserCreateNestedOneWithoutTemplatesInput
    tasks?: TaskCreateNestedManyWithoutTemplateInput
  }

  export type ScheduleTemplateUncheckedCreateInput = {
    id?: string
    userId: string
    dayOfWeek: number
    subject: string
    startTime: string
    endTime: string
    deadlineDay: string
    type: string
    tasks?: TaskUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type ScheduleTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    deadlineDay?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTemplatesNestedInput
    tasks?: TaskUpdateManyWithoutTemplateNestedInput
  }

  export type ScheduleTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    deadlineDay?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type ScheduleTemplateCreateManyInput = {
    id?: string
    userId: string
    dayOfWeek: number
    subject: string
    startTime: string
    endTime: string
    deadlineDay: string
    type: string
  }

  export type ScheduleTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    deadlineDay?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    deadlineDay?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateInput = {
    id?: string
    date: Date | string
    startTime: string
    endTime: string
    subject: string
    isDone?: boolean
    isMissed?: boolean
    isDeleted?: boolean
    type: string
    user: UserCreateNestedOneWithoutTasksInput
    template?: ScheduleTemplateCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    userId: string
    templateId?: string | null
    date: Date | string
    startTime: string
    endTime: string
    subject: string
    isDone?: boolean
    isMissed?: boolean
    isDeleted?: boolean
    type: string
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isMissed?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    template?: ScheduleTemplateUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isMissed?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateManyInput = {
    id?: string
    userId: string
    templateId?: string | null
    date: Date | string
    startTime: string
    endTime: string
    subject: string
    isDone?: boolean
    isMissed?: boolean
    isDeleted?: boolean
    type: string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isMissed?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isMissed?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
  }

  export type MarkedDayCreateInput = {
    id?: string
    date: Date | string
    user: UserCreateNestedOneWithoutMarkedDaysInput
  }

  export type MarkedDayUncheckedCreateInput = {
    id?: string
    userId: string
    date: Date | string
  }

  export type MarkedDayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMarkedDaysNestedInput
  }

  export type MarkedDayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarkedDayCreateManyInput = {
    id?: string
    userId: string
    date: Date | string
  }

  export type MarkedDayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarkedDayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProgressCreateInput = {
    id?: string
    name?: string
    currentStreak?: number
    longestStreak?: number
    lastActiveDate?: Date | string | null
    geminiApiKey?: string | null
    focusSessions?: number
    totalFocusMinutes?: number
    xp?: number
    level?: number
    user: UserCreateNestedOneWithoutProgressInput
  }

  export type UserProgressUncheckedCreateInput = {
    id?: string
    userId: string
    name?: string
    currentStreak?: number
    longestStreak?: number
    lastActiveDate?: Date | string | null
    geminiApiKey?: string | null
    focusSessions?: number
    totalFocusMinutes?: number
    xp?: number
    level?: number
  }

  export type UserProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastActiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    geminiApiKey?: NullableStringFieldUpdateOperationsInput | string | null
    focusSessions?: IntFieldUpdateOperationsInput | number
    totalFocusMinutes?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutProgressNestedInput
  }

  export type UserProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastActiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    geminiApiKey?: NullableStringFieldUpdateOperationsInput | string | null
    focusSessions?: IntFieldUpdateOperationsInput | number
    totalFocusMinutes?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
  }

  export type UserProgressCreateManyInput = {
    id?: string
    userId: string
    name?: string
    currentStreak?: number
    longestStreak?: number
    lastActiveDate?: Date | string | null
    geminiApiKey?: string | null
    focusSessions?: number
    totalFocusMinutes?: number
    xp?: number
    level?: number
  }

  export type UserProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastActiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    geminiApiKey?: NullableStringFieldUpdateOperationsInput | string | null
    focusSessions?: IntFieldUpdateOperationsInput | number
    totalFocusMinutes?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
  }

  export type UserProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastActiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    geminiApiKey?: NullableStringFieldUpdateOperationsInput | string | null
    focusSessions?: IntFieldUpdateOperationsInput | number
    totalFocusMinutes?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
  }

  export type ResourceCreateInput = {
    id?: string
    subject: string
    title: string
    type: string
    url: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutResourcesInput
  }

  export type ResourceUncheckedCreateInput = {
    id?: string
    userId: string
    subject: string
    title: string
    type: string
    url: string
    createdAt?: Date | string
  }

  export type ResourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResourcesNestedInput
  }

  export type ResourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceCreateManyInput = {
    id?: string
    userId: string
    subject: string
    title: string
    type: string
    url: string
    createdAt?: Date | string
  }

  export type ResourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamEventCreateInput = {
    id?: string
    title: string
    date: Date | string
    priority?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutExamEventsInput
  }

  export type ExamEventUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    date: Date | string
    priority?: string
    createdAt?: Date | string
  }

  export type ExamEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutExamEventsNestedInput
  }

  export type ExamEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamEventCreateManyInput = {
    id?: string
    userId: string
    title: string
    date: Date | string
    priority?: string
    createdAt?: Date | string
  }

  export type ExamEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklySummaryCreateInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    grade: string
    totalMinutes: number
    subjectBreakdown: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWeeklySummariesInput
  }

  export type WeeklySummaryUncheckedCreateInput = {
    id?: string
    userId: string
    startDate: Date | string
    endDate: Date | string
    grade: string
    totalMinutes: number
    subjectBreakdown: string
    createdAt?: Date | string
  }

  export type WeeklySummaryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: StringFieldUpdateOperationsInput | string
    totalMinutes?: IntFieldUpdateOperationsInput | number
    subjectBreakdown?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWeeklySummariesNestedInput
  }

  export type WeeklySummaryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: StringFieldUpdateOperationsInput | string
    totalMinutes?: IntFieldUpdateOperationsInput | number
    subjectBreakdown?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklySummaryCreateManyInput = {
    id?: string
    userId: string
    startDate: Date | string
    endDate: Date | string
    grade: string
    totalMinutes: number
    subjectBreakdown: string
    createdAt?: Date | string
  }

  export type WeeklySummaryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: StringFieldUpdateOperationsInput | string
    totalMinutes?: IntFieldUpdateOperationsInput | number
    subjectBreakdown?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklySummaryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: StringFieldUpdateOperationsInput | string
    totalMinutes?: IntFieldUpdateOperationsInput | number
    subjectBreakdown?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasteryItemCreateInput = {
    id?: string
    subject: string
    title: string
    isCompleted?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMasteryItemsInput
  }

  export type MasteryItemUncheckedCreateInput = {
    id?: string
    userId: string
    subject: string
    title: string
    isCompleted?: boolean
    createdAt?: Date | string
  }

  export type MasteryItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMasteryItemsNestedInput
  }

  export type MasteryItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasteryItemCreateManyInput = {
    id?: string
    userId: string
    subject: string
    title: string
    isCompleted?: boolean
    createdAt?: Date | string
  }

  export type MasteryItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasteryItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ScheduleTemplateListRelationFilter = {
    every?: ScheduleTemplateWhereInput
    some?: ScheduleTemplateWhereInput
    none?: ScheduleTemplateWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type ResourceListRelationFilter = {
    every?: ResourceWhereInput
    some?: ResourceWhereInput
    none?: ResourceWhereInput
  }

  export type ExamEventListRelationFilter = {
    every?: ExamEventWhereInput
    some?: ExamEventWhereInput
    none?: ExamEventWhereInput
  }

  export type WeeklySummaryListRelationFilter = {
    every?: WeeklySummaryWhereInput
    some?: WeeklySummaryWhereInput
    none?: WeeklySummaryWhereInput
  }

  export type MasteryItemListRelationFilter = {
    every?: MasteryItemWhereInput
    some?: MasteryItemWhereInput
    none?: MasteryItemWhereInput
  }

  export type MarkedDayListRelationFilter = {
    every?: MarkedDayWhereInput
    some?: MarkedDayWhereInput
    none?: MarkedDayWhereInput
  }

  export type UserProgressNullableRelationFilter = {
    is?: UserProgressWhereInput | null
    isNot?: UserProgressWhereInput | null
  }

  export type ChatSessionListRelationFilter = {
    every?: ChatSessionWhereInput
    some?: ChatSessionWhereInput
    none?: ChatSessionWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ScheduleTemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResourceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeeklySummaryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MasteryItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MarkedDayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProjectDocListRelationFilter = {
    every?: ProjectDocWhereInput
    some?: ProjectDocWhereInput
    none?: ProjectDocWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectDocOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type ProjectRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ProjectDocCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectDocMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectDocMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatSessionRelationFilter = {
    is?: ChatSessionWhereInput
    isNot?: ChatSessionWhereInput
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ScheduleTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dayOfWeek?: SortOrder
    subject?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    deadlineDay?: SortOrder
    type?: SortOrder
  }

  export type ScheduleTemplateAvgOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }

  export type ScheduleTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dayOfWeek?: SortOrder
    subject?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    deadlineDay?: SortOrder
    type?: SortOrder
  }

  export type ScheduleTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dayOfWeek?: SortOrder
    subject?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    deadlineDay?: SortOrder
    type?: SortOrder
  }

  export type ScheduleTemplateSumOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ScheduleTemplateNullableRelationFilter = {
    is?: ScheduleTemplateWhereInput | null
    isNot?: ScheduleTemplateWhereInput | null
  }

  export type TaskTemplateIdDateCompoundUniqueInput = {
    templateId: string
    date: Date | string
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    subject?: SortOrder
    isDone?: SortOrder
    isMissed?: SortOrder
    isDeleted?: SortOrder
    type?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    subject?: SortOrder
    isDone?: SortOrder
    isMissed?: SortOrder
    isDeleted?: SortOrder
    type?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    subject?: SortOrder
    isDone?: SortOrder
    isMissed?: SortOrder
    isDeleted?: SortOrder
    type?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MarkedDayUserIdDateCompoundUniqueInput = {
    userId: string
    date: Date | string
  }

  export type MarkedDayCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
  }

  export type MarkedDayMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
  }

  export type MarkedDayMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    lastActiveDate?: SortOrder
    geminiApiKey?: SortOrder
    focusSessions?: SortOrder
    totalFocusMinutes?: SortOrder
    xp?: SortOrder
    level?: SortOrder
  }

  export type UserProgressAvgOrderByAggregateInput = {
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    focusSessions?: SortOrder
    totalFocusMinutes?: SortOrder
    xp?: SortOrder
    level?: SortOrder
  }

  export type UserProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    lastActiveDate?: SortOrder
    geminiApiKey?: SortOrder
    focusSessions?: SortOrder
    totalFocusMinutes?: SortOrder
    xp?: SortOrder
    level?: SortOrder
  }

  export type UserProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    lastActiveDate?: SortOrder
    geminiApiKey?: SortOrder
    focusSessions?: SortOrder
    totalFocusMinutes?: SortOrder
    xp?: SortOrder
    level?: SortOrder
  }

  export type UserProgressSumOrderByAggregateInput = {
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    focusSessions?: SortOrder
    totalFocusMinutes?: SortOrder
    xp?: SortOrder
    level?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ResourceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subject?: SortOrder
    title?: SortOrder
    type?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type ResourceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subject?: SortOrder
    title?: SortOrder
    type?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type ResourceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subject?: SortOrder
    title?: SortOrder
    type?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type ExamEventCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    date?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
  }

  export type ExamEventMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    date?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
  }

  export type ExamEventMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    date?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
  }

  export type WeeklySummaryUserIdStartDateEndDateCompoundUniqueInput = {
    userId: string
    startDate: Date | string
    endDate: Date | string
  }

  export type WeeklySummaryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    grade?: SortOrder
    totalMinutes?: SortOrder
    subjectBreakdown?: SortOrder
    createdAt?: SortOrder
  }

  export type WeeklySummaryAvgOrderByAggregateInput = {
    totalMinutes?: SortOrder
  }

  export type WeeklySummaryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    grade?: SortOrder
    totalMinutes?: SortOrder
    subjectBreakdown?: SortOrder
    createdAt?: SortOrder
  }

  export type WeeklySummaryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    grade?: SortOrder
    totalMinutes?: SortOrder
    subjectBreakdown?: SortOrder
    createdAt?: SortOrder
  }

  export type WeeklySummarySumOrderByAggregateInput = {
    totalMinutes?: SortOrder
  }

  export type MasteryItemCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subject?: SortOrder
    title?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
  }

  export type MasteryItemMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subject?: SortOrder
    title?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
  }

  export type MasteryItemMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subject?: SortOrder
    title?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
  }

  export type ScheduleTemplateCreateNestedManyWithoutUserInput = {
    create?: XOR<ScheduleTemplateCreateWithoutUserInput, ScheduleTemplateUncheckedCreateWithoutUserInput> | ScheduleTemplateCreateWithoutUserInput[] | ScheduleTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScheduleTemplateCreateOrConnectWithoutUserInput | ScheduleTemplateCreateOrConnectWithoutUserInput[]
    createMany?: ScheduleTemplateCreateManyUserInputEnvelope
    connect?: ScheduleTemplateWhereUniqueInput | ScheduleTemplateWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ResourceCreateNestedManyWithoutUserInput = {
    create?: XOR<ResourceCreateWithoutUserInput, ResourceUncheckedCreateWithoutUserInput> | ResourceCreateWithoutUserInput[] | ResourceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutUserInput | ResourceCreateOrConnectWithoutUserInput[]
    createMany?: ResourceCreateManyUserInputEnvelope
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
  }

  export type ExamEventCreateNestedManyWithoutUserInput = {
    create?: XOR<ExamEventCreateWithoutUserInput, ExamEventUncheckedCreateWithoutUserInput> | ExamEventCreateWithoutUserInput[] | ExamEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExamEventCreateOrConnectWithoutUserInput | ExamEventCreateOrConnectWithoutUserInput[]
    createMany?: ExamEventCreateManyUserInputEnvelope
    connect?: ExamEventWhereUniqueInput | ExamEventWhereUniqueInput[]
  }

  export type WeeklySummaryCreateNestedManyWithoutUserInput = {
    create?: XOR<WeeklySummaryCreateWithoutUserInput, WeeklySummaryUncheckedCreateWithoutUserInput> | WeeklySummaryCreateWithoutUserInput[] | WeeklySummaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklySummaryCreateOrConnectWithoutUserInput | WeeklySummaryCreateOrConnectWithoutUserInput[]
    createMany?: WeeklySummaryCreateManyUserInputEnvelope
    connect?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
  }

  export type MasteryItemCreateNestedManyWithoutUserInput = {
    create?: XOR<MasteryItemCreateWithoutUserInput, MasteryItemUncheckedCreateWithoutUserInput> | MasteryItemCreateWithoutUserInput[] | MasteryItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MasteryItemCreateOrConnectWithoutUserInput | MasteryItemCreateOrConnectWithoutUserInput[]
    createMany?: MasteryItemCreateManyUserInputEnvelope
    connect?: MasteryItemWhereUniqueInput | MasteryItemWhereUniqueInput[]
  }

  export type MarkedDayCreateNestedManyWithoutUserInput = {
    create?: XOR<MarkedDayCreateWithoutUserInput, MarkedDayUncheckedCreateWithoutUserInput> | MarkedDayCreateWithoutUserInput[] | MarkedDayUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MarkedDayCreateOrConnectWithoutUserInput | MarkedDayCreateOrConnectWithoutUserInput[]
    createMany?: MarkedDayCreateManyUserInputEnvelope
    connect?: MarkedDayWhereUniqueInput | MarkedDayWhereUniqueInput[]
  }

  export type UserProgressCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProgressCreateWithoutUserInput, UserProgressUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProgressCreateOrConnectWithoutUserInput
    connect?: UserProgressWhereUniqueInput
  }

  export type ChatSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput> | ChatSessionCreateWithoutUserInput[] | ChatSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutUserInput | ChatSessionCreateOrConnectWithoutUserInput[]
    createMany?: ChatSessionCreateManyUserInputEnvelope
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ScheduleTemplateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ScheduleTemplateCreateWithoutUserInput, ScheduleTemplateUncheckedCreateWithoutUserInput> | ScheduleTemplateCreateWithoutUserInput[] | ScheduleTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScheduleTemplateCreateOrConnectWithoutUserInput | ScheduleTemplateCreateOrConnectWithoutUserInput[]
    createMany?: ScheduleTemplateCreateManyUserInputEnvelope
    connect?: ScheduleTemplateWhereUniqueInput | ScheduleTemplateWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ResourceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ResourceCreateWithoutUserInput, ResourceUncheckedCreateWithoutUserInput> | ResourceCreateWithoutUserInput[] | ResourceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutUserInput | ResourceCreateOrConnectWithoutUserInput[]
    createMany?: ResourceCreateManyUserInputEnvelope
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
  }

  export type ExamEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExamEventCreateWithoutUserInput, ExamEventUncheckedCreateWithoutUserInput> | ExamEventCreateWithoutUserInput[] | ExamEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExamEventCreateOrConnectWithoutUserInput | ExamEventCreateOrConnectWithoutUserInput[]
    createMany?: ExamEventCreateManyUserInputEnvelope
    connect?: ExamEventWhereUniqueInput | ExamEventWhereUniqueInput[]
  }

  export type WeeklySummaryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WeeklySummaryCreateWithoutUserInput, WeeklySummaryUncheckedCreateWithoutUserInput> | WeeklySummaryCreateWithoutUserInput[] | WeeklySummaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklySummaryCreateOrConnectWithoutUserInput | WeeklySummaryCreateOrConnectWithoutUserInput[]
    createMany?: WeeklySummaryCreateManyUserInputEnvelope
    connect?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
  }

  export type MasteryItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MasteryItemCreateWithoutUserInput, MasteryItemUncheckedCreateWithoutUserInput> | MasteryItemCreateWithoutUserInput[] | MasteryItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MasteryItemCreateOrConnectWithoutUserInput | MasteryItemCreateOrConnectWithoutUserInput[]
    createMany?: MasteryItemCreateManyUserInputEnvelope
    connect?: MasteryItemWhereUniqueInput | MasteryItemWhereUniqueInput[]
  }

  export type MarkedDayUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MarkedDayCreateWithoutUserInput, MarkedDayUncheckedCreateWithoutUserInput> | MarkedDayCreateWithoutUserInput[] | MarkedDayUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MarkedDayCreateOrConnectWithoutUserInput | MarkedDayCreateOrConnectWithoutUserInput[]
    createMany?: MarkedDayCreateManyUserInputEnvelope
    connect?: MarkedDayWhereUniqueInput | MarkedDayWhereUniqueInput[]
  }

  export type UserProgressUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProgressCreateWithoutUserInput, UserProgressUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProgressCreateOrConnectWithoutUserInput
    connect?: UserProgressWhereUniqueInput
  }

  export type ChatSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput> | ChatSessionCreateWithoutUserInput[] | ChatSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutUserInput | ChatSessionCreateOrConnectWithoutUserInput[]
    createMany?: ChatSessionCreateManyUserInputEnvelope
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ScheduleTemplateUpdateManyWithoutUserNestedInput = {
    create?: XOR<ScheduleTemplateCreateWithoutUserInput, ScheduleTemplateUncheckedCreateWithoutUserInput> | ScheduleTemplateCreateWithoutUserInput[] | ScheduleTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScheduleTemplateCreateOrConnectWithoutUserInput | ScheduleTemplateCreateOrConnectWithoutUserInput[]
    upsert?: ScheduleTemplateUpsertWithWhereUniqueWithoutUserInput | ScheduleTemplateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ScheduleTemplateCreateManyUserInputEnvelope
    set?: ScheduleTemplateWhereUniqueInput | ScheduleTemplateWhereUniqueInput[]
    disconnect?: ScheduleTemplateWhereUniqueInput | ScheduleTemplateWhereUniqueInput[]
    delete?: ScheduleTemplateWhereUniqueInput | ScheduleTemplateWhereUniqueInput[]
    connect?: ScheduleTemplateWhereUniqueInput | ScheduleTemplateWhereUniqueInput[]
    update?: ScheduleTemplateUpdateWithWhereUniqueWithoutUserInput | ScheduleTemplateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ScheduleTemplateUpdateManyWithWhereWithoutUserInput | ScheduleTemplateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ScheduleTemplateScalarWhereInput | ScheduleTemplateScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ResourceUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResourceCreateWithoutUserInput, ResourceUncheckedCreateWithoutUserInput> | ResourceCreateWithoutUserInput[] | ResourceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutUserInput | ResourceCreateOrConnectWithoutUserInput[]
    upsert?: ResourceUpsertWithWhereUniqueWithoutUserInput | ResourceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResourceCreateManyUserInputEnvelope
    set?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    disconnect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    delete?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    update?: ResourceUpdateWithWhereUniqueWithoutUserInput | ResourceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResourceUpdateManyWithWhereWithoutUserInput | ResourceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
  }

  export type ExamEventUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExamEventCreateWithoutUserInput, ExamEventUncheckedCreateWithoutUserInput> | ExamEventCreateWithoutUserInput[] | ExamEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExamEventCreateOrConnectWithoutUserInput | ExamEventCreateOrConnectWithoutUserInput[]
    upsert?: ExamEventUpsertWithWhereUniqueWithoutUserInput | ExamEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExamEventCreateManyUserInputEnvelope
    set?: ExamEventWhereUniqueInput | ExamEventWhereUniqueInput[]
    disconnect?: ExamEventWhereUniqueInput | ExamEventWhereUniqueInput[]
    delete?: ExamEventWhereUniqueInput | ExamEventWhereUniqueInput[]
    connect?: ExamEventWhereUniqueInput | ExamEventWhereUniqueInput[]
    update?: ExamEventUpdateWithWhereUniqueWithoutUserInput | ExamEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExamEventUpdateManyWithWhereWithoutUserInput | ExamEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExamEventScalarWhereInput | ExamEventScalarWhereInput[]
  }

  export type WeeklySummaryUpdateManyWithoutUserNestedInput = {
    create?: XOR<WeeklySummaryCreateWithoutUserInput, WeeklySummaryUncheckedCreateWithoutUserInput> | WeeklySummaryCreateWithoutUserInput[] | WeeklySummaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklySummaryCreateOrConnectWithoutUserInput | WeeklySummaryCreateOrConnectWithoutUserInput[]
    upsert?: WeeklySummaryUpsertWithWhereUniqueWithoutUserInput | WeeklySummaryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WeeklySummaryCreateManyUserInputEnvelope
    set?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    disconnect?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    delete?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    connect?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    update?: WeeklySummaryUpdateWithWhereUniqueWithoutUserInput | WeeklySummaryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WeeklySummaryUpdateManyWithWhereWithoutUserInput | WeeklySummaryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WeeklySummaryScalarWhereInput | WeeklySummaryScalarWhereInput[]
  }

  export type MasteryItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<MasteryItemCreateWithoutUserInput, MasteryItemUncheckedCreateWithoutUserInput> | MasteryItemCreateWithoutUserInput[] | MasteryItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MasteryItemCreateOrConnectWithoutUserInput | MasteryItemCreateOrConnectWithoutUserInput[]
    upsert?: MasteryItemUpsertWithWhereUniqueWithoutUserInput | MasteryItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MasteryItemCreateManyUserInputEnvelope
    set?: MasteryItemWhereUniqueInput | MasteryItemWhereUniqueInput[]
    disconnect?: MasteryItemWhereUniqueInput | MasteryItemWhereUniqueInput[]
    delete?: MasteryItemWhereUniqueInput | MasteryItemWhereUniqueInput[]
    connect?: MasteryItemWhereUniqueInput | MasteryItemWhereUniqueInput[]
    update?: MasteryItemUpdateWithWhereUniqueWithoutUserInput | MasteryItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MasteryItemUpdateManyWithWhereWithoutUserInput | MasteryItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MasteryItemScalarWhereInput | MasteryItemScalarWhereInput[]
  }

  export type MarkedDayUpdateManyWithoutUserNestedInput = {
    create?: XOR<MarkedDayCreateWithoutUserInput, MarkedDayUncheckedCreateWithoutUserInput> | MarkedDayCreateWithoutUserInput[] | MarkedDayUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MarkedDayCreateOrConnectWithoutUserInput | MarkedDayCreateOrConnectWithoutUserInput[]
    upsert?: MarkedDayUpsertWithWhereUniqueWithoutUserInput | MarkedDayUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MarkedDayCreateManyUserInputEnvelope
    set?: MarkedDayWhereUniqueInput | MarkedDayWhereUniqueInput[]
    disconnect?: MarkedDayWhereUniqueInput | MarkedDayWhereUniqueInput[]
    delete?: MarkedDayWhereUniqueInput | MarkedDayWhereUniqueInput[]
    connect?: MarkedDayWhereUniqueInput | MarkedDayWhereUniqueInput[]
    update?: MarkedDayUpdateWithWhereUniqueWithoutUserInput | MarkedDayUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MarkedDayUpdateManyWithWhereWithoutUserInput | MarkedDayUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MarkedDayScalarWhereInput | MarkedDayScalarWhereInput[]
  }

  export type UserProgressUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProgressCreateWithoutUserInput, UserProgressUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProgressCreateOrConnectWithoutUserInput
    upsert?: UserProgressUpsertWithoutUserInput
    disconnect?: UserProgressWhereInput | boolean
    delete?: UserProgressWhereInput | boolean
    connect?: UserProgressWhereUniqueInput
    update?: XOR<XOR<UserProgressUpdateToOneWithWhereWithoutUserInput, UserProgressUpdateWithoutUserInput>, UserProgressUncheckedUpdateWithoutUserInput>
  }

  export type ChatSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput> | ChatSessionCreateWithoutUserInput[] | ChatSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutUserInput | ChatSessionCreateOrConnectWithoutUserInput[]
    upsert?: ChatSessionUpsertWithWhereUniqueWithoutUserInput | ChatSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatSessionCreateManyUserInputEnvelope
    set?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    disconnect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    delete?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    update?: ChatSessionUpdateWithWhereUniqueWithoutUserInput | ChatSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatSessionUpdateManyWithWhereWithoutUserInput | ChatSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ScheduleTemplateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ScheduleTemplateCreateWithoutUserInput, ScheduleTemplateUncheckedCreateWithoutUserInput> | ScheduleTemplateCreateWithoutUserInput[] | ScheduleTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScheduleTemplateCreateOrConnectWithoutUserInput | ScheduleTemplateCreateOrConnectWithoutUserInput[]
    upsert?: ScheduleTemplateUpsertWithWhereUniqueWithoutUserInput | ScheduleTemplateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ScheduleTemplateCreateManyUserInputEnvelope
    set?: ScheduleTemplateWhereUniqueInput | ScheduleTemplateWhereUniqueInput[]
    disconnect?: ScheduleTemplateWhereUniqueInput | ScheduleTemplateWhereUniqueInput[]
    delete?: ScheduleTemplateWhereUniqueInput | ScheduleTemplateWhereUniqueInput[]
    connect?: ScheduleTemplateWhereUniqueInput | ScheduleTemplateWhereUniqueInput[]
    update?: ScheduleTemplateUpdateWithWhereUniqueWithoutUserInput | ScheduleTemplateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ScheduleTemplateUpdateManyWithWhereWithoutUserInput | ScheduleTemplateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ScheduleTemplateScalarWhereInput | ScheduleTemplateScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ResourceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResourceCreateWithoutUserInput, ResourceUncheckedCreateWithoutUserInput> | ResourceCreateWithoutUserInput[] | ResourceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutUserInput | ResourceCreateOrConnectWithoutUserInput[]
    upsert?: ResourceUpsertWithWhereUniqueWithoutUserInput | ResourceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResourceCreateManyUserInputEnvelope
    set?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    disconnect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    delete?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    update?: ResourceUpdateWithWhereUniqueWithoutUserInput | ResourceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResourceUpdateManyWithWhereWithoutUserInput | ResourceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
  }

  export type ExamEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExamEventCreateWithoutUserInput, ExamEventUncheckedCreateWithoutUserInput> | ExamEventCreateWithoutUserInput[] | ExamEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExamEventCreateOrConnectWithoutUserInput | ExamEventCreateOrConnectWithoutUserInput[]
    upsert?: ExamEventUpsertWithWhereUniqueWithoutUserInput | ExamEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExamEventCreateManyUserInputEnvelope
    set?: ExamEventWhereUniqueInput | ExamEventWhereUniqueInput[]
    disconnect?: ExamEventWhereUniqueInput | ExamEventWhereUniqueInput[]
    delete?: ExamEventWhereUniqueInput | ExamEventWhereUniqueInput[]
    connect?: ExamEventWhereUniqueInput | ExamEventWhereUniqueInput[]
    update?: ExamEventUpdateWithWhereUniqueWithoutUserInput | ExamEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExamEventUpdateManyWithWhereWithoutUserInput | ExamEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExamEventScalarWhereInput | ExamEventScalarWhereInput[]
  }

  export type WeeklySummaryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WeeklySummaryCreateWithoutUserInput, WeeklySummaryUncheckedCreateWithoutUserInput> | WeeklySummaryCreateWithoutUserInput[] | WeeklySummaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklySummaryCreateOrConnectWithoutUserInput | WeeklySummaryCreateOrConnectWithoutUserInput[]
    upsert?: WeeklySummaryUpsertWithWhereUniqueWithoutUserInput | WeeklySummaryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WeeklySummaryCreateManyUserInputEnvelope
    set?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    disconnect?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    delete?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    connect?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    update?: WeeklySummaryUpdateWithWhereUniqueWithoutUserInput | WeeklySummaryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WeeklySummaryUpdateManyWithWhereWithoutUserInput | WeeklySummaryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WeeklySummaryScalarWhereInput | WeeklySummaryScalarWhereInput[]
  }

  export type MasteryItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MasteryItemCreateWithoutUserInput, MasteryItemUncheckedCreateWithoutUserInput> | MasteryItemCreateWithoutUserInput[] | MasteryItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MasteryItemCreateOrConnectWithoutUserInput | MasteryItemCreateOrConnectWithoutUserInput[]
    upsert?: MasteryItemUpsertWithWhereUniqueWithoutUserInput | MasteryItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MasteryItemCreateManyUserInputEnvelope
    set?: MasteryItemWhereUniqueInput | MasteryItemWhereUniqueInput[]
    disconnect?: MasteryItemWhereUniqueInput | MasteryItemWhereUniqueInput[]
    delete?: MasteryItemWhereUniqueInput | MasteryItemWhereUniqueInput[]
    connect?: MasteryItemWhereUniqueInput | MasteryItemWhereUniqueInput[]
    update?: MasteryItemUpdateWithWhereUniqueWithoutUserInput | MasteryItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MasteryItemUpdateManyWithWhereWithoutUserInput | MasteryItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MasteryItemScalarWhereInput | MasteryItemScalarWhereInput[]
  }

  export type MarkedDayUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MarkedDayCreateWithoutUserInput, MarkedDayUncheckedCreateWithoutUserInput> | MarkedDayCreateWithoutUserInput[] | MarkedDayUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MarkedDayCreateOrConnectWithoutUserInput | MarkedDayCreateOrConnectWithoutUserInput[]
    upsert?: MarkedDayUpsertWithWhereUniqueWithoutUserInput | MarkedDayUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MarkedDayCreateManyUserInputEnvelope
    set?: MarkedDayWhereUniqueInput | MarkedDayWhereUniqueInput[]
    disconnect?: MarkedDayWhereUniqueInput | MarkedDayWhereUniqueInput[]
    delete?: MarkedDayWhereUniqueInput | MarkedDayWhereUniqueInput[]
    connect?: MarkedDayWhereUniqueInput | MarkedDayWhereUniqueInput[]
    update?: MarkedDayUpdateWithWhereUniqueWithoutUserInput | MarkedDayUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MarkedDayUpdateManyWithWhereWithoutUserInput | MarkedDayUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MarkedDayScalarWhereInput | MarkedDayScalarWhereInput[]
  }

  export type UserProgressUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProgressCreateWithoutUserInput, UserProgressUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProgressCreateOrConnectWithoutUserInput
    upsert?: UserProgressUpsertWithoutUserInput
    disconnect?: UserProgressWhereInput | boolean
    delete?: UserProgressWhereInput | boolean
    connect?: UserProgressWhereUniqueInput
    update?: XOR<XOR<UserProgressUpdateToOneWithWhereWithoutUserInput, UserProgressUpdateWithoutUserInput>, UserProgressUncheckedUpdateWithoutUserInput>
  }

  export type ChatSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput> | ChatSessionCreateWithoutUserInput[] | ChatSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutUserInput | ChatSessionCreateOrConnectWithoutUserInput[]
    upsert?: ChatSessionUpsertWithWhereUniqueWithoutUserInput | ChatSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatSessionCreateManyUserInputEnvelope
    set?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    disconnect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    delete?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    update?: ChatSessionUpdateWithWhereUniqueWithoutUserInput | ChatSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatSessionUpdateManyWithWhereWithoutUserInput | ChatSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectDocCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectDocCreateWithoutProjectInput, ProjectDocUncheckedCreateWithoutProjectInput> | ProjectDocCreateWithoutProjectInput[] | ProjectDocUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectDocCreateOrConnectWithoutProjectInput | ProjectDocCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectDocCreateManyProjectInputEnvelope
    connect?: ProjectDocWhereUniqueInput | ProjectDocWhereUniqueInput[]
  }

  export type ProjectDocUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectDocCreateWithoutProjectInput, ProjectDocUncheckedCreateWithoutProjectInput> | ProjectDocCreateWithoutProjectInput[] | ProjectDocUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectDocCreateOrConnectWithoutProjectInput | ProjectDocCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectDocCreateManyProjectInputEnvelope
    connect?: ProjectDocWhereUniqueInput | ProjectDocWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type ProjectDocUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectDocCreateWithoutProjectInput, ProjectDocUncheckedCreateWithoutProjectInput> | ProjectDocCreateWithoutProjectInput[] | ProjectDocUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectDocCreateOrConnectWithoutProjectInput | ProjectDocCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectDocUpsertWithWhereUniqueWithoutProjectInput | ProjectDocUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectDocCreateManyProjectInputEnvelope
    set?: ProjectDocWhereUniqueInput | ProjectDocWhereUniqueInput[]
    disconnect?: ProjectDocWhereUniqueInput | ProjectDocWhereUniqueInput[]
    delete?: ProjectDocWhereUniqueInput | ProjectDocWhereUniqueInput[]
    connect?: ProjectDocWhereUniqueInput | ProjectDocWhereUniqueInput[]
    update?: ProjectDocUpdateWithWhereUniqueWithoutProjectInput | ProjectDocUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectDocUpdateManyWithWhereWithoutProjectInput | ProjectDocUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectDocScalarWhereInput | ProjectDocScalarWhereInput[]
  }

  export type ProjectDocUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectDocCreateWithoutProjectInput, ProjectDocUncheckedCreateWithoutProjectInput> | ProjectDocCreateWithoutProjectInput[] | ProjectDocUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectDocCreateOrConnectWithoutProjectInput | ProjectDocCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectDocUpsertWithWhereUniqueWithoutProjectInput | ProjectDocUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectDocCreateManyProjectInputEnvelope
    set?: ProjectDocWhereUniqueInput | ProjectDocWhereUniqueInput[]
    disconnect?: ProjectDocWhereUniqueInput | ProjectDocWhereUniqueInput[]
    delete?: ProjectDocWhereUniqueInput | ProjectDocWhereUniqueInput[]
    connect?: ProjectDocWhereUniqueInput | ProjectDocWhereUniqueInput[]
    update?: ProjectDocUpdateWithWhereUniqueWithoutProjectInput | ProjectDocUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectDocUpdateManyWithWhereWithoutProjectInput | ProjectDocUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectDocScalarWhereInput | ProjectDocScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutDocsInput = {
    create?: XOR<ProjectCreateWithoutDocsInput, ProjectUncheckedCreateWithoutDocsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutDocsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutDocsNestedInput = {
    create?: XOR<ProjectCreateWithoutDocsInput, ProjectUncheckedCreateWithoutDocsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutDocsInput
    upsert?: ProjectUpsertWithoutDocsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutDocsInput, ProjectUpdateWithoutDocsInput>, ProjectUncheckedUpdateWithoutDocsInput>
  }

  export type UserCreateNestedOneWithoutChatSessionsInput = {
    create?: XOR<UserCreateWithoutChatSessionsInput, UserUncheckedCreateWithoutChatSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type ChatMessageCreateNestedManyWithoutSessionInput = {
    create?: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput> | ChatMessageCreateWithoutSessionInput[] | ChatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSessionInput | ChatMessageCreateOrConnectWithoutSessionInput[]
    createMany?: ChatMessageCreateManySessionInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput> | ChatMessageCreateWithoutSessionInput[] | ChatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSessionInput | ChatMessageCreateOrConnectWithoutSessionInput[]
    createMany?: ChatMessageCreateManySessionInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutChatSessionsNestedInput = {
    create?: XOR<UserCreateWithoutChatSessionsInput, UserUncheckedCreateWithoutChatSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatSessionsInput
    upsert?: UserUpsertWithoutChatSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatSessionsInput, UserUpdateWithoutChatSessionsInput>, UserUncheckedUpdateWithoutChatSessionsInput>
  }

  export type ChatMessageUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput> | ChatMessageCreateWithoutSessionInput[] | ChatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSessionInput | ChatMessageCreateOrConnectWithoutSessionInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSessionInput | ChatMessageUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ChatMessageCreateManySessionInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSessionInput | ChatMessageUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSessionInput | ChatMessageUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput> | ChatMessageCreateWithoutSessionInput[] | ChatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSessionInput | ChatMessageCreateOrConnectWithoutSessionInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSessionInput | ChatMessageUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ChatMessageCreateManySessionInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSessionInput | ChatMessageUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSessionInput | ChatMessageUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatSessionCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutMessagesInput
    connect?: ChatSessionWhereUniqueInput
  }

  export type ChatSessionUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutMessagesInput
    upsert?: ChatSessionUpsertWithoutMessagesInput
    connect?: ChatSessionWhereUniqueInput
    update?: XOR<XOR<ChatSessionUpdateToOneWithWhereWithoutMessagesInput, ChatSessionUpdateWithoutMessagesInput>, ChatSessionUncheckedUpdateWithoutMessagesInput>
  }

  export type UserCreateNestedOneWithoutTemplatesInput = {
    create?: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTemplatesInput
    connect?: UserWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutTemplateInput = {
    create?: XOR<TaskCreateWithoutTemplateInput, TaskUncheckedCreateWithoutTemplateInput> | TaskCreateWithoutTemplateInput[] | TaskUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTemplateInput | TaskCreateOrConnectWithoutTemplateInput[]
    createMany?: TaskCreateManyTemplateInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<TaskCreateWithoutTemplateInput, TaskUncheckedCreateWithoutTemplateInput> | TaskCreateWithoutTemplateInput[] | TaskUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTemplateInput | TaskCreateOrConnectWithoutTemplateInput[]
    createMany?: TaskCreateManyTemplateInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTemplatesNestedInput = {
    create?: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTemplatesInput
    upsert?: UserUpsertWithoutTemplatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTemplatesInput, UserUpdateWithoutTemplatesInput>, UserUncheckedUpdateWithoutTemplatesInput>
  }

  export type TaskUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<TaskCreateWithoutTemplateInput, TaskUncheckedCreateWithoutTemplateInput> | TaskCreateWithoutTemplateInput[] | TaskUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTemplateInput | TaskCreateOrConnectWithoutTemplateInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutTemplateInput | TaskUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: TaskCreateManyTemplateInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutTemplateInput | TaskUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutTemplateInput | TaskUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<TaskCreateWithoutTemplateInput, TaskUncheckedCreateWithoutTemplateInput> | TaskCreateWithoutTemplateInput[] | TaskUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTemplateInput | TaskCreateOrConnectWithoutTemplateInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutTemplateInput | TaskUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: TaskCreateManyTemplateInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutTemplateInput | TaskUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutTemplateInput | TaskUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTasksInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    connect?: UserWhereUniqueInput
  }

  export type ScheduleTemplateCreateNestedOneWithoutTasksInput = {
    create?: XOR<ScheduleTemplateCreateWithoutTasksInput, ScheduleTemplateUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ScheduleTemplateCreateOrConnectWithoutTasksInput
    connect?: ScheduleTemplateWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    upsert?: UserUpsertWithoutTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTasksInput, UserUpdateWithoutTasksInput>, UserUncheckedUpdateWithoutTasksInput>
  }

  export type ScheduleTemplateUpdateOneWithoutTasksNestedInput = {
    create?: XOR<ScheduleTemplateCreateWithoutTasksInput, ScheduleTemplateUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ScheduleTemplateCreateOrConnectWithoutTasksInput
    upsert?: ScheduleTemplateUpsertWithoutTasksInput
    disconnect?: ScheduleTemplateWhereInput | boolean
    delete?: ScheduleTemplateWhereInput | boolean
    connect?: ScheduleTemplateWhereUniqueInput
    update?: XOR<XOR<ScheduleTemplateUpdateToOneWithWhereWithoutTasksInput, ScheduleTemplateUpdateWithoutTasksInput>, ScheduleTemplateUncheckedUpdateWithoutTasksInput>
  }

  export type UserCreateNestedOneWithoutMarkedDaysInput = {
    create?: XOR<UserCreateWithoutMarkedDaysInput, UserUncheckedCreateWithoutMarkedDaysInput>
    connectOrCreate?: UserCreateOrConnectWithoutMarkedDaysInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMarkedDaysNestedInput = {
    create?: XOR<UserCreateWithoutMarkedDaysInput, UserUncheckedCreateWithoutMarkedDaysInput>
    connectOrCreate?: UserCreateOrConnectWithoutMarkedDaysInput
    upsert?: UserUpsertWithoutMarkedDaysInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMarkedDaysInput, UserUpdateWithoutMarkedDaysInput>, UserUncheckedUpdateWithoutMarkedDaysInput>
  }

  export type UserCreateNestedOneWithoutProgressInput = {
    create?: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutProgressNestedInput = {
    create?: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressInput
    upsert?: UserUpsertWithoutProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProgressInput, UserUpdateWithoutProgressInput>, UserUncheckedUpdateWithoutProgressInput>
  }

  export type UserCreateNestedOneWithoutResourcesInput = {
    create?: XOR<UserCreateWithoutResourcesInput, UserUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResourcesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutResourcesNestedInput = {
    create?: XOR<UserCreateWithoutResourcesInput, UserUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResourcesInput
    upsert?: UserUpsertWithoutResourcesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResourcesInput, UserUpdateWithoutResourcesInput>, UserUncheckedUpdateWithoutResourcesInput>
  }

  export type UserCreateNestedOneWithoutExamEventsInput = {
    create?: XOR<UserCreateWithoutExamEventsInput, UserUncheckedCreateWithoutExamEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExamEventsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutExamEventsNestedInput = {
    create?: XOR<UserCreateWithoutExamEventsInput, UserUncheckedCreateWithoutExamEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExamEventsInput
    upsert?: UserUpsertWithoutExamEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExamEventsInput, UserUpdateWithoutExamEventsInput>, UserUncheckedUpdateWithoutExamEventsInput>
  }

  export type UserCreateNestedOneWithoutWeeklySummariesInput = {
    create?: XOR<UserCreateWithoutWeeklySummariesInput, UserUncheckedCreateWithoutWeeklySummariesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeeklySummariesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWeeklySummariesNestedInput = {
    create?: XOR<UserCreateWithoutWeeklySummariesInput, UserUncheckedCreateWithoutWeeklySummariesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeeklySummariesInput
    upsert?: UserUpsertWithoutWeeklySummariesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWeeklySummariesInput, UserUpdateWithoutWeeklySummariesInput>, UserUncheckedUpdateWithoutWeeklySummariesInput>
  }

  export type UserCreateNestedOneWithoutMasteryItemsInput = {
    create?: XOR<UserCreateWithoutMasteryItemsInput, UserUncheckedCreateWithoutMasteryItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMasteryItemsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMasteryItemsNestedInput = {
    create?: XOR<UserCreateWithoutMasteryItemsInput, UserUncheckedCreateWithoutMasteryItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMasteryItemsInput
    upsert?: UserUpsertWithoutMasteryItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMasteryItemsInput, UserUpdateWithoutMasteryItemsInput>, UserUncheckedUpdateWithoutMasteryItemsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ScheduleTemplateCreateWithoutUserInput = {
    id?: string
    dayOfWeek: number
    subject: string
    startTime: string
    endTime: string
    deadlineDay: string
    type: string
    tasks?: TaskCreateNestedManyWithoutTemplateInput
  }

  export type ScheduleTemplateUncheckedCreateWithoutUserInput = {
    id?: string
    dayOfWeek: number
    subject: string
    startTime: string
    endTime: string
    deadlineDay: string
    type: string
    tasks?: TaskUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type ScheduleTemplateCreateOrConnectWithoutUserInput = {
    where: ScheduleTemplateWhereUniqueInput
    create: XOR<ScheduleTemplateCreateWithoutUserInput, ScheduleTemplateUncheckedCreateWithoutUserInput>
  }

  export type ScheduleTemplateCreateManyUserInputEnvelope = {
    data: ScheduleTemplateCreateManyUserInput | ScheduleTemplateCreateManyUserInput[]
  }

  export type TaskCreateWithoutUserInput = {
    id?: string
    date: Date | string
    startTime: string
    endTime: string
    subject: string
    isDone?: boolean
    isMissed?: boolean
    isDeleted?: boolean
    type: string
    template?: ScheduleTemplateCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutUserInput = {
    id?: string
    templateId?: string | null
    date: Date | string
    startTime: string
    endTime: string
    subject: string
    isDone?: boolean
    isMissed?: boolean
    isDeleted?: boolean
    type: string
  }

  export type TaskCreateOrConnectWithoutUserInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskCreateManyUserInputEnvelope = {
    data: TaskCreateManyUserInput | TaskCreateManyUserInput[]
  }

  export type ResourceCreateWithoutUserInput = {
    id?: string
    subject: string
    title: string
    type: string
    url: string
    createdAt?: Date | string
  }

  export type ResourceUncheckedCreateWithoutUserInput = {
    id?: string
    subject: string
    title: string
    type: string
    url: string
    createdAt?: Date | string
  }

  export type ResourceCreateOrConnectWithoutUserInput = {
    where: ResourceWhereUniqueInput
    create: XOR<ResourceCreateWithoutUserInput, ResourceUncheckedCreateWithoutUserInput>
  }

  export type ResourceCreateManyUserInputEnvelope = {
    data: ResourceCreateManyUserInput | ResourceCreateManyUserInput[]
  }

  export type ExamEventCreateWithoutUserInput = {
    id?: string
    title: string
    date: Date | string
    priority?: string
    createdAt?: Date | string
  }

  export type ExamEventUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    date: Date | string
    priority?: string
    createdAt?: Date | string
  }

  export type ExamEventCreateOrConnectWithoutUserInput = {
    where: ExamEventWhereUniqueInput
    create: XOR<ExamEventCreateWithoutUserInput, ExamEventUncheckedCreateWithoutUserInput>
  }

  export type ExamEventCreateManyUserInputEnvelope = {
    data: ExamEventCreateManyUserInput | ExamEventCreateManyUserInput[]
  }

  export type WeeklySummaryCreateWithoutUserInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    grade: string
    totalMinutes: number
    subjectBreakdown: string
    createdAt?: Date | string
  }

  export type WeeklySummaryUncheckedCreateWithoutUserInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    grade: string
    totalMinutes: number
    subjectBreakdown: string
    createdAt?: Date | string
  }

  export type WeeklySummaryCreateOrConnectWithoutUserInput = {
    where: WeeklySummaryWhereUniqueInput
    create: XOR<WeeklySummaryCreateWithoutUserInput, WeeklySummaryUncheckedCreateWithoutUserInput>
  }

  export type WeeklySummaryCreateManyUserInputEnvelope = {
    data: WeeklySummaryCreateManyUserInput | WeeklySummaryCreateManyUserInput[]
  }

  export type MasteryItemCreateWithoutUserInput = {
    id?: string
    subject: string
    title: string
    isCompleted?: boolean
    createdAt?: Date | string
  }

  export type MasteryItemUncheckedCreateWithoutUserInput = {
    id?: string
    subject: string
    title: string
    isCompleted?: boolean
    createdAt?: Date | string
  }

  export type MasteryItemCreateOrConnectWithoutUserInput = {
    where: MasteryItemWhereUniqueInput
    create: XOR<MasteryItemCreateWithoutUserInput, MasteryItemUncheckedCreateWithoutUserInput>
  }

  export type MasteryItemCreateManyUserInputEnvelope = {
    data: MasteryItemCreateManyUserInput | MasteryItemCreateManyUserInput[]
  }

  export type MarkedDayCreateWithoutUserInput = {
    id?: string
    date: Date | string
  }

  export type MarkedDayUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
  }

  export type MarkedDayCreateOrConnectWithoutUserInput = {
    where: MarkedDayWhereUniqueInput
    create: XOR<MarkedDayCreateWithoutUserInput, MarkedDayUncheckedCreateWithoutUserInput>
  }

  export type MarkedDayCreateManyUserInputEnvelope = {
    data: MarkedDayCreateManyUserInput | MarkedDayCreateManyUserInput[]
  }

  export type UserProgressCreateWithoutUserInput = {
    id?: string
    name?: string
    currentStreak?: number
    longestStreak?: number
    lastActiveDate?: Date | string | null
    geminiApiKey?: string | null
    focusSessions?: number
    totalFocusMinutes?: number
    xp?: number
    level?: number
  }

  export type UserProgressUncheckedCreateWithoutUserInput = {
    id?: string
    name?: string
    currentStreak?: number
    longestStreak?: number
    lastActiveDate?: Date | string | null
    geminiApiKey?: string | null
    focusSessions?: number
    totalFocusMinutes?: number
    xp?: number
    level?: number
  }

  export type UserProgressCreateOrConnectWithoutUserInput = {
    where: UserProgressWhereUniqueInput
    create: XOR<UserProgressCreateWithoutUserInput, UserProgressUncheckedCreateWithoutUserInput>
  }

  export type ChatSessionCreateWithoutUserInput = {
    id?: string
    title?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionUncheckedCreateWithoutUserInput = {
    id?: string
    title?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionCreateOrConnectWithoutUserInput = {
    where: ChatSessionWhereUniqueInput
    create: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput>
  }

  export type ChatSessionCreateManyUserInputEnvelope = {
    data: ChatSessionCreateManyUserInput | ChatSessionCreateManyUserInput[]
  }

  export type ProjectCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    docs?: ProjectDocCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    docs?: ProjectDocUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[]
  }

  export type ScheduleTemplateUpsertWithWhereUniqueWithoutUserInput = {
    where: ScheduleTemplateWhereUniqueInput
    update: XOR<ScheduleTemplateUpdateWithoutUserInput, ScheduleTemplateUncheckedUpdateWithoutUserInput>
    create: XOR<ScheduleTemplateCreateWithoutUserInput, ScheduleTemplateUncheckedCreateWithoutUserInput>
  }

  export type ScheduleTemplateUpdateWithWhereUniqueWithoutUserInput = {
    where: ScheduleTemplateWhereUniqueInput
    data: XOR<ScheduleTemplateUpdateWithoutUserInput, ScheduleTemplateUncheckedUpdateWithoutUserInput>
  }

  export type ScheduleTemplateUpdateManyWithWhereWithoutUserInput = {
    where: ScheduleTemplateScalarWhereInput
    data: XOR<ScheduleTemplateUpdateManyMutationInput, ScheduleTemplateUncheckedUpdateManyWithoutUserInput>
  }

  export type ScheduleTemplateScalarWhereInput = {
    AND?: ScheduleTemplateScalarWhereInput | ScheduleTemplateScalarWhereInput[]
    OR?: ScheduleTemplateScalarWhereInput[]
    NOT?: ScheduleTemplateScalarWhereInput | ScheduleTemplateScalarWhereInput[]
    id?: StringFilter<"ScheduleTemplate"> | string
    userId?: StringFilter<"ScheduleTemplate"> | string
    dayOfWeek?: IntFilter<"ScheduleTemplate"> | number
    subject?: StringFilter<"ScheduleTemplate"> | string
    startTime?: StringFilter<"ScheduleTemplate"> | string
    endTime?: StringFilter<"ScheduleTemplate"> | string
    deadlineDay?: StringFilter<"ScheduleTemplate"> | string
    type?: StringFilter<"ScheduleTemplate"> | string
  }

  export type TaskUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
  }

  export type TaskUpdateManyWithWhereWithoutUserInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutUserInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    userId?: StringFilter<"Task"> | string
    templateId?: StringNullableFilter<"Task"> | string | null
    date?: DateTimeFilter<"Task"> | Date | string
    startTime?: StringFilter<"Task"> | string
    endTime?: StringFilter<"Task"> | string
    subject?: StringFilter<"Task"> | string
    isDone?: BoolFilter<"Task"> | boolean
    isMissed?: BoolFilter<"Task"> | boolean
    isDeleted?: BoolFilter<"Task"> | boolean
    type?: StringFilter<"Task"> | string
  }

  export type ResourceUpsertWithWhereUniqueWithoutUserInput = {
    where: ResourceWhereUniqueInput
    update: XOR<ResourceUpdateWithoutUserInput, ResourceUncheckedUpdateWithoutUserInput>
    create: XOR<ResourceCreateWithoutUserInput, ResourceUncheckedCreateWithoutUserInput>
  }

  export type ResourceUpdateWithWhereUniqueWithoutUserInput = {
    where: ResourceWhereUniqueInput
    data: XOR<ResourceUpdateWithoutUserInput, ResourceUncheckedUpdateWithoutUserInput>
  }

  export type ResourceUpdateManyWithWhereWithoutUserInput = {
    where: ResourceScalarWhereInput
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyWithoutUserInput>
  }

  export type ResourceScalarWhereInput = {
    AND?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
    OR?: ResourceScalarWhereInput[]
    NOT?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
    id?: StringFilter<"Resource"> | string
    userId?: StringFilter<"Resource"> | string
    subject?: StringFilter<"Resource"> | string
    title?: StringFilter<"Resource"> | string
    type?: StringFilter<"Resource"> | string
    url?: StringFilter<"Resource"> | string
    createdAt?: DateTimeFilter<"Resource"> | Date | string
  }

  export type ExamEventUpsertWithWhereUniqueWithoutUserInput = {
    where: ExamEventWhereUniqueInput
    update: XOR<ExamEventUpdateWithoutUserInput, ExamEventUncheckedUpdateWithoutUserInput>
    create: XOR<ExamEventCreateWithoutUserInput, ExamEventUncheckedCreateWithoutUserInput>
  }

  export type ExamEventUpdateWithWhereUniqueWithoutUserInput = {
    where: ExamEventWhereUniqueInput
    data: XOR<ExamEventUpdateWithoutUserInput, ExamEventUncheckedUpdateWithoutUserInput>
  }

  export type ExamEventUpdateManyWithWhereWithoutUserInput = {
    where: ExamEventScalarWhereInput
    data: XOR<ExamEventUpdateManyMutationInput, ExamEventUncheckedUpdateManyWithoutUserInput>
  }

  export type ExamEventScalarWhereInput = {
    AND?: ExamEventScalarWhereInput | ExamEventScalarWhereInput[]
    OR?: ExamEventScalarWhereInput[]
    NOT?: ExamEventScalarWhereInput | ExamEventScalarWhereInput[]
    id?: StringFilter<"ExamEvent"> | string
    userId?: StringFilter<"ExamEvent"> | string
    title?: StringFilter<"ExamEvent"> | string
    date?: DateTimeFilter<"ExamEvent"> | Date | string
    priority?: StringFilter<"ExamEvent"> | string
    createdAt?: DateTimeFilter<"ExamEvent"> | Date | string
  }

  export type WeeklySummaryUpsertWithWhereUniqueWithoutUserInput = {
    where: WeeklySummaryWhereUniqueInput
    update: XOR<WeeklySummaryUpdateWithoutUserInput, WeeklySummaryUncheckedUpdateWithoutUserInput>
    create: XOR<WeeklySummaryCreateWithoutUserInput, WeeklySummaryUncheckedCreateWithoutUserInput>
  }

  export type WeeklySummaryUpdateWithWhereUniqueWithoutUserInput = {
    where: WeeklySummaryWhereUniqueInput
    data: XOR<WeeklySummaryUpdateWithoutUserInput, WeeklySummaryUncheckedUpdateWithoutUserInput>
  }

  export type WeeklySummaryUpdateManyWithWhereWithoutUserInput = {
    where: WeeklySummaryScalarWhereInput
    data: XOR<WeeklySummaryUpdateManyMutationInput, WeeklySummaryUncheckedUpdateManyWithoutUserInput>
  }

  export type WeeklySummaryScalarWhereInput = {
    AND?: WeeklySummaryScalarWhereInput | WeeklySummaryScalarWhereInput[]
    OR?: WeeklySummaryScalarWhereInput[]
    NOT?: WeeklySummaryScalarWhereInput | WeeklySummaryScalarWhereInput[]
    id?: StringFilter<"WeeklySummary"> | string
    userId?: StringFilter<"WeeklySummary"> | string
    startDate?: DateTimeFilter<"WeeklySummary"> | Date | string
    endDate?: DateTimeFilter<"WeeklySummary"> | Date | string
    grade?: StringFilter<"WeeklySummary"> | string
    totalMinutes?: IntFilter<"WeeklySummary"> | number
    subjectBreakdown?: StringFilter<"WeeklySummary"> | string
    createdAt?: DateTimeFilter<"WeeklySummary"> | Date | string
  }

  export type MasteryItemUpsertWithWhereUniqueWithoutUserInput = {
    where: MasteryItemWhereUniqueInput
    update: XOR<MasteryItemUpdateWithoutUserInput, MasteryItemUncheckedUpdateWithoutUserInput>
    create: XOR<MasteryItemCreateWithoutUserInput, MasteryItemUncheckedCreateWithoutUserInput>
  }

  export type MasteryItemUpdateWithWhereUniqueWithoutUserInput = {
    where: MasteryItemWhereUniqueInput
    data: XOR<MasteryItemUpdateWithoutUserInput, MasteryItemUncheckedUpdateWithoutUserInput>
  }

  export type MasteryItemUpdateManyWithWhereWithoutUserInput = {
    where: MasteryItemScalarWhereInput
    data: XOR<MasteryItemUpdateManyMutationInput, MasteryItemUncheckedUpdateManyWithoutUserInput>
  }

  export type MasteryItemScalarWhereInput = {
    AND?: MasteryItemScalarWhereInput | MasteryItemScalarWhereInput[]
    OR?: MasteryItemScalarWhereInput[]
    NOT?: MasteryItemScalarWhereInput | MasteryItemScalarWhereInput[]
    id?: StringFilter<"MasteryItem"> | string
    userId?: StringFilter<"MasteryItem"> | string
    subject?: StringFilter<"MasteryItem"> | string
    title?: StringFilter<"MasteryItem"> | string
    isCompleted?: BoolFilter<"MasteryItem"> | boolean
    createdAt?: DateTimeFilter<"MasteryItem"> | Date | string
  }

  export type MarkedDayUpsertWithWhereUniqueWithoutUserInput = {
    where: MarkedDayWhereUniqueInput
    update: XOR<MarkedDayUpdateWithoutUserInput, MarkedDayUncheckedUpdateWithoutUserInput>
    create: XOR<MarkedDayCreateWithoutUserInput, MarkedDayUncheckedCreateWithoutUserInput>
  }

  export type MarkedDayUpdateWithWhereUniqueWithoutUserInput = {
    where: MarkedDayWhereUniqueInput
    data: XOR<MarkedDayUpdateWithoutUserInput, MarkedDayUncheckedUpdateWithoutUserInput>
  }

  export type MarkedDayUpdateManyWithWhereWithoutUserInput = {
    where: MarkedDayScalarWhereInput
    data: XOR<MarkedDayUpdateManyMutationInput, MarkedDayUncheckedUpdateManyWithoutUserInput>
  }

  export type MarkedDayScalarWhereInput = {
    AND?: MarkedDayScalarWhereInput | MarkedDayScalarWhereInput[]
    OR?: MarkedDayScalarWhereInput[]
    NOT?: MarkedDayScalarWhereInput | MarkedDayScalarWhereInput[]
    id?: StringFilter<"MarkedDay"> | string
    userId?: StringFilter<"MarkedDay"> | string
    date?: DateTimeFilter<"MarkedDay"> | Date | string
  }

  export type UserProgressUpsertWithoutUserInput = {
    update: XOR<UserProgressUpdateWithoutUserInput, UserProgressUncheckedUpdateWithoutUserInput>
    create: XOR<UserProgressCreateWithoutUserInput, UserProgressUncheckedCreateWithoutUserInput>
    where?: UserProgressWhereInput
  }

  export type UserProgressUpdateToOneWithWhereWithoutUserInput = {
    where?: UserProgressWhereInput
    data: XOR<UserProgressUpdateWithoutUserInput, UserProgressUncheckedUpdateWithoutUserInput>
  }

  export type UserProgressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastActiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    geminiApiKey?: NullableStringFieldUpdateOperationsInput | string | null
    focusSessions?: IntFieldUpdateOperationsInput | number
    totalFocusMinutes?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
  }

  export type UserProgressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastActiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    geminiApiKey?: NullableStringFieldUpdateOperationsInput | string | null
    focusSessions?: IntFieldUpdateOperationsInput | number
    totalFocusMinutes?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
  }

  export type ChatSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatSessionWhereUniqueInput
    update: XOR<ChatSessionUpdateWithoutUserInput, ChatSessionUncheckedUpdateWithoutUserInput>
    create: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput>
  }

  export type ChatSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatSessionWhereUniqueInput
    data: XOR<ChatSessionUpdateWithoutUserInput, ChatSessionUncheckedUpdateWithoutUserInput>
  }

  export type ChatSessionUpdateManyWithWhereWithoutUserInput = {
    where: ChatSessionScalarWhereInput
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatSessionScalarWhereInput = {
    AND?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
    OR?: ChatSessionScalarWhereInput[]
    NOT?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
    id?: StringFilter<"ChatSession"> | string
    userId?: StringFilter<"ChatSession"> | string
    title?: StringFilter<"ChatSession"> | string
    createdAt?: DateTimeFilter<"ChatSession"> | Date | string
    updatedAt?: DateTimeFilter<"ChatSession"> | Date | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    userId?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    status?: StringFilter<"Project"> | string
    progress?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type UserCreateWithoutProjectsInput = {
    id?: string
    username: string
    passwordHash: string
    createdAt?: Date | string
    templates?: ScheduleTemplateCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    resources?: ResourceCreateNestedManyWithoutUserInput
    examEvents?: ExamEventCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryCreateNestedManyWithoutUserInput
    masteryItems?: MasteryItemCreateNestedManyWithoutUserInput
    markedDays?: MarkedDayCreateNestedManyWithoutUserInput
    progress?: UserProgressCreateNestedOneWithoutUserInput
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: string
    username: string
    passwordHash: string
    createdAt?: Date | string
    templates?: ScheduleTemplateUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    resources?: ResourceUncheckedCreateNestedManyWithoutUserInput
    examEvents?: ExamEventUncheckedCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryUncheckedCreateNestedManyWithoutUserInput
    masteryItems?: MasteryItemUncheckedCreateNestedManyWithoutUserInput
    markedDays?: MarkedDayUncheckedCreateNestedManyWithoutUserInput
    progress?: UserProgressUncheckedCreateNestedOneWithoutUserInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type ProjectDocCreateWithoutProjectInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectDocUncheckedCreateWithoutProjectInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectDocCreateOrConnectWithoutProjectInput = {
    where: ProjectDocWhereUniqueInput
    create: XOR<ProjectDocCreateWithoutProjectInput, ProjectDocUncheckedCreateWithoutProjectInput>
  }

  export type ProjectDocCreateManyProjectInputEnvelope = {
    data: ProjectDocCreateManyProjectInput | ProjectDocCreateManyProjectInput[]
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: ScheduleTemplateUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    resources?: ResourceUpdateManyWithoutUserNestedInput
    examEvents?: ExamEventUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUpdateManyWithoutUserNestedInput
    masteryItems?: MasteryItemUpdateManyWithoutUserNestedInput
    markedDays?: MarkedDayUpdateManyWithoutUserNestedInput
    progress?: UserProgressUpdateOneWithoutUserNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: ScheduleTemplateUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    resources?: ResourceUncheckedUpdateManyWithoutUserNestedInput
    examEvents?: ExamEventUncheckedUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUncheckedUpdateManyWithoutUserNestedInput
    masteryItems?: MasteryItemUncheckedUpdateManyWithoutUserNestedInput
    markedDays?: MarkedDayUncheckedUpdateManyWithoutUserNestedInput
    progress?: UserProgressUncheckedUpdateOneWithoutUserNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectDocUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectDocWhereUniqueInput
    update: XOR<ProjectDocUpdateWithoutProjectInput, ProjectDocUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectDocCreateWithoutProjectInput, ProjectDocUncheckedCreateWithoutProjectInput>
  }

  export type ProjectDocUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectDocWhereUniqueInput
    data: XOR<ProjectDocUpdateWithoutProjectInput, ProjectDocUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectDocUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectDocScalarWhereInput
    data: XOR<ProjectDocUpdateManyMutationInput, ProjectDocUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectDocScalarWhereInput = {
    AND?: ProjectDocScalarWhereInput | ProjectDocScalarWhereInput[]
    OR?: ProjectDocScalarWhereInput[]
    NOT?: ProjectDocScalarWhereInput | ProjectDocScalarWhereInput[]
    id?: StringFilter<"ProjectDoc"> | string
    projectId?: StringFilter<"ProjectDoc"> | string
    title?: StringFilter<"ProjectDoc"> | string
    content?: StringFilter<"ProjectDoc"> | string
    createdAt?: DateTimeFilter<"ProjectDoc"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectDoc"> | Date | string
  }

  export type ProjectCreateWithoutDocsInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutDocsInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    status?: string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutDocsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutDocsInput, ProjectUncheckedCreateWithoutDocsInput>
  }

  export type ProjectUpsertWithoutDocsInput = {
    update: XOR<ProjectUpdateWithoutDocsInput, ProjectUncheckedUpdateWithoutDocsInput>
    create: XOR<ProjectCreateWithoutDocsInput, ProjectUncheckedCreateWithoutDocsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutDocsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutDocsInput, ProjectUncheckedUpdateWithoutDocsInput>
  }

  export type ProjectUpdateWithoutDocsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutDocsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutChatSessionsInput = {
    id?: string
    username: string
    passwordHash: string
    createdAt?: Date | string
    templates?: ScheduleTemplateCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    resources?: ResourceCreateNestedManyWithoutUserInput
    examEvents?: ExamEventCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryCreateNestedManyWithoutUserInput
    masteryItems?: MasteryItemCreateNestedManyWithoutUserInput
    markedDays?: MarkedDayCreateNestedManyWithoutUserInput
    progress?: UserProgressCreateNestedOneWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatSessionsInput = {
    id?: string
    username: string
    passwordHash: string
    createdAt?: Date | string
    templates?: ScheduleTemplateUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    resources?: ResourceUncheckedCreateNestedManyWithoutUserInput
    examEvents?: ExamEventUncheckedCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryUncheckedCreateNestedManyWithoutUserInput
    masteryItems?: MasteryItemUncheckedCreateNestedManyWithoutUserInput
    markedDays?: MarkedDayUncheckedCreateNestedManyWithoutUserInput
    progress?: UserProgressUncheckedCreateNestedOneWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatSessionsInput, UserUncheckedCreateWithoutChatSessionsInput>
  }

  export type ChatMessageCreateWithoutSessionInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageUncheckedCreateWithoutSessionInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutSessionInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput>
  }

  export type ChatMessageCreateManySessionInputEnvelope = {
    data: ChatMessageCreateManySessionInput | ChatMessageCreateManySessionInput[]
  }

  export type UserUpsertWithoutChatSessionsInput = {
    update: XOR<UserUpdateWithoutChatSessionsInput, UserUncheckedUpdateWithoutChatSessionsInput>
    create: XOR<UserCreateWithoutChatSessionsInput, UserUncheckedCreateWithoutChatSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatSessionsInput, UserUncheckedUpdateWithoutChatSessionsInput>
  }

  export type UserUpdateWithoutChatSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: ScheduleTemplateUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    resources?: ResourceUpdateManyWithoutUserNestedInput
    examEvents?: ExamEventUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUpdateManyWithoutUserNestedInput
    masteryItems?: MasteryItemUpdateManyWithoutUserNestedInput
    markedDays?: MarkedDayUpdateManyWithoutUserNestedInput
    progress?: UserProgressUpdateOneWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: ScheduleTemplateUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    resources?: ResourceUncheckedUpdateManyWithoutUserNestedInput
    examEvents?: ExamEventUncheckedUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUncheckedUpdateManyWithoutUserNestedInput
    masteryItems?: MasteryItemUncheckedUpdateManyWithoutUserNestedInput
    markedDays?: MarkedDayUncheckedUpdateManyWithoutUserNestedInput
    progress?: UserProgressUncheckedUpdateOneWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutSessionInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutSessionInput, ChatMessageUncheckedUpdateWithoutSessionInput>
    create: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutSessionInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutSessionInput, ChatMessageUncheckedUpdateWithoutSessionInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutSessionInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutSessionInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    sessionId?: StringFilter<"ChatMessage"> | string
    role?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type ChatSessionCreateWithoutMessagesInput = {
    id?: string
    title?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChatSessionsInput
  }

  export type ChatSessionUncheckedCreateWithoutMessagesInput = {
    id?: string
    userId: string
    title?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatSessionCreateOrConnectWithoutMessagesInput = {
    where: ChatSessionWhereUniqueInput
    create: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
  }

  export type ChatSessionUpsertWithoutMessagesInput = {
    update: XOR<ChatSessionUpdateWithoutMessagesInput, ChatSessionUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
    where?: ChatSessionWhereInput
  }

  export type ChatSessionUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatSessionWhereInput
    data: XOR<ChatSessionUpdateWithoutMessagesInput, ChatSessionUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatSessionUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatSessionsNestedInput
  }

  export type ChatSessionUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutTemplatesInput = {
    id?: string
    username: string
    passwordHash: string
    createdAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutUserInput
    resources?: ResourceCreateNestedManyWithoutUserInput
    examEvents?: ExamEventCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryCreateNestedManyWithoutUserInput
    masteryItems?: MasteryItemCreateNestedManyWithoutUserInput
    markedDays?: MarkedDayCreateNestedManyWithoutUserInput
    progress?: UserProgressCreateNestedOneWithoutUserInput
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTemplatesInput = {
    id?: string
    username: string
    passwordHash: string
    createdAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    resources?: ResourceUncheckedCreateNestedManyWithoutUserInput
    examEvents?: ExamEventUncheckedCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryUncheckedCreateNestedManyWithoutUserInput
    masteryItems?: MasteryItemUncheckedCreateNestedManyWithoutUserInput
    markedDays?: MarkedDayUncheckedCreateNestedManyWithoutUserInput
    progress?: UserProgressUncheckedCreateNestedOneWithoutUserInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTemplatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
  }

  export type TaskCreateWithoutTemplateInput = {
    id?: string
    date: Date | string
    startTime: string
    endTime: string
    subject: string
    isDone?: boolean
    isMissed?: boolean
    isDeleted?: boolean
    type: string
    user: UserCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutTemplateInput = {
    id?: string
    userId: string
    date: Date | string
    startTime: string
    endTime: string
    subject: string
    isDone?: boolean
    isMissed?: boolean
    isDeleted?: boolean
    type: string
  }

  export type TaskCreateOrConnectWithoutTemplateInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutTemplateInput, TaskUncheckedCreateWithoutTemplateInput>
  }

  export type TaskCreateManyTemplateInputEnvelope = {
    data: TaskCreateManyTemplateInput | TaskCreateManyTemplateInput[]
  }

  export type UserUpsertWithoutTemplatesInput = {
    update: XOR<UserUpdateWithoutTemplatesInput, UserUncheckedUpdateWithoutTemplatesInput>
    create: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTemplatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTemplatesInput, UserUncheckedUpdateWithoutTemplatesInput>
  }

  export type UserUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutUserNestedInput
    resources?: ResourceUpdateManyWithoutUserNestedInput
    examEvents?: ExamEventUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUpdateManyWithoutUserNestedInput
    masteryItems?: MasteryItemUpdateManyWithoutUserNestedInput
    markedDays?: MarkedDayUpdateManyWithoutUserNestedInput
    progress?: UserProgressUpdateOneWithoutUserNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    resources?: ResourceUncheckedUpdateManyWithoutUserNestedInput
    examEvents?: ExamEventUncheckedUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUncheckedUpdateManyWithoutUserNestedInput
    masteryItems?: MasteryItemUncheckedUpdateManyWithoutUserNestedInput
    markedDays?: MarkedDayUncheckedUpdateManyWithoutUserNestedInput
    progress?: UserProgressUncheckedUpdateOneWithoutUserNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutTemplateInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutTemplateInput, TaskUncheckedUpdateWithoutTemplateInput>
    create: XOR<TaskCreateWithoutTemplateInput, TaskUncheckedCreateWithoutTemplateInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutTemplateInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutTemplateInput, TaskUncheckedUpdateWithoutTemplateInput>
  }

  export type TaskUpdateManyWithWhereWithoutTemplateInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutTemplateInput>
  }

  export type UserCreateWithoutTasksInput = {
    id?: string
    username: string
    passwordHash: string
    createdAt?: Date | string
    templates?: ScheduleTemplateCreateNestedManyWithoutUserInput
    resources?: ResourceCreateNestedManyWithoutUserInput
    examEvents?: ExamEventCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryCreateNestedManyWithoutUserInput
    masteryItems?: MasteryItemCreateNestedManyWithoutUserInput
    markedDays?: MarkedDayCreateNestedManyWithoutUserInput
    progress?: UserProgressCreateNestedOneWithoutUserInput
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTasksInput = {
    id?: string
    username: string
    passwordHash: string
    createdAt?: Date | string
    templates?: ScheduleTemplateUncheckedCreateNestedManyWithoutUserInput
    resources?: ResourceUncheckedCreateNestedManyWithoutUserInput
    examEvents?: ExamEventUncheckedCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryUncheckedCreateNestedManyWithoutUserInput
    masteryItems?: MasteryItemUncheckedCreateNestedManyWithoutUserInput
    markedDays?: MarkedDayUncheckedCreateNestedManyWithoutUserInput
    progress?: UserProgressUncheckedCreateNestedOneWithoutUserInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
  }

  export type ScheduleTemplateCreateWithoutTasksInput = {
    id?: string
    dayOfWeek: number
    subject: string
    startTime: string
    endTime: string
    deadlineDay: string
    type: string
    user: UserCreateNestedOneWithoutTemplatesInput
  }

  export type ScheduleTemplateUncheckedCreateWithoutTasksInput = {
    id?: string
    userId: string
    dayOfWeek: number
    subject: string
    startTime: string
    endTime: string
    deadlineDay: string
    type: string
  }

  export type ScheduleTemplateCreateOrConnectWithoutTasksInput = {
    where: ScheduleTemplateWhereUniqueInput
    create: XOR<ScheduleTemplateCreateWithoutTasksInput, ScheduleTemplateUncheckedCreateWithoutTasksInput>
  }

  export type UserUpsertWithoutTasksInput = {
    update: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: ScheduleTemplateUpdateManyWithoutUserNestedInput
    resources?: ResourceUpdateManyWithoutUserNestedInput
    examEvents?: ExamEventUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUpdateManyWithoutUserNestedInput
    masteryItems?: MasteryItemUpdateManyWithoutUserNestedInput
    markedDays?: MarkedDayUpdateManyWithoutUserNestedInput
    progress?: UserProgressUpdateOneWithoutUserNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: ScheduleTemplateUncheckedUpdateManyWithoutUserNestedInput
    resources?: ResourceUncheckedUpdateManyWithoutUserNestedInput
    examEvents?: ExamEventUncheckedUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUncheckedUpdateManyWithoutUserNestedInput
    masteryItems?: MasteryItemUncheckedUpdateManyWithoutUserNestedInput
    markedDays?: MarkedDayUncheckedUpdateManyWithoutUserNestedInput
    progress?: UserProgressUncheckedUpdateOneWithoutUserNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ScheduleTemplateUpsertWithoutTasksInput = {
    update: XOR<ScheduleTemplateUpdateWithoutTasksInput, ScheduleTemplateUncheckedUpdateWithoutTasksInput>
    create: XOR<ScheduleTemplateCreateWithoutTasksInput, ScheduleTemplateUncheckedCreateWithoutTasksInput>
    where?: ScheduleTemplateWhereInput
  }

  export type ScheduleTemplateUpdateToOneWithWhereWithoutTasksInput = {
    where?: ScheduleTemplateWhereInput
    data: XOR<ScheduleTemplateUpdateWithoutTasksInput, ScheduleTemplateUncheckedUpdateWithoutTasksInput>
  }

  export type ScheduleTemplateUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    deadlineDay?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTemplatesNestedInput
  }

  export type ScheduleTemplateUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    deadlineDay?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutMarkedDaysInput = {
    id?: string
    username: string
    passwordHash: string
    createdAt?: Date | string
    templates?: ScheduleTemplateCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    resources?: ResourceCreateNestedManyWithoutUserInput
    examEvents?: ExamEventCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryCreateNestedManyWithoutUserInput
    masteryItems?: MasteryItemCreateNestedManyWithoutUserInput
    progress?: UserProgressCreateNestedOneWithoutUserInput
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMarkedDaysInput = {
    id?: string
    username: string
    passwordHash: string
    createdAt?: Date | string
    templates?: ScheduleTemplateUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    resources?: ResourceUncheckedCreateNestedManyWithoutUserInput
    examEvents?: ExamEventUncheckedCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryUncheckedCreateNestedManyWithoutUserInput
    masteryItems?: MasteryItemUncheckedCreateNestedManyWithoutUserInput
    progress?: UserProgressUncheckedCreateNestedOneWithoutUserInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMarkedDaysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMarkedDaysInput, UserUncheckedCreateWithoutMarkedDaysInput>
  }

  export type UserUpsertWithoutMarkedDaysInput = {
    update: XOR<UserUpdateWithoutMarkedDaysInput, UserUncheckedUpdateWithoutMarkedDaysInput>
    create: XOR<UserCreateWithoutMarkedDaysInput, UserUncheckedCreateWithoutMarkedDaysInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMarkedDaysInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMarkedDaysInput, UserUncheckedUpdateWithoutMarkedDaysInput>
  }

  export type UserUpdateWithoutMarkedDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: ScheduleTemplateUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    resources?: ResourceUpdateManyWithoutUserNestedInput
    examEvents?: ExamEventUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUpdateManyWithoutUserNestedInput
    masteryItems?: MasteryItemUpdateManyWithoutUserNestedInput
    progress?: UserProgressUpdateOneWithoutUserNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMarkedDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: ScheduleTemplateUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    resources?: ResourceUncheckedUpdateManyWithoutUserNestedInput
    examEvents?: ExamEventUncheckedUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUncheckedUpdateManyWithoutUserNestedInput
    masteryItems?: MasteryItemUncheckedUpdateManyWithoutUserNestedInput
    progress?: UserProgressUncheckedUpdateOneWithoutUserNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutProgressInput = {
    id?: string
    username: string
    passwordHash: string
    createdAt?: Date | string
    templates?: ScheduleTemplateCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    resources?: ResourceCreateNestedManyWithoutUserInput
    examEvents?: ExamEventCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryCreateNestedManyWithoutUserInput
    masteryItems?: MasteryItemCreateNestedManyWithoutUserInput
    markedDays?: MarkedDayCreateNestedManyWithoutUserInput
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProgressInput = {
    id?: string
    username: string
    passwordHash: string
    createdAt?: Date | string
    templates?: ScheduleTemplateUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    resources?: ResourceUncheckedCreateNestedManyWithoutUserInput
    examEvents?: ExamEventUncheckedCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryUncheckedCreateNestedManyWithoutUserInput
    masteryItems?: MasteryItemUncheckedCreateNestedManyWithoutUserInput
    markedDays?: MarkedDayUncheckedCreateNestedManyWithoutUserInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
  }

  export type UserUpsertWithoutProgressInput = {
    update: XOR<UserUpdateWithoutProgressInput, UserUncheckedUpdateWithoutProgressInput>
    create: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProgressInput, UserUncheckedUpdateWithoutProgressInput>
  }

  export type UserUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: ScheduleTemplateUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    resources?: ResourceUpdateManyWithoutUserNestedInput
    examEvents?: ExamEventUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUpdateManyWithoutUserNestedInput
    masteryItems?: MasteryItemUpdateManyWithoutUserNestedInput
    markedDays?: MarkedDayUpdateManyWithoutUserNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: ScheduleTemplateUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    resources?: ResourceUncheckedUpdateManyWithoutUserNestedInput
    examEvents?: ExamEventUncheckedUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUncheckedUpdateManyWithoutUserNestedInput
    masteryItems?: MasteryItemUncheckedUpdateManyWithoutUserNestedInput
    markedDays?: MarkedDayUncheckedUpdateManyWithoutUserNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutResourcesInput = {
    id?: string
    username: string
    passwordHash: string
    createdAt?: Date | string
    templates?: ScheduleTemplateCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    examEvents?: ExamEventCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryCreateNestedManyWithoutUserInput
    masteryItems?: MasteryItemCreateNestedManyWithoutUserInput
    markedDays?: MarkedDayCreateNestedManyWithoutUserInput
    progress?: UserProgressCreateNestedOneWithoutUserInput
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutResourcesInput = {
    id?: string
    username: string
    passwordHash: string
    createdAt?: Date | string
    templates?: ScheduleTemplateUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    examEvents?: ExamEventUncheckedCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryUncheckedCreateNestedManyWithoutUserInput
    masteryItems?: MasteryItemUncheckedCreateNestedManyWithoutUserInput
    markedDays?: MarkedDayUncheckedCreateNestedManyWithoutUserInput
    progress?: UserProgressUncheckedCreateNestedOneWithoutUserInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutResourcesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResourcesInput, UserUncheckedCreateWithoutResourcesInput>
  }

  export type UserUpsertWithoutResourcesInput = {
    update: XOR<UserUpdateWithoutResourcesInput, UserUncheckedUpdateWithoutResourcesInput>
    create: XOR<UserCreateWithoutResourcesInput, UserUncheckedCreateWithoutResourcesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResourcesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResourcesInput, UserUncheckedUpdateWithoutResourcesInput>
  }

  export type UserUpdateWithoutResourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: ScheduleTemplateUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    examEvents?: ExamEventUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUpdateManyWithoutUserNestedInput
    masteryItems?: MasteryItemUpdateManyWithoutUserNestedInput
    markedDays?: MarkedDayUpdateManyWithoutUserNestedInput
    progress?: UserProgressUpdateOneWithoutUserNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutResourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: ScheduleTemplateUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    examEvents?: ExamEventUncheckedUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUncheckedUpdateManyWithoutUserNestedInput
    masteryItems?: MasteryItemUncheckedUpdateManyWithoutUserNestedInput
    markedDays?: MarkedDayUncheckedUpdateManyWithoutUserNestedInput
    progress?: UserProgressUncheckedUpdateOneWithoutUserNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutExamEventsInput = {
    id?: string
    username: string
    passwordHash: string
    createdAt?: Date | string
    templates?: ScheduleTemplateCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    resources?: ResourceCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryCreateNestedManyWithoutUserInput
    masteryItems?: MasteryItemCreateNestedManyWithoutUserInput
    markedDays?: MarkedDayCreateNestedManyWithoutUserInput
    progress?: UserProgressCreateNestedOneWithoutUserInput
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutExamEventsInput = {
    id?: string
    username: string
    passwordHash: string
    createdAt?: Date | string
    templates?: ScheduleTemplateUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    resources?: ResourceUncheckedCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryUncheckedCreateNestedManyWithoutUserInput
    masteryItems?: MasteryItemUncheckedCreateNestedManyWithoutUserInput
    markedDays?: MarkedDayUncheckedCreateNestedManyWithoutUserInput
    progress?: UserProgressUncheckedCreateNestedOneWithoutUserInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExamEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExamEventsInput, UserUncheckedCreateWithoutExamEventsInput>
  }

  export type UserUpsertWithoutExamEventsInput = {
    update: XOR<UserUpdateWithoutExamEventsInput, UserUncheckedUpdateWithoutExamEventsInput>
    create: XOR<UserCreateWithoutExamEventsInput, UserUncheckedCreateWithoutExamEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExamEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExamEventsInput, UserUncheckedUpdateWithoutExamEventsInput>
  }

  export type UserUpdateWithoutExamEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: ScheduleTemplateUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    resources?: ResourceUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUpdateManyWithoutUserNestedInput
    masteryItems?: MasteryItemUpdateManyWithoutUserNestedInput
    markedDays?: MarkedDayUpdateManyWithoutUserNestedInput
    progress?: UserProgressUpdateOneWithoutUserNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExamEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: ScheduleTemplateUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    resources?: ResourceUncheckedUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUncheckedUpdateManyWithoutUserNestedInput
    masteryItems?: MasteryItemUncheckedUpdateManyWithoutUserNestedInput
    markedDays?: MarkedDayUncheckedUpdateManyWithoutUserNestedInput
    progress?: UserProgressUncheckedUpdateOneWithoutUserNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWeeklySummariesInput = {
    id?: string
    username: string
    passwordHash: string
    createdAt?: Date | string
    templates?: ScheduleTemplateCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    resources?: ResourceCreateNestedManyWithoutUserInput
    examEvents?: ExamEventCreateNestedManyWithoutUserInput
    masteryItems?: MasteryItemCreateNestedManyWithoutUserInput
    markedDays?: MarkedDayCreateNestedManyWithoutUserInput
    progress?: UserProgressCreateNestedOneWithoutUserInput
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWeeklySummariesInput = {
    id?: string
    username: string
    passwordHash: string
    createdAt?: Date | string
    templates?: ScheduleTemplateUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    resources?: ResourceUncheckedCreateNestedManyWithoutUserInput
    examEvents?: ExamEventUncheckedCreateNestedManyWithoutUserInput
    masteryItems?: MasteryItemUncheckedCreateNestedManyWithoutUserInput
    markedDays?: MarkedDayUncheckedCreateNestedManyWithoutUserInput
    progress?: UserProgressUncheckedCreateNestedOneWithoutUserInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWeeklySummariesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWeeklySummariesInput, UserUncheckedCreateWithoutWeeklySummariesInput>
  }

  export type UserUpsertWithoutWeeklySummariesInput = {
    update: XOR<UserUpdateWithoutWeeklySummariesInput, UserUncheckedUpdateWithoutWeeklySummariesInput>
    create: XOR<UserCreateWithoutWeeklySummariesInput, UserUncheckedCreateWithoutWeeklySummariesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWeeklySummariesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWeeklySummariesInput, UserUncheckedUpdateWithoutWeeklySummariesInput>
  }

  export type UserUpdateWithoutWeeklySummariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: ScheduleTemplateUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    resources?: ResourceUpdateManyWithoutUserNestedInput
    examEvents?: ExamEventUpdateManyWithoutUserNestedInput
    masteryItems?: MasteryItemUpdateManyWithoutUserNestedInput
    markedDays?: MarkedDayUpdateManyWithoutUserNestedInput
    progress?: UserProgressUpdateOneWithoutUserNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWeeklySummariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: ScheduleTemplateUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    resources?: ResourceUncheckedUpdateManyWithoutUserNestedInput
    examEvents?: ExamEventUncheckedUpdateManyWithoutUserNestedInput
    masteryItems?: MasteryItemUncheckedUpdateManyWithoutUserNestedInput
    markedDays?: MarkedDayUncheckedUpdateManyWithoutUserNestedInput
    progress?: UserProgressUncheckedUpdateOneWithoutUserNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMasteryItemsInput = {
    id?: string
    username: string
    passwordHash: string
    createdAt?: Date | string
    templates?: ScheduleTemplateCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    resources?: ResourceCreateNestedManyWithoutUserInput
    examEvents?: ExamEventCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryCreateNestedManyWithoutUserInput
    markedDays?: MarkedDayCreateNestedManyWithoutUserInput
    progress?: UserProgressCreateNestedOneWithoutUserInput
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMasteryItemsInput = {
    id?: string
    username: string
    passwordHash: string
    createdAt?: Date | string
    templates?: ScheduleTemplateUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    resources?: ResourceUncheckedCreateNestedManyWithoutUserInput
    examEvents?: ExamEventUncheckedCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryUncheckedCreateNestedManyWithoutUserInput
    markedDays?: MarkedDayUncheckedCreateNestedManyWithoutUserInput
    progress?: UserProgressUncheckedCreateNestedOneWithoutUserInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMasteryItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMasteryItemsInput, UserUncheckedCreateWithoutMasteryItemsInput>
  }

  export type UserUpsertWithoutMasteryItemsInput = {
    update: XOR<UserUpdateWithoutMasteryItemsInput, UserUncheckedUpdateWithoutMasteryItemsInput>
    create: XOR<UserCreateWithoutMasteryItemsInput, UserUncheckedCreateWithoutMasteryItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMasteryItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMasteryItemsInput, UserUncheckedUpdateWithoutMasteryItemsInput>
  }

  export type UserUpdateWithoutMasteryItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: ScheduleTemplateUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    resources?: ResourceUpdateManyWithoutUserNestedInput
    examEvents?: ExamEventUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUpdateManyWithoutUserNestedInput
    markedDays?: MarkedDayUpdateManyWithoutUserNestedInput
    progress?: UserProgressUpdateOneWithoutUserNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMasteryItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: ScheduleTemplateUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    resources?: ResourceUncheckedUpdateManyWithoutUserNestedInput
    examEvents?: ExamEventUncheckedUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUncheckedUpdateManyWithoutUserNestedInput
    markedDays?: MarkedDayUncheckedUpdateManyWithoutUserNestedInput
    progress?: UserProgressUncheckedUpdateOneWithoutUserNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ScheduleTemplateCreateManyUserInput = {
    id?: string
    dayOfWeek: number
    subject: string
    startTime: string
    endTime: string
    deadlineDay: string
    type: string
  }

  export type TaskCreateManyUserInput = {
    id?: string
    templateId?: string | null
    date: Date | string
    startTime: string
    endTime: string
    subject: string
    isDone?: boolean
    isMissed?: boolean
    isDeleted?: boolean
    type: string
  }

  export type ResourceCreateManyUserInput = {
    id?: string
    subject: string
    title: string
    type: string
    url: string
    createdAt?: Date | string
  }

  export type ExamEventCreateManyUserInput = {
    id?: string
    title: string
    date: Date | string
    priority?: string
    createdAt?: Date | string
  }

  export type WeeklySummaryCreateManyUserInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    grade: string
    totalMinutes: number
    subjectBreakdown: string
    createdAt?: Date | string
  }

  export type MasteryItemCreateManyUserInput = {
    id?: string
    subject: string
    title: string
    isCompleted?: boolean
    createdAt?: Date | string
  }

  export type MarkedDayCreateManyUserInput = {
    id?: string
    date: Date | string
  }

  export type ChatSessionCreateManyUserInput = {
    id?: string
    title?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleTemplateUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    deadlineDay?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUpdateManyWithoutTemplateNestedInput
  }

  export type ScheduleTemplateUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    deadlineDay?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type ScheduleTemplateUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    deadlineDay?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type TaskUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isMissed?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    template?: ScheduleTemplateUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isMissed?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
  }

  export type TaskUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isMissed?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ResourceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamEventUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamEventUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamEventUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklySummaryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: StringFieldUpdateOperationsInput | string
    totalMinutes?: IntFieldUpdateOperationsInput | number
    subjectBreakdown?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklySummaryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: StringFieldUpdateOperationsInput | string
    totalMinutes?: IntFieldUpdateOperationsInput | number
    subjectBreakdown?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklySummaryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: StringFieldUpdateOperationsInput | string
    totalMinutes?: IntFieldUpdateOperationsInput | number
    subjectBreakdown?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasteryItemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasteryItemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasteryItemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarkedDayUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarkedDayUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarkedDayUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    docs?: ProjectDocUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    docs?: ProjectDocUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDocCreateManyProjectInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectDocUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDocUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDocUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManySessionInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyTemplateInput = {
    id?: string
    userId: string
    date: Date | string
    startTime: string
    endTime: string
    subject: string
    isDone?: boolean
    isMissed?: boolean
    isDeleted?: boolean
    type: string
  }

  export type TaskUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isMissed?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isMissed?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
  }

  export type TaskUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isMissed?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectCountOutputTypeDefaultArgs instead
     */
    export type ProjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatSessionCountOutputTypeDefaultArgs instead
     */
    export type ChatSessionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatSessionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ScheduleTemplateCountOutputTypeDefaultArgs instead
     */
    export type ScheduleTemplateCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ScheduleTemplateCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectDefaultArgs instead
     */
    export type ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectDocDefaultArgs instead
     */
    export type ProjectDocArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectDocDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatSessionDefaultArgs instead
     */
    export type ChatSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatSessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatMessageDefaultArgs instead
     */
    export type ChatMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatMessageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ScheduleTemplateDefaultArgs instead
     */
    export type ScheduleTemplateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ScheduleTemplateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskDefaultArgs instead
     */
    export type TaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MarkedDayDefaultArgs instead
     */
    export type MarkedDayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MarkedDayDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserProgressDefaultArgs instead
     */
    export type UserProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserProgressDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResourceDefaultArgs instead
     */
    export type ResourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResourceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExamEventDefaultArgs instead
     */
    export type ExamEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExamEventDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WeeklySummaryDefaultArgs instead
     */
    export type WeeklySummaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WeeklySummaryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MasteryItemDefaultArgs instead
     */
    export type MasteryItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MasteryItemDefaultArgs<ExtArgs>

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