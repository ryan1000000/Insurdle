const targetWords = [
  "adjust",
  "damage",
  "policy",
  "covers",
  "insure",
  "public",
  "vandal",
  "driver",
  "towing",
  "injury",
  "repair",
  "centre",
  "safety",
  "voided",
  "stormy",
  "claims",
  "breach",
  "street",
  "bumper",
  "fender",
  "ticket",
  "Liable",
  "gratia",
  "cancel",
  "trucks",
  "report",
  "expiry",
  "lapsed",
  "record",
  "extend",
  "limits",
  "quotes",
  "broker"
]

const dictionary = [
  "adjust",
  "damage",
  "policy",
  "covers",
  "insure",
  "public",
  "vandal",
  "driver",
  "towing",
  "injury",
  "repair",
  "centre",
  "safety",
  "voided",
  "stormy",
  "claims",
  "breach",
  "street",
  "bumper",
  "fender",
  "ticket",
  "Liable",
  "gratia",
  "cancel",
  "trucks",
  "report",
  "expiry",
  "lapsed",
  "record",
  "extend",
  "limits",
  "quotes",
  "broker",
  'queens',
  'framed',
  'caster',
  'crates',
  'caters',
  'amazed',
  'lasers',
  'insure',
  'quiets',
  'lifter',
  'abacus', 
'abased', 
'abated', 
'abates', 
'abayas', 
'abbess', 
'abbeys', 
'abbots', 
'abduct', 
'abhors', 
'abided', 
'abides', 
'abject', 
'abjure', 
'ablate', 
'ablaze', 
'aboard', 
'abodes', 
'aborts', 
'abound', 
'abrade', 
'abroad', 
'abrupt', 
'absent', 
'absorb', 
'absurd', 
'abused', 
'abuser', 
'abuses', 
'acacia', 
'accede', 
'accent', 
'accept', 
'access', 
'accord', 
'accost', 
'accrue', 
'accuse', 
'acetic', 
'acetyl', 
'aching', 
'acidic', 
'acinar', 
'acorns', 
'across', 
'acting', 
'action', 
'active', 
'actors', 
'actual', 
'acuity', 
'acumen', 
'adages', 
'adagio', 
'adapts', 
'addend', 
'adders', 
'addict', 
'adding', 
'addled', 
'adduce', 
'adduct', 
'adepts', 
'adhere', 
'adipic', 
'adjoin', 
'adjust', 
'admire', 
'admits', 
'adobes', 
'adopts', 
'adored', 
'adores', 
'adorns', 
'adrift', 
'adroit', 
'adsorb', 
'adults', 
'advent', 
'adverb', 
'advert', 
'advice', 
'advise', 
'adware', 
'adzuki', 
'aerate', 
'aerial', 
'aeries', 
'affair', 
'affect', 
'affine', 
'affirm', 
'afford', 
'affray', 
'afghan', 
'afield', 
'aflame', 
'afloat', 
'afraid', 
'afresh', 
'agates', 
'agaves', 
'ageing', 
'ageism', 
'agency', 
'agenda', 
'agents', 
'aghast', 
'agouti', 
'agreed', 
'agrees', 
'ahimsa', 
'aiders', 
'aiding', 
'aikido', 
'ailing', 
'aiming', 
'airbag', 
'airier', 
'airily', 
'airing', 
'airman', 
'airmen', 
'airway', 
'aisles', 
'alarms', 
'albedo', 
'albeit', 
'albino', 
'albite', 
'albums', 
'alcove', 
'alders', 
'alerts', 
'alibis', 
'aliens', 
'alight', 
'aligns', 
'aliyah', 
'alkali', 
'alkane', 
'alkyds', 
'allays', 
'allege', 
'allele', 
'alleys', 
'allied', 
'allies', 
'allots', 
'allows', 
'alloys', 
'allude', 
'allure', 
'almond', 
'almost', 
'alpaca', 
'alphas', 
'alpine', 
'altars', 
'alters', 
'alumna', 
'alumni', 
'always', 
'amazed', 
'amazes', 
'amazon', 
'ambers', 
'ambled', 
'ambles', 
'ambush', 
'amends', 
'amicus', 
'amidst', 
'amines', 
'amnion', 
'amoeba', 
'amoral', 
'amount', 
'amours', 
'ampere', 
'ampler', 
'ampule', 
'amtrak', 
'amulet', 
'amused', 
'amuses', 
'anally', 
'analog', 
'anchor', 
'anemia', 
'anemic', 
'angels', 
'angers', 
'angina', 
'angled', 
'angler', 
'angles', 
'angora', 
'angsty', 
'animal', 
'animus', 
'anions', 
'ankles', 
'anklet', 
'annals', 
'annoys', 
'annual', 
'annuls', 
'anodes', 
'anodic', 
'anoint', 
'anoles', 
'anomie', 
'anorak', 
'anoxia', 
'anoxic', 
'answer', 
'anthem', 
'anther', 
'antics', 
'antler', 
'antral', 
'antrum', 
'anuses', 
'anvils', 
'anyhow', 
'anyone', 
'anyway', 
'aorist', 
'aortic', 
'apache', 
'apathy', 
'apexes', 
'aphids', 
'apiary', 
'apical', 
'apices', 
'apiece', 
'aplomb', 
'apneas', 
'apneic', 
'apnoea', 
'apogee', 
'appall', 
'appeal', 
'appear', 
'append', 
'apples', 
'applet', 
'aprons', 
'arabic', 
'arable', 
'arbors', 
'arbour', 
'arcade', 
'arcana', 
'arcane', 
'arched', 
'archer', 
'arches', 
'archly', 
'arctic', 
'ardent', 
'ardour', 
'arenas', 
'areola', 
'argent', 
'argued', 
'arguer', 
'argues', 
'argyle', 
'aright', 
'arisen', 
'arises', 
'armada', 
'armful', 
'armies', 
'arming', 
'armlet', 
'armory', 
'armour', 
'armpit', 
'arnica', 
'aromas', 
'around', 
'arouse', 
'arrant', 
'arrays', 
'arrear', 
'arrest', 
'arrive', 
'arrows', 
'arroyo', 
'arsons', 
'artery', 
'artful', 
'artist', 
'ascend', 
'ascent', 
'ashore', 
'ashram', 
'asides', 
'asking', 
'asleep', 
'aspect', 
'aspens', 
'aspire', 
'assail', 
'assays', 
'assent', 
'assert', 
'assess', 
'assets', 
'assign', 
'assist', 
'assize', 
'assume', 
'assure', 
'astern', 
'asters', 
'asthma', 
'astral', 
'astray', 
'astute', 
'asylum', 
'ataxia', 
'atlatl', 
'atolls', 
'atomic', 
'atonal', 
'atopic', 
'atrial', 
'atrium', 
'attach', 
'attack', 
'attain', 
'attend', 
'attest', 
'attics', 
'attire', 
'attune', 
'auburn', 
'audios', 
'audits', 
'augers', 
'augurs', 
'augury', 
'august', 
'auntie', 
'aureus', 
'aurora', 
'auteur', 
'author', 
'autism', 
'autumn', 
'auxins', 
'avails', 
'avatar', 
'avenge', 
'avenue', 
'averse', 
'averts', 
'avians', 
'aviary', 
'avidly', 
'avoids', 
'avowal', 
'avowed', 
'awaits', 
'awaked', 
'awaken', 
'awakes', 
'awards', 
'awhile', 
'awning', 
'awoken', 
'axeman', 
'axilla', 
'axioms', 
'axions', 
'axonal', 
'azalea', 
'babble', 
'babied', 
'babies', 
'baboon', 
'backed', 
'backer', 
'backup', 
'bacons', 
'badass', 
'badder', 
'baddie', 
'badged', 
'badger', 
'badges', 
'badman', 
'baffle', 
'bagels', 
'bagged', 
'bagger', 
'baggie', 
'bagman', 
'bagmen', 
'bailed', 
'bailer', 
'bairns', 
'baited', 
'baiter', 
'bakers', 
'bakery', 
'baking', 
'balder', 
'baldly', 
'baleen', 
'balers', 
'baling', 
'balked', 
'ballad', 
'balled', 
'baller', 
'ballet', 
'ballot', 
'ballsy', 
'balsam', 
'bamboo', 
'banana', 
'banded', 
'bander', 
'bandit', 
'banged', 
'banger', 
'bangle', 
'banish', 
'banjos', 
'banked', 
'banker', 
'banned', 
'banner', 
'bantam', 
'banter', 
'banyan', 
'banzai', 
'baobab', 
'barbed', 
'barbel', 
'barber', 
'barbie', 
'bardic', 
'barely', 
'barest', 
'barfed', 
'barged', 
'barges', 
'baring', 
'barite', 
'barium', 
'barked', 
'barker', 
'barley', 
'barman', 
'barons', 
'barony', 
'barque', 
'barred', 
'barrel', 
'barren', 
'barrow', 
'barter', 
'baryon', 
'basalt', 
'basely', 
'basest', 
'bashed', 
'basher', 
'bashes', 
'basics', 
'basils', 
'basing', 
'basins', 
'basked', 
'basket', 
'basque', 
'basses', 
'basset', 
'basted', 
'baster', 
'bastes', 
'bateau', 
'bathed', 
'bather', 
'bathes', 
'bathos', 
'batiks', 
'batman', 
'batons', 
'batted', 
'batten', 
'batter', 
'battle', 
'bauble', 
'bawled', 
'baying', 
'bazaar', 
'beachy', 
'beacon', 
'beaded', 
'beagle', 
'beaked', 
'beaker', 
'beamed', 
'beanie', 
'beards', 
'bearer', 
'beasts', 
'beaten', 
'beater', 
'beauty', 
'beaver', 
'became', 
'beckon', 
'become', 
'bedbug', 
'bedded', 
'bedeck', 
'bedlam', 
'bedpan', 
'bedsit', 
'beefed', 
'beeped', 
'beeper', 
'beetle', 
'befall', 
'befell', 
'befits', 
'before', 
'begets', 
'beggar', 
'begged', 
'begins', 
'behalf', 
'behave', 
'beheld', 
'behest', 
'behind', 
'behold', 
'beiges', 
'beings', 
'belfry', 
'belief', 
'belies', 
'belles', 
'bellow', 
'belong', 
'belted', 
'belter', 
'beluga', 
'bemoan', 
'bemuse', 
'bended', 
'bender', 
'benign', 
'berate', 
'bereft', 
'berets', 
'berlin', 
'berths', 
'besets', 
'beside', 
'bested', 
'bestir', 
'bestow', 
'betake', 
'betide', 
'betray', 
'better', 
'bettor', 
'bevels', 
'bewail', 
'beware', 
'beyond', 
'bezels', 
'bhakti', 
'biased', 
'biases', 
'bibles', 
'biceps', 
'bicker', 
'bidden', 
'bidder', 
'bidets', 
'biding', 
'biffed', 
'bifold', 
'bigamy', 
'bigeye', 
'bigger', 
'biggie', 
'bigots', 
'bigwig', 
'bikers', 
'biking', 
'bikini', 
'bilges', 
'bilked', 
'billed', 
'biller', 
'billet', 
'billon', 
'billow', 
'bimbos', 
'binary', 
'binder', 
'binged', 
'binges', 
'biogas', 
'biomes', 
'bionic', 
'biopsy', 
'biotas', 
'biotic', 
'biotin', 
'bipeds', 
'birder', 
'birdie', 
'births', 
'bisect', 
'bishop', 
'bisons', 
'bisque', 
'bistro', 
'bitchy', 
'biters', 
'biting', 
'bitmap', 
'bitten', 
'bitter', 
'blacks', 
'bladed', 
'blader', 
'blades', 
'blamed', 
'blames', 
'blanch', 
'blanks', 
'blared', 
'blares', 
'blasts', 
'blazed', 
'blazer', 
'blazes', 
'blazon', 
'bleach', 
'bleary', 
'bleats', 
'bleeds', 
'bleeps', 
'blends', 
'blenny', 
'blight', 
'blimey', 
'blimps', 
'blinds', 
'blinis', 
'blinks', 
'blithe', 
'blobby', 
'blocks', 
'blocky', 
'bloggy', 
'blokes', 
'blonde', 
'blonds', 
'bloods', 
'bloody', 
'blooms', 
'blotch', 
'blouse', 
'blousy', 
'blowed', 
'blower', 
'blowup', 
'bluesy', 
'bluffs', 
'bluing', 
'bluish', 
'blunts', 
'blurbs', 
'blurry', 
'blurts', 
'boards', 
'boasts', 
'boated', 
'boater', 
'bobbed', 
'bobber', 
'bobbin', 
'bobble', 
'bobcat', 
'bodega', 
'bodice', 
'bodied', 
'bodies', 
'bodily', 
'boding', 
'bodkin', 
'boffin', 
'bogeys', 
'bogged', 
'boggle', 
'bogies', 
'boiled', 
'boiler', 
'bolder', 
'boldly', 
'bolero', 
'bolted', 
'bombed', 
'bomber', 
'bonbon', 
'bonded', 
'boners', 
'bongos', 
'bonier', 
'bonito', 
'bonked', 
'bonnet', 
'bonobo', 
'bonsai', 
'boobie', 
'booboo', 
'booger', 
'boogie', 
'boohoo', 
'booing', 
'booked', 
'booker', 
'bookie', 
'boomed', 
'boomer', 
'boosts', 
'booted', 
'booths', 
'bootie', 
'boozed', 
'boozer', 
'bopped', 
'bopper', 
'borage', 
'borate', 
'border', 
'boreal', 
'borers', 
'boring', 
'borrow', 
'bosoms', 
'bosons', 
'bossed', 
'bosses', 
'botany', 
'bother', 
'botnet', 
'bottle', 
'bottom', 
'boucle', 
'boudin', 
'boughs', 
'bought', 
'bougie', 
'boules', 
'bounce', 
'bouncy', 
'bounds', 
'bounty', 
'bourne', 
'bourse', 
'bovine', 
'bowels', 
'bowers', 
'bowery', 
'bowing', 
'bowled', 
'bowler', 
'bowman', 
'bowmen', 
'boxcar', 
'boxers', 
'boxier', 
'boxing', 
'boyars', 
'boyish', 
'braced', 
'bracer', 
'braces', 
'bracts', 
'brahma', 
'braids', 
'brains', 
'brainy', 
'braise', 
'braked', 
'brakes', 
'branch', 
'brands', 
'brandy', 
'brassy', 
'bratty', 
'braved', 
'braver', 
'braves', 
'bravos', 
'brawls', 
'brawns', 
'brawny', 
'brayed', 
'brayer', 
'brazed', 
'brazen', 
'brazil', 
'breach', 
'breads', 
'bready', 
'breaks', 
'breast', 
'breath', 
'breech', 
'breeds', 
'breeze', 
'breezy', 
'brevet', 
'brewed', 
'brewer', 
'briars', 
'bribed', 
'bribes', 
'bricks', 
'bridal', 
'brides', 
'bridge', 
'bridle', 
'briefs', 
'briers', 
'bright', 
'brined', 
'brines', 
'brings', 
'brinks', 
'broach', 
'broads', 
'brogue', 
'broils', 
'broken', 
'broker', 
'bronco', 
'broncs', 
'bronze', 
'bronzy', 
'brooch', 
'broods', 
'broody', 
'brooks', 
'brooms', 
'broths', 
'browns', 
'browse', 
'bruins', 
'bruise', 
'brunch', 
'brushy', 
'brutal', 
'brutes', 
'bubble', 
'bubbly', 
'buccal', 
'bucked', 
'bucket', 
'buckle', 
'budded', 
'budged', 
'budget', 
'budgie', 
'buffed', 
'buffer', 
'buffet', 
'bugged', 
'bugger', 
'bugler', 
'bugles', 
'builds', 
'bulged', 
'bulges', 
'bulgur', 
'bulked', 
'bulled', 
'bullet', 
'bumble', 
'bummed', 
'bummer', 
'bumped', 
'bumper', 
'bundle', 
'bungee', 
'bungle', 
'bunion', 
'bunked', 
'bunker', 
'bunkum', 
'bunted', 
'buoyed', 
'burble', 
'burden', 
'bureau', 
'burger', 
'burgle', 
'burial', 
'buried', 
'buries', 
'burkas', 
'burlap', 
'burley', 
'burned', 
'burner', 
'burnet', 
'burped', 
'burqas', 
'burros', 
'burrow', 
'bursar', 
'bursts', 
'burton', 
'busboy', 
'bushed', 
'bushel', 
'bushes', 
'busied', 
'busier', 
'busies', 
'busily', 
'busing', 
'busker', 
'bussed', 
'busses', 
'busted', 
'buster', 
'bustle', 
'butane', 
'butler', 
'butted', 
'butter', 
'buttes', 
'button', 
'buyers', 
'buying', 
'buyout', 
'buzzed', 
'buzzer', 
'buzzes', 
'bygone', 
'bylaws', 
'byline', 
'bypass', 
'byways', 
'byword', 
'cabals', 
'cabana', 
'cabbie', 
'cabins', 
'cabled', 
'cables', 
'cachet', 
'cackle', 
'cactus', 
'caddie', 
'caddis', 
'cadets', 
'cadres', 
'caecum', 
'caftan', 
'caging', 
'caiman', 
'cairns', 
'caking', 
'calico', 
'caliph', 
'called', 
'caller', 
'callow', 
'callus', 
'calmed', 
'calmer', 
'calmly', 
'calved', 
'calves', 
'camber', 
'camels', 
'cameos', 
'camera', 
'camped', 
'camper', 
'campos', 
'campus', 
'canals', 
'canape', 
'canard', 
'canary', 
'cancel', 
'cancer', 
'candid', 
'candle', 
'candor', 
'canids', 
'canine', 
'caning', 
'canker', 
'cannas', 
'canned', 
'canner', 
'cannon', 
'canoed', 
'canoes', 
'canola', 
'canons', 
'canopy', 
'canted', 
'canter', 
'canton', 
'cantor', 
'cantos', 
'canvas', 
'canyon', 
'capers', 
'capful', 
'capita', 
'capons', 
'capped', 
'capper', 
'capsid', 
'captor', 
'carafe', 
'carats', 
'carbon', 
'carbos', 
'carboy', 
'carded', 
'carder', 
'cardia', 
'cardio', 
'careen', 
'career', 
'carers', 
'caress', 
'cargos', 
'caries', 
'carina', 
'caring', 
'carnal', 
'carney', 
'carols', 
'caroms', 
'carpal', 
'carped', 
'carpel', 
'carpet', 
'carrel', 
'carrot', 
'carted', 
'cartel', 
'carter', 
'carton', 
'carved', 
'carver', 
'carves', 
'casein', 
'cashed', 
'cashes', 
'cashew', 
'casing', 
'casino', 
'casket', 
'casque', 
'cassia', 
'cassis', 
'caster', 
'castes', 
'castle', 
'castor', 
'casual', 
'catchy', 
'caters', 
'cation', 
'catkin', 
'catnap', 
'catnip', 
'catsup', 
'cattle', 
'caucus', 
'caudal', 
'caught', 
'causal', 
'caused', 
'causes', 
'caveat', 
'cavern', 
'caviar', 
'cavils', 
'caving', 
'cavity', 
'cavort', 
'cayman', 
'ceased', 
'ceases', 
'cedars', 
'ceding', 
'celebs', 
'celery', 
'celiac', 
'cellar', 
'celled', 
'cellos', 
'cement', 
'cenote', 
'censer', 
'censor', 
'census', 
'center', 
'centre', 
'cereal', 
'cereus', 
'cerise', 
'cerium', 
'cervix', 
'cesium', 
'cetane', 
'chador', 
'chafed', 
'chafes', 
'chains', 
'chairs', 
'chaise', 
'chalet', 
'chalks', 
'chalky', 
'champs', 
'chance', 
'chancy', 
'change', 
'chants', 
'chapel', 
'charge', 
'charms', 
'charro', 
'charts', 
'chased', 
'chaser', 
'chases', 
'chasms', 
'chasse', 
'chaste', 
'chatty', 
'cheapo', 
'cheats', 
'checks', 
'cheeks', 
'cheeky', 
'cheers', 
'cheery', 
'cheese', 
'cheesy', 
'cheque', 
'cherry', 
'cherub', 
'chests', 
'chesty', 
'chevre', 
'chewed', 
'chewer', 
'chiasm', 
'chicks', 
'chicle', 
'chided', 
'chides', 
'chiefs', 
'chiles', 
'chilli', 
'chills', 
'chilly', 
'chimed', 
'chimes', 
'chimps', 
'chinas', 
'chinch', 
'chines', 
'choice', 
'choose', 
'chords', 
'chorus', 
'chosen', 
'chrome', 
'chunks', 
'church', 
'cinema', 
'circle', 
'circus', 
'cities', 
'citing', 
'citrus', 
'claims', 
'classy', 
'clause', 
'clever', 
'clicks', 
'client', 
'cliffs', 
'clinic', 
'closed', 
'closer', 
'closes', 
'closet', 
'clouds', 
'clutch', 
'coated', 
'coding', 
'coffee', 
'cohort', 
'colder', 
'collar', 
'colony', 
'colors', 
'colour', 
'column', 
'combat', 
'comedy', 
'comics', 
'coming', 
'commit', 
'common', 
'comply', 
'convey', 
'cooked', 
'cooker', 
'cookie', 
'cooler', 
'copied', 
'copies', 
'copper', 
'corner', 
'cosmic', 
'costly', 
'cotton', 
'counts', 
'county', 
'couple', 
'coupon', 
'course', 
'courts', 
'cousin', 
'covers', 
'cracks', 
'crafts', 
'creams', 
'creamy', 
'create', 
'credit', 
'creepy', 
'crimes', 
'crisis', 
'critic', 
'crowds', 
'cruise', 
'crying', 
'cursor', 
'curved', 
'curves', 
'custom', 
'cutter', 
'cycles', 
'damage', 
'dancer', 
'danger', 
'danish', 
'darker', 
'dating', 
'deadly', 
'dealer', 
'deaths', 
'debate', 
'debris', 
'decade', 
'decent', 
'decide', 
'deemed', 
'deeper', 
'deeply', 
'defeat', 
'defect', 
'defend', 
'define', 
'degree', 
'delays', 
'delete', 
'demand', 
'demons', 
'denial', 
'denied', 
'dental', 
'depart', 
'depend', 
'deploy', 
'depths', 
'deputy', 
'desert', 
'design', 
'desire', 
'detail', 
'detect', 
'device', 
'devils', 
'dialog', 
'diesel', 
'differ', 
'digits', 
'dining', 
'dinner', 
'direct', 
'dishes', 
'divide', 
'divine', 
'diving', 
'doctor', 
'dollar', 
'domain', 
'donate', 
'donors', 
'dosage', 
'double', 
'doubts', 
'dozens', 
'dragon', 
'drawer', 
'dreams', 
'drills', 
'drinks', 
'driven', 
'driver', 
'drives', 
'drones', 
'drying', 
'dubbed', 
'dumped', 
'during', 
'duties', 
, 
'6 Letter Words ñ E', 
'eagles', 
'earned', 
'easier', 
'easily', 
'easter', 
'eating', 
'edible', 
'edited', 
'editor', 
'effect', 
'effort', 
'eighth', 
'either', 
'elders', 
'eleven', 
'emails', 
'emerge', 
'empire', 
'employ', 
'enable', 
'ending', 
'endure', 
'energy', 
'engage', 
'engine', 
'enjoys', 
'enough', 
'enroll', 
'ensure', 
'enters', 
'entire', 
'entity', 
'enzyme', 
'equals', 
'equity', 
'errors', 
'escape', 
'essays', 
'estate', 
'ethics', 
'ethnic', 
'evenly', 
'events', 
'evolve', 
'exceed', 
'except', 
'excess', 
'excuse', 
'exempt', 
'exists', 
'exotic', 
'expand', 
'expect', 
'expert', 
'expire', 
'export', 
'expose', 
'extend', 
'extent', 
'extras', 
'fabric', 
'facial', 
'facing', 
'factor', 
'failed', 
'fairly', 
'fallen', 
'family', 
'famous', 
'farmer', 
'faster', 
'father', 
'faults', 
'faulty', 
'favour', 
'feared', 
'fellow', 
'felony', 
'female', 
'fender', 
'fibers', 
'fields', 
'fierce', 
'fights', 
'figure', 
'filing', 
'filled', 
'filler', 
'filmed', 
'filter', 
'finale', 
'finals', 
'finely', 
'finest', 
'finger', 
'finish', 
'firing', 
'firmly', 
'fiscal', 
'fitted', 
'fixing', 
'flames', 
'flavor', 
'flawed', 
'flight', 
'floors', 
'floral', 
'flower', 
'fluffy', 
'fluids', 
'flyers', 
'flying', 
'folded', 
'folder', 
'follow', 
'forced', 
'forces', 
'forest', 
'forget', 
'forgot', 
'formal', 
'format', 
'formed', 
'former', 
'forums', 
'fossil', 
'foster', 
'fought', 
'fourth', 
'frames', 
'freely', 
'freeze', 
'french', 
'fridge', 
'friend', 
'fringe', 
'frozen', 
'fruits', 
'funded', 
'funnel', 
'fusion', 
'future', 
'gained', 
'galaxy', 
'gallon', 
'gamers', 
'gaming', 
'garage', 
'garden', 
'garlic', 
'gather', 
'geared', 
'gender', 
'genius', 
'genres', 
'gentle', 
'gently', 
'german', 
'ghosts', 
'giants', 
'gifted', 
'ginger', 
'giving', 
'glance', 
'glands', 
'global', 
'glossy', 
'gloves', 
'gluten', 
'golden', 
'google', 
'gospel', 
'gotten', 
'govern', 
'grades', 
'grains', 
'grants', 
'grapes', 
'graphs', 
'gravel', 
'graves', 
'grease', 
'greens', 
'groove', 
'ground', 
'groups', 
'growth', 
'guards', 
'guests', 
'guided', 
'guides', 
'guilty', 
'guitar', 
'habits', 
'hammer', 
'handed', 
'handle', 
'happen', 
'harbor', 
'harder', 
'hardly', 
'hassle', 
'hatred', 
'having', 
'hazard', 
'headed', 
'header', 
'healed', 
'health', 
'hearts', 
'heated', 
'heater', 
'heaven', 
'height', 
'helmet', 
'helped', 
'herbal', 
'hereby', 
'herein', 
'heroes', 
'heroic', 
'heroin', 
'hidden', 
'hiding', 
'higher', 
'highly', 
'hiking', 
'hiring', 
'hockey', 
'holder', 
'hollow', 
'honest', 
'honors', 
'honour', 
'hooked', 
'hoping', 
'horror', 
'horses', 
'hosted', 
'hotels', 
'hourly', 
'housed', 
'houses', 
'hugely', 
'humane', 
'humans', 
'humble', 
'humour', 
'hunger', 
'hungry', 
'hunter', 
'hybrid', 
'iconic', 
'ideals', 
'ignore', 
'images', 
'immune', 
'impact', 
'import', 
'impose', 
'inches', 
'income', 
'indeed', 
'indoor', 
'induce', 
'infant', 
'inform', 
'injury', 
'inning', 
'inputs', 
'insane', 
'insect', 
'insert', 
'inside', 
'insist', 
'insure', 
'intact', 
'intake', 
'intend', 
'intent', 
'invest', 
'invite', 
'island', 
'issued', 
'issues', 
'itself', 
'jacket', 
'jersey', 
'joined', 
'joints', 
'judged', 
'judges', 
'juices', 
'jumped', 
'jungle', 
'junior', 
'keeper', 
'kernel', 
'kicked', 
'kidney', 
'killed', 
'killer', 
'kindle', 
'kindly', 
'knight', 
'knives', 
'labels', 
'labour', 
'lacked', 
'ladder', 
'ladies', 
'landed', 
'laptop', 
'larger', 
'lasted', 
'lastly', 
'lately', 
'latest', 
'latter', 
'laughs', 
'launch', 
'lawful', 
'lawyer', 
'layers', 
'laying', 
'layout', 
'leader', 
'league', 
'learns', 
'learnt', 
'leaves', 
'legacy', 
'legend', 
'legion', 
'lender', 
'length', 
'lenses', 
'lesser', 
'lesson', 
'lethal', 
'letter', 
'levels', 
'liable', 
'lifted', 
'lights', 
'likely', 
'limits', 
'linear', 
'lineup', 
'lining', 
'linked', 
'liquid', 
'liquor', 
'listed', 
'listen', 
'litter', 
'little', 
'lively', 
'living', 
'loaded', 
'locals', 
'locate', 
'locked', 
'locker', 
'logged', 
'lonely', 
'longer', 
'looked', 
'loosen', 
'losing', 
'losses', 
'lounge', 
'lovely', 
'lovers', 
'loving', 
'lowest', 
'lumber', 
'luxury', 
'lyrics', 
'magnet', 
'mailed', 
'mainly', 
'majors', 
'makers', 
'makeup', 
'making', 
'manage', 
'manner', 
'manual', 
'marble', 
'margin', 
'marine', 
'marked', 
'marker', 
'market', 
'marvel', 
'masses', 
'master', 
'matrix', 
'matter', 
'mature', 
'medals', 
'median', 
'medium', 
'melody', 
'melted', 
'member', 
'memory', 
'mental', 
'mentor', 
'merely', 
'merger', 
'merits', 
'metals', 
'meters', 
'method', 
'metres', 
'metric', 
'middle', 
'mighty', 
'miners', 
'mining', 
'minors', 
'minute', 
'mirror', 
'misery', 
'missed', 
'mixing', 
'mobile', 
'models', 
'modern', 
'modest', 
'modify', 
'module', 
'moment', 
'monkey', 
'months', 
'mostly', 
'mother', 
'motion', 
'motors', 
'mounts', 
'movies', 
'moving', 
'murder', 
'muscle', 
'museum', 
'mutual', 
'myriad', 
'myself', 
'namely', 
'narrow', 
'nation', 
'native', 
'nature', 
'nausea', 
'nearby', 
'nearly', 
'neatly', 
'needed', 
'needle', 
'nerves', 
'newest', 
'nicely', 
'nickel', 
'nights', 
'nobody', 
'noises', 
'normal', 
'notice', 
'notify', 
'noting', 
'notion', 
'novels', 
'novice', 
'number', 
'nurses', 
'object', 
'obtain', 
'occupy', 
'occurs', 
'oceans', 
'offers', 
'office', 
'offset', 
'oldest', 
'onions', 
'online', 
'opened', 
'opener', 
'openly', 
'oppose', 
'optics', 
'option', 
'oracle', 
'orange', 
'orders', 
'organs', 
'origin', 
'ounces', 
'outfit', 
'outlet', 
'output', 
'overly', 
'owners', 
'owning', 
'oxygen', 
'packed', 
'packet', 
'paired', 
'palace', 
'panels', 
'pantry', 
'papers', 
'parade', 
'parcel', 
'parent', 
'parish', 
'parked', 
'parole', 
'partly', 
'passed', 
'passes', 
'pastor', 
'pastry', 
'patent', 
'patrol', 
'patron', 
'paying', 
'peanut', 
'pedals', 
'pencil', 
'people', 
'pepper', 
'period', 
'permit', 
'person', 
'petrol', 
'phases', 
'phones', 
'photos', 
'phrase', 
'picked', 
'pickup', 
'picnic', 
'pieces', 
'pillar', 
'pillow', 
'pilots', 
'pirate', 
'pistol', 
'piston', 
'pixels', 
'placed', 
'places', 
'plains', 
'planes', 
'planet', 
'plants', 
'plaque', 
'plasma', 
'plates', 
'played', 
'player', 
'please', 
'pledge', 
'plenty', 
'pocket', 
'podium', 
'poetry', 
'points', 
'poison', 
'police', 
'policy', 
'polish', 
'polite', 
'poorly', 
'popped', 
'portal', 
'postal', 
'posted', 
'poster', 
'potato', 
'potent', 
'pounds', 
'poured', 
'powder', 
'powers', 
'praise', 
'prayer', 
'prefer', 
'pretty', 
'priced', 
'prices', 
'pricey', 
'priest', 
'primer', 
'prince', 
'prints', 
'prison', 
'prizes', 
'profit', 
'prompt', 
'proper', 
'proved', 
'proven', 
'proves', 
'public', 
'pulled', 
'punish', 
'pupils', 
'purely', 
'purity', 
'purple', 
'pursue', 
'pushed', 
'pushes', 
'puzzle', 
'python', 
'quartz', 
'quests', 
'quirky', 
'quoted', 
'quotes', 
'rabbit', 
'racial', 
'racing', 
'racism', 
'racist', 
'radius', 
'raised', 
'raises', 
'random', 
'ranged', 
'ranger', 
'ranges', 
'ranked', 
'rarely', 
'rather', 
'rating', 
'ratios', 
'reader', 
'really', 
'reason', 
'rebels', 
'recall', 
'recent', 
'recipe', 
'record', 
'redeem', 
'reduce', 
'refers', 
'refine', 
'reform', 
'refuge', 
'refund', 
'refuse', 
'regain', 
'regard', 
'regime', 
'region', 
'regret', 
'reject', 
'relate', 
'relied', 
'relief', 
'relies', 
'remain', 
'remedy', 
'remind', 
'remote', 
'remove', 
'render', 
'rental', 
'rented', 
'repair', 
'repeat', 
'report', 
'rescue', 
'reside', 
'resist', 
'resort', 
'result', 
'resume', 
'retail', 
'retain', 
'retire', 
'return', 
'reveal', 
'review', 
'reward', 
'rhythm', 
'ribbon', 
'richer', 
'riders', 
'riding', 
'rifles', 
'rights', 
'ripped', 
'rising', 
'ritual', 
'rivals', 
'rivers', 
'robots', 
'robust', 
'rocket', 
'rolled', 
'roller', 
'romans', 
'rookie', 
'rooted', 
'roster', 
'rotary', 
'rotate', 
'rounds', 
'router', 
'routes', 
'rubber', 
'rugged', 
'ruined', 
'ruling', 
'rumors', 
'runner', 
'runway', 
'rushed', 
'rustic', 
'sacred', 
'saddle', 
'safari', 
'safely', 
'safest', 
'safety', 
'saints', 
'salads', 
'salary', 
'salmon', 
'sample', 
'saving', 
'saying', 
'scales', 
'scared', 
'scenes', 
'scenic', 
'scheme', 
'school', 
'scored', 
'scores', 
'scouts', 
'screen', 
'screws', 
'script', 
'scroll', 
'sealed', 
'search', 
'season', 
'seated', 
'second', 
'secret', 
'sector', 
'secure', 
'seeing', 
'seemed', 
'seized', 
'seldom', 
'select', 
'seller', 
'senate', 
'sender', 
'senior', 
'senses', 
'sensor', 
'sequel', 
'serial', 
'series', 
'served', 
'server', 
'serves', 
'settle', 
'severe', 
'sewing', 
'sexual', 
'shades', 
'shadow', 
'shaped', 
'shapes', 
'shared', 
'shares', 
'sharks', 
'sheets', 
'shells', 
'shield', 
'shifts', 
'shines', 
'shirts', 
'shoots', 
'shores', 
'shorts', 
'should', 
'showed', 
'shower', 
'shrimp', 
'shrink', 
'sights', 
'signal', 
'signed', 
'silent', 
'silver', 
'simmer', 
'simple', 
'simply', 
'singer', 
'single', 
'sister', 
'sketch', 
'skiing', 
'skills', 
'skinny', 
'slaves', 
'sleeve', 
'slices', 
'slider', 
'slides', 
'slight', 
'slopes', 
'slowed', 
'slower', 
'slowly', 
'smells', 
'smiled', 
'smooth', 
'snacks', 
'snakes', 
'soccer', 
'social', 
'socket', 
'sodium', 
'softer', 
'solely', 
'solved', 
'sooner', 
'sorted', 
'sought', 
'sounds', 
'source', 
'soviet', 
'spaces', 
'speaks', 
'speech', 
'speeds', 
'spells', 
'spends', 
'sphere', 
'spices', 
'spider', 
'spikes', 
'spinal', 
'spirit', 
'splash', 
'spoken', 
'sponge', 
'sports', 
'spouse', 
'spread', 
'spring', 
'sprint', 
'square', 
'squash', 
'stable', 
'stacks', 
'stages', 
'stains', 
'stairs', 
'stakes', 
'stamps', 
'stance', 
'stands', 
'staple', 
'starts', 
'stated', 
'states', 
'static', 
'statue', 
'status', 
'stayed', 
'steady', 
'stereo', 
'sticks', 
'sticky', 
'stitch', 
'stocks', 
'stolen', 
'stones', 
'stored', 
'stores', 
'storms', 
'strain', 
'straps', 
'streak', 
'stream', 
'street', 
'stress', 
'strict', 
'strike', 
'string', 
'strips', 
'strive', 
'stroke', 
'strong', 
'struck', 
'studio', 
'stupid', 
'sturdy', 
'styles', 
'submit', 
'subtle', 
'subway', 
'sucked', 
'sudden', 
'suffer', 
'sugars', 
'suited', 
'suites', 
'summer', 
'summit', 
'summon', 
'sunset', 
'superb', 
'supply', 
'surely', 
'survey', 
'switch', 
'swords', 
'symbol', 
'syntax', 
'system', 
'tables', 
'tablet', 
'tackle', 
'tactic', 
'tagged', 
'taking', 
'talent', 
'talked', 
'taller', 
'target', 
'tasted', 
'tastes', 
'tattoo', 
'taught', 
'teamed', 
'temple', 
'tenant', 
'tended', 
'tender', 
'tennis', 
'tenure', 
'terror', 
'tested', 
'thanks', 
'theirs', 
'themes', 
'theory', 
'thesis', 
'thighs', 
'things', 
'thinks', 
'thirty', 
'though', 
'thread', 
'threat', 
'thrill', 
'thrive', 
'throat', 
'throne', 
'thrown', 
'throws', 
'ticket', 
'tigers', 
'timber', 
'timely', 
'timing', 
'tissue', 
'titled', 
'titles', 
'toilet', 
'tokens', 
'tomato', 
'tongue', 
'tonnes', 
'topics', 
'topped', 
'torque', 
'tossed', 
'toward', 
'towels', 
'towers', 
'toxins', 
'traced', 
'tracks', 
'traded', 
'trader', 
'trades', 
'tragic', 
'trails', 
'trains', 
'traits', 
'trauma', 
'travel', 
'treats', 
'treaty', 
'trends', 
'trendy', 
'trials', 
'tribal', 
'tribes', 
'tricks', 
'tricky', 
'triple', 
'troops', 
'trophy', 
'trucks', 
'trusts', 
'truths', 
'trying', 
'tubing', 
'tucked', 
'tumors', 
'tuning', 
'tunnel', 
'turkey', 
'turned', 
'turtle', 
'tweets', 
'twelve', 
'twenty', 
'typing', 
'unable', 
'uneven', 
'unfair', 
'unions', 
'unique', 
'united', 
'unless', 
'unlike', 
'unlock', 
'unpaid', 
'unsafe', 
'unsure', 
'unused', 
'update', 
'upload', 
'upside', 
'upward', 
'urgent', 
'usable', 
'useful', 
'utmost', 
'vacant', 
'vacuum', 
'valley', 
'valued', 
'values', 
'valves', 
'vanity', 
'varied', 
'varies', 
'vastly', 
'vector', 
'velvet', 
'vendor', 
'venues', 
'verbal', 
'verify', 
'verses', 
'versus', 
'vessel', 
'viable', 
'victim', 
'videos', 
'viewed', 
'viewer', 
'violin', 
'virgin', 
'virtue', 
'vision', 
'visits', 
'visual', 
'voices', 
'volume', 
'voters', 
'voting', 
'voyage', 
'waited', 
'waiver', 
'waking', 
'walked', 
'wallet', 
'walnut', 
'wander', 
'wanted', 
'warmer', 
'warmth', 
'warned', 
'washed', 
'washer', 
'wasted', 
'waters', 
'weaker', 
'wealth', 
'weapon', 
'weekly', 
'weighs', 
'weight', 
'whales', 
'wheels', 
'whilst', 
'whites', 
'wholly', 
'wicked', 
'widely', 
'widget', 
'wildly', 
'window', 
'winner', 
'winter', 
'wiring', 
'wisdom', 
'wisely', 
'wished', 
'wishes', 
'within', 
'wizard', 
'wolves', 
'wonder', 
'wooden', 
'worked', 
'worker', 
'worlds', 
'worthy', 
'wounds', 
'writer', 
'writes', 
'yearly', 
'yellow', 
'yields', 
'yogurt', 
'zipper', 
'zombie', 
'zoning'
]

// CONSTANTS
const WORD_LENGTH = 6;
const FLIP_ANIMATION_DURATION = 750
const DANCE_ANIMATION_DURATION = 500

const keyboard = document.querySelector("[data-keyboard]") // get the keyboard
const alertContainer = document.querySelector("[data-alert-container]") // get the empty div container for alerts
const guessGrid = document.querySelector("[data-guess-grid]") // get the grid of tiles
const offsetFromDate = new Date(2022, 4, 28); // starting date
const msOffset = Date.now() - offsetFromDate // get difference in milliseconds
const dayOffset = msOffset / 1000 / 60 / 60 / 24 // convert to days
const targetWord = targetWords[Math.floor(dayOffset)] // get the word in the array at that index, and every day, a new index
console.log(dayOffset)
startInteraction()

function startInteraction() { // start listening for clicks and keypresses
  document.addEventListener("click", handleMouseClick) 
  document.addEventListener("keydown", handleKeyPress)
}

function stopInteraction() { // remove the event listeners for clicks and keypresses, effectively making the user unable to interact or type anything
  document.removeEventListener("click", handleMouseClick)
  document.removeEventListener("keydown", handleKeyPress)
}

function handleMouseClick(e) {
  if (e.target.matches("[data-key]")) { // if event target is a key, press that key
    pressKey(e.target.dataset.key)
    return
  }

  if (e.target.matches("[data-enter]")) { // if user clicks enter, submit the guess
    submitGuess()
    return
  }

  if (e.target.matches("[data-delete]")) { // if user clicks delete, remove that key
    deleteKey()
    return
  }
}

function handleKeyPress(e) {
  if (e.key === "Enter") { // if the key is enter, submit guess
    submitGuess()
    return
  }
  
  if (e.key === "Backspace" || e.key === "Delete") { // if user presses backspace or delete, delete key
    deleteKey()
    return
  }

  if (e.key.match(/^[a-z]$/)) { // regex for one single letter between a and z
    pressKey(e.key)
    return
  }
}

function pressKey(key) { // add key to first tile in grid
  const activeTiles = getActiveTiles() // get array of active tiles
  if (activeTiles.length >= WORD_LENGTH) return // make sure that user cannot keep typing after 6 letters
  const nextTile = guessGrid.querySelector(":not([data-letter])") // returns the first tile that doesn't have a value
  nextTile.dataset.letter = key.toLowerCase() // add the letter to the tile's dataset
  nextTile.textContent = key // make the html the key
  nextTile.dataset.state = "active" // set it to active
}

function deleteKey() {
  const activeTiles = getActiveTiles() // get array of active tiles
  const lastTile = activeTiles[activeTiles.length - 1] // get the last active tile
  if (lastTile === null) return // if that tile doesn't have any content, return
  lastTile.textContent = "" // set the text content to an empty string
  delete lastTile.dataset.state // delete active state
  delete lastTile.dataset.letter // delete letter dataset
}

function getActiveTiles() {
  return guessGrid.querySelectorAll('[data-state="active"]')
    // return all the tiles that have the state of active
}

function submitGuess() {
  const activeTiles = [...getActiveTiles()] // get the array of active tiles
  if (activeTiles.length !== WORD_LENGTH) { // if the guess isn't long enough, can't submit it!
    showAlert("The word needs to be 6 letters long")
    shakeTiles(activeTiles)
    return
  }

  const guess = activeTiles.reduce((word, tile) => { // sum the array of individual letters into a string
    return word + tile.dataset.letter
  }, "") // returns a string
  
  if (!dictionary.includes(guess)) { // when the guess isn't a real word
    showAlert("That isn't a word I recognize.")
    shakeTiles(activeTiles)
    return
  }

  stopInteraction()
  activeTiles.forEach((...params) => flipTile(...params, guess)) // flip tile animation
}

function flipTile(tile, index, array, guess) {
  const letter = tile.dataset.letter
  const key = keyboard.querySelector(`[data-key="${letter}"i]`) // get each key - the i makes it case insensitive
  setTimeout(() => {
    tile.classList.add("flip")
  }, index * FLIP_ANIMATION_DURATION / 2)

  tile.addEventListener("transitionend", () => {
    tile.classList.remove("flip") // remvoe flip class for animation
    if (targetWord[index] === letter) {
      tile.dataset.state = "correct"
      key.classList.add("correct") // while flipping, if it's the right location and right letter, add correct class
    } else if (targetWord.includes(letter)) { // otherwise if word includes letter, add wrong location class
      tile.dataset.state = "wrong-location"
      key.classList.add("wrong-location")
    } else { // else add wrong class
      tile.dataset.state = "wrong" 
      key.classList.add("wrong")
    }

    if (index === array.length - 1) { // if last tile, user can start interacting again
      tile.addEventListener("transitionend", () => {
        startInteraction()
        checkWinLose(guess, array)
      }, { once: true})
    }
  }, { once: true })
}

function showAlert(message, duration = 5000) {
  const alert = document.createElement("div") // get the empty alert div
  alert.textContent = message // add message
  alert.classList.add("alert") // add alert class
  alertContainer.prepend(alert) 
  if (duration == null) return
  setTimeout(() => {
    alert.classList.add("hide")
    alert.addEventListener("transitionend", () => {
      alert.remove()
    })
  }, duration)
}

function shakeTiles(tiles) {
  tiles.forEach(tile => {
    tile.classList.add("shake")
    tile.addEventListener("animationend", () => {
      tile.classList.remove("shake")
    }, { once: true })
  })
}

function checkWinLose(guess, tiles) {
  if (guess === targetWord) {
    showAlert("Niely done. Have you consider a career in insurance?", 5000)
    danceTiles(tiles)
    
    stopInteraction()
    return
  }

  const remainingTiles = guessGrid.querySelectorAll(":not([data-letter])") // get all empty tiles

  if (remainingTiles.length === 0) { // if no more remaining tiles
    showAlert("🚨INSURANCE FRAUD DETECTED!🚨")
    showAlert(`You can always try again, unlike the real Wordle!`, null)
    stopInteraction
  }
}

function danceTiles(tiles) {
  tiles.forEach((tile, index) => {
    setTimeout(() => {
      tile.classList.add("dance")
      tile.addEventListener(
        "animationend",
        () => {
          tile.classList.remove("dance")
        },
        { once: true }
      )
    }, (index * DANCE_ANIMATION_DURATION) / 6)
  })
}


