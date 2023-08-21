---
theme: default
layout: cover
background: https://images.unsplash.com/photo-1562575214-da9fcf59b907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80
css: unocss
---

# The Inernet

---
layout: center
---


# What is internet ?


---
layout: center
clicks: 7
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" w-128 relative>
  <defs>
  <rect id="rectangle" width="6" height="12"  />
  <g id="arrow" stroke-width="0.25" stroke-linecap="round" stroke="#999">
    <path d="M 0 0 L 30 0z" stroke-dasharray="1 2"  />
    <path d="M 4 -2.5 L 0 0 L 4 2.5" fill="none" />
  </g>
  </defs>

  <text v-click-hide x="50%" y="40" fill="#fff" font-size="12"  dominant-baseline="middle" text-anchor="middle">A Giant Cable</text>

  <text value="fff"/>
  <line
  origin-left
  v-if="$slidev.nav.currentPage === 3"
  v-motion
  :initial="{ scaleX: 0, scaleY: 1 }"
  :enter="{ scaleX: 1, scaleY: 1 ,
     transition: {
      duration: 300,
      type: 'keyframes',
      ease: 'easeIn',
    },
  }"
  x1="0" y1="50" x2="100" y2="50" stroke-width="1" stroke="white" line-cap="rounded"
  />

<v-click>
  <use href="#rectangle" x="5" y="32" fill="#9ED2BE" />
  <use href="#rectangle" x="15" y="55" fill="#9ED2BE" />
  <use href="#rectangle" x="30" y="32"
  :style="{fill: $slidev.nav.clicks >= 4 ? '#E64848' : '#9ED2BE'}"
  />
  <use href="#rectangle" x="45" y="55" fill="#9ED2BE" />
  <use href="#rectangle" x="60" y="32" fill="#9ED2BE" />
  <use href="#rectangle" x="75" y="55"
  :style="{fill: $slidev.nav.clicks >= 4 ? '#E64848' : '#9ED2BE'}"
  />
  <use href="#rectangle" x="90" y="32"
  :style="{fill: $slidev.nav.clicks >= 4 ? '#E64848' : '#9ED2BE'}"
  />
</v-click>

<g v-if="$slidev.nav.clicks == 3">
  <use href="#arrow" x="18" y="60" transform-origin="18 60" rotate-45/>
  <text x="30" y="85" fill="#fff" font-size="8"  dominant-baseline="middle">Nodes</text>
</g>

<g v-if="$slidev.nav.clicks ==5 || $slidev.nav.clicks == 6">
 <use v-click href="#arrow" x="32" y="35" transform-origin="32 35" rotate-315/>
  <text x="40" y="10" fill="#fff" font-size="8"  dominant-baseline="middle">Server</text>
</g>

<g v-if="$slidev.nav.clicks == 6">
  <use href="#arrow" x="18" y="60" transform-origin="18 60" rotate-45/>
  <text x="30" y="85" fill="#fff" font-size="8"  dominant-baseline="middle">Clients</text>
</g>

<g v-if="$slidev.nav.clicks >= 7">
  <use href="#arrow" x="60" y="50" transform-origin="60 50" rotate-90/>
  <text x="51" y="85" fill="#fff" font-size="8"  dominant-baseline="middle">OFC</text>
</g>


</svg>

<!--
1. servers
2. client
3. ISP
4. DNS: Domain Name System
5. https://www.nslookup.io/
-->


---
layout: section
---
# OFC

---
layout: two-cols
clicks: 4
---
::right::

<div h-full flex items-center>
<img v-if="$slidev.nav.clicks <= 2" src="https://images.unsplash.com/photo-1562575214-da9fcf59b907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80" />

<img v-if="$slidev.nav.clicks == 3" src="https://www.wirecable.in/wp-content/uploads/2021/01/Government-Approves-Submarine-Optical-Fibre-Cable-Worth-INR-1072-Crore-for-Lakshadweep-Kochi-Project.jpg" />

<img v-if="$slidev.nav.clicks == 4" src="https://i.imgur.com/m9mxQPQ.jpg" />
</div>

::default::

 # Optical Fiber Cable

<v-clicks>

 - Data transfered in Speed of lights
 - Continets are connected by this cable [Map](https://www.submarinecablemap.com)

</v-clicks>

---
layout: center
---

# End

<!--
1. https://www.submarinecablemap.com/
 -->

