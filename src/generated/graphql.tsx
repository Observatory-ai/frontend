import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _service_apis_enum: any;
  audit_log_action_enum: any;
  audit_log_resource_enum: any;
  date: any;
  service_service_enum: any;
  timestamp: any;
  token_type_enum: any;
  user_authmethod_enum: any;
  user_locale_enum: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type LoginInput = {
  emailOrUsername: Scalars['String'];
  password: Scalars['String'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  accessToken: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  uuid: Scalars['String'];
};

export type RefreshTokensOutput = {
  __typename?: 'RefreshTokensOutput';
  accessToken: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  uuid: Scalars['String'];
};

export type RegisterInput = {
  confirmPassword: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type RegisterOutput = {
  __typename?: 'RegisterOutput';
  accessToken: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  uuid: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "_service_apis_enum". All fields are combined with logical 'AND'. */
export type _Service_Apis_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_service_apis_enum']>;
  _gt?: InputMaybe<Scalars['_service_apis_enum']>;
  _gte?: InputMaybe<Scalars['_service_apis_enum']>;
  _in?: InputMaybe<Array<Scalars['_service_apis_enum']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['_service_apis_enum']>;
  _lte?: InputMaybe<Scalars['_service_apis_enum']>;
  _neq?: InputMaybe<Scalars['_service_apis_enum']>;
  _nin?: InputMaybe<Array<Scalars['_service_apis_enum']>>;
};

/** columns and relationships of "audit_log" */
export type Audit_Log = {
  __typename?: 'audit_log';
  action: Scalars['audit_log_action_enum'];
  createdAt: Scalars['timestamp'];
  failureReason?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  ip: Scalars['String'];
  isSuccessful: Scalars['Boolean'];
  resource: Scalars['audit_log_resource_enum'];
  /** An object relationship */
  user: User;
  userAgent: Scalars['String'];
  userId: Scalars['Int'];
};

/** Boolean expression to compare columns of type "audit_log_action_enum". All fields are combined with logical 'AND'. */
export type Audit_Log_Action_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['audit_log_action_enum']>;
  _gt?: InputMaybe<Scalars['audit_log_action_enum']>;
  _gte?: InputMaybe<Scalars['audit_log_action_enum']>;
  _in?: InputMaybe<Array<Scalars['audit_log_action_enum']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['audit_log_action_enum']>;
  _lte?: InputMaybe<Scalars['audit_log_action_enum']>;
  _neq?: InputMaybe<Scalars['audit_log_action_enum']>;
  _nin?: InputMaybe<Array<Scalars['audit_log_action_enum']>>;
};

/** aggregated selection of "audit_log" */
export type Audit_Log_Aggregate = {
  __typename?: 'audit_log_aggregate';
  aggregate?: Maybe<Audit_Log_Aggregate_Fields>;
  nodes: Array<Audit_Log>;
};

/** aggregate fields of "audit_log" */
export type Audit_Log_Aggregate_Fields = {
  __typename?: 'audit_log_aggregate_fields';
  avg?: Maybe<Audit_Log_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Audit_Log_Max_Fields>;
  min?: Maybe<Audit_Log_Min_Fields>;
  stddev?: Maybe<Audit_Log_Stddev_Fields>;
  stddev_pop?: Maybe<Audit_Log_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Audit_Log_Stddev_Samp_Fields>;
  sum?: Maybe<Audit_Log_Sum_Fields>;
  var_pop?: Maybe<Audit_Log_Var_Pop_Fields>;
  var_samp?: Maybe<Audit_Log_Var_Samp_Fields>;
  variance?: Maybe<Audit_Log_Variance_Fields>;
};


/** aggregate fields of "audit_log" */
export type Audit_Log_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Audit_Log_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "audit_log" */
export type Audit_Log_Aggregate_Order_By = {
  avg?: InputMaybe<Audit_Log_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Audit_Log_Max_Order_By>;
  min?: InputMaybe<Audit_Log_Min_Order_By>;
  stddev?: InputMaybe<Audit_Log_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Audit_Log_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Audit_Log_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Audit_Log_Sum_Order_By>;
  var_pop?: InputMaybe<Audit_Log_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Audit_Log_Var_Samp_Order_By>;
  variance?: InputMaybe<Audit_Log_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "audit_log" */
export type Audit_Log_Arr_Rel_Insert_Input = {
  data: Array<Audit_Log_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Audit_Log_On_Conflict>;
};

/** aggregate avg on columns */
export type Audit_Log_Avg_Fields = {
  __typename?: 'audit_log_avg_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "audit_log" */
export type Audit_Log_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "audit_log". All fields are combined with a logical 'AND'. */
export type Audit_Log_Bool_Exp = {
  _and?: InputMaybe<Array<Audit_Log_Bool_Exp>>;
  _not?: InputMaybe<Audit_Log_Bool_Exp>;
  _or?: InputMaybe<Array<Audit_Log_Bool_Exp>>;
  action?: InputMaybe<Audit_Log_Action_Enum_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  failureReason?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  ip?: InputMaybe<String_Comparison_Exp>;
  isSuccessful?: InputMaybe<Boolean_Comparison_Exp>;
  resource?: InputMaybe<Audit_Log_Resource_Enum_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  userAgent?: InputMaybe<String_Comparison_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "audit_log" */
export enum Audit_Log_Constraint {
  /** unique or primary key constraint on columns "id" */
  Pk_07fefa57f7f5ab8fc3f52b3ed0b = 'PK_07fefa57f7f5ab8fc3f52b3ed0b'
}

/** input type for incrementing numeric columns in table "audit_log" */
export type Audit_Log_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "audit_log" */
export type Audit_Log_Insert_Input = {
  action?: InputMaybe<Scalars['audit_log_action_enum']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  failureReason?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  ip?: InputMaybe<Scalars['String']>;
  isSuccessful?: InputMaybe<Scalars['Boolean']>;
  resource?: InputMaybe<Scalars['audit_log_resource_enum']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  userAgent?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Audit_Log_Max_Fields = {
  __typename?: 'audit_log_max_fields';
  action?: Maybe<Scalars['audit_log_action_enum']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  failureReason?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  ip?: Maybe<Scalars['String']>;
  resource?: Maybe<Scalars['audit_log_resource_enum']>;
  userAgent?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "audit_log" */
export type Audit_Log_Max_Order_By = {
  action?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  failureReason?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ip?: InputMaybe<Order_By>;
  resource?: InputMaybe<Order_By>;
  userAgent?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Audit_Log_Min_Fields = {
  __typename?: 'audit_log_min_fields';
  action?: Maybe<Scalars['audit_log_action_enum']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  failureReason?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  ip?: Maybe<Scalars['String']>;
  resource?: Maybe<Scalars['audit_log_resource_enum']>;
  userAgent?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "audit_log" */
export type Audit_Log_Min_Order_By = {
  action?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  failureReason?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ip?: InputMaybe<Order_By>;
  resource?: InputMaybe<Order_By>;
  userAgent?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "audit_log" */
export type Audit_Log_Mutation_Response = {
  __typename?: 'audit_log_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Audit_Log>;
};

/** on_conflict condition type for table "audit_log" */
export type Audit_Log_On_Conflict = {
  constraint: Audit_Log_Constraint;
  update_columns?: Array<Audit_Log_Update_Column>;
  where?: InputMaybe<Audit_Log_Bool_Exp>;
};

/** Ordering options when selecting data from "audit_log". */
export type Audit_Log_Order_By = {
  action?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  failureReason?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ip?: InputMaybe<Order_By>;
  isSuccessful?: InputMaybe<Order_By>;
  resource?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  userAgent?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: audit_log */
export type Audit_Log_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "audit_log_resource_enum". All fields are combined with logical 'AND'. */
export type Audit_Log_Resource_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['audit_log_resource_enum']>;
  _gt?: InputMaybe<Scalars['audit_log_resource_enum']>;
  _gte?: InputMaybe<Scalars['audit_log_resource_enum']>;
  _in?: InputMaybe<Array<Scalars['audit_log_resource_enum']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['audit_log_resource_enum']>;
  _lte?: InputMaybe<Scalars['audit_log_resource_enum']>;
  _neq?: InputMaybe<Scalars['audit_log_resource_enum']>;
  _nin?: InputMaybe<Array<Scalars['audit_log_resource_enum']>>;
};

/** select columns of table "audit_log" */
export enum Audit_Log_Select_Column {
  /** column name */
  Action = 'action',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FailureReason = 'failureReason',
  /** column name */
  Id = 'id',
  /** column name */
  Ip = 'ip',
  /** column name */
  IsSuccessful = 'isSuccessful',
  /** column name */
  Resource = 'resource',
  /** column name */
  UserAgent = 'userAgent',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "audit_log" */
export type Audit_Log_Set_Input = {
  action?: InputMaybe<Scalars['audit_log_action_enum']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  failureReason?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  ip?: InputMaybe<Scalars['String']>;
  isSuccessful?: InputMaybe<Scalars['Boolean']>;
  resource?: InputMaybe<Scalars['audit_log_resource_enum']>;
  userAgent?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Audit_Log_Stddev_Fields = {
  __typename?: 'audit_log_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "audit_log" */
export type Audit_Log_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Audit_Log_Stddev_Pop_Fields = {
  __typename?: 'audit_log_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "audit_log" */
export type Audit_Log_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Audit_Log_Stddev_Samp_Fields = {
  __typename?: 'audit_log_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "audit_log" */
export type Audit_Log_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "audit_log" */
export type Audit_Log_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Audit_Log_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Audit_Log_Stream_Cursor_Value_Input = {
  action?: InputMaybe<Scalars['audit_log_action_enum']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  failureReason?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  ip?: InputMaybe<Scalars['String']>;
  isSuccessful?: InputMaybe<Scalars['Boolean']>;
  resource?: InputMaybe<Scalars['audit_log_resource_enum']>;
  userAgent?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Audit_Log_Sum_Fields = {
  __typename?: 'audit_log_sum_fields';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "audit_log" */
export type Audit_Log_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** update columns of table "audit_log" */
export enum Audit_Log_Update_Column {
  /** column name */
  Action = 'action',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FailureReason = 'failureReason',
  /** column name */
  Id = 'id',
  /** column name */
  Ip = 'ip',
  /** column name */
  IsSuccessful = 'isSuccessful',
  /** column name */
  Resource = 'resource',
  /** column name */
  UserAgent = 'userAgent',
  /** column name */
  UserId = 'userId'
}

export type Audit_Log_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Audit_Log_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Audit_Log_Set_Input>;
  where: Audit_Log_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Audit_Log_Var_Pop_Fields = {
  __typename?: 'audit_log_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "audit_log" */
export type Audit_Log_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Audit_Log_Var_Samp_Fields = {
  __typename?: 'audit_log_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "audit_log" */
export type Audit_Log_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Audit_Log_Variance_Fields = {
  __typename?: 'audit_log_variance_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "audit_log" */
export type Audit_Log_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** columns and relationships of "auth_token" */
export type Auth_Token = {
  __typename?: 'auth_token';
  id: Scalars['Int'];
  ip?: Maybe<Scalars['String']>;
  refreshToken: Scalars['String'];
  /** An object relationship */
  user: User;
  userAgent: Scalars['String'];
  userId: Scalars['Int'];
};

/** aggregated selection of "auth_token" */
export type Auth_Token_Aggregate = {
  __typename?: 'auth_token_aggregate';
  aggregate?: Maybe<Auth_Token_Aggregate_Fields>;
  nodes: Array<Auth_Token>;
};

/** aggregate fields of "auth_token" */
export type Auth_Token_Aggregate_Fields = {
  __typename?: 'auth_token_aggregate_fields';
  avg?: Maybe<Auth_Token_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Auth_Token_Max_Fields>;
  min?: Maybe<Auth_Token_Min_Fields>;
  stddev?: Maybe<Auth_Token_Stddev_Fields>;
  stddev_pop?: Maybe<Auth_Token_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Auth_Token_Stddev_Samp_Fields>;
  sum?: Maybe<Auth_Token_Sum_Fields>;
  var_pop?: Maybe<Auth_Token_Var_Pop_Fields>;
  var_samp?: Maybe<Auth_Token_Var_Samp_Fields>;
  variance?: Maybe<Auth_Token_Variance_Fields>;
};


/** aggregate fields of "auth_token" */
export type Auth_Token_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Token_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth_token" */
export type Auth_Token_Aggregate_Order_By = {
  avg?: InputMaybe<Auth_Token_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Auth_Token_Max_Order_By>;
  min?: InputMaybe<Auth_Token_Min_Order_By>;
  stddev?: InputMaybe<Auth_Token_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Auth_Token_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Auth_Token_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Auth_Token_Sum_Order_By>;
  var_pop?: InputMaybe<Auth_Token_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Auth_Token_Var_Samp_Order_By>;
  variance?: InputMaybe<Auth_Token_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "auth_token" */
export type Auth_Token_Arr_Rel_Insert_Input = {
  data: Array<Auth_Token_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_Token_On_Conflict>;
};

/** aggregate avg on columns */
export type Auth_Token_Avg_Fields = {
  __typename?: 'auth_token_avg_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "auth_token" */
export type Auth_Token_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "auth_token". All fields are combined with a logical 'AND'. */
export type Auth_Token_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Token_Bool_Exp>>;
  _not?: InputMaybe<Auth_Token_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Token_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  ip?: InputMaybe<String_Comparison_Exp>;
  refreshToken?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  userAgent?: InputMaybe<String_Comparison_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth_token" */
export enum Auth_Token_Constraint {
  /** unique or primary key constraint on columns "id" */
  Pk_4572ff5d1264c4a523f01aa86a0 = 'PK_4572ff5d1264c4a523f01aa86a0'
}

/** input type for incrementing numeric columns in table "auth_token" */
export type Auth_Token_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "auth_token" */
export type Auth_Token_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  ip?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  userAgent?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Auth_Token_Max_Fields = {
  __typename?: 'auth_token_max_fields';
  id?: Maybe<Scalars['Int']>;
  ip?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  userAgent?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "auth_token" */
export type Auth_Token_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  ip?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  userAgent?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Token_Min_Fields = {
  __typename?: 'auth_token_min_fields';
  id?: Maybe<Scalars['Int']>;
  ip?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  userAgent?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "auth_token" */
export type Auth_Token_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  ip?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  userAgent?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth_token" */
export type Auth_Token_Mutation_Response = {
  __typename?: 'auth_token_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Token>;
};

/** on_conflict condition type for table "auth_token" */
export type Auth_Token_On_Conflict = {
  constraint: Auth_Token_Constraint;
  update_columns?: Array<Auth_Token_Update_Column>;
  where?: InputMaybe<Auth_Token_Bool_Exp>;
};

/** Ordering options when selecting data from "auth_token". */
export type Auth_Token_Order_By = {
  id?: InputMaybe<Order_By>;
  ip?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  userAgent?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth_token */
export type Auth_Token_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "auth_token" */
export enum Auth_Token_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Ip = 'ip',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UserAgent = 'userAgent',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth_token" */
export type Auth_Token_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  ip?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  userAgent?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Auth_Token_Stddev_Fields = {
  __typename?: 'auth_token_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "auth_token" */
export type Auth_Token_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Auth_Token_Stddev_Pop_Fields = {
  __typename?: 'auth_token_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "auth_token" */
export type Auth_Token_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Auth_Token_Stddev_Samp_Fields = {
  __typename?: 'auth_token_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "auth_token" */
export type Auth_Token_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "auth_token" */
export type Auth_Token_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Token_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Token_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  ip?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  userAgent?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Auth_Token_Sum_Fields = {
  __typename?: 'auth_token_sum_fields';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "auth_token" */
export type Auth_Token_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** update columns of table "auth_token" */
export enum Auth_Token_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Ip = 'ip',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UserAgent = 'userAgent',
  /** column name */
  UserId = 'userId'
}

export type Auth_Token_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Auth_Token_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Token_Set_Input>;
  where: Auth_Token_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Auth_Token_Var_Pop_Fields = {
  __typename?: 'auth_token_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "auth_token" */
export type Auth_Token_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Auth_Token_Var_Samp_Fields = {
  __typename?: 'auth_token_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "auth_token" */
export type Auth_Token_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Auth_Token_Variance_Fields = {
  __typename?: 'auth_token_variance_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "auth_token" */
export type Auth_Token_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "audit_log" */
  delete_audit_log?: Maybe<Audit_Log_Mutation_Response>;
  /** delete single row from the table: "audit_log" */
  delete_audit_log_by_pk?: Maybe<Audit_Log>;
  /** delete data from the table: "auth_token" */
  delete_auth_token?: Maybe<Auth_Token_Mutation_Response>;
  /** delete single row from the table: "auth_token" */
  delete_auth_token_by_pk?: Maybe<Auth_Token>;
  /** delete data from the table: "service" */
  delete_service?: Maybe<Service_Mutation_Response>;
  /** delete single row from the table: "service" */
  delete_service_by_pk?: Maybe<Service>;
  /** delete data from the table: "token" */
  delete_token?: Maybe<Token_Mutation_Response>;
  /** delete single row from the table: "token" */
  delete_token_by_pk?: Maybe<Token>;
  /** delete data from the table: "typeorm_metadata" */
  delete_typeorm_metadata?: Maybe<Typeorm_Metadata_Mutation_Response>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "audit_log" */
  insert_audit_log?: Maybe<Audit_Log_Mutation_Response>;
  /** insert a single row into the table: "audit_log" */
  insert_audit_log_one?: Maybe<Audit_Log>;
  /** insert data into the table: "auth_token" */
  insert_auth_token?: Maybe<Auth_Token_Mutation_Response>;
  /** insert a single row into the table: "auth_token" */
  insert_auth_token_one?: Maybe<Auth_Token>;
  /** insert data into the table: "service" */
  insert_service?: Maybe<Service_Mutation_Response>;
  /** insert a single row into the table: "service" */
  insert_service_one?: Maybe<Service>;
  /** insert data into the table: "token" */
  insert_token?: Maybe<Token_Mutation_Response>;
  /** insert a single row into the table: "token" */
  insert_token_one?: Maybe<Token>;
  /** insert data into the table: "typeorm_metadata" */
  insert_typeorm_metadata?: Maybe<Typeorm_Metadata_Mutation_Response>;
  /** insert a single row into the table: "typeorm_metadata" */
  insert_typeorm_metadata_one?: Maybe<Typeorm_Metadata>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** login */
  login?: Maybe<LoginOutput>;
  /** logout */
  logout: Scalars['Boolean'];
  /** refresh auth tokens */
  refreshTokens?: Maybe<RefreshTokensOutput>;
  /** register */
  register?: Maybe<RegisterOutput>;
  /** update data of the table: "audit_log" */
  update_audit_log?: Maybe<Audit_Log_Mutation_Response>;
  /** update single row of the table: "audit_log" */
  update_audit_log_by_pk?: Maybe<Audit_Log>;
  /** update multiples rows of table: "audit_log" */
  update_audit_log_many?: Maybe<Array<Maybe<Audit_Log_Mutation_Response>>>;
  /** update data of the table: "auth_token" */
  update_auth_token?: Maybe<Auth_Token_Mutation_Response>;
  /** update single row of the table: "auth_token" */
  update_auth_token_by_pk?: Maybe<Auth_Token>;
  /** update multiples rows of table: "auth_token" */
  update_auth_token_many?: Maybe<Array<Maybe<Auth_Token_Mutation_Response>>>;
  /** update data of the table: "service" */
  update_service?: Maybe<Service_Mutation_Response>;
  /** update single row of the table: "service" */
  update_service_by_pk?: Maybe<Service>;
  /** update multiples rows of table: "service" */
  update_service_many?: Maybe<Array<Maybe<Service_Mutation_Response>>>;
  /** update data of the table: "token" */
  update_token?: Maybe<Token_Mutation_Response>;
  /** update single row of the table: "token" */
  update_token_by_pk?: Maybe<Token>;
  /** update multiples rows of table: "token" */
  update_token_many?: Maybe<Array<Maybe<Token_Mutation_Response>>>;
  /** update data of the table: "typeorm_metadata" */
  update_typeorm_metadata?: Maybe<Typeorm_Metadata_Mutation_Response>;
  /** update multiples rows of table: "typeorm_metadata" */
  update_typeorm_metadata_many?: Maybe<Array<Maybe<Typeorm_Metadata_Mutation_Response>>>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update multiples rows of table: "user" */
  update_user_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Audit_LogArgs = {
  where: Audit_Log_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Audit_Log_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_TokenArgs = {
  where: Auth_Token_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Token_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ServiceArgs = {
  where: Service_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Service_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_TokenArgs = {
  where: Token_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Token_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Typeorm_MetadataArgs = {
  where: Typeorm_Metadata_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_Audit_LogArgs = {
  objects: Array<Audit_Log_Insert_Input>;
  on_conflict?: InputMaybe<Audit_Log_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Audit_Log_OneArgs = {
  object: Audit_Log_Insert_Input;
  on_conflict?: InputMaybe<Audit_Log_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_TokenArgs = {
  objects: Array<Auth_Token_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Token_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Token_OneArgs = {
  object: Auth_Token_Insert_Input;
  on_conflict?: InputMaybe<Auth_Token_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ServiceArgs = {
  objects: Array<Service_Insert_Input>;
  on_conflict?: InputMaybe<Service_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Service_OneArgs = {
  object: Service_Insert_Input;
  on_conflict?: InputMaybe<Service_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TokenArgs = {
  objects: Array<Token_Insert_Input>;
  on_conflict?: InputMaybe<Token_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Token_OneArgs = {
  object: Token_Insert_Input;
  on_conflict?: InputMaybe<Token_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Typeorm_MetadataArgs = {
  objects: Array<Typeorm_Metadata_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Typeorm_Metadata_OneArgs = {
  object: Typeorm_Metadata_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  loginInput: LoginInput;
};


/** mutation root */
export type Mutation_RootRegisterArgs = {
  registerInput: RegisterInput;
};


/** mutation root */
export type Mutation_RootUpdate_Audit_LogArgs = {
  _inc?: InputMaybe<Audit_Log_Inc_Input>;
  _set?: InputMaybe<Audit_Log_Set_Input>;
  where: Audit_Log_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Audit_Log_By_PkArgs = {
  _inc?: InputMaybe<Audit_Log_Inc_Input>;
  _set?: InputMaybe<Audit_Log_Set_Input>;
  pk_columns: Audit_Log_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Audit_Log_ManyArgs = {
  updates: Array<Audit_Log_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_TokenArgs = {
  _inc?: InputMaybe<Auth_Token_Inc_Input>;
  _set?: InputMaybe<Auth_Token_Set_Input>;
  where: Auth_Token_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Token_By_PkArgs = {
  _inc?: InputMaybe<Auth_Token_Inc_Input>;
  _set?: InputMaybe<Auth_Token_Set_Input>;
  pk_columns: Auth_Token_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Token_ManyArgs = {
  updates: Array<Auth_Token_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ServiceArgs = {
  _inc?: InputMaybe<Service_Inc_Input>;
  _set?: InputMaybe<Service_Set_Input>;
  where: Service_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Service_By_PkArgs = {
  _inc?: InputMaybe<Service_Inc_Input>;
  _set?: InputMaybe<Service_Set_Input>;
  pk_columns: Service_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Service_ManyArgs = {
  updates: Array<Service_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TokenArgs = {
  _inc?: InputMaybe<Token_Inc_Input>;
  _set?: InputMaybe<Token_Set_Input>;
  where: Token_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Token_By_PkArgs = {
  _inc?: InputMaybe<Token_Inc_Input>;
  _set?: InputMaybe<Token_Set_Input>;
  pk_columns: Token_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Token_ManyArgs = {
  updates: Array<Token_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Typeorm_MetadataArgs = {
  _set?: InputMaybe<Typeorm_Metadata_Set_Input>;
  where: Typeorm_Metadata_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Typeorm_Metadata_ManyArgs = {
  updates: Array<Typeorm_Metadata_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "audit_log" */
  audit_log: Array<Audit_Log>;
  /** fetch aggregated fields from the table: "audit_log" */
  audit_log_aggregate: Audit_Log_Aggregate;
  /** fetch data from the table: "audit_log" using primary key columns */
  audit_log_by_pk?: Maybe<Audit_Log>;
  /** fetch data from the table: "auth_token" */
  auth_token: Array<Auth_Token>;
  /** fetch aggregated fields from the table: "auth_token" */
  auth_token_aggregate: Auth_Token_Aggregate;
  /** fetch data from the table: "auth_token" using primary key columns */
  auth_token_by_pk?: Maybe<Auth_Token>;
  /** fetch data from the table: "service" */
  service: Array<Service>;
  /** fetch aggregated fields from the table: "service" */
  service_aggregate: Service_Aggregate;
  /** fetch data from the table: "service" using primary key columns */
  service_by_pk?: Maybe<Service>;
  /** fetch data from the table: "token" */
  token: Array<Token>;
  /** fetch aggregated fields from the table: "token" */
  token_aggregate: Token_Aggregate;
  /** fetch data from the table: "token" using primary key columns */
  token_by_pk?: Maybe<Token>;
  /** fetch data from the table: "typeorm_metadata" */
  typeorm_metadata: Array<Typeorm_Metadata>;
  /** fetch aggregated fields from the table: "typeorm_metadata" */
  typeorm_metadata_aggregate: Typeorm_Metadata_Aggregate;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Query_RootAudit_LogArgs = {
  distinct_on?: InputMaybe<Array<Audit_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Audit_Log_Order_By>>;
  where?: InputMaybe<Audit_Log_Bool_Exp>;
};


export type Query_RootAudit_Log_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Audit_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Audit_Log_Order_By>>;
  where?: InputMaybe<Audit_Log_Bool_Exp>;
};


export type Query_RootAudit_Log_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootAuth_TokenArgs = {
  distinct_on?: InputMaybe<Array<Auth_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Token_Order_By>>;
  where?: InputMaybe<Auth_Token_Bool_Exp>;
};


export type Query_RootAuth_Token_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Token_Order_By>>;
  where?: InputMaybe<Auth_Token_Bool_Exp>;
};


export type Query_RootAuth_Token_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootServiceArgs = {
  distinct_on?: InputMaybe<Array<Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Service_Order_By>>;
  where?: InputMaybe<Service_Bool_Exp>;
};


export type Query_RootService_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Service_Order_By>>;
  where?: InputMaybe<Service_Bool_Exp>;
};


export type Query_RootService_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTokenArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Order_By>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Query_RootToken_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Order_By>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Query_RootToken_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTypeorm_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Typeorm_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Typeorm_Metadata_Order_By>>;
  where?: InputMaybe<Typeorm_Metadata_Bool_Exp>;
};


export type Query_RootTypeorm_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Typeorm_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Typeorm_Metadata_Order_By>>;
  where?: InputMaybe<Typeorm_Metadata_Bool_Exp>;
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "service" */
export type Service = {
  __typename?: 'service';
  apis?: Maybe<Scalars['_service_apis_enum']>;
  createdAt: Scalars['timestamp'];
  deletedAt?: Maybe<Scalars['timestamp']>;
  id: Scalars['Int'];
  isActive: Scalars['Boolean'];
  refreshToken?: Maybe<Scalars['String']>;
  service: Scalars['service_service_enum'];
  updatedAt: Scalars['timestamp'];
  /** An object relationship */
  user: User;
  userId: Scalars['Int'];
};

/** aggregated selection of "service" */
export type Service_Aggregate = {
  __typename?: 'service_aggregate';
  aggregate?: Maybe<Service_Aggregate_Fields>;
  nodes: Array<Service>;
};

/** aggregate fields of "service" */
export type Service_Aggregate_Fields = {
  __typename?: 'service_aggregate_fields';
  avg?: Maybe<Service_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Service_Max_Fields>;
  min?: Maybe<Service_Min_Fields>;
  stddev?: Maybe<Service_Stddev_Fields>;
  stddev_pop?: Maybe<Service_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Service_Stddev_Samp_Fields>;
  sum?: Maybe<Service_Sum_Fields>;
  var_pop?: Maybe<Service_Var_Pop_Fields>;
  var_samp?: Maybe<Service_Var_Samp_Fields>;
  variance?: Maybe<Service_Variance_Fields>;
};


/** aggregate fields of "service" */
export type Service_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Service_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "service" */
export type Service_Aggregate_Order_By = {
  avg?: InputMaybe<Service_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Service_Max_Order_By>;
  min?: InputMaybe<Service_Min_Order_By>;
  stddev?: InputMaybe<Service_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Service_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Service_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Service_Sum_Order_By>;
  var_pop?: InputMaybe<Service_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Service_Var_Samp_Order_By>;
  variance?: InputMaybe<Service_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "service" */
export type Service_Arr_Rel_Insert_Input = {
  data: Array<Service_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Service_On_Conflict>;
};

/** aggregate avg on columns */
export type Service_Avg_Fields = {
  __typename?: 'service_avg_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "service" */
export type Service_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "service". All fields are combined with a logical 'AND'. */
export type Service_Bool_Exp = {
  _and?: InputMaybe<Array<Service_Bool_Exp>>;
  _not?: InputMaybe<Service_Bool_Exp>;
  _or?: InputMaybe<Array<Service_Bool_Exp>>;
  apis?: InputMaybe<_Service_Apis_Enum_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  isActive?: InputMaybe<Boolean_Comparison_Exp>;
  refreshToken?: InputMaybe<String_Comparison_Exp>;
  service?: InputMaybe<Service_Service_Enum_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "service" */
export enum Service_Constraint {
  /** unique or primary key constraint on columns "id" */
  Pk_85a21558c006647cd76fdce044b = 'PK_85a21558c006647cd76fdce044b'
}

/** input type for incrementing numeric columns in table "service" */
export type Service_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "service" */
export type Service_Insert_Input = {
  apis?: InputMaybe<Scalars['_service_apis_enum']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  deletedAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  service?: InputMaybe<Scalars['service_service_enum']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Service_Max_Fields = {
  __typename?: 'service_max_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  deletedAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  refreshToken?: Maybe<Scalars['String']>;
  service?: Maybe<Scalars['service_service_enum']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "service" */
export type Service_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  service?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Service_Min_Fields = {
  __typename?: 'service_min_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  deletedAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  refreshToken?: Maybe<Scalars['String']>;
  service?: Maybe<Scalars['service_service_enum']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "service" */
export type Service_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  service?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "service" */
export type Service_Mutation_Response = {
  __typename?: 'service_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Service>;
};

/** on_conflict condition type for table "service" */
export type Service_On_Conflict = {
  constraint: Service_Constraint;
  update_columns?: Array<Service_Update_Column>;
  where?: InputMaybe<Service_Bool_Exp>;
};

/** Ordering options when selecting data from "service". */
export type Service_Order_By = {
  apis?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isActive?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  service?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: service */
export type Service_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "service" */
export enum Service_Select_Column {
  /** column name */
  Apis = 'apis',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'isActive',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  Service = 'service',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** Boolean expression to compare columns of type "service_service_enum". All fields are combined with logical 'AND'. */
export type Service_Service_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['service_service_enum']>;
  _gt?: InputMaybe<Scalars['service_service_enum']>;
  _gte?: InputMaybe<Scalars['service_service_enum']>;
  _in?: InputMaybe<Array<Scalars['service_service_enum']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['service_service_enum']>;
  _lte?: InputMaybe<Scalars['service_service_enum']>;
  _neq?: InputMaybe<Scalars['service_service_enum']>;
  _nin?: InputMaybe<Array<Scalars['service_service_enum']>>;
};

/** input type for updating data in table "service" */
export type Service_Set_Input = {
  apis?: InputMaybe<Scalars['_service_apis_enum']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  deletedAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  service?: InputMaybe<Scalars['service_service_enum']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Service_Stddev_Fields = {
  __typename?: 'service_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "service" */
export type Service_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Service_Stddev_Pop_Fields = {
  __typename?: 'service_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "service" */
export type Service_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Service_Stddev_Samp_Fields = {
  __typename?: 'service_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "service" */
export type Service_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "service" */
export type Service_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Service_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Service_Stream_Cursor_Value_Input = {
  apis?: InputMaybe<Scalars['_service_apis_enum']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  deletedAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  service?: InputMaybe<Scalars['service_service_enum']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Service_Sum_Fields = {
  __typename?: 'service_sum_fields';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "service" */
export type Service_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** update columns of table "service" */
export enum Service_Update_Column {
  /** column name */
  Apis = 'apis',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'isActive',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  Service = 'service',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type Service_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Service_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Service_Set_Input>;
  where: Service_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Service_Var_Pop_Fields = {
  __typename?: 'service_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "service" */
export type Service_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Service_Var_Samp_Fields = {
  __typename?: 'service_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "service" */
export type Service_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Service_Variance_Fields = {
  __typename?: 'service_variance_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "service" */
export type Service_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "audit_log" */
  audit_log: Array<Audit_Log>;
  /** fetch aggregated fields from the table: "audit_log" */
  audit_log_aggregate: Audit_Log_Aggregate;
  /** fetch data from the table: "audit_log" using primary key columns */
  audit_log_by_pk?: Maybe<Audit_Log>;
  /** fetch data from the table in a streaming manner : "audit_log" */
  audit_log_stream: Array<Audit_Log>;
  /** fetch data from the table: "auth_token" */
  auth_token: Array<Auth_Token>;
  /** fetch aggregated fields from the table: "auth_token" */
  auth_token_aggregate: Auth_Token_Aggregate;
  /** fetch data from the table: "auth_token" using primary key columns */
  auth_token_by_pk?: Maybe<Auth_Token>;
  /** fetch data from the table in a streaming manner : "auth_token" */
  auth_token_stream: Array<Auth_Token>;
  /** fetch data from the table: "service" */
  service: Array<Service>;
  /** fetch aggregated fields from the table: "service" */
  service_aggregate: Service_Aggregate;
  /** fetch data from the table: "service" using primary key columns */
  service_by_pk?: Maybe<Service>;
  /** fetch data from the table in a streaming manner : "service" */
  service_stream: Array<Service>;
  /** fetch data from the table: "token" */
  token: Array<Token>;
  /** fetch aggregated fields from the table: "token" */
  token_aggregate: Token_Aggregate;
  /** fetch data from the table: "token" using primary key columns */
  token_by_pk?: Maybe<Token>;
  /** fetch data from the table in a streaming manner : "token" */
  token_stream: Array<Token>;
  /** fetch data from the table: "typeorm_metadata" */
  typeorm_metadata: Array<Typeorm_Metadata>;
  /** fetch aggregated fields from the table: "typeorm_metadata" */
  typeorm_metadata_aggregate: Typeorm_Metadata_Aggregate;
  /** fetch data from the table in a streaming manner : "typeorm_metadata" */
  typeorm_metadata_stream: Array<Typeorm_Metadata>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table in a streaming manner : "user" */
  user_stream: Array<User>;
};


export type Subscription_RootAudit_LogArgs = {
  distinct_on?: InputMaybe<Array<Audit_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Audit_Log_Order_By>>;
  where?: InputMaybe<Audit_Log_Bool_Exp>;
};


export type Subscription_RootAudit_Log_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Audit_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Audit_Log_Order_By>>;
  where?: InputMaybe<Audit_Log_Bool_Exp>;
};


export type Subscription_RootAudit_Log_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootAudit_Log_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Audit_Log_Stream_Cursor_Input>>;
  where?: InputMaybe<Audit_Log_Bool_Exp>;
};


export type Subscription_RootAuth_TokenArgs = {
  distinct_on?: InputMaybe<Array<Auth_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Token_Order_By>>;
  where?: InputMaybe<Auth_Token_Bool_Exp>;
};


export type Subscription_RootAuth_Token_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Token_Order_By>>;
  where?: InputMaybe<Auth_Token_Bool_Exp>;
};


export type Subscription_RootAuth_Token_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootAuth_Token_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Auth_Token_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Token_Bool_Exp>;
};


export type Subscription_RootServiceArgs = {
  distinct_on?: InputMaybe<Array<Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Service_Order_By>>;
  where?: InputMaybe<Service_Bool_Exp>;
};


export type Subscription_RootService_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Service_Order_By>>;
  where?: InputMaybe<Service_Bool_Exp>;
};


export type Subscription_RootService_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootService_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Service_Stream_Cursor_Input>>;
  where?: InputMaybe<Service_Bool_Exp>;
};


export type Subscription_RootTokenArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Order_By>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Subscription_RootToken_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Order_By>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Subscription_RootToken_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootToken_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Token_Stream_Cursor_Input>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Subscription_RootTypeorm_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Typeorm_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Typeorm_Metadata_Order_By>>;
  where?: InputMaybe<Typeorm_Metadata_Bool_Exp>;
};


export type Subscription_RootTypeorm_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Typeorm_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Typeorm_Metadata_Order_By>>;
  where?: InputMaybe<Typeorm_Metadata_Bool_Exp>;
};


export type Subscription_RootTypeorm_Metadata_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Typeorm_Metadata_Stream_Cursor_Input>>;
  where?: InputMaybe<Typeorm_Metadata_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** columns and relationships of "token" */
export type Token = {
  __typename?: 'token';
  expiresAt: Scalars['date'];
  id: Scalars['Int'];
  type: Scalars['token_type_enum'];
  /** An object relationship */
  user: User;
  userId: Scalars['Int'];
  uuid: Scalars['uuid'];
};

/** aggregated selection of "token" */
export type Token_Aggregate = {
  __typename?: 'token_aggregate';
  aggregate?: Maybe<Token_Aggregate_Fields>;
  nodes: Array<Token>;
};

/** aggregate fields of "token" */
export type Token_Aggregate_Fields = {
  __typename?: 'token_aggregate_fields';
  avg?: Maybe<Token_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Token_Max_Fields>;
  min?: Maybe<Token_Min_Fields>;
  stddev?: Maybe<Token_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Sum_Fields>;
  var_pop?: Maybe<Token_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Var_Samp_Fields>;
  variance?: Maybe<Token_Variance_Fields>;
};


/** aggregate fields of "token" */
export type Token_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Token_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "token" */
export type Token_Aggregate_Order_By = {
  avg?: InputMaybe<Token_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Token_Max_Order_By>;
  min?: InputMaybe<Token_Min_Order_By>;
  stddev?: InputMaybe<Token_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Token_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Token_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Token_Sum_Order_By>;
  var_pop?: InputMaybe<Token_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Token_Var_Samp_Order_By>;
  variance?: InputMaybe<Token_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "token" */
export type Token_Arr_Rel_Insert_Input = {
  data: Array<Token_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Token_On_Conflict>;
};

/** aggregate avg on columns */
export type Token_Avg_Fields = {
  __typename?: 'token_avg_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "token" */
export type Token_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "token". All fields are combined with a logical 'AND'. */
export type Token_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Bool_Exp>>;
  _not?: InputMaybe<Token_Bool_Exp>;
  _or?: InputMaybe<Array<Token_Bool_Exp>>;
  expiresAt?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  type?: InputMaybe<Token_Type_Enum_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
  uuid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "token" */
export enum Token_Constraint {
  /** unique or primary key constraint on columns "uuid" */
  IdxA9a66098c2fb758dff713f8d83 = 'IDX_a9a66098c2fb758dff713f8d83',
  /** unique or primary key constraint on columns "id" */
  Pk_82fae97f905930df5d62a702fc9 = 'PK_82fae97f905930df5d62a702fc9',
  /** unique or primary key constraint on columns "uuid" */
  UqA9a66098c2fb758dff713f8d838 = 'UQ_a9a66098c2fb758dff713f8d838'
}

/** input type for incrementing numeric columns in table "token" */
export type Token_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "token" */
export type Token_Insert_Input = {
  expiresAt?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['token_type_enum']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['Int']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Token_Max_Fields = {
  __typename?: 'token_max_fields';
  expiresAt?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['token_type_enum']>;
  userId?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "token" */
export type Token_Max_Order_By = {
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Token_Min_Fields = {
  __typename?: 'token_min_fields';
  expiresAt?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['token_type_enum']>;
  userId?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "token" */
export type Token_Min_Order_By = {
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "token" */
export type Token_Mutation_Response = {
  __typename?: 'token_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Token>;
};

/** on_conflict condition type for table "token" */
export type Token_On_Conflict = {
  constraint: Token_Constraint;
  update_columns?: Array<Token_Update_Column>;
  where?: InputMaybe<Token_Bool_Exp>;
};

/** Ordering options when selecting data from "token". */
export type Token_Order_By = {
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  userId?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: token */
export type Token_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "token" */
export enum Token_Select_Column {
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "token" */
export type Token_Set_Input = {
  expiresAt?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['token_type_enum']>;
  userId?: InputMaybe<Scalars['Int']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Token_Stddev_Fields = {
  __typename?: 'token_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "token" */
export type Token_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Token_Stddev_Pop_Fields = {
  __typename?: 'token_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "token" */
export type Token_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Token_Stddev_Samp_Fields = {
  __typename?: 'token_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "token" */
export type Token_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "token" */
export type Token_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Token_Stream_Cursor_Value_Input = {
  expiresAt?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['token_type_enum']>;
  userId?: InputMaybe<Scalars['Int']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Token_Sum_Fields = {
  __typename?: 'token_sum_fields';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "token" */
export type Token_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "token_type_enum". All fields are combined with logical 'AND'. */
export type Token_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['token_type_enum']>;
  _gt?: InputMaybe<Scalars['token_type_enum']>;
  _gte?: InputMaybe<Scalars['token_type_enum']>;
  _in?: InputMaybe<Array<Scalars['token_type_enum']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['token_type_enum']>;
  _lte?: InputMaybe<Scalars['token_type_enum']>;
  _neq?: InputMaybe<Scalars['token_type_enum']>;
  _nin?: InputMaybe<Array<Scalars['token_type_enum']>>;
};

/** update columns of table "token" */
export enum Token_Update_Column {
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId',
  /** column name */
  Uuid = 'uuid'
}

export type Token_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Token_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Token_Set_Input>;
  where: Token_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Token_Var_Pop_Fields = {
  __typename?: 'token_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "token" */
export type Token_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Token_Var_Samp_Fields = {
  __typename?: 'token_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "token" */
export type Token_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Token_Variance_Fields = {
  __typename?: 'token_variance_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "token" */
export type Token_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** columns and relationships of "typeorm_metadata" */
export type Typeorm_Metadata = {
  __typename?: 'typeorm_metadata';
  database?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  schema?: Maybe<Scalars['String']>;
  table?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

/** aggregated selection of "typeorm_metadata" */
export type Typeorm_Metadata_Aggregate = {
  __typename?: 'typeorm_metadata_aggregate';
  aggregate?: Maybe<Typeorm_Metadata_Aggregate_Fields>;
  nodes: Array<Typeorm_Metadata>;
};

/** aggregate fields of "typeorm_metadata" */
export type Typeorm_Metadata_Aggregate_Fields = {
  __typename?: 'typeorm_metadata_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Typeorm_Metadata_Max_Fields>;
  min?: Maybe<Typeorm_Metadata_Min_Fields>;
};


/** aggregate fields of "typeorm_metadata" */
export type Typeorm_Metadata_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Typeorm_Metadata_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "typeorm_metadata". All fields are combined with a logical 'AND'. */
export type Typeorm_Metadata_Bool_Exp = {
  _and?: InputMaybe<Array<Typeorm_Metadata_Bool_Exp>>;
  _not?: InputMaybe<Typeorm_Metadata_Bool_Exp>;
  _or?: InputMaybe<Array<Typeorm_Metadata_Bool_Exp>>;
  database?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  schema?: InputMaybe<String_Comparison_Exp>;
  table?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "typeorm_metadata" */
export type Typeorm_Metadata_Insert_Input = {
  database?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  schema?: InputMaybe<Scalars['String']>;
  table?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Typeorm_Metadata_Max_Fields = {
  __typename?: 'typeorm_metadata_max_fields';
  database?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  schema?: Maybe<Scalars['String']>;
  table?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Typeorm_Metadata_Min_Fields = {
  __typename?: 'typeorm_metadata_min_fields';
  database?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  schema?: Maybe<Scalars['String']>;
  table?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "typeorm_metadata" */
export type Typeorm_Metadata_Mutation_Response = {
  __typename?: 'typeorm_metadata_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Typeorm_Metadata>;
};

/** Ordering options when selecting data from "typeorm_metadata". */
export type Typeorm_Metadata_Order_By = {
  database?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  schema?: InputMaybe<Order_By>;
  table?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** select columns of table "typeorm_metadata" */
export enum Typeorm_Metadata_Select_Column {
  /** column name */
  Database = 'database',
  /** column name */
  Name = 'name',
  /** column name */
  Schema = 'schema',
  /** column name */
  Table = 'table',
  /** column name */
  Type = 'type',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "typeorm_metadata" */
export type Typeorm_Metadata_Set_Input = {
  database?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  schema?: InputMaybe<Scalars['String']>;
  table?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "typeorm_metadata" */
export type Typeorm_Metadata_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Typeorm_Metadata_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Typeorm_Metadata_Stream_Cursor_Value_Input = {
  database?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  schema?: InputMaybe<Scalars['String']>;
  table?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type Typeorm_Metadata_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Typeorm_Metadata_Set_Input>;
  where: Typeorm_Metadata_Bool_Exp;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  /** An array relationship */
  audit_logs: Array<Audit_Log>;
  /** An aggregate relationship */
  audit_logs_aggregate: Audit_Log_Aggregate;
  authMethod: Scalars['user_authmethod_enum'];
  /** An array relationship */
  auth_tokens: Array<Auth_Token>;
  /** An aggregate relationship */
  auth_tokens_aggregate: Auth_Token_Aggregate;
  avatar?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamp'];
  deletedAt?: Maybe<Scalars['timestamp']>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isActive: Scalars['Boolean'];
  isVerified: Scalars['Boolean'];
  lastName?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['user_locale_enum']>;
  password?: Maybe<Scalars['String']>;
  /** An array relationship */
  services: Array<Service>;
  /** An aggregate relationship */
  services_aggregate: Service_Aggregate;
  /** An array relationship */
  tokens: Array<Token>;
  /** An aggregate relationship */
  tokens_aggregate: Token_Aggregate;
  updatedAt: Scalars['timestamp'];
  username: Scalars['String'];
  uuid: Scalars['uuid'];
};


/** columns and relationships of "user" */
export type UserAudit_LogsArgs = {
  distinct_on?: InputMaybe<Array<Audit_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Audit_Log_Order_By>>;
  where?: InputMaybe<Audit_Log_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserAudit_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Audit_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Audit_Log_Order_By>>;
  where?: InputMaybe<Audit_Log_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserAuth_TokensArgs = {
  distinct_on?: InputMaybe<Array<Auth_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Token_Order_By>>;
  where?: InputMaybe<Auth_Token_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserAuth_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Token_Order_By>>;
  where?: InputMaybe<Auth_Token_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserServicesArgs = {
  distinct_on?: InputMaybe<Array<Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Service_Order_By>>;
  where?: InputMaybe<Service_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserServices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Service_Order_By>>;
  where?: InputMaybe<Service_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserTokensArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Order_By>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Order_By>>;
  where?: InputMaybe<Token_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to compare columns of type "user_authmethod_enum". All fields are combined with logical 'AND'. */
export type User_Authmethod_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['user_authmethod_enum']>;
  _gt?: InputMaybe<Scalars['user_authmethod_enum']>;
  _gte?: InputMaybe<Scalars['user_authmethod_enum']>;
  _in?: InputMaybe<Array<Scalars['user_authmethod_enum']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['user_authmethod_enum']>;
  _lte?: InputMaybe<Scalars['user_authmethod_enum']>;
  _neq?: InputMaybe<Scalars['user_authmethod_enum']>;
  _nin?: InputMaybe<Array<Scalars['user_authmethod_enum']>>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  audit_logs?: InputMaybe<Audit_Log_Bool_Exp>;
  authMethod?: InputMaybe<User_Authmethod_Enum_Comparison_Exp>;
  auth_tokens?: InputMaybe<Auth_Token_Bool_Exp>;
  avatar?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  firstName?: InputMaybe<String_Comparison_Exp>;
  googleId?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  isActive?: InputMaybe<Boolean_Comparison_Exp>;
  isVerified?: InputMaybe<Boolean_Comparison_Exp>;
  lastName?: InputMaybe<String_Comparison_Exp>;
  locale?: InputMaybe<User_Locale_Enum_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  services?: InputMaybe<Service_Bool_Exp>;
  tokens?: InputMaybe<Token_Bool_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
  uuid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "username" */
  Idx_78a916df40e02a9deb1c4b75ed = 'IDX_78a916df40e02a9deb1c4b75ed',
  /** unique or primary key constraint on columns "uuid" */
  IdxA95e949168be7b7ece1a2382fe = 'IDX_a95e949168be7b7ece1a2382fe',
  /** unique or primary key constraint on columns "email" */
  IdxE12875dfb3b1d92d7d7c5377e2 = 'IDX_e12875dfb3b1d92d7d7c5377e2',
  /** unique or primary key constraint on columns "id" */
  PkCace4a159ff9f2512dd42373760 = 'PK_cace4a159ff9f2512dd42373760',
  /** unique or primary key constraint on columns "username" */
  Uq_78a916df40e02a9deb1c4b75edb = 'UQ_78a916df40e02a9deb1c4b75edb',
  /** unique or primary key constraint on columns "googleId" */
  Uq_470355432cc67b2c470c30bef7c = 'UQ_470355432cc67b2c470c30bef7c',
  /** unique or primary key constraint on columns "uuid" */
  UqA95e949168be7b7ece1a2382fed = 'UQ_a95e949168be7b7ece1a2382fed',
  /** unique or primary key constraint on columns "email" */
  UqE12875dfb3b1d92d7d7c5377e22 = 'UQ_e12875dfb3b1d92d7d7c5377e22'
}

/** input type for incrementing numeric columns in table "user" */
export type User_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  audit_logs?: InputMaybe<Audit_Log_Arr_Rel_Insert_Input>;
  authMethod?: InputMaybe<Scalars['user_authmethod_enum']>;
  auth_tokens?: InputMaybe<Auth_Token_Arr_Rel_Insert_Input>;
  avatar?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  deletedAt?: InputMaybe<Scalars['timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  googleId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['user_locale_enum']>;
  password?: InputMaybe<Scalars['String']>;
  services?: InputMaybe<Service_Arr_Rel_Insert_Input>;
  tokens?: InputMaybe<Token_Arr_Rel_Insert_Input>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  username?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** Boolean expression to compare columns of type "user_locale_enum". All fields are combined with logical 'AND'. */
export type User_Locale_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['user_locale_enum']>;
  _gt?: InputMaybe<Scalars['user_locale_enum']>;
  _gte?: InputMaybe<Scalars['user_locale_enum']>;
  _in?: InputMaybe<Array<Scalars['user_locale_enum']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['user_locale_enum']>;
  _lte?: InputMaybe<Scalars['user_locale_enum']>;
  _neq?: InputMaybe<Scalars['user_locale_enum']>;
  _nin?: InputMaybe<Array<Scalars['user_locale_enum']>>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  authMethod?: Maybe<Scalars['user_authmethod_enum']>;
  avatar?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  deletedAt?: Maybe<Scalars['timestamp']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['user_locale_enum']>;
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  authMethod?: Maybe<Scalars['user_authmethod_enum']>;
  avatar?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  deletedAt?: Maybe<Scalars['timestamp']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['user_locale_enum']>;
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  audit_logs_aggregate?: InputMaybe<Audit_Log_Aggregate_Order_By>;
  authMethod?: InputMaybe<Order_By>;
  auth_tokens_aggregate?: InputMaybe<Auth_Token_Aggregate_Order_By>;
  avatar?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  googleId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isActive?: InputMaybe<Order_By>;
  isVerified?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  services_aggregate?: InputMaybe<Service_Aggregate_Order_By>;
  tokens_aggregate?: InputMaybe<Token_Aggregate_Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  AuthMethod = 'authMethod',
  /** column name */
  Avatar = 'avatar',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  GoogleId = 'googleId',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'isActive',
  /** column name */
  IsVerified = 'isVerified',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Locale = 'locale',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Username = 'username',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  authMethod?: InputMaybe<Scalars['user_authmethod_enum']>;
  avatar?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  deletedAt?: InputMaybe<Scalars['timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  googleId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['user_locale_enum']>;
  password?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  username?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "user" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  authMethod?: InputMaybe<Scalars['user_authmethod_enum']>;
  avatar?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  deletedAt?: InputMaybe<Scalars['timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  googleId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['user_locale_enum']>;
  password?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  username?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  AuthMethod = 'authMethod',
  /** column name */
  Avatar = 'avatar',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  GoogleId = 'googleId',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'isActive',
  /** column name */
  IsVerified = 'isVerified',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Locale = 'locale',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Username = 'username',
  /** column name */
  Uuid = 'uuid'
}

export type User_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'mutation_root', login?: { __typename?: 'LoginOutput', accessToken: string, email: string, username: string, uuid: string } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'mutation_root', logout: boolean };

export type RefreshTokensMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokensMutation = { __typename?: 'mutation_root', refreshTokens?: { __typename?: 'RefreshTokensOutput', accessToken: string, email: string, username: string, uuid: string } | null };

export type RegisterMutationVariables = Exact<{
  registerInput: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'mutation_root', register?: { __typename?: 'RegisterOutput', accessToken: string, email: string, username: string, uuid: string } | null };


export const LoginDocument = gql`
    mutation Login($loginInput: LoginInput!) {
  login(loginInput: $loginInput) {
    accessToken
    email
    username
    uuid
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RefreshTokensDocument = gql`
    mutation RefreshTokens {
  refreshTokens {
    accessToken
    email
    username
    uuid
  }
}
    `;
export type RefreshTokensMutationFn = Apollo.MutationFunction<RefreshTokensMutation, RefreshTokensMutationVariables>;

/**
 * __useRefreshTokensMutation__
 *
 * To run a mutation, you first call `useRefreshTokensMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokensMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokensMutation, { data, loading, error }] = useRefreshTokensMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshTokensMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokensMutation, RefreshTokensMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshTokensMutation, RefreshTokensMutationVariables>(RefreshTokensDocument, options);
      }
export type RefreshTokensMutationHookResult = ReturnType<typeof useRefreshTokensMutation>;
export type RefreshTokensMutationResult = Apollo.MutationResult<RefreshTokensMutation>;
export type RefreshTokensMutationOptions = Apollo.BaseMutationOptions<RefreshTokensMutation, RefreshTokensMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($registerInput: RegisterInput!) {
  register(registerInput: $registerInput) {
    accessToken
    email
    username
    uuid
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      registerInput: // value for 'registerInput'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;