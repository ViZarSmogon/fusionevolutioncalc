import {State} from './state';
import {GameType, Weather, Terrain} from './data/interface';

export class Field implements State.Field {
  gameType: GameType;
  weather?: Weather;
  terrain?: Terrain;
  isMagicRoom: boolean;
  isWonderRoom: boolean;
  isGravity: boolean;
  isAuraBreak?: boolean;
  isFairyAura?: boolean;
  isDarkAura?: boolean;
  isAuraShield?: boolean;
  isBeadsOfRuin?: boolean;
  isSwordOfRuin?: boolean;
  isTabletsOfRuin?: boolean;
  isVesselOfRuin?: boolean;
  isGrindset?: boolean;
  isSpongeOfRuin?: boolean;
  isLawnmowerOfRuin?: boolean;
  attackerSide: Side;
  defenderSide: Side;

  constructor(field: Partial<State.Field> = {}) {
    this.gameType = field.gameType || 'Singles';
    this.terrain = field.terrain;
    this.weather = field.weather;
    this.isMagicRoom = !!field.isMagicRoom;
    this.isWonderRoom = !!field.isWonderRoom;
    this.isGravity = !!field.isGravity;
    this.isAuraBreak = field.isAuraBreak || false;
    this.isFairyAura = field.isFairyAura || false;
    this.isDarkAura = field.isDarkAura || false;
    this.isAuraShield = field.isAuraShield || false;
    this.isBeadsOfRuin = field.isBeadsOfRuin || false;
    this.isSwordOfRuin = field.isSwordOfRuin || false;
    this.isTabletsOfRuin = field.isTabletsOfRuin || false;
    this.isVesselOfRuin = field.isVesselOfRuin || false;
	this.isGrindset = field.isGrindset || false;
	this.isSpongeOfRuin = field.isSpongeOfRuin || false;
	this.isLawnmowerOfRuin = field.isLawnmowerOfRuin || false;

    this.attackerSide = new Side(field.attackerSide || {});
    this.defenderSide = new Side(field.defenderSide || {});
  }

  hasWeather(...weathers: Weather[]) {
    return !!(this.weather && weathers.includes(this.weather));
  }

  hasTerrain(...terrains: Terrain[]) {
    return !!(this.terrain && terrains.includes(this.terrain));
  }

  swap() {
    [this.attackerSide, this.defenderSide] = [this.defenderSide, this.attackerSide];
    return this;
  }

  clone() {
    return new Field({
      gameType: this.gameType,
      weather: this.weather,
      terrain: this.terrain,
      isMagicRoom: this.isMagicRoom,
      isWonderRoom: this.isWonderRoom,
      isGravity: this.isGravity,
      attackerSide: this.attackerSide,
      defenderSide: this.defenderSide,
      isAuraBreak: this.isAuraBreak,
      isDarkAura: this.isDarkAura,
      isFairyAura: this.isFairyAura,
	  isAuraShield: this.isAuraShield,
      isBeadsOfRuin: this.isBeadsOfRuin,
      isSwordOfRuin: this.isSwordOfRuin,
      isTabletsOfRuin: this.isTabletsOfRuin,
      isVesselOfRuin: this.isVesselOfRuin,
	  isGrindset: this.isGrindset,
	  isSpongeOfRuin: this.isSpongeOfRuin,
	  isLawnmowerOfRuin: this.isLawnmowerOfRuin,
    });
  }
}

export class Side implements State.Side {
  spikes: number;
  steelsurge: boolean;
  vinelash: boolean;
  wildfire: boolean;
  cannonade: boolean;
  volcalith: boolean;
  isSR: boolean;
  isReflect: boolean;
  isLightScreen: boolean;
  isProtected: boolean;
  isSeeded: boolean;
  isForesight: boolean;
  isTailwind: boolean;
  isHelpingHand: boolean;
  isFlowerGift: boolean;
  isFriendGuard: boolean;
  isAuroraVeil: boolean;
  isBattery: boolean;
  isPowerSpot: boolean;
  isSwitching?: 'out' | 'in';

  constructor(side: State.Side = {}) {
    this.spikes = side.spikes || 0;
    this.steelsurge = !!side.steelsurge;
    this.vinelash = !!side.vinelash;
    this.wildfire = !!side.wildfire;
    this.cannonade = !!side.cannonade;
    this.volcalith = !!side.volcalith;
    this.isSR = !!side.isSR;
    this.isReflect = !!side.isReflect;
    this.isLightScreen = !!side.isLightScreen;
    this.isProtected = !!side.isProtected;
    this.isSeeded = !!side.isSeeded;
    this.isForesight = !!side.isForesight;
    this.isTailwind = !!side.isTailwind;
    this.isHelpingHand = !!side.isHelpingHand;
    this.isFlowerGift = !!side.isFlowerGift;
    this.isFriendGuard = !!side.isFriendGuard;
    this.isAuroraVeil = !!side.isAuroraVeil;
    this.isBattery = !!side.isBattery;
    this.isPowerSpot = !!side.isPowerSpot;
    this.isSwitching = side.isSwitching;
  }

  clone() {
    return new Side(this);
  }
}
