(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[6529],{4741:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var n=i(2122),a=i(9756),r=(i(7294),i(3905)),o={id:"liquidity-mining-overview",title:"Overview",sidebar_position:1},l=void 0,s={unversionedId:"guides/liquidity-mining/liquidity-mining-overview",id:"version-V3/guides/liquidity-mining/liquidity-mining-overview",isDocsHomePage:!1,title:"Overview",description:"Introduction",source:"@site/versioned_docs/version-V3/guides/liquidity-mining/overview.md",sourceDirName:"guides/liquidity-mining",slug:"/guides/liquidity-mining/liquidity-mining-overview",permalink:"/protocol/guides/liquidity-mining/liquidity-mining-overview",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/versioned_docs/version-V3/guides/liquidity-mining/overview.md",version:"V3",sidebarPosition:1,frontMatter:{id:"liquidity-mining-overview",title:"Overview",sidebar_position:1},sidebar:"version-V3/mySidebar",previous:{title:"Set Up Your Local Environment",permalink:"/protocol/guides/local-environment"},next:{title:"Single Swaps",permalink:"/protocol/guides/swaps/single-swaps"}},d=[{value:"Introduction",id:"introduction",children:[]},{value:"The Setting",id:"the-setting",children:[]},{value:"Reward Math",id:"reward-math",children:[]},{value:"Staking",id:"staking",children:[]},{value:"Program Conclusion",id:"program-conclusion",children:[]}],p={toc:d};function c(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"As a DeFi project, token creator, or other interested party, you may want to ",(0,r.kt)("em",{parentName:"p"},"incentivize in-range liquidity provision")," on a Uniswap V3 pool. This guide describes one particular incentivization scheme at a high level, as implemented in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v3-staker"},"uniswap-v3-staker"),"."),(0,r.kt)("h2",{id:"the-setting"},"The Setting"),(0,r.kt)("p",null,"Let's start by defining some terms. We refer to programs which incentivize liquidity as ",(0,r.kt)("inlineCode",{parentName:"p"},"Incentive"),"s; they're characterized by the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rewardToken"),": Perhaps the most important parameter, would-be incentivizers must pick the ERC20 token which they would like to distribute as a reward for providing liquidity."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pool"),": The address of the Uniswap V3 pool in which liquidity must be provided."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"startTime"),": The UNIX timestamp at which rewards start to be distributed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"endTime"),": The UNIX timestamp at which rewards start to decay."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"refundee"),": The address which has the right to reclaim any leftover rewards after the ",(0,r.kt)("inlineCode",{parentName:"li"},"Incentive")," has concluded.")),(0,r.kt)("p",null,"Finally, every ",(0,r.kt)("inlineCode",{parentName:"p"},"Incentive")," has an associated ",(0,r.kt)("inlineCode",{parentName:"p"},"reward"),", the total amount of ",(0,r.kt)("inlineCode",{parentName:"p"},"rewardToken"),"s that are allocated to be distributed over the lifecycle of the program."),(0,r.kt)("h2",{id:"reward-math"},"Reward Math"),(0,r.kt)("p",null,"Now that we have an idea of what an ",(0,r.kt)("inlineCode",{parentName:"p"},"Incentive")," looks like, let's explore how rewards are actually allocated to participants. The next section will touch on the participation mechanics, so for now let's abstract this away and just focus on the high-level design."),(0,r.kt)("p",null,"Recall that ",(0,r.kt)("inlineCode",{parentName:"p"},"Incentive")," creators pick a ",(0,r.kt)("inlineCode",{parentName:"p"},"reward")," amount and a program duration. This directly corresponds to picking ",(0,r.kt)("em",{parentName:"p"},"an amount of ",(0,r.kt)("inlineCode",{parentName:"em"},"rewardToken"),"s to distribute per second"),"; let's call this the reward rate. So, for every second between ",(0,r.kt)("inlineCode",{parentName:"p"},"startTime")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"endTime"),", a constant amount of tokens are distributed proportionally ",(0,r.kt)("em",{parentName:"p"},"among all in-range liquidity at that second"),". Crucially, this counts ",(0,r.kt)("em",{parentName:"p"},"all")," liquidity, not just liquidity that opts in to participating in the program. So, incentive creators should pick a reward rate that they deem worthwhile to distribute across (potentially) all in-range LPs for the duration of the program."),(0,r.kt)("h2",{id:"staking"},"Staking"),(0,r.kt)("p",null,"So, how do users participate in these programs? Note that this section requires a basic understanding of ",(0,r.kt)("a",{parentName:"p",href:"/protocol/reference/periphery/NonfungiblePositionManager"},"how Uniswap V3 position NFTs work"),"."),(0,r.kt)("p",null,"The first action a user must take in order to begin participating in an ",(0,r.kt)("inlineCode",{parentName:"p"},"Incentive")," is to ",(0,r.kt)("em",{parentName:"p"},"deposit")," their position NFT into the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v3-staker#deployments"},"canonical staking contract address"),", effectively temporarily giving custody over their NFT to this contract. This is necessary because, as we'll see later on, the staking contract needs to be able to guarantee that liquidity cannot be removed from NFTs participating in the program."),(0,r.kt)("p",null,"Once deposited, a user may then ",(0,r.kt)("em",{parentName:"p"},"stake")," their NFT into any number of active ",(0,r.kt)("inlineCode",{parentName:"p"},"Incentive"),"s for the Uniswap V3 pool their NFT is tied to (note that this can happen atomically with an initial ",(0,r.kt)("em",{parentName:"p"},"deposit"),"). Staked NFTs then immediately start to earn rewards, according to the algorithm outlined above. Users may periodically claim accrued ",(0,r.kt)("inlineCode",{parentName:"p"},"rewardToken"),"s while the program is ongoing, or wait to claim until the program has concluded to minimize overhead."),(0,r.kt)("h2",{id:"program-conclusion"},"Program Conclusion"),(0,r.kt)("p",null,"There are two conditions that must be met for a program to be considered concluded:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"block.timestamp >= endTime"),": In other words, the program's duration must have expired. However, this doesn't mark the official end of the program, as some users may still be participating right up unti this ",(0,r.kt)("inlineCode",{parentName:"li"},"endTime")," boundary and beyond, to maximize their rewards. This leads directly to the second condition."),(0,r.kt)("li",{parentName:"ol"},"All NFTs must be unstaked: A program can conclude only when every NFT which participated in it is unstaked. To ensure this is always possible, after the ",(0,r.kt)("inlineCode",{parentName:"li"},"endTime")," of a program ",(0,r.kt)("em",{parentName:"li"},"anyone")," may unstake ",(0,r.kt)("em",{parentName:"li"},"any")," NFT (though of course they may not claim outstanding ",(0,r.kt)("inlineCode",{parentName:"li"},"rewardToken"),"s due to the NFT owner). This ensures that even if all users do not unstake themselves, someone can unstake them manually so that the program can end.")),(0,r.kt)("p",null,"It's important that most or all programs fully conclude, primarily so that the ",(0,r.kt)("inlineCode",{parentName:"p"},"refundee")," can reclaim any unallocated rewards. What are the conditions under which unallocated rewards will remain? Well, recall that the reward rate is the same across ",(0,r.kt)("em",{parentName:"p"},"all")," in-range liquidity. However, only program participants may actually claim accrued tokens, so it's likely that all programs will end up with a balance of ",(0,r.kt)("inlineCode",{parentName:"p"},"rewardToken"),"s that cannot be claimed. So, ",(0,r.kt)("inlineCode",{parentName:"p"},"refundee"),"s will typically be incentivized to bring programs to an official conclusion. This slightly cumbersome design is a consequence of the difficulty of consistently allocating rewards proportional to Uniswap V3 liquidity."),(0,r.kt)("p",null,"A final note: stakers who remain in the program after ",(0,r.kt)("inlineCode",{parentName:"p"},"endTime")," may actually see their rewards marginally augmented or (more likely) gradually diluted. The magnitude of these changes depend on stakers' share of the total active liquidity, the time spend staked after ",(0,r.kt)("inlineCode",{parentName:"p"},"endTime"),", and the sequence of unstaking. In the worst case, rewards decay proportionally to the duration. For example, at 2x the duration, \xbd of rewards could remain, at 3x, \u2153 could remain, etc. While somewhat complex, this behavior can largely be ignored from a game-theoretic standpoint. Stakers should simply attempt to unstake and claim rewards as soon as possible after ",(0,r.kt)("inlineCode",{parentName:"p"},"endTime"),", an outcome that is likely in any case, as ",(0,r.kt)("inlineCode",{parentName:"p"},"refundee"),"s will be eager to reclaim leftover rewards, and mass unstake stragglers."))}c.isMDXComponent=!0},3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return p},kt:function(){return u}});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(i),u=a,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return i?n.createElement(h,o(o({ref:t},p),{},{components:i})):n.createElement(h,o({ref:t},p))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=i[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"}}]);