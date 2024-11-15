import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v257 from '../v257'

export const poolCreated =  {
    name: 'Stableswap.PoolCreated',
    /**
     * A pool was created.
     */
    v257: new EventType(
        'Stableswap.PoolCreated',
        sts.struct({
            poolId: sts.number(),
            assets: sts.array(() => sts.number()),
            amplification: v257.NonZeroU16,
            fee: v257.Permill,
        })
    ),
}

export const liquidityAdded =  {
    name: 'Stableswap.LiquidityAdded',
    /**
     * Liquidity of an asset was added to a pool.
     */
    v257: new EventType(
        'Stableswap.LiquidityAdded',
        sts.struct({
            poolId: sts.number(),
            who: v257.AccountId32,
            shares: sts.bigint(),
            assets: sts.array(() => v257.AssetAmount),
        })
    ),
}

export const liquidityRemoved =  {
    name: 'Stableswap.LiquidityRemoved',
    /**
     * Liquidity removed.
     */
    v257: new EventType(
        'Stableswap.LiquidityRemoved',
        sts.struct({
            poolId: sts.number(),
            who: v257.AccountId32,
            shares: sts.bigint(),
            amounts: sts.array(() => v257.AssetAmount),
            fee: sts.bigint(),
        })
    ),
}

export const sellExecuted =  {
    name: 'Stableswap.SellExecuted',
    /**
     * Sell trade executed. Trade fee paid in asset leaving the pool (already subtracted from amount_out).
     */
    v257: new EventType(
        'Stableswap.SellExecuted',
        sts.struct({
            who: v257.AccountId32,
            poolId: sts.number(),
            assetIn: sts.number(),
            assetOut: sts.number(),
            amountIn: sts.bigint(),
            amountOut: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
}

export const buyExecuted =  {
    name: 'Stableswap.BuyExecuted',
    /**
     * Buy trade executed. Trade fee paid in asset entering the pool (already included in amount_in).
     */
    v257: new EventType(
        'Stableswap.BuyExecuted',
        sts.struct({
            who: v257.AccountId32,
            poolId: sts.number(),
            assetIn: sts.number(),
            assetOut: sts.number(),
            amountIn: sts.bigint(),
            amountOut: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
}