/*
// tiering information
const ag = ["gengarmega", "rayquazamega", "zacian", "zaciancrowned", "calyrexshadow"];
const uber = ["butterfreemega", "rillaboommega", "dragapultmega", "alakazammega", "blastoisemega", "blazikenmega", "darkrai", "darmanitangalar", "deoxysattack", "deoxys", "dialga", "dracovish", "dragapult", "lucariomega", "eternatus", "giratina", "giratinaorigin", "groudon", "groudonprimal", "hooh", "kangaskhanmega", "kyogre", "kyogreprimal", "kyuremblack", "kyuremwhite", "landorus", "lucariomega", "lugia", "lunala", "magearna", "magearnaoriginal", "marshadow", "metagrossmega", "mewtwo", "mewtwomegax", "mewtwomegay", "naganadel", "necrozmadawnwings", "necrozmaduskmane", "necrozmaultra", "palkia", "pheromosa", "rayquaza", "reshiram", "salamencemega", "shayminsky", "solgaleo", "spectrier", "tapulele", "urshifu", "xerneas", "yveltal", "zamazenta", "zamazentacrowned", "zekrom", "zygarde", "zygardecomplete", "calyrexice", "arceus", "arceusfire", "arceuswater", "arceuselectric", "arceusgrass", "arceusice", "arceusfighting", "arceuspoison", "arceusground", "arceusflying", "arceuspsychic", "arceusbug", "arceusrock", "arceusghost", "arceusdragon", "arceusdark", "arceussteel", "arceusfairy", "genesect", "genesectburn", "genesectchill", "genesectdouse", "genesectshock"];
const newest = ["jynxmega", "electiviremega", "magmortarmega", "decidueyemega", "incineroarmega", "primarinamega", "granbullmega", "mightyenamega", "stoutlandmega", "victreebelmega", "dodriomega", "lanturnmega", "obstagoonmega", "slowkinggalarmega", "dusknoirmega", "galvantulamega"];
const tier1mega = ["corviknightmega", "dhelmisemega", "empoleonmega", "mudsdalemega", "starmiemega"];
const tier1 = ["blissey", "cinderace", "clefable", "corviknight", "ferrothorn", "gliscor", "heatran", "landorustherian", "nidoqueen", "rillaboom", "slowbro", "tapufini", "toxapex"];
const tier2mega = ["dragalgemega", "hydreigonmega", "latiasmega", "lopunnymega", "mawilemega", "medichammega", "raichumega", "reuniclusmega", "scizormega", "talonflamemega", "toxtricitylowkeymega", "vikavoltmega", "walreinmega"];
const tier2 = ["greninjaash", "hippowdon", "kartana", "kyurem", "slowkinggalar", "tangrowth", "tornadustherian", "volcarona", "weavile", "zapdos"];
const tier3mega = ["bastiodonmega", "charizardmegax", "drapionmega", "exploudmega", "falinksmegalegion", "garchompmega", "garbodormega", "lycanrocmega", "nidoqueenmega", "noivernmega", "parasectmega", "sableyemega", "spiritombmega", "swampertmega", "wishiwashimega"];
const tier3 = ["aegislash", "amoonguss", "buzzwole", "blacephalon", "chansey", "deoxysspeed", "greninja", "hydreigon", "keldeo", "kommoo", "magnezone", "melmetal", "tapukoko", "terrakion", "thundurus"];
const tier4mega = ["aurorusmega", "bibarelmega", "delphoxmega", "inteleonmega", "luxraymega", "typhlosionmega", "zoroarkmega"];
const tier4 = ["arctozolt", "barraskewda", "bisharp", "dragonite", "gengar", "gastrodon", "grimmsnarl", "hatterene", "hawlucha", "jirachi", "latias", "latios", "moltres", "ninetalesalola", "pelipper", "reuniclus", "rotomheat", "rotomwash", "scizor", "serperior", "shuckle", "skarmory", "slowking", "tapubulu", "tyranitar", "urshifurapidstrike", "zapdosgalar", "victini", "volcanion"];
const nichemega = ["delibirdmega", "feraligatrmega", "lycanrocmidnightmega", "nidokingmega"];
const niche = ["alakazam", "alomomola", "araquanid", "azumarill", "blaziken", "celesteela", "conkeldurr", "crawdaunt", "deoxysdefense", "diancie", "ditto", "dracozolt", "excadrill", "gyarados", "hoopaunbound", "infernape", "mamoswine", "manaphy", "mantine", "mew", "mukalola", "porygonz", "regieleki", "salamence", "thundurustherian"];
const heat = ["yanmega"];
const canonmega = ["venusaurmega", "charizardmegax", "charizardmegay", "blastoisemega", "beedrillmega", "pidgeotmega", "alakazammega", "slowbromega", "gengarmega", "kangaskhanmega", "pinsirmega", "gyaradosmega", "aerodactylmega", "mewtwomegax", "mewtwomegay", "ampharosmega", "steelixmega", "scizormega", "heracrossmega", "houndoommega", "tyranitarmega", "sceptilemega", "blazikenmega", "swampertmega", "gardevoirmega", "sableyemega", "mawilemega", "aggronmega", "medichammega", "manectricmega", "sharpedomega", "cameruptmega", "altariamega", "banettemega", "absolmega", "glaliemega", "salamencemega", "metagrossmega", "latiasmega", "latiosmega", "rayquazamega", "lopunnymega", "garchompmega", "lucariomega", "abomasnowmega", "gallademega", "audinomega", "dianciemega"];
const notier = ["wishiwashimega1", "wishiwashimega2", "wishiwashimega3", "wishiwashimega4", "wishiwashimegaschool", "falinksmegacombat"]; // should not appear in the teambuilder
const illegal = ["floetteeternal", "pichuspikyeared"];

const ou = ["aerodactylmega", "arctozolt", "cinderace", "blissey", "buzzwole", "charizardmegax", "charizardmegay", "clefable", "corviknight", "deoxysspeed", "dianciemega", "ferrothorn", "gallademega", "garchomp", "garchompmega", "gardevoirmega", "gliscor", "greninja", "greninjaash", "gyaradosmega", "hawluchamega", "heatran", "heracrossmega", "hippowdon", "kartana", "keldeo", "keldeoresolute", "kommoo", "kyurem", "landorustherian", "lopunnymega", "magnezone", "mawilemega", "medichammega", "nidoqueen", "nidoqueenmega", "pelipper", "pinsirmega", "rillaboom", "sableyemega", "scizor", "scizormega", "serperior", "slowbro", "slowbromega", "slowkinggalar", "swampertmega", "tapufini", "tapukoko", "tornadustherian", "toxapex", "tyranitar", "urshifurapidstrike", "venusaurmega", "volcarona", "weavile", "zapdos", "thievulmega", "lycanrocduskmega", "vikavoltmega", "lycanrocmega", "raichumega", "jolteonmega", "slowkingmega", "gothitellemega", "reuniclusmega", "luxraymega", "talonflamemega", "eelektrossmega", "dragalgemega", "dhelmisemega", "registeelmega", "bastiodonmega", "leavannymega", "parasectmega", "samurottmega", "meowsticfmega", "starmiemega", "flygonmega", "drapionmega", "lurantismega", "exploudmega", "noivernmega", "toxtricitylowkeymega", "hawluchamega", "araquanidmega", "wishiwashimega", "krookodilemega", "infernapemega", "empoleonmega", "mudsdalemega", "golurkmega", "silvallymega", "sirfetchdmega", "decidueyemega", "incineroarmega", "primarinamega", "jynxmega", "electiviremega", "magmortarmega"];
const uubl = ["aegislash", "alakazam", "azumarill", "blacephalon", "blaziken", "gengar", "gyarados", "hawlucha", "hoopaunbound", "hydreigon", "jirachi", "latias", "latios", "manaphy", "melmetal", "mew", "thundurusincarnate", "thundurustherian", "victini", "xurkitree", "zapdosgalar", "goodramega", "toucannonmega", "vanilluxemega", "garbodormega", "conkeldurrmega", "chandeluremega", "bisharpmega", "aurorusmega", "trevenantmega", "typhlosionmega", "magcargomega", "zoroarkmega", "falinksmegalegion", "porygonzmega"];

const vgcbanned = ["mew", "celebi", "jirachi", "deoxys", "deoxysattack", "deoxysdefense", "deoxysspeed", "phione", "manaphy", "darkrai", "shaymin", "shayminsky", "victini", "keldeo", "keldeoresolute", "meloetta", "greninjaash", "diancie", "dianciemega", "hoopa", "hoopaunbound", "volcanion", "magearna", "magearnaoriginal", "marshadow", "zeraora", "zarude", "arceus", "arceusfire", "arceuswater", "arceuselectric", "arceusgrass", "arceusice", "arceusfighting", "arceuspoison", "arceusground", "arceusflying", "arceuspsychic", "arceusbug", "arceusrock", "arceusghost", "arceusdragon", "arceusdark", "arceussteel", "arceusfairy", "genesect", "genesectburn", "genesectchill", "genesectdouse", "genesectshock"];
const restricted = ["mewtwo", "hooh", "lugia", "kyogre", "kyogreprimal", "groudon", "groudonprimal", "rayquaza", "rayquazamega", "dialga", "palkia", "giratina", "giratinaorigin", "reshiram", "zekrom", "kyurem", "kyuremblack", "kyuremwhite", "xerneas", "yveltal", "zygarde", "zygarde10", "zygardecomplete", "cosmog", "cosmoem", "solgaleo", "lunala", "necrozma", "necrozmadawnwings", "necrozmaduskmane", "necrozmaultra", "zacian", "zaciancrowned", "zamazenta", "zamazentacrowned", "eternatus", "calyrex", "calyrexice", "calyrexshadow"];
const s = ["incineroar", "dhelmisemega", "slowkingmega", "tapufini"];
const aplus = ["blastoise", "moltresgalar", "glastrier", "ninetalesalolamega", "mawilemega", "rillaboommega", "regieleki", "spectrier", "urshifu", "whimsicott"];
const a = ["amoonguss", "aurorusmega", "empoleonmega", "falinksmegalegion", "metagrossmega"];
const aminus = ["aegislash", "clefairy", "comfey", "dusclops", "grimmsnarl", "hatterene", "kartana", "landorustherian", "charizardmegay", "cinderacemega", "gengarmega", "gigalithmega", "kangaskhanmega", "orbeetlemega", "reuniclusmega", "murkrow"];
const bplus = ["arctovish", "arctozolt", "dracovish", "dracozolt", "excadrill", "indeedeef", "kommoo", "ludicolo", "hawluchamega", "luxraymega", "salamencemega", "politoed", "tapulele", "torkoal", "venusaur"];
const b = ["araquanid", "gothitelle", "hitmontop", "kingdra", "dragonitemega", "meowsticfmega", "pelipper", "porygon2", "rillaboom", "rotomheat", "stakataka", "urshifurapidstrike", "zapdos"];
const bminus = ["cresselia", "dragapult", "ferrothorn", "weezinggalar", "gastrodon", "araquanidmega", "corviknightmega", "flygonmega", "mudsdalemega", "samurottmega", "milotic", "raichu", "rotomwash", "tapubulu", "togekiss", "tsareena", "weezing"];
const c = ["aerodactyl", "marowakalola", "bronzong", "coalossal", "celesteela", "crobat", "articunogalar", "zapdosgalar", "gyarados", "heatran", "jellicent", "liepard", "dragalgemega", "hydreigonmega", "honchkrowmega", "leavannymega", "registeelmega", "swampertmega", "meowsticm", "ninetales", "regigigas", "sirfetchd", "slaking", "staraptor", "suicune", "terrakion", "tornadus", "weavile"];
*/
export const Scripts: ModdedBattleScriptsData = {
	teambuilderConfig: {
		excludeStandardTiers: true,
		customTiers: ['Newest', 'Tier 1 Mega', 'Tier 1', 'Tier 2 Mega', 'Tier 2', 'Tier 3 Mega', 'Tier 3', 'Tier 4 Mega', 'Tier 4', 'Niche Mega', 'Niche', 'Undecided', 'Heat'],
		customDoublesTiers: ['S', 'A+', 'A', 'A-', 'B+', 'B', 'B-', 'C', 'Unranked'],
	},
	init() {
		console.log('init m4a');
		for (const id in this.dataCache.Pokedex) {
			const pokemon = this.dataCache.Pokedex[id];
			if (pokemon.movepoolAdditions) {
				for (const move of pokemon.movepoolAdditions) {
					this.modData('Learnsets', this.toID(id)).learnset[this.toID(move)] = ["8M"];
				}
			}
			/*
			if (this.modData('FormatsData', id)) {
				if (this.modData('FormatsData', id).isNonstandard === 'Past') this.modData('FormatsData', id).isNonstandard = null;
				// singles tiers
				if (ag.includes(id)) this.modData('FormatsData', id).tier = "AG";
				else if (uber.includes(id)) this.modData('FormatsData', id).tier = "Uber";
				else if (newest.includes(id)) this.modData('FormatsData', id).tier = "Newest";
				else if (tier1mega.includes(id)) this.modData('FormatsData', id).tier = "Tier 1 Mega";
				else if (tier1.includes(id)) this.modData('FormatsData', id).tier = "Tier 1";
				else if (tier2mega.includes(id)) this.modData('FormatsData', id).tier = "Tier 2 Mega";
				else if (tier2.includes(id)) this.modData('FormatsData', id).tier = "Tier 2";
				else if (tier3mega.includes(id)) this.modData('FormatsData', id).tier = "Tier 3 Mega";
				else if (tier3.includes(id)) this.modData('FormatsData', id).tier = "Tier 3";
				else if (tier4mega.includes(id)) this.modData('FormatsData', id).tier = "Tier 4 Mega";
				else if (tier4.includes(id)) this.modData('FormatsData', id).tier = "Tier 4";
				else if (nichemega.includes(id)) this.modData('FormatsData', id).tier = "Niche Mega";
				else if (niche.includes(id)) this.modData('FormatsData', id).tier = "Niche";
				else if (illegal.includes(id)) this.modData('FormatsData', id).tier = "Illegal";
				else if (notier.includes(id)) this.modData('FormatsData', id).tier = ""; // special exception for Wishiwashi, Falinks, et cetera
				else if (heat.includes(id) || canonmega.includes(id)) this.modData('FormatsData', id).tier = "Heat"; // special exception for Yanmega
				else if (id.endsWith('mega')) this.modData('FormatsData', id).tier = "Undecided"; // guaranteeing M4A Megas that haven't been tiered appear in their own place
				else if (!this.modData('FormatsData', id).isNonstandard) this.modData('FormatsData', id).tier = "Heat"; // default (untiered)
				// truetier (this is for UU purposes but doesn't currently function)
				if (ag.includes(id)) this.modData('FormatsData', id).truetier = "AG";
				else if (uber.includes(id)) this.modData('FormatsData', id).truetier = "Uber";
				else if (ou.includes(id)) this.modData('FormatsData', id).truetier = "OU";
				else if (uubl.includes(id)) this.modData('FormatsData', id).truetier = "UUBL";
				else this.modData('FormatsData', id).truetier = "UU";
				// doubles tiers
				if (vgcbanned.includes(id)) this.modData('FormatsData', id).doublesTier = "Banned";
				else if (restricted.includes(id)) this.modData('FormatsData', id).doublesTier = "Restricted";
				else if (s.includes(id)) this.modData('FormatsData', id).doublesTier = "S";
				else if (aplus.includes(id)) this.modData('FormatsData', id).doublesTier = "A+";
				else if (a.includes(id)) this.modData('FormatsData', id).doublesTier = "A";
				else if (aminus.includes(id)) this.modData('FormatsData', id).doublesTier = "A-";
				else if (bplus.includes(id)) this.modData('FormatsData', id).doublesTier = "B+";
				else if (b.includes(id)) this.modData('FormatsData', id).doublesTier = "B";
				else if (bminus.includes(id)) this.modData('FormatsData', id).doublesTier = "B-";
				else if (c.includes(id)) this.modData('FormatsData', id).doublesTier = "C";
				else if (!this.modData('FormatsData', id).isNonstandard) this.modData('FormatsData', id).doublesTier = "Unranked";
			}
			*/
		};
	},
	canMegaEvo(pokemon) {
		const altForme = pokemon.baseSpecies.otherFormes && this.dex.getSpecies(pokemon.baseSpecies.otherFormes[0]);
		const item = pokemon.getItem();
		if (
			altForme?.isMega && altForme?.requiredMove &&
			pokemon.baseMoves.includes(this.toID(altForme.requiredMove)) && !item.zMove
		) {
			return altForme.name;
		}
		if (item.name === "Lycanite" && pokemon.baseSpecies.name === "Lycanroc-Midnight") {
			return "Lycanroc-Midnight-Mega";
		}
		if (item.name === "Lycanite" && pokemon.baseSpecies.name === "Lycanroc-Dusk") {
			return "Lycanroc-Dusk-Mega";
		}
		if (item.name === "Raichunite" && pokemon.baseSpecies.name === "Raichu-Alola") {
			return null;
		}
		if (item.name === "Slowbronite" && pokemon.baseSpecies.name === "Slowbro-Galar") {
			return null;
		}
		if (item.name === "Slowkinite" && pokemon.baseSpecies.name === "Slowking-Galar") {
			return "Slowking-Galar-Mega";
		}
		if (item.name === "Gourgeite" && pokemon.baseSpecies.name === "Gourgeist-Small") {
			return "Gourgeist-Small-Mega";
		}
		if (item.name === "Gourgeite" && pokemon.baseSpecies.name === "Gourgeist-Large") {
			return "Gourgeist-Large-Mega";
		}
		if (item.name === "Gourgeite" && pokemon.baseSpecies.name === "Gourgeist-Super") {
			return "Gourgeist-Super-Mega";
		}
		if (item.name === "Reginite" && pokemon.baseSpecies.name === "Regice") {
			return "Regice-Mega";
		}
		if (item.name === "Reginite" && pokemon.baseSpecies.name === "Registeel") {
			return "Registeel-Mega";
		}
		if (item.name === "Meowsticite" && pokemon.baseSpecies.name === "Meowstic-F") {
			return "Meowstic-F-Mega";
		}
		if (item.name === "Sawsbuckite" && pokemon.baseSpecies.id === "sawsbucksummer") {
			return "Sawsbuck-Summer-Mega";
		}
		if (item.name === "Sawsbuckite" && pokemon.baseSpecies.id === "sawsbuckautumn") {
			return "Sawsbuck-Autumn-Mega";
		}
		if (item.name === "Sawsbuckite" && pokemon.baseSpecies.id === "sawsbuckwinter") {
			return "Sawsbuck-Winter-Mega";
		}
		if (item.name === "Toxtricitite" && pokemon.baseSpecies.name === "Toxtricity-Low-Key") {
			return "Toxtricity-Low-Key-Mega";
		}
		if (item.name === "Ninetalesite" && pokemon.baseSpecies.name === "Ninetales") {
			return null;
		}
		if (item.name === "Dugtrionite" && pokemon.baseSpecies.name === "Dugtrio-Alola") {
			return null;
		}
		if (item.name === "Rapidashinite" && pokemon.baseSpecies.name === "Rapidash-Galar") {
			return null;
		}
		if (item.name === "RKS Megamemory" && pokemon.species.name.startsWith('Silvally')) {
			let newSpecies = this.dex.deepClone(this.dex.getSpecies('Silvally-Mega'));
			newSpecies.types[0] = pokemon.hpType || "Dark";
			newSpecies.name = newSpecies.name + '-' + newSpecies.types[0];
			return newSpecies;
		}
		if (pokemon.baseSpecies.name === "Pichu") {
			return null;
		}
		if (pokemon.baseSpecies.name === "Floette") {
			return null;
		}
		if (item.megaEvolves !== pokemon.baseSpecies.name || item.megaStone === pokemon.species.name) {
			return null;
		}
		return item.megaStone;
	},
	runMegaEvo(pokemon) {
		const speciesid = pokemon.canMegaEvo || pokemon.canUltraBurst;
		if (!speciesid) return false;
		const side = pokemon.side;

		// Pokémon affected by Sky Drop cannot mega evolve. Enforce it here for now.
		for (const foeActive of side.foe.active) {
			if (foeActive.volatiles['skydrop'] && foeActive.volatiles['skydrop'].source === pokemon) {
				return false;
			}
		}

		if (pokemon.illusion) {
			this.singleEvent('End', this.dex.getAbility('Illusion'), pokemon.abilityData, pokemon);
		} // only part that's changed
		pokemon.formeChange(speciesid, pokemon.getItem(), true);

		// Limit one mega evolution
		const wasMega = pokemon.canMegaEvo;
		for (const ally of side.pokemon) {
			if (wasMega) {
				ally.canMegaEvo = null;
			} else {
				ally.canUltraBurst = null;
			}
		}

		this.runEvent('AfterMega', pokemon);
		return true;
	},

	getDamage(
		pokemon: Pokemon, target: Pokemon, move: string | number | ActiveMove,
		suppressMessages = false
	): number | undefined | null | false {
		if (typeof move === 'string') move = this.dex.getActiveMove(move);

		if (typeof move === 'number') {
			const basePower = move;
			move = new Dex.Move({
				basePower,
				type: '???',
				category: 'Physical',
				willCrit: false,
			}) as ActiveMove;
			move.hit = 0;
		}

		if (!move.ignoreImmunity || (move.ignoreImmunity !== true && !move.ignoreImmunity[move.type])) {
			if (!target.runImmunity(move.type, !suppressMessages)) {
				return false;
			}
		}

		if (move.ohko) return target.maxhp;
		if (move.damageCallback) return move.damageCallback.call(this, pokemon, target);
		if (move.damage === 'level') {
			return pokemon.level;
		} else if (move.damage) {
			return move.damage;
		}

		const category = this.getCategory(move);
		const defensiveCategory = move.defensiveCategory || category;

		let basePower: number | false | null = move.basePower;
		if (move.basePowerCallback) {
			basePower = move.basePowerCallback.call(this, pokemon, target, move);
		}
		if (!basePower) return basePower === 0 ? undefined : basePower;
		basePower = this.clampIntRange(basePower, 1);

		let critMult;
		let critRatio = this.runEvent('ModifyCritRatio', pokemon, target, move, move.critRatio || 0);
		if (this.gen <= 5) {
			critRatio = this.clampIntRange(critRatio, 0, 5);
			critMult = [0, 16, 8, 4, 3, 2];
		} else {
			critRatio = this.clampIntRange(critRatio, 0, 4);
			if (this.gen === 6) {
				critMult = [0, 16, 8, 2, 1];
			} else {
				critMult = [0, 24, 8, 2, 1];
			}
		}

		const moveHit = target.getMoveHitData(move);
		moveHit.crit = move.willCrit || false;
		if (move.willCrit === undefined) {
			if (critRatio) {
				moveHit.crit = this.randomChance(1, critMult[critRatio]);
			}
		}

		if (moveHit.crit) {
			moveHit.crit = this.runEvent('CriticalHit', target, null, move);
		}

		// happens after crit calculation
		basePower = this.runEvent('BasePower', pokemon, target, move, basePower, true);

		if (!basePower) return 0;
		basePower = this.clampIntRange(basePower, 1);

		const level = pokemon.level;

		const attacker = pokemon;
		const defender = target;
		let attackStat: StatNameExceptHP = category === 'Physical' ? 'atk' : 'spa';
		const defenseStat: StatNameExceptHP = defensiveCategory === 'Physical' ? 'def' : 'spd';
		if (move.useSourceDefensiveAsOffensive) {
			attackStat = defenseStat;
			// Body press really wants to use the def stat,
			// so it switches stats to compensate for Wonder Room.
			// Of course, the game thus miscalculates the boosts...
			if ('wonderroom' in this.field.pseudoWeather) {
				if (attackStat === 'def') {
					attackStat = 'spd';
				} else if (attackStat === 'spd') {
					attackStat = 'def';
				}
				if (attacker.boosts['def'] || attacker.boosts['spd']) {
					this.hint("Body Press uses Sp. Def boosts when Wonder Room is active.");
				}
			}
		}
		if (move.useTargetOffensive || (move as any).settleBoosted) {
			attackStat = 'atk'; // hard-coding for Sleight of Hand: do not use Special Attack
		}

		const statTable = {atk: 'Atk', def: 'Def', spa: 'SpA', spd: 'SpD', spe: 'Spe'};
		let attack;
		let defense;

		let atkBoosts = move.useTargetOffensive ? defender.boosts[attackStat] : attacker.boosts[attackStat];
		if ((move as any).bodyofwaterBoosted) {
			if (attackStat === 'def') {
				atkBoosts = attacker.boosts['atk'];
			} else if (attackStat === 'spd') {
				atkBoosts = attacker.boosts['spa'];
			}
		}
		let defBoosts = defender.boosts[defenseStat];

		let ignoreNegativeOffensive = !!move.ignoreNegativeOffensive;
		let ignorePositiveDefensive = !!move.ignorePositiveDefensive;

		if (moveHit.crit) {
			ignoreNegativeOffensive = true;
			ignorePositiveDefensive = true;
		}
		const ignoreOffensive = !!(move.ignoreOffensive || (ignoreNegativeOffensive && atkBoosts < 0));
		const ignoreDefensive = !!(move.ignoreDefensive || (ignorePositiveDefensive && defBoosts > 0));

		if (ignoreOffensive) {
			this.debug('Negating (sp)atk boost/penalty.');
			atkBoosts = 0;
		}
		if (ignoreDefensive) {
			this.debug('Negating (sp)def boost/penalty.');
			defBoosts = 0;
		}

		if (move.useTargetOffensive) {
			attack = defender.calculateStat(attackStat, atkBoosts);
		} else {
			attack = attacker.calculateStat(attackStat, atkBoosts);
		}

		attackStat = (category === 'Physical' ? 'atk' : 'spa');
		defense = defender.calculateStat(defenseStat, defBoosts);

		// Apply Stat Modifiers
		attack = this.runEvent('Modify' + statTable[attackStat], attacker, defender, move, attack);
		defense = this.runEvent('Modify' + statTable[defenseStat], defender, attacker, move, defense);

		if (this.gen <= 4 && ['explosion', 'selfdestruct'].includes(move.id) && defenseStat === 'def') {
			defense = this.clampIntRange(Math.floor(defense / 2), 1);
		}

		const tr = this.trunc;

		// int(int(int(2 * L / 5 + 2) * A * P / D) / 50);
		const baseDamage = tr(tr(tr(tr(2 * level / 5 + 2) * basePower * attack) / defense) / 50);

		// Calculate damage modifiers separately (order differs between generations)
		return this.modifyDamage(baseDamage, pokemon, target, move, suppressMessages);
	},

	pokemon: {
		lostItemForDelibird: null,
		setItem(item: string | Item, source?: Pokemon, effect?: Effect) {
			if (!this.hp) return false;
			if (typeof item === 'string') item = this.battle.dex.getItem(item);

			const effectid = this.battle.effect ? this.battle.effect.id : '';
			const RESTORATIVE_BERRIES = new Set([
				'leppaberry', 'aguavberry', 'enigmaberry', 'figyberry', 'iapapaberry', 'magoberry', 'sitrusberry', 'wikiberry', 'oranberry',
			] as ID[]);
			if (RESTORATIVE_BERRIES.has('leppaberry' as ID)) {
				const inflicted = ['trick', 'switcheroo'].includes(effectid);
				const external = inflicted && source && source.side.id !== this.side.id;
				this.pendingStaleness = external ? 'external' : 'internal';
			} else {
				this.pendingStaleness = undefined;
			}
			this.item = item.id;
			this.itemData = {id: item.id, target: this};
			if (item.id) {
				this.battle.singleEvent('Start', item, this.itemData, this, source, effect);
			}
			return true;
		},
		runEffectiveness(move: ActiveMove) {
			let totalTypeMod = 0;
			for (const type of this.getTypes()) {
				if (type === 'Fairy' && (move as any).prehistoricrageBoosted) {
					totalTypeMod += 1;
				} else {
					let typeMod = this.battle.dex.getEffectiveness(move, type);
					typeMod = this.battle.singleEvent('Effectiveness', move, null, this, type, move, typeMod);
					totalTypeMod += this.battle.runEvent('Effectiveness', this, type, move, typeMod);
				}
			}
			return totalTypeMod;
		},
		isGrounded(negateImmunity = false) {
			if ('gravity' in this.battle.field.pseudoWeather) return true;
			if ('ingrain' in this.volatiles && this.battle.gen >= 4) return true;
			if ('smackdown' in this.volatiles) return true;
			const item = (this.ignoringItem() ? '' : this.item);
			if (item === 'ironball') return true;
			// If a Fire/Flying type uses Burn Up and Roost, it becomes ???/Flying-type, but it's still grounded.
			if (!negateImmunity && this.hasType('Flying') && !('roost' in this.volatiles)) return false;
			if (this.hasAbility('levitate') && !this.battle.suppressingAttackEvents()) return null;
			if ('magnetrise' in this.volatiles) return false;
			if ('telekinesis' in this.volatiles) return false;
			if ('poolfloaties' in this.volatiles) return false;
			return item !== 'airballoon';
		},
		getMoveTargets(move: ActiveMove, target: Pokemon): {targets: Pokemon[], pressureTargets: Pokemon[]} {
			let targets: Pokemon[] = [];
			let pressureTargets;

			switch (move.target) {
				case 'all':
				case 'foeSide':
				case 'allySide':
				case 'allyTeam':
					if (!move.target.startsWith('foe')) {
						targets.push(...this.allies());
					}
					if (!move.target.startsWith('ally')) {
						targets.push(...this.foes());
					}
					if (targets.length && !targets.includes(target)) {
						this.battle.retargetLastMove(targets[targets.length - 1]);
					}
					break;
				case 'allAdjacent':
					targets.push(...this.nearbyAllies());
					// falls through
				case 'allAdjacentFoes':
					targets.push(...this.nearbyFoes());
					if (targets.length && !targets.includes(target)) {
						this.battle.retargetLastMove(targets[targets.length - 1]);
					}
					break;
				case 'allies':
					targets = this.allies();
					break;
				default:
					const selectedTarget = target;
					if (!target || (target.fainted && target.side !== this.side)) {
						// If a targeted foe faints, the move is retargeted
						const possibleTarget = this.battle.getRandomTarget(this, move);
						if (!possibleTarget) return {targets: [], pressureTargets: []};
						target = possibleTarget;
					}
					if (target.side.active.length > 1 && !move.tracksTarget) {
						const isCharging = move.flags['charge'] && !this.volatiles['twoturnmove'] &&
								!((move.id.startsWith('solarb') || this.hasAbility('solarcore')) && this.battle.field.isWeather(['sunnyday', 'desolateland'])) &&
								!(this.hasItem('powerherb') && move.id !== 'skydrop');
						if (!isCharging) {
							target = this.battle.priorityEvent('RedirectTarget', this, this, move, target);
						}
					}
					if (move.smartTarget) {
						targets = this.getSmartTargets(target, move);
						target = targets[0];
					} else {
						targets.push(target);
					}
					if (target.fainted) {
						return {targets: [], pressureTargets: []};
					}
					if (selectedTarget !== target) {
						this.battle.retargetLastMove(target);
					}

					// Resolve apparent targets for Pressure.
					if (move.pressureTarget) {
						// At the moment, this is the only supported target.
						if (move.pressureTarget === 'foeSide') {
							pressureTargets = this.foes();
						}
					}
			}

			return {targets, pressureTargets: pressureTargets || targets};
		},
		cureStatus(pokemon: Pokemon, silent = false) {
			if (!this.hp || !this.status) return false;
			this.battle.add('-curestatus', this, this.status, silent ? '[silent]' : '[msg]');
			if (this.status === 'slp' && !this.hasAbility('comatose') && this.removeVolatile('nightmare')) {
				this.battle.add('-end', this, 'Nightmare', '[silent]');
			}
			this.setStatus('');
			if (this.volatiles['staccato']) {
				this.volatiles['staccato'].busted = true;
				this.removeVolatile('staccato')
			}
			return true;
		},
	},
};
