/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export declare namespace Vesting {
  export type VestStateStruct = {
    vestingAmount: PromiseOrValue<BigNumberish>;
    claimedAmount: PromiseOrValue<BigNumberish>;
    startTime: PromiseOrValue<BigNumberish>;
    endTime: PromiseOrValue<BigNumberish>;
    cancleTime: PromiseOrValue<BigNumberish>;
  };

  export type VestStateStructOutput = [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
    vestingAmount: BigNumber;
    claimedAmount: BigNumber;
    startTime: BigNumber;
    endTime: BigNumber;
    cancleTime: BigNumber;
  };
}

export interface CleverVestingInterface extends utils.Interface {
  functions: {
    'cancle(address,uint256)': FunctionFragment;
    'claim()': FunctionFragment;
    'getUserVest(address)': FunctionFragment;
    'isWhitelist(address)': FunctionFragment;
    'locked(address)': FunctionFragment;
    'newVesting(address,uint128,uint64,uint64)': FunctionFragment;
    'owner()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'token()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'updateWhitelist(address[],bool)': FunctionFragment;
    'vested(address)': FunctionFragment;
    'vesting(address,uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'cancle'
      | 'claim'
      | 'getUserVest'
      | 'isWhitelist'
      | 'locked'
      | 'newVesting'
      | 'owner'
      | 'renounceOwnership'
      | 'token'
      | 'transferOwnership'
      | 'updateWhitelist'
      | 'vested'
      | 'vesting',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'cancle',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'claim', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getUserVest', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'isWhitelist', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'locked', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'newVesting',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
    ],
  ): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'token', values?: undefined): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'updateWhitelist',
    values: [PromiseOrValue<string>[], PromiseOrValue<boolean>],
  ): string;
  encodeFunctionData(functionFragment: 'vested', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'vesting',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;

  decodeFunctionResult(functionFragment: 'cancle', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'claim', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getUserVest', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isWhitelist', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'locked', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'newVesting', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'token', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateWhitelist', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'vested', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'vesting', data: BytesLike): Result;

  events: {
    'Cancle(address,uint256,uint256,uint256)': EventFragment;
    'Claim(address,uint256)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'Vest(address,uint256,uint256,uint256,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Cancle'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Claim'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Vest'): EventFragment;
}

export interface CancleEventObject {
  _recipient: string;
  _index: BigNumber;
  _unvested: BigNumber;
  _cancleTime: BigNumber;
}
export type CancleEvent = TypedEvent<[string, BigNumber, BigNumber, BigNumber], CancleEventObject>;

export type CancleEventFilter = TypedEventFilter<CancleEvent>;

export interface ClaimEventObject {
  _recipient: string;
  _amount: BigNumber;
}
export type ClaimEvent = TypedEvent<[string, BigNumber], ClaimEventObject>;

export type ClaimEventFilter = TypedEventFilter<ClaimEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface VestEventObject {
  _recipient: string;
  _index: BigNumber;
  _amount: BigNumber;
  _startTime: BigNumber;
  _endTime: BigNumber;
}
export type VestEvent = TypedEvent<[string, BigNumber, BigNumber, BigNumber, BigNumber], VestEventObject>;

export type VestEventFilter = TypedEventFilter<VestEvent>;

export interface CleverVesting extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CleverVestingInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    cancle(
      _user: PromiseOrValue<string>,
      _index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    claim(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    getUserVest(
      _recipient: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[Vesting.VestStateStructOutput[]]>;

    isWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;

    locked(
      _recipient: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { _unvested: BigNumber }>;

    newVesting(
      _recipient: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _startTime: PromiseOrValue<BigNumberish>,
      _endTime: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    updateWhitelist(
      _accounts: PromiseOrValue<string>[],
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    vested(
      _recipient: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { _vested: BigNumber }>;

    vesting(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        vestingAmount: BigNumber;
        claimedAmount: BigNumber;
        startTime: BigNumber;
        endTime: BigNumber;
        cancleTime: BigNumber;
      }
    >;
  };

  cancle(
    _user: PromiseOrValue<string>,
    _index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  claim(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  getUserVest(_recipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<Vesting.VestStateStructOutput[]>;

  isWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

  locked(_recipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  newVesting(
    _recipient: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _startTime: PromiseOrValue<BigNumberish>,
    _endTime: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  updateWhitelist(
    _accounts: PromiseOrValue<string>[],
    _status: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  vested(_recipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  vesting(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      vestingAmount: BigNumber;
      claimedAmount: BigNumber;
      startTime: BigNumber;
      endTime: BigNumber;
      cancleTime: BigNumber;
    }
  >;

  callStatic: {
    cancle(
      _user: PromiseOrValue<string>,
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    claim(overrides?: CallOverrides): Promise<BigNumber>;

    getUserVest(
      _recipient: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<Vesting.VestStateStructOutput[]>;

    isWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

    locked(_recipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    newVesting(
      _recipient: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _startTime: PromiseOrValue<BigNumberish>,
      _endTime: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;

    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    updateWhitelist(
      _accounts: PromiseOrValue<string>[],
      _status: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<void>;

    vested(_recipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    vesting(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        vestingAmount: BigNumber;
        claimedAmount: BigNumber;
        startTime: BigNumber;
        endTime: BigNumber;
        cancleTime: BigNumber;
      }
    >;
  };

  filters: {
    'Cancle(address,uint256,uint256,uint256)'(
      _recipient?: PromiseOrValue<string> | null,
      _index?: PromiseOrValue<BigNumberish> | null,
      _unvested?: null,
      _cancleTime?: null,
    ): CancleEventFilter;
    Cancle(
      _recipient?: PromiseOrValue<string> | null,
      _index?: PromiseOrValue<BigNumberish> | null,
      _unvested?: null,
      _cancleTime?: null,
    ): CancleEventFilter;

    'Claim(address,uint256)'(_recipient?: PromiseOrValue<string> | null, _amount?: null): ClaimEventFilter;
    Claim(_recipient?: PromiseOrValue<string> | null, _amount?: null): ClaimEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;

    'Vest(address,uint256,uint256,uint256,uint256)'(
      _recipient?: PromiseOrValue<string> | null,
      _index?: PromiseOrValue<BigNumberish> | null,
      _amount?: null,
      _startTime?: null,
      _endTime?: null,
    ): VestEventFilter;
    Vest(
      _recipient?: PromiseOrValue<string> | null,
      _index?: PromiseOrValue<BigNumberish> | null,
      _amount?: null,
      _startTime?: null,
      _endTime?: null,
    ): VestEventFilter;
  };

  estimateGas: {
    cancle(
      _user: PromiseOrValue<string>,
      _index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    claim(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    getUserVest(_recipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    isWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    locked(_recipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    newVesting(
      _recipient: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _startTime: PromiseOrValue<BigNumberish>,
      _endTime: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    updateWhitelist(
      _accounts: PromiseOrValue<string>[],
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    vested(_recipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    vesting(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    cancle(
      _user: PromiseOrValue<string>,
      _index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    claim(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    getUserVest(_recipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    locked(_recipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    newVesting(
      _recipient: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _startTime: PromiseOrValue<BigNumberish>,
      _endTime: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    updateWhitelist(
      _accounts: PromiseOrValue<string>[],
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    vested(_recipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vesting(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
