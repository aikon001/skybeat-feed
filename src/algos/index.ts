import { AppContext } from '../config'
import {
  QueryParams,
  OutputSchema as AlgoOutput,
} from '../lexicon/types/app/bsky/feed/getFeedSkeleton'
import * as whatsMusic from './whats-music';
import * as whatsMusicBlues from './whats-music-blues';
import * as whatsMusicHouse from './whats-music-house';

type AlgoHandler = (ctx: AppContext, params: QueryParams) => Promise<AlgoOutput>

const algos: Record<string, AlgoHandler> = {
  [whatsMusic.shortname]: whatsMusic.handler,
  [whatsMusicBlues.shortname]: whatsMusicBlues.handler,
  [whatsMusicHouse.shortname]: whatsMusicHouse.handler,
}

export default algos
