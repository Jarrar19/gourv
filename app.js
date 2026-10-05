/**
 * JIT CAMPUS NAVIGATOR PRO — Master Application Controller
 * Spatial Graph Navigation, Interactive Architectural SVG Engines, Audio Synthesis & Walking Simulation
 */

// ============================================================================
// MASTER SPATIAL DATA STORE (Sourced directly from JIT_Campus_Map.docx)
// ============================================================================

const CAMPUS_DATA = {
  buildings: {
    main: {
      id: 'main',
      name: 'Main Academic Building',
      code: 'MB',
      floors: ['G', '1', '2', '3'],
      floorLabels: {
        'G': 'Ground Floor',
        '1': '1st Floor',
        '2': '2nd Floor',
        '3': '3rd Floor'
      }
    },
    second: {
      id: 'second',
      name: 'Second Academic Building',
      code: 'SB',
      floors: ['G', '1', '2'],
      floorLabels: {
        'G': 'Ground Floor',
        '1': '1st Floor',
        '2': '2nd Floor'
      }
    }
  },

  locations: [
    // --- Landmarks & Main Access ---
    {
      id: 'parking',
      code: 'PARK-01',
      name: 'Campus Parking Area',
      building: 'outdoor',
      floor: 'Outdoor',
      category: 'facility',
      icon: '🚗',
      desc: 'Central vehicle entry, parking bays, and primary navigational landmark for JIT College.',
      directions: 'Located at the primary campus entry gateway facing both academic buildings.',
      coords: { view: 'campus', x: 140, y: 480 }
    },
    {
      id: 'entrance_1',
      code: 'MB-ENT1',
      name: 'Main Building — Entrance 1',
      building: 'main',
      floor: 'G',
      category: 'facility',
      icon: '🚪',
      desc: 'Primary entrance providing direct access to Ground Floor lobby, Admissions, 1st Year Dept, and Central Staircase.',
      directions: 'From parking area, walk straight ahead and take a right turn towards Entrance 1.',
      coords: { view: 'main', floor: 'G', x: 250, y: 540 }
    },
    {
      id: 'entrance_2',
      code: 'MB-ENT2',
      name: 'Main Building — Entrance 2',
      building: 'main',
      floor: 'G',
      category: 'facility',
      icon: '🚪',
      desc: 'Secondary East wing entrance providing immediate access to HOD Cabin & Staff Room.',
      directions: 'From the parking area, walk straight forward directly to Entrance 2.',
      coords: { view: 'main', floor: 'G', x: 740, y: 540 }
    },

    // --- Main Building — Ground Floor ---
    {
      id: 'fy_dept',
      code: 'MB-G01',
      name: '1st Year Department (Applied Science & Humanities)',
      building: 'main',
      floor: 'G',
      category: 'academic',
      icon: '🔬',
      badge: 'Applied Sciences',
      desc: 'Academic headquarters for first-year engineering students covering Engineering Physics, Chemistry, Mathematics, and Professional Communication.',
      directions: 'To go to the main academic building, go straight from the parking area and take a right.',
      coords: { view: 'main', floor: 'G', x: 140, y: 240, w: 160, h: 140, class: 'room-core' }
    },
    {
      id: 'admin',
      code: 'MB-G02',
      name: 'Administrative Area (Admission Area)',
      building: 'main',
      floor: 'G',
      category: 'admin',
      icon: '🏢',
      badge: 'Admissions & Reception',
      desc: 'Central campus administrative headquarters, student admissions, enrollment verification desk, and official inquiries.',
      directions: 'From the parking area, go straight and turn right. Enter the building through Entrance 1; the Administrative Area is on the ground floor.',
      coords: { view: 'main', floor: 'G', x: 140, y: 410, w: 160, h: 120, class: 'room-admin' }
    },
    {
      id: 'scholarship',
      code: 'MB-G03',
      name: 'Scholarship Section',
      building: 'main',
      floor: 'G',
      category: 'admin',
      icon: '📜',
      badge: 'Financial Aid',
      desc: 'Government scholarship verification, freeship desks, social welfare grants, and state scholarship processing.',
      directions: 'Inside Entrance 1, go straight and take a left turn to find the Scholarship and Accounts section.',
      coords: { view: 'main', floor: 'G', x: 340, y: 410, w: 150, h: 120, class: 'room-admin' }
    },
    {
      id: 'accounts',
      code: 'MB-G04',
      name: 'Accounts Section & Student Section',
      building: 'main',
      floor: 'G',
      category: 'admin',
      icon: '💳',
      badge: 'Accounts & Students',
      desc: 'Student fee collection, bonafide certificates, examination hall tickets, transcripts, and official student paperwork.',
      directions: 'Go straight and turn left from the Scholarship Section.',
      coords: { view: 'main', floor: 'G', x: 530, y: 410, w: 160, h: 120, class: 'room-admin' }
    },
    {
      id: 'comp_lab_1',
      code: 'MB-G05',
      name: '1st Year Computer Lab',
      building: 'main',
      floor: 'G',
      category: 'academic',
      icon: '🖥️',
      badge: 'Computing Facility',
      desc: 'High-speed dedicated computing laboratory equipped with modern programming workstations for first-year engineering practicals.',
      directions: 'Located directly in front of the Accounts Section on the ground floor.',
      coords: { view: 'main', floor: 'G', x: 530, y: 240, w: 160, h: 140, class: 'room-tech' }
    },
    {
      id: 'principal',
      code: 'MB-G06',
      name: 'Principal’s Cabin',
      building: 'main',
      floor: 'G',
      category: 'admin',
      icon: '🏛️',
      badge: 'Executive Suite',
      desc: 'Executive chambers of the College Principal, meeting conference suite, and academic administration council.',
      directions: 'Located directly on the left side of the 1st Year Computer Lab.',
      coords: { view: 'main', floor: 'G', x: 340, y: 240, w: 150, h: 140, class: 'room-admin' }
    },
    {
      id: 'toilet_boys',
      code: 'MB-G07',
      name: "Boys' Restroom",
      building: 'main',
      floor: 'G',
      category: 'facility',
      icon: '🚻',
      badge: 'Ground Floor Facility',
      desc: 'Sanitation and hygiene facility for male students, faculty, and campus visitors.',
      directions: 'Go straight past the 1st Year Computer Lab to find the Boys\' Toilet.',
      coords: { view: 'main', floor: 'G', x: 530, y: 90, w: 160, h: 110, class: 'room-toilet' }
    },
    {
      id: 'management',
      code: 'MB-G08',
      name: 'Management Room',
      building: 'main',
      floor: 'G',
      category: 'admin',
      icon: '👔',
      badge: 'Board Room',
      desc: 'Governing board meeting room, trustee conference hall, and high-level institutional committee chamber.',
      directions: 'Go straight from the Accounts Section to find the Management Room.',
      coords: { view: 'main', floor: 'G', x: 730, y: 410, w: 140, h: 120, class: 'room-admin' }
    },
    {
      id: 'hod_staff',
      code: 'MB-G09',
      name: 'HOD Cabin & Staff Room',
      building: 'main',
      floor: 'G',
      category: 'academic',
      icon: '👥',
      badge: 'Faculty Lounge',
      desc: 'Department Head offices, academic mentoring desks, and faculty lounge for Applied Sciences & Humanities professors.',
      directions: 'From parking area, go straight to Entrance 2, then turn left. The HOD Cabin and Staff Room are located there.',
      coords: { view: 'main', floor: 'G', x: 730, y: 240, w: 140, h: 140, class: 'room-core' }
    },

    // --- Main Building — 1st Floor ---
    {
      id: 'cse',
      code: 'MB-101',
      name: 'Computer Science Department',
      building: 'main',
      floor: '1',
      category: 'academic',
      icon: '💻',
      badge: 'Level 1 • CSE Wing',
      desc: 'Comprehensive Computer Science & Engineering department wing featuring software development hubs, cloud computing labs, classrooms, and faculty offices.',
      directions: 'Take the stairs to the 1st floor to find the Computer Science Department.',
      coords: { view: 'main', floor: '1', x: 140, y: 200, w: 660, h: 320, class: 'room-tech' }
    },

    // --- Main Building — 2nd Floor ---
    {
      id: 'etc',
      code: 'MB-201',
      name: 'Electronics & Telecommunication Department',
      building: 'main',
      floor: '2',
      category: 'academic',
      icon: '📡',
      badge: 'Level 2 • ETC Wing',
      desc: 'Embedded systems, VLSI design, wireless signal processing laboratories, and communication engineering classrooms.',
      directions: 'Take the stairs to the 2nd floor; the Electronics & Telecommunication Department is located immediately on arrival.',
      coords: { view: 'main', floor: '2', x: 140, y: 200, w: 320, h: 320, class: 'room-tech' }
    },
    {
      id: 'mba',
      code: 'MB-202',
      name: 'MBA Department',
      building: 'main',
      floor: '2',
      category: 'academic',
      icon: '🎓',
      badge: 'Level 2 • MBA Wing',
      desc: 'Master of Business Administration department, executive seminar rooms, case study analysis theater, and management faculty suites.',
      directions: 'On the 2nd floor, take the stairs, walk straight forward for 10 meters, and take a right to reach the MBA Department.',
      coords: { view: 'main', floor: '2', x: 500, y: 200, w: 340, h: 320, class: 'room-mba' }
    },

    // --- Main Building — 3rd Floor ---
    {
      id: 'aiml',
      code: 'MB-301',
      name: 'AIML Department',
      building: 'main',
      floor: '3',
      category: 'academic',
      icon: '🤖',
      badge: 'Level 3 • AI Hub',
      desc: 'Artificial Intelligence & Machine Learning department wing equipped with GPU clusters, deep neural research facilities, and computer vision labs.',
      directions: 'Take the main staircase all the way to the 3rd floor to reach the AIML Department.',
      coords: { view: 'main', floor: '3', x: 140, y: 200, w: 660, h: 320, class: 'room-tech' }
    },

    // --- Second Academic Building — Ground Floor ---
    {
      id: 'sec_entrance',
      code: 'SB-ENT',
      name: 'Building 2 — Main Entrance',
      building: 'second',
      floor: 'G',
      category: 'facility',
      icon: '🚪',
      desc: 'Main foyer and reception entryway into the Second Academic Building.',
      directions: 'From parking area, follow the courtyard walkway towards the Second Academic Building on the right.',
      coords: { view: 'second', floor: 'G', x: 440, y: 530 }
    },
    {
      id: 'mech',
      code: 'SB-G01',
      name: 'Mechanical Department',
      building: 'second',
      floor: 'G',
      category: 'academic',
      icon: '⚙️',
      badge: 'Level G • Mech Wing',
      desc: 'Mechanical engineering workshops, thermodynamics laboratory, CAD/CAM computational design suite, and machine dynamics testing floor.',
      directions: 'Located on the Ground Floor of the Second Academic Building (left wing).',
      coords: { view: 'second', floor: 'G', x: 140, y: 230, w: 290, h: 270, class: 'room-core' }
    },
    {
      id: 'elec',
      code: 'SB-G02',
      name: 'Electrical Department',
      building: 'second',
      floor: 'G',
      category: 'academic',
      icon: '⚡',
      badge: 'Level G • Electrical Wing',
      desc: 'High voltage engineering laboratory, electrical machines testing bay, renewable microgrid simulation center, and circuits lab.',
      directions: 'Located on the Ground Floor of the Second Academic Building (right wing).',
      coords: { view: 'second', floor: 'G', x: 480, y: 230, w: 290, h: 270, class: 'room-core' }
    },

    // --- Second Academic Building — 1st Floor ---
    {
      id: 'library',
      code: 'SB-101',
      name: 'Central Library',
      building: 'second',
      floor: '1',
      category: 'facility',
      icon: '📚',
      badge: 'Level 1 • Knowledge Hub',
      desc: 'Central Library featuring extensive reference archives, silent study reading halls, print stacks, and digital IEEE journal terminals.',
      directions: 'Take the stairs to the 1st floor of the Second Academic Building; located on the left wing.',
      coords: { view: 'second', floor: '1', x: 140, y: 200, w: 310, h: 310, class: 'room-amenity' }
    },
    {
      id: 'auditorium',
      code: 'SB-102',
      name: 'Auditorium',
      building: 'second',
      floor: '1',
      category: 'facility',
      icon: '🎭',
      badge: 'Level 1 • Event Hall',
      desc: '500+ seat grand auditorium with state-of-the-art acoustic treatment, stage projection systems, and seminar facilities.',
      directions: 'Take the stairs to the 1st floor of the Second Academic Building; located on the right wing adjacent to the Central Library.',
      coords: { view: 'second', floor: '1', x: 470, y: 200, w: 310, h: 310, class: 'room-amenity' }
    },

    // --- Second Academic Building — 2nd Floor ---
    {
      id: 'aids',
      code: 'SB-201',
      name: 'CSE (AI & DS) Department',
      building: 'second',
      floor: '2',
      category: 'academic',
      icon: '🧠',
      badge: 'Level 2 • AI & DS (Full Floor)',
      desc: 'Entire floor dedicated to Computer Science & Engineering with specialization in Artificial Intelligence and Data Science, high-performance GPU clusters, big data analytics labs, and faculty suites.',
      directions: 'Take the stairs to the 2nd floor of the Second Academic Building; the entire level is dedicated to the CSE (AI & DS) Department.',
      coords: { view: 'second', floor: '2', x: 140, y: 200, w: 640, h: 320, class: 'room-tech' }
    }
  ]
};

// Map lookup
const locationMap = new Map();
CAMPUS_DATA.locations.forEach(loc => locationMap.set(loc.id, loc));

// ============================================================================
// WEB AUDIO SYNTHESIZER (Native Browser Sound FX Engine)
// ============================================================================

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  playClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(750, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (e) {}
  }

  playRouteFound() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      // Tone 1
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.frequency.setValueAtTime(523.25, now); // C5
      gain1.gain.setValueAtTime(0.08, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc1.connect(gain1);
      gain1.connect(this.ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.15);

      // Tone 2
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.frequency.setValueAtTime(659.25, now + 0.09); // E5
      gain2.gain.setValueAtTime(0.1, now + 0.09);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
      osc2.connect(gain2);
      gain2.connect(this.ctx.destination);
      osc2.start(now + 0.09);
      osc2.stop(now + 0.28);
    } catch (e) {}
  }
}

const sfx = new SoundEngine();

// ============================================================================
// APP STATE
// ============================================================================

const state = {
  currentView: 'main',     // 'campus' | 'main' | 'second'
  currentFloor: 'G',       // 'G' | '1' | '2' | '3'
  selectedLocation: null,
  activeRoute: null,
  startLocationId: 'parking',
  destLocationId: 'mba',
  voiceEnabled: true,
  sfxEnabled: true,
  theme: 'light',
  zoomLevel: 1.0,
  panX: 0,
  panY: 0,
  isPanning: false,
  panStartX: 0,
  panStartY: 0,
  isSimulating: false,
  simAnimationId: null
};

// ============================================================================
// ROUTING ALGORITHM & INSTRUCTION SYNTHESIS
// ============================================================================

function calculateRoute(startId, destId) {
  const start = locationMap.get(startId);
  const dest = locationMap.get(destId);

  if (!start || !dest) return null;
  if (startId === destId) {
    return {
      start,
      dest,
      distance: '0 m',
      time: 'Instant',
      steps: [{ num: 1, instruction: `You are already at ${dest.name}.`, detail: 'No walking required.' }]
    };
  }

  const steps = [];
  let stepNum = 1;

  if (start.id === 'parking') {
    if (dest.building === 'main') {
      if (dest.id === 'hod_staff') {
        steps.push({
          num: stepNum++,
          instruction: 'From the parking area, walk straight ahead towards Entrance 2.',
          detail: 'Entrance 2 is located on the East wing of the Main Academic Building.'
        });
        steps.push({
          num: stepNum++,
          instruction: 'Enter through Entrance 2 and immediately turn left.',
          detail: 'Arrive at the HOD Cabin & Staff Room.'
        });
      } else {
        steps.push({
          num: stepNum++,
          instruction: 'From the parking area, go straight and take a right turn towards Entrance 1.',
          detail: 'Entrance 1 gives access to the Main Academic Building lobby.'
        });
        steps.push({
          num: stepNum++,
          instruction: 'Step inside through Entrance 1 into the Ground Floor lobby.',
          detail: 'Administrative and admission counters will be in view.'
        });

        if (dest.floor === 'G') {
          if (dest.id === 'admin') {
            steps.push({
              num: stepNum++,
              instruction: 'The Administrative Area (Admission Area) is right here on the ground floor.',
              detail: 'Admissions & general reception desk is ready to assist you.'
            });
          } else if (dest.id === 'fy_dept') {
            steps.push({
              num: stepNum++,
              instruction: 'Walk straight past the lobby; the 1st Year Department (Applied Science & Humanities) is directly ahead.',
              detail: 'First-year classrooms and faculty zone.'
            });
          } else if (dest.id === 'scholarship') {
            steps.push({
              num: stepNum++,
              instruction: 'Walk straight from the entrance and take a left turn.',
              detail: 'You will see the Scholarship Section desk.'
            });
          } else if (dest.id === 'accounts') {
            steps.push({
              num: stepNum++,
              instruction: 'Walk straight, turn left to Scholarship Section, and continue left to Accounts.',
              detail: 'Arrive at Accounts Section & Student Section.'
            });
          } else if (dest.id === 'comp_lab_1') {
            steps.push({
              num: stepNum++,
              instruction: 'Walk past Scholarship & Accounts; look directly in front of the Accounts Section.',
              detail: 'Arrive at 1st Year Computer Lab (Ground Floor).'
            });
          } else if (dest.id === 'principal') {
            steps.push({
              num: stepNum++,
              instruction: 'Head towards the 1st Year Computer Lab.',
              detail: 'Notice the executive entrance on the left side of the lab.'
            });
            steps.push({
              num: stepNum++,
              instruction: 'Turn left beside the Computer Lab to enter the Principal’s Cabin.',
              detail: 'Principal’s office and conference suite.'
            });
          } else if (dest.id === 'toilet_boys') {
            steps.push({
              num: stepNum++,
              instruction: 'Walk straight past the 1st Year Computer Lab.',
              detail: 'The corridor leads straight to the Boys\' Toilet.'
            });
          } else if (dest.id === 'management') {
            steps.push({
              num: stepNum++,
              instruction: 'From the Accounts Section, proceed straight ahead along the executive corridor.',
              detail: 'Arrive at the Management Room.'
            });
          }
        } else {
          // Upper floors
          steps.push({
            num: stepNum++,
            instruction: 'Walk to the Main Central Staircase located past the ground floor corridor.',
            detail: 'Stairwell connects Ground Floor to 1st, 2nd, and 3rd floors.'
          });

          if (dest.floor === '1') {
            steps.push({
              num: stepNum++,
              instruction: 'Take the stairs up to the 1st Floor.',
              detail: 'Exit onto the 1st floor landing.'
            });
            steps.push({
              num: stepNum++,
              instruction: 'Arrive at the Computer Science Department.',
              detail: 'Explore CSE labs, faculty suites, and student project halls.'
            });
          } else if (dest.floor === '2') {
            steps.push({
              num: stepNum++,
              instruction: 'Take the stairs up to the 2nd Floor.',
              detail: 'Exit onto the 2nd floor academic corridor.'
            });
            if (dest.id === 'etc') {
              steps.push({
                num: stepNum++,
                instruction: 'Arrive at the Electronics & Telecommunication Department.',
                detail: 'Located immediately upon entering the 2nd floor wing.'
              });
            } else if (dest.id === 'mba') {
              steps.push({
                num: stepNum++,
                instruction: 'On the 2nd floor, walk straight forward along the hallway for 10 meters.',
                detail: 'Pass the initial lecture hall entrance.'
              });
              steps.push({
                num: stepNum++,
                instruction: 'Take a right turn to reach the MBA Department.',
                detail: 'Arrived at MBA Department offices and seminar rooms.'
              });
            }
          } else if (dest.floor === '3') {
            steps.push({
              num: stepNum++,
              instruction: 'Take the stairs all the way up to the 3rd Floor.',
              detail: 'Top floor of the Main Academic Building.'
            });
            steps.push({
              num: stepNum++,
              instruction: 'Arrive at the AIML Department (Artificial Intelligence & Machine Learning).',
              detail: 'Cutting-edge AI research labs and GPU innovation center.'
            });
          }
        }
      }
    } else if (dest.building === 'second') {
      steps.push({
        num: stepNum++,
        instruction: 'From the parking area, walk along the paved walkway towards the Second Academic Building.',
        detail: 'Follow the campus connecting path.'
      });
      steps.push({
        num: stepNum++,
        instruction: 'Enter through the Ground Floor Entrance of the Second Academic Building.',
        detail: 'Main foyer of Building 2.'
      });

      if (dest.floor === 'G') {
        if (dest.id === 'mech') {
          steps.push({
            num: stepNum++,
            instruction: 'Turn into the Ground Floor left wing for the Mechanical Department.',
            detail: 'Machine dynamics, CAD/CAM, and mechanical labs.'
          });
        } else if (dest.id === 'elec') {
          steps.push({
            num: stepNum++,
            instruction: 'Turn into the Ground Floor right wing for the Electrical Department.',
            detail: 'Circuits, energy labs, and electrical machines.'
          });
        }
      } else if (dest.floor === '1') {
        steps.push({
          num: stepNum++,
          instruction: 'Take the staircase up to the 1st Floor.',
          detail: 'Building 2 central staircase.'
        });
        if (dest.id === 'library') {
          steps.push({
            num: stepNum++,
            instruction: 'Arrive at the Central Library.',
            detail: 'Located on the 1st floor left wing (reading halls & book stacks).'
          });
        } else if (dest.id === 'auditorium') {
          steps.push({
            num: stepNum++,
            instruction: 'Arrive at the Auditorium.',
            detail: 'Located on the 1st floor right wing adjacent to the Central Library.'
          });
        }
      } else if (dest.floor === '2') {
        steps.push({
          num: stepNum++,
          instruction: 'Take the staircase up to the 2nd Floor.',
          detail: 'Top academic level of Building 2.'
        });
        if (dest.id === 'aids') {
          steps.push({
            num: stepNum++,
            instruction: 'Arrive at the CSE (AI & DS) Department.',
            detail: 'The entire 2nd floor is dedicated to the Artificial Intelligence & Data Science engineering center.'
          });
        }
      }
    }
  } else {
    // Inter-building or room to room
    if (start.building !== dest.building) {
      steps.push({
        num: stepNum++,
        instruction: `Exit ${start.name} and proceed to the ground floor exit of ${CAMPUS_DATA.buildings[start.building]?.name || 'current building'}.`,
        detail: 'Head down stairs to Level G.'
      });
      steps.push({
        num: stepNum++,
        instruction: `Walk across the central connecting courtyard path towards ${CAMPUS_DATA.buildings[dest.building]?.name}.`,
        detail: 'Follow outdoor wayfinding signboards.'
      });
      steps.push({
        num: stepNum++,
        instruction: `Enter ${CAMPUS_DATA.buildings[dest.building]?.name} through the main foyer.`,
        detail: 'Check building directory on arrival.'
      });
      if (dest.floor !== 'G') {
        steps.push({
          num: stepNum++,
          instruction: `Take the staircase up to Floor ${dest.floor}.`,
          detail: `Navigating to ${dest.floor === '1' ? 'First' : dest.floor === '2' ? 'Second' : 'Third'} level.`
        });
      }
      steps.push({
        num: stepNum++,
        instruction: `Arrive at ${dest.name}.`,
        detail: dest.directions
      });
    } else {
      if (start.floor !== dest.floor) {
        steps.push({
          num: stepNum++,
          instruction: `Leave ${start.name} and head to the staircase on Floor ${start.floor}.`,
          detail: 'Central stairwell is located along the main corridor.'
        });
        steps.push({
          num: stepNum++,
          instruction: `Take the stairs ${parseInt(dest.floor) > parseInt(start.floor || 0) ? 'up' : 'down'} to Floor ${dest.floor}.`,
          detail: `Arrive at Level ${dest.floor} landing.`
        });
      } else {
        steps.push({
          num: stepNum++,
          instruction: `From ${start.name}, step out into the Floor ${start.floor} corridor.`,
          detail: 'Same-floor direct connection.'
        });
      }
      steps.push({
        num: stepNum++,
        instruction: `Follow corridor directly to ${dest.name}.`,
        detail: dest.directions
      });
    }
  }

  const distanceM = steps.length * 15;
  const timeMin = Math.max(1, Math.ceil(steps.length * 0.5));

  return {
    start,
    dest,
    distance: `${distanceM} m`,
    time: `${timeMin} min`,
    steps
  };
}

// ============================================================================
// ARCHITECTURAL CAD SVG MAP GENERATORS
// ============================================================================

function renderCampusOverviewSVG() {
  const isDark = state.theme === 'dark';
  const bgColor = isDark ? '#0b111a' : '#f1f5f9';

  return `
    <svg viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg" id="campusSvgMap">
      <defs>
        <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.04)'}" stroke-width="1"/>
        </pattern>
        <linearGradient id="mainBldgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${isDark ? '#1a2436' : '#ffffff'}"/>
          <stop offset="100%" stop-color="${isDark ? '#101726' : '#f8fafc'}"/>
        </linearGradient>
        <linearGradient id="secBldgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${isDark ? '#1a2436' : '#ffffff'}"/>
          <stop offset="100%" stop-color="${isDark ? '#101726' : '#f8fafc'}"/>
        </linearGradient>
      </defs>

      <rect width="1000" height="620" fill="${bgColor}"/>
      <rect width="1000" height="620" fill="url(#gridPattern)"/>

      <!-- Campus Lawn & Landscaping -->
      <path d="M 40 50 C 220 30, 420 40, 530 70 C 660 30, 860 40, 960 70 L 960 590 L 40 590 Z" fill="${isDark ? '#0d181e' : '#e6f4ea'}" opacity="0.6"/>

      <!-- Roads & Pathways -->
      <path d="M 120 590 L 140 480 C 150 430, 240 400, 310 400 L 540 400 C 600 400, 680 400, 750 400 L 750 370" class="campus-road"/>
      <path d="M 140 480 L 420 400" class="campus-pathway"/>
      <path d="M 470 240 L 630 240" class="campus-pathway" stroke-width="8"/>

      <!-- Parking Area -->
      <g id="room-parking" class="room-unit room-admin" onclick="handleMapLocationClick('parking')" onmouseenter="showHoverCard(event, 'parking')" onmouseleave="hideHoverCard()">
        <rect x="60" y="440" width="160" height="90" rx="12"/>
        <text x="140" y="475" class="room-title" text-anchor="middle">🚗 Parking Area</text>
        <text x="140" y="498" class="room-sub" text-anchor="middle">Main Entry & Start Landmark</text>
        <text x="140" y="515" class="room-code-tag" text-anchor="middle">PARK-01</text>
      </g>

      <!-- Main Academic Building Block -->
      <g id="bldg-main-group" class="room-unit" onclick="switchView('main', 'G')" onmouseenter="showHoverCard(event, 'entrance_1')" onmouseleave="hideHoverCard()">
        <rect x="230" y="110" width="280" height="280" class="building-foundation"/>
        <rect x="240" y="120" width="260" height="260" rx="12" fill="url(#mainBldgGrad)" stroke="${isDark ? '#38bdf8' : '#0284c7'}" stroke-width="2"/>
        
        <rect x="250" y="135" width="240" height="46" rx="8" fill="rgba(56, 189, 248, 0.15)"/>
        <text x="370" y="155" class="room-title" fill="#38bdf8" text-anchor="middle">3rd Fl: AIML Department</text>

        <rect x="250" y="190" width="240" height="46" rx="8" fill="rgba(192, 132, 252, 0.15)"/>
        <text x="370" y="210" class="room-title" fill="#c084fc" text-anchor="middle">2nd Fl: ETC & MBA Dept</text>

        <rect x="250" y="245" width="240" height="46" rx="8" fill="rgba(56, 189, 248, 0.15)"/>
        <text x="370" y="265" class="room-title" fill="#38bdf8" text-anchor="middle">1st Fl: Computer Science (CSE)</text>

        <rect x="250" y="300" width="240" height="65" rx="8" fill="rgba(245, 158, 11, 0.15)"/>
        <text x="370" y="322" class="room-title" fill="#f59e0b" text-anchor="middle">Ground: Admin • Principal • 1st Year</text>
        <text x="370" y="345" class="room-sub" text-anchor="middle">Click to explore building</text>

        <!-- Entrances -->
        <circle cx="280" cy="385" r="9" fill="#10b981" stroke="#ffffff" stroke-width="2"/>
        <text x="280" y="416" class="room-sub" font-weight="700" text-anchor="middle">Entrance 1</text>

        <circle cx="450" cy="385" r="9" fill="#10b981" stroke="#ffffff" stroke-width="2"/>
        <text x="450" y="416" class="room-sub" font-weight="700" text-anchor="middle">Entrance 2</text>
      </g>

      <!-- Second Academic Building Block -->
      <g id="bldg-sec-group" class="room-unit" onclick="switchView('second', 'G')" onmouseenter="showHoverCard(event, 'sec_entrance')" onmouseleave="hideHoverCard()">
        <rect x="620" y="120" width="280" height="270" class="building-foundation"/>
        <rect x="630" y="130" width="260" height="250" rx="12" fill="url(#secBldgGrad)" stroke="${isDark ? '#10b981' : '#059669'}" stroke-width="2"/>
        
        <rect x="640" y="145" width="240" height="58" rx="8" fill="rgba(56, 189, 248, 0.15)"/>
        <text x="760" y="170" class="room-title" fill="#38bdf8" text-anchor="middle">2nd Fl: CSE (AI &amp; DS) Dept</text>
        <text x="760" y="190" class="room-sub" text-anchor="middle">Entire Floor Dedicated to AI &amp; DS</text>

        <rect x="640" y="215" width="240" height="52" rx="8" fill="rgba(96, 165, 250, 0.15)"/>
        <text x="760" y="238" class="room-title" fill="#60a5fa" text-anchor="middle">1st Fl: Library &amp; Auditorium</text>
        <text x="760" y="256" class="room-sub" text-anchor="middle">Central Library + 500+ Seat Hall</text>

        <rect x="640" y="280" width="240" height="65" rx="8" fill="rgba(16, 185, 129, 0.15)"/>
        <text x="760" y="304" class="room-title" fill="#10b981" text-anchor="middle">Ground: Mechanical & Electrical</text>
        <text x="760" y="328" class="room-sub" text-anchor="middle">Click to explore building</text>

        <circle cx="750" cy="380" r="9" fill="#10b981" stroke="#ffffff" stroke-width="2"/>
        <text x="750" y="416" class="room-sub" font-weight="700" text-anchor="middle">Building 2 Entry</text>
      </g>

      <text x="565" y="235" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="${isDark ? '#94a3b8' : '#64748b'}" text-anchor="middle">Connecting Courtyard Walkway</text>

      <g id="campusActivePathGroup"></g>
      <g id="simAvatarGroup"></g>
    </svg>
  `;
}

function renderMainBuildingFloorSVG(floor) {
  const isDark = state.theme === 'dark';
  const bgColor = isDark ? '#0c121c' : '#f8fafc';

  let floorContent = '';

  if (floor === 'G') {
    floorContent = `
      <rect x="270" y="210" width="450" height="60" class="floor-corridor"/>
      <rect x="330" y="210" width="60" height="230" class="floor-corridor"/>
      <rect x="630" y="210" width="60" height="230" class="floor-corridor"/>
      <rect x="180" y="410" width="580" height="30" class="floor-corridor"/>

      <!-- Entrances -->
      <g class="room-unit" onclick="handleMapLocationClick('entrance_1')">
        <rect x="200" y="525" width="100" height="40" rx="8" fill="#10b981" opacity="0.95"/>
        <text x="250" y="550" class="room-title" fill="#ffffff" font-size="11" text-anchor="middle">🚪 Entrance 1</text>
      </g>

      <g class="room-unit" onclick="handleMapLocationClick('entrance_2')">
        <rect x="690" y="525" width="100" height="40" rx="8" fill="#10b981" opacity="0.95"/>
        <text x="740" y="550" class="room-title" fill="#ffffff" font-size="11" text-anchor="middle">🚪 Entrance 2</text>
      </g>

      <!-- Central Staircase -->
      <g class="room-unit room-stair">
        <rect x="330" y="90" width="140" height="100" rx="8"/>
        <text x="400" y="130" class="room-title" text-anchor="middle">🪜 Main Stairs</text>
        <text x="400" y="152" class="room-sub" text-anchor="middle">To 1st, 2nd, 3rd Fl</text>
      </g>

      <!-- Boys' Toilet -->
      <g id="room-toilet_boys" class="room-unit room-toilet" onclick="handleMapLocationClick('toilet_boys')" onmouseenter="showHoverCard(event, 'toilet_boys')" onmouseleave="hideHoverCard()">
        <rect x="520" y="90" width="160" height="100" rx="10"/>
        <text x="600" y="130" class="room-title" text-anchor="middle">🚻 Boys' Restroom</text>
        <text x="600" y="152" class="room-sub" text-anchor="middle">Straight from Lab</text>
        <text x="600" y="172" class="room-code-tag" text-anchor="middle">MB-G07</text>
      </g>

      <!-- Principal's Cabin -->
      <g id="room-principal" class="room-unit room-admin" onclick="handleMapLocationClick('principal')" onmouseenter="showHoverCard(event, 'principal')" onmouseleave="hideHoverCard()">
        <rect x="330" y="240" width="150" height="130" rx="10"/>
        <text x="405" y="295" class="room-title" text-anchor="middle">🏛️ Principal's Cabin</text>
        <text x="405" y="320" class="room-sub" text-anchor="middle">Left side of Comp Lab</text>
        <text x="405" y="340" class="room-code-tag" text-anchor="middle">MB-G06</text>
      </g>

      <!-- 1st Year Computer Lab -->
      <g id="room-comp_lab_1" class="room-unit room-tech" onclick="handleMapLocationClick('comp_lab_1')" onmouseenter="showHoverCard(event, 'comp_lab_1')" onmouseleave="hideHoverCard()">
        <rect x="520" y="240" width="170" height="130" rx="10"/>
        <text x="605" y="295" class="room-title" text-anchor="middle">🖥️ 1st Year Comp Lab</text>
        <text x="605" y="320" class="room-sub" text-anchor="middle">In front of Accounts</text>
        <text x="605" y="340" class="room-code-tag" text-anchor="middle">MB-G05</text>
      </g>

      <!-- HOD Cabin & Staff Room -->
      <g id="room-hod_staff" class="room-unit room-core" onclick="handleMapLocationClick('hod_staff')" onmouseenter="showHoverCard(event, 'hod_staff')" onmouseleave="hideHoverCard()">
        <rect x="720" y="240" width="140" height="130" rx="10"/>
        <text x="790" y="295" class="room-title" text-anchor="middle">👥 HOD & Staff Room</text>
        <text x="790" y="320" class="room-sub" text-anchor="middle">Left from Entrance 2</text>
        <text x="790" y="340" class="room-code-tag" text-anchor="middle">MB-G09</text>
      </g>

      <!-- 1st Year Department -->
      <g id="room-fy_dept" class="room-unit room-core" onclick="handleMapLocationClick('fy_dept')" onmouseenter="showHoverCard(event, 'fy_dept')" onmouseleave="hideHoverCard()">
        <rect x="130" y="240" width="160" height="130" rx="10"/>
        <text x="210" y="295" class="room-title" text-anchor="middle">🔬 1st Year Dept</text>
        <text x="210" y="320" class="room-sub" text-anchor="middle">Applied Science & Human.</text>
        <text x="210" y="340" class="room-code-tag" text-anchor="middle">MB-G01</text>
      </g>

      <!-- Administrative Area -->
      <g id="room-admin" class="room-unit room-admin" onclick="handleMapLocationClick('admin')" onmouseenter="showHoverCard(event, 'admin')" onmouseleave="hideHoverCard()">
        <rect x="130" y="400" width="160" height="110" rx="10"/>
        <text x="210" y="445" class="room-title" text-anchor="middle">🏢 Administrative Area</text>
        <text x="210" y="470" class="room-sub" text-anchor="middle">Admission & Reception</text>
        <text x="210" y="490" class="room-code-tag" text-anchor="middle">MB-G02</text>
      </g>

      <!-- Scholarship Section -->
      <g id="room-scholarship" class="room-unit room-admin" onclick="handleMapLocationClick('scholarship')" onmouseenter="showHoverCard(event, 'scholarship')" onmouseleave="hideHoverCard()">
        <rect x="330" y="400" width="150" height="110" rx="10"/>
        <text x="405" y="445" class="room-title" text-anchor="middle">📜 Scholarship Sec.</text>
        <text x="405" y="470" class="room-sub" text-anchor="middle">Turn Left inside</text>
        <text x="405" y="490" class="room-code-tag" text-anchor="middle">MB-G03</text>
      </g>

      <!-- Accounts Section -->
      <g id="room-accounts" class="room-unit room-admin" onclick="handleMapLocationClick('accounts')" onmouseenter="showHoverCard(event, 'accounts')" onmouseleave="hideHoverCard()">
        <rect x="520" y="400" width="170" height="110" rx="10"/>
        <text x="605" y="445" class="room-title" text-anchor="middle">💳 Accounts & Students</text>
        <text x="605" y="470" class="room-sub" text-anchor="middle">Fees & Verification</text>
        <text x="605" y="490" class="room-code-tag" text-anchor="middle">MB-G04</text>
      </g>

      <!-- Management Room -->
      <g id="room-management" class="room-unit room-admin" onclick="handleMapLocationClick('management')" onmouseenter="showHoverCard(event, 'management')" onmouseleave="hideHoverCard()">
        <rect x="720" y="400" width="140" height="110" rx="10"/>
        <text x="790" y="445" class="room-title" text-anchor="middle">👔 Management Room</text>
        <text x="790" y="470" class="room-sub" text-anchor="middle">Straight from Accounts</text>
        <text x="790" y="490" class="room-code-tag" text-anchor="middle">MB-G08</text>
      </g>
    `;
  } else if (floor === '1') {
    floorContent = `
      <g class="room-unit room-stair">
        <rect x="160" y="90" width="140" height="90" rx="8"/>
        <text x="230" y="130" class="room-title" text-anchor="middle">🪜 Main Stairs</text>
        <text x="230" y="150" class="room-sub" text-anchor="middle">Level 1 Landing</text>
      </g>

      <rect x="300" y="120" width="460" height="40" class="floor-corridor"/>

      <!-- CSE Department Wing -->
      <g id="room-cse" class="room-unit room-tech" onclick="handleMapLocationClick('cse')" onmouseenter="showHoverCard(event, 'cse')" onmouseleave="hideHoverCard()">
        <rect x="160" y="200" width="600" height="310" rx="14"/>
        <text x="460" y="270" class="room-title" font-size="20" text-anchor="middle">💻 Computer Science Department</text>
        <text x="460" y="305" class="room-sub" font-size="13" text-anchor="middle">Advanced Programming Labs • Algorithms Center • Faculty Chambers</text>
        <text x="460" y="325" class="room-code-tag" font-size="11" text-anchor="middle">MB-101</text>

        <rect x="180" y="340" width="170" height="140" rx="8" fill="rgba(56, 189, 248, 0.15)" stroke="rgba(56, 189, 248, 0.4)"/>
        <text x="265" y="400" class="room-title" text-anchor="middle">Project & Systems Lab</text>
        <text x="265" y="425" class="room-sub" text-anchor="middle">Cloud & Networks</text>

        <rect x="370" y="340" width="180" height="140" rx="8" fill="rgba(56, 189, 248, 0.15)" stroke="rgba(56, 189, 248, 0.4)"/>
        <text x="460" y="400" class="room-title" text-anchor="middle">Software Dev Lab</text>
        <text x="460" y="425" class="room-sub" text-anchor="middle">Workstations & Servers</text>

        <rect x="570" y="340" width="170" height="140" rx="8" fill="rgba(56, 189, 248, 0.15)" stroke="rgba(56, 189, 248, 0.4)"/>
        <text x="655" y="400" class="room-title" text-anchor="middle">HOD & Faculty Suites</text>
        <text x="655" y="425" class="room-sub" text-anchor="middle">CSE Academic Council</text>
      </g>
    `;
  } else if (floor === '2') {
    floorContent = `
      <g class="room-unit room-stair">
        <rect x="140" y="90" width="140" height="90" rx="8"/>
        <text x="210" y="130" class="room-title" text-anchor="middle">🪜 Main Stairs</text>
        <text x="210" y="150" class="room-sub" text-anchor="middle">Level 2 Landing</text>
      </g>

      <rect x="280" y="120" width="480" height="40" class="floor-corridor"/>
      <rect x="520" y="160" width="40" height="60" class="floor-corridor"/>
      
      <!-- ETC Department -->
      <g id="room-etc" class="room-unit room-tech" onclick="handleMapLocationClick('etc')" onmouseenter="showHoverCard(event, 'etc')" onmouseleave="hideHoverCard()">
        <rect x="140" y="210" width="340" height="300" rx="14"/>
        <text x="310" y="270" class="room-title" font-size="16" text-anchor="middle">📡 Electronics & Telecom Dept</text>
        <text x="310" y="295" class="room-sub" text-anchor="middle">Embedded Systems, VLSI & IoT Labs</text>
        <text x="310" y="315" class="room-code-tag" text-anchor="middle">MB-201</text>

        <rect x="160" y="335" width="140" height="145" rx="8" fill="rgba(56, 189, 248, 0.15)" stroke="rgba(56, 189, 248, 0.3)"/>
        <text x="230" y="400" class="room-title" text-anchor="middle">Signal Lab</text>
        
        <rect x="320" y="335" width="140" height="145" rx="8" fill="rgba(56, 189, 248, 0.15)" stroke="rgba(56, 189, 248, 0.3)"/>
        <text x="390" y="400" class="room-title" text-anchor="middle">Telecom Center</text>
      </g>

      <!-- MBA Department (10m forward, turn right) -->
      <g id="room-mba" class="room-unit room-mba" onclick="handleMapLocationClick('mba')" onmouseenter="showHoverCard(event, 'mba')" onmouseleave="hideHoverCard()">
        <rect x="510" y="210" width="350" height="300" rx="14"/>
        <text x="685" y="270" class="room-title" font-size="18" text-anchor="middle">🎓 MBA Department</text>
        <text x="685" y="295" class="room-sub" text-anchor="middle">10m straight from stairs, then turn right</text>
        <text x="685" y="315" class="room-code-tag" text-anchor="middle">MB-202</text>

        <rect x="530" y="335" width="150" height="145" rx="8" fill="rgba(192, 132, 252, 0.15)" stroke="rgba(192, 132, 252, 0.4)"/>
        <text x="605" y="395" class="room-title" text-anchor="middle">Executive Seminar</text>
        <text x="605" y="420" class="room-sub" text-anchor="middle">Case Study Room</text>

        <rect x="695" y="335" width="145" height="145" rx="8" fill="rgba(192, 132, 252, 0.15)" stroke="rgba(192, 132, 252, 0.4)"/>
        <text x="765" y="395" class="room-title" text-anchor="middle">Faculty Chambers</text>
        <text x="765" y="420" class="room-sub" text-anchor="middle">MBA HOD Office</text>
      </g>
    `;
  } else if (floor === '3') {
    floorContent = `
      <g class="room-unit room-stair">
        <rect x="160" y="90" width="140" height="90" rx="8"/>
        <text x="230" y="130" class="room-title" text-anchor="middle">🪜 Main Stairs</text>
        <text x="230" y="150" class="room-sub" text-anchor="middle">Level 3 Landing</text>
      </g>

      <rect x="300" y="120" width="460" height="40" class="floor-corridor"/>

      <!-- AIML Department Wing -->
      <g id="room-aiml" class="room-unit room-tech" onclick="handleMapLocationClick('aiml')" onmouseenter="showHoverCard(event, 'aiml')" onmouseleave="hideHoverCard()">
        <rect x="160" y="200" width="600" height="310" rx="14"/>
        <text x="460" y="270" class="room-title" font-size="20" text-anchor="middle">🤖 AIML Department</text>
        <text x="460" y="305" class="room-sub" font-size="13" text-anchor="middle">Artificial Intelligence & Machine Learning Innovation Center</text>
        <text x="460" y="325" class="room-code-tag" font-size="11" text-anchor="middle">MB-301</text>

        <rect x="180" y="340" width="170" height="140" rx="8" fill="rgba(56, 189, 248, 0.18)" stroke="rgba(56, 189, 248, 0.4)"/>
        <text x="265" y="400" class="room-title" text-anchor="middle">Deep Learning Lab</text>
        <text x="265" y="425" class="room-sub" text-anchor="middle">GPU Computing Cluster</text>

        <rect x="370" y="340" width="180" height="140" rx="8" fill="rgba(56, 189, 248, 0.18)" stroke="rgba(56, 189, 248, 0.4)"/>
        <text x="460" y="400" class="room-title" text-anchor="middle">Computer Vision Lab</text>
        <text x="460" y="425" class="room-sub" text-anchor="middle">Neural Research Hub</text>

        <rect x="570" y="340" width="170" height="140" rx="8" fill="rgba(56, 189, 248, 0.18)" stroke="rgba(56, 189, 248, 0.4)"/>
        <text x="655" y="400" class="room-title" text-anchor="middle">Robotics & AI Ethics</text>
        <text x="655" y="425" class="room-sub" text-anchor="middle">AIML Department HOD</text>
      </g>
    `;
  }

  return `
    <svg viewBox="0 0 920 600" xmlns="http://www.w3.org/2000/svg" id="mainBldgSvgMap">
      <defs>
        <pattern id="floorGrid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="${isDark ? 'rgba(255,255,255,0.025)' : 'rgba(0,0,0,0.03)'}" stroke-width="1"/>
        </pattern>
      </defs>

      <rect width="920" height="600" fill="${bgColor}"/>
      <rect width="920" height="600" fill="url(#floorGrid)"/>

      <rect x="100" y="60" width="720" height="490" class="building-foundation"/>
      <rect x="110" y="70" width="700" height="470" rx="14" class="building-wall"/>

      ${floorContent}

      <g id="mainFloorActivePathGroup"></g>
      <g id="simAvatarGroup"></g>
    </svg>
  `;
}

function renderSecondBuildingFloorSVG(floor) {
  const isDark = state.theme === 'dark';
  const bgColor = isDark ? '#0c121c' : '#f8fafc';

  let floorContent = '';

  if (floor === 'G') {
    floorContent = `
      <g class="room-unit" onclick="handleMapLocationClick('sec_entrance')">
        <rect x="400" y="510" width="120" height="40" rx="8" fill="#10b981" opacity="0.95"/>
        <text x="460" y="535" class="room-title" fill="#ffffff" font-size="11" text-anchor="middle">🚪 Bldg 2 Entrance</text>
      </g>

      <g class="room-unit room-stair">
        <rect x="390" y="80" width="140" height="90" rx="8"/>
        <text x="460" y="120" class="room-title" text-anchor="middle">🪜 Central Stairs</text>
        <text x="460" y="142" class="room-sub" text-anchor="middle">To Library & Auditorium</text>
      </g>

      <rect x="230" y="200" width="460" height="50" class="floor-corridor"/>
      <rect x="430" y="170" width="60" height="340" class="floor-corridor"/>

      <!-- Mechanical Department -->
      <g id="room-mech" class="room-unit room-core" onclick="handleMapLocationClick('mech')" onmouseenter="showHoverCard(event, 'mech')" onmouseleave="hideHoverCard()">
        <rect x="140" y="230" width="280" height="270" rx="14"/>
        <text x="280" y="280" class="room-title" font-size="17" text-anchor="middle">⚙️ Mechanical Department</text>
        <text x="280" y="305" class="room-sub" text-anchor="middle">Thermodynamics • CAD/CAM • Workshops</text>
        <text x="280" y="325" class="room-code-tag" text-anchor="middle">SB-G01</text>

        <rect x="160" y="340" width="240" height="135" rx="8" fill="rgba(16, 185, 129, 0.15)" stroke="rgba(16, 185, 129, 0.3)"/>
        <text x="280" y="395" class="room-title" text-anchor="middle">Heavy Machinery Lab</text>
        <text x="280" y="420" class="room-sub" text-anchor="middle">Testing & Dynamics Center</text>
      </g>

      <!-- Electrical Department -->
      <g id="room-elec" class="room-unit room-core" onclick="handleMapLocationClick('elec')" onmouseenter="showHoverCard(event, 'elec')" onmouseleave="hideHoverCard()">
        <rect x="500" y="230" width="280" height="270" rx="14"/>
        <text x="640" y="280" class="room-title" font-size="17" text-anchor="middle">⚡ Electrical Department</text>
        <text x="640" y="305" class="room-sub" text-anchor="middle">Power Systems • High Voltage Labs</text>
        <text x="640" y="325" class="room-code-tag" text-anchor="middle">SB-G02</text>

        <rect x="520" y="340" width="240" height="135" rx="8" fill="rgba(16, 185, 129, 0.15)" stroke="rgba(16, 185, 129, 0.3)"/>
        <text x="640" y="395" class="room-title" text-anchor="middle">Circuits & Simulation Lab</text>
        <text x="640" y="420" class="room-sub" text-anchor="middle">Renewable & Microgrid Center</text>
      </g>
    `;
  } else if (floor === '1') {
    floorContent = `
      <g class="room-unit room-stair">
        <rect x="390" y="80" width="140" height="90" rx="8"/>
        <text x="460" y="120" class="room-title" text-anchor="middle">🪜 Central Stairs</text>
        <text x="460" y="142" class="room-sub" text-anchor="middle">Level 1 Landing</text>
      </g>

      <rect x="230" y="170" width="460" height="35" class="floor-corridor"/>

      <!-- Central Library (Left Wing) -->
      <g id="room-library" class="room-unit room-amenity" onclick="handleMapLocationClick('library')" onmouseenter="showHoverCard(event, 'library')" onmouseleave="hideHoverCard()">
        <rect x="140" y="200" width="310" height="310" rx="14"/>
        <text x="295" y="255" class="room-title" font-size="19" text-anchor="middle">📚 Central Library</text>
        <text x="295" y="280" class="room-sub" text-anchor="middle">Reading Halls • Digital Repository • Stacks</text>
        <text x="295" y="300" class="room-code-tag" text-anchor="middle">SB-101</text>

        <rect x="160" y="320" width="270" height="165" rx="10" fill="rgba(96, 165, 250, 0.15)" stroke="rgba(96, 165, 250, 0.35)"/>
        <text x="295" y="380" class="room-title" text-anchor="middle">Study &amp; Reference Section</text>
        <text x="295" y="405" class="room-sub" text-anchor="middle">50,000+ Volumes &amp; IEEE Terminals</text>
      </g>

      <!-- Auditorium (Right Wing) -->
      <g id="room-auditorium" class="room-unit room-amenity" onclick="handleMapLocationClick('auditorium')" onmouseenter="showHoverCard(event, 'auditorium')" onmouseleave="hideHoverCard()">
        <rect x="470" y="200" width="310" height="310" rx="14"/>
        <text x="625" y="255" class="room-title" font-size="19" text-anchor="middle">🎭 Auditorium</text>
        <text x="625" y="280" class="room-sub" text-anchor="middle">500+ Capacity • Acoustic Stage &amp; AV</text>
        <text x="625" y="300" class="room-code-tag" text-anchor="middle">SB-102</text>

        <rect x="490" y="320" width="270" height="165" rx="10" fill="rgba(96, 165, 250, 0.15)" stroke="rgba(96, 165, 250, 0.35)"/>
        <text x="625" y="380" class="room-title" text-anchor="middle">Main Assembly Hall</text>
        <text x="625" y="405" class="room-sub" text-anchor="middle">Conferences &amp; Cultural Summits</text>
      </g>
    `;
  } else if (floor === '2') {
    floorContent = `
      <g class="room-unit room-stair">
        <rect x="390" y="80" width="140" height="90" rx="8"/>
        <text x="460" y="120" class="room-title" text-anchor="middle">🪜 Central Stairs</text>
        <text x="460" y="142" class="room-sub" text-anchor="middle">Level 2 Landing</text>
      </g>

      <rect x="300" y="120" width="460" height="40" class="floor-corridor"/>

      <!-- CSE (AI & DS) Department (Entire Floor) -->
      <g id="room-aids" class="room-unit room-tech" onclick="handleMapLocationClick('aids')" onmouseenter="showHoverCard(event, 'aids')" onmouseleave="hideHoverCard()">
        <rect x="140" y="200" width="640" height="320" rx="16"/>
        <text x="460" y="260" class="room-title" font-size="22" text-anchor="middle">🧠 CSE (AI &amp; DS) Department</text>
        <text x="460" y="290" class="room-sub" font-size="13" text-anchor="middle">Entire Level Dedicated to Artificial Intelligence &amp; Data Science Engineering</text>
        <text x="460" y="310" class="room-code-tag" text-anchor="middle">SB-201</text>

        <rect x="160" y="325" width="190" height="170" rx="10" fill="rgba(56, 189, 248, 0.15)" stroke="rgba(56, 189, 248, 0.35)"/>
        <text x="255" y="390" class="room-title" text-anchor="middle">Big Data Analytics Lab</text>
        <text x="255" y="415" class="room-sub" text-anchor="middle">Spark &amp; Hadoop Clusters</text>

        <rect x="365" y="325" width="190" height="170" rx="10" fill="rgba(56, 189, 248, 0.15)" stroke="rgba(56, 189, 248, 0.35)"/>
        <text x="460" y="390" class="room-title" text-anchor="middle">AI &amp; Neural Computing</text>
        <text x="460" y="415" class="room-sub" text-anchor="middle">Deep Learning Workstations</text>

        <rect x="570" y="325" width="190" height="170" rx="10" fill="rgba(56, 189, 248, 0.15)" stroke="rgba(56, 189, 248, 0.35)"/>
        <text x="665" y="390" class="room-title" text-anchor="middle">HOD &amp; Faculty Suites</text>
        <text x="665" y="415" class="room-sub" text-anchor="middle">AI &amp; DS Academic Council</text>
      </g>
    `;
  }

  return `
    <svg viewBox="0 0 920 600" xmlns="http://www.w3.org/2000/svg" id="secBldgSvgMap">
      <defs>
        <pattern id="secFloorGrid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="${isDark ? 'rgba(255,255,255,0.025)' : 'rgba(0,0,0,0.03)'}" stroke-width="1"/>
        </pattern>
      </defs>

      <rect width="920" height="600" fill="${bgColor}"/>
      <rect width="920" height="600" fill="url(#secFloorGrid)"/>

      <rect x="100" y="50" width="720" height="500" class="building-foundation"/>
      <rect x="110" y="60" width="700" height="480" rx="14" class="building-wall"/>

      ${floorContent}

      <g id="secFloorActivePathGroup"></g>
      <g id="simAvatarGroup"></g>
    </svg>
  `;
}

// ============================================================================
// MAP RENDERING & CONTROLLER
// ============================================================================

function renderActiveMap() {
  const container = document.getElementById('svgContainer');
  const levelTitle = document.getElementById('currentLevelName');
  const levelSub = document.getElementById('currentLevelSub');

  if (state.currentView === 'campus') {
    container.innerHTML = renderCampusOverviewSVG();
    levelTitle.textContent = 'JIT Campus • Spatial Overview';
    levelSub.textContent = 'Both Academic Buildings, Main Road, Parking & Entrances';
    document.getElementById('floorSelector').style.opacity = '0.35';
    document.getElementById('floorSelector').style.pointerEvents = 'none';
  } else if (state.currentView === 'main') {
    container.innerHTML = renderMainBuildingFloorSVG(state.currentFloor);
    levelTitle.textContent = `Main Academic Building • ${CAMPUS_DATA.buildings.main.floorLabels[state.currentFloor] || 'Floor ' + state.currentFloor}`;
    
    if (state.currentFloor === 'G') levelSub.textContent = 'Admin, Principal’s Cabin, 1st Year Dept, Comp Lab, Accounts';
    else if (state.currentFloor === '1') levelSub.textContent = 'Computer Science Department (CSE)';
    else if (state.currentFloor === '2') levelSub.textContent = 'Electronics & Telecom Dept • MBA Department';
    else if (state.currentFloor === '3') levelSub.textContent = 'AIML Department (AI & Machine Learning)';

    document.getElementById('floorSelector').style.opacity = '1';
    document.getElementById('floorSelector').style.pointerEvents = 'auto';
    updateFloorButtonGroup(['G', '1', '2', '3']);
  } else if (state.currentView === 'second') {
    container.innerHTML = renderSecondBuildingFloorSVG(state.currentFloor);
    levelTitle.textContent = `Second Academic Building • ${CAMPUS_DATA.buildings.second.floorLabels[state.currentFloor] || 'Floor ' + state.currentFloor}`;
    
    if (state.currentFloor === 'G') levelSub.textContent = 'Mechanical Department • Electrical Department';
    else if (state.currentFloor === '1') levelSub.textContent = 'Central Library & Grand Auditorium';
    else if (state.currentFloor === '2') levelSub.textContent = 'CSE (AI & DS) Department (Entire Floor)';

    document.getElementById('floorSelector').style.opacity = '1';
    document.getElementById('floorSelector').style.pointerEvents = 'auto';
    updateFloorButtonGroup(['G', '1', '2']);
  }

  applyMapTransform();

  if (state.selectedLocation) {
    highlightRoomInDom(state.selectedLocation.id);
  }

  if (state.activeRoute) {
    drawRouteOnMap(state.activeRoute);
  }
}

function updateFloorButtonGroup(availableFloors) {
  const group = document.getElementById('floorBtnGroup');
  if (!group) return;
  group.innerHTML = availableFloors.map(fl => `
    <button class="floor-pill floor-pill-btn ${state.currentFloor === fl ? 'active' : ''}" data-floor="${fl}">
      ${fl === 'G' ? 'Ground' : fl + (fl === '1' ? 'st' : fl === '2' ? 'nd' : 'rd') + ' Fl'}
    </button>
  `).join('');

  group.querySelectorAll('.floor-pill, .floor-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      sfx.playClick();
      switchFloor(btn.dataset.floor);
    });
  });
}

function switchView(viewName, targetFloor = 'G') {
  sfx.playClick();
  state.currentView = viewName;
  state.currentFloor = targetFloor;
  state.zoomLevel = 1.0;
  state.panX = 0;
  state.panY = 0;

  document.querySelectorAll('#buildingSelector .pill-btn, #buildingSelector .map-pill-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === viewName);
  });

  renderActiveMap();
}

function switchFloor(floor) {
  state.currentFloor = floor;
  renderActiveMap();
}

function applyMapTransform() {
  const container = document.getElementById('svgContainer');
  container.style.transform = `translate(${state.panX}px, ${state.panY}px) scale(${state.zoomLevel})`;
}

// ============================================================================
// HOVER CARDS & LOCATION INSPECTOR
// ============================================================================

function showHoverCard(event, locId) {
  const loc = locationMap.get(locId);
  if (!loc) return;

  const card = document.getElementById('mapHoverCard');
  const icon = document.getElementById('hoverIcon');
  const title = document.getElementById('hoverTitle');
  const sub = document.getElementById('hoverSub');

  icon.textContent = loc.icon || '📍';
  title.textContent = loc.name;
  sub.textContent = `${loc.code || ''} • ${loc.building === 'main' ? 'Main Bldg' : loc.building === 'second' ? 'Bldg 2' : 'Campus'} • Floor ${loc.floor}`;

  const wrapperRect = document.getElementById('mapCanvasWrapper').getBoundingClientRect();
  const x = event.clientX - wrapperRect.left;
  const y = event.clientY - wrapperRect.top;

  card.style.left = `${x}px`;
  card.style.top = `${y}px`;
  card.classList.remove('hidden');
}

function hideHoverCard() {
  document.getElementById('mapHoverCard').classList.add('hidden');
}

function handleMapLocationClick(locationId) {
  sfx.playClick();
  const loc = locationMap.get(locationId);
  if (!loc) return;

  state.selectedLocation = loc;
  openLocationDrawer(loc);
  highlightRoomInDom(loc.id);
}

function openLocationDrawer(loc) {
  const drawer = document.getElementById('locationDrawer');
  const badge = document.getElementById('drawerBadge');
  const buildingBadge = document.getElementById('drawerBuildingBadge');
  const title = document.getElementById('drawerTitle');
  const building = document.getElementById('drawerBuilding');
  const directions = document.getElementById('drawerDirections');
  const desc = document.getElementById('drawerDesc');
  const iconBox = document.getElementById('drawerIconBox');

  iconBox.textContent = loc.icon || '📍';
  badge.textContent = loc.badge || (loc.floor === 'G' ? 'Ground Floor' : `${loc.floor} Floor`);
  buildingBadge.textContent = loc.building === 'main' ? 'Main Academic Building' : loc.building === 'second' ? 'Second Academic Building' : 'Campus Grounds';
  title.textContent = loc.name;
  building.textContent = `${loc.code ? loc.code + ' • ' : ''}${loc.directions ? loc.directions.split('.')[0] : 'Campus facility'}`;
  directions.textContent = loc.directions || 'Follow standard campus signage to reach this area.';
  desc.textContent = loc.desc || 'Academic / Administrative facility at JIT College.';

  drawer.classList.remove('hidden');
}

function closeLocationDrawer() {
  sfx.playClick();
  document.getElementById('locationDrawer').classList.add('hidden');
  clearRoomHighlights();
  state.selectedLocation = null;
}

function highlightRoomInDom(locationId) {
  clearRoomHighlights();
  const roomElem = document.getElementById(`room-${locationId}`);
  if (roomElem) {
    roomElem.classList.add('active-highlight');
  }
}

function clearRoomHighlights() {
  document.querySelectorAll('.room-unit.active-highlight').forEach(el => {
    el.classList.remove('active-highlight');
  });
}

// ============================================================================
// ROUTE DRAWING & WALKING SIMULATION
// ============================================================================

function getActivePathPoints(route) {
  const { start, dest } = route;
  const coordsTable = {
    campus: {
      parking: { x: 140, y: 480 },
      entrance_1: { x: 280, y: 390 },
      entrance_2: { x: 420, y: 390 },
      admin: { x: 330, y: 340 },
      principal: { x: 370, y: 320 },
      cse: { x: 370, y: 265 },
      mba: { x: 390, y: 210 },
      aiml: { x: 370, y: 155 },
      sec_entrance: { x: 750, y: 380 },
      mech: { x: 710, y: 320 },
      library: { x: 700, y: 240 },
      auditorium: { x: 800, y: 240 },
      aids: { x: 760, y: 175 }
    },
    main_G: {
      entrance_1: { x: 250, y: 530 },
      entrance_2: { x: 740, y: 530 },
      admin: { x: 210, y: 450 },
      fy_dept: { x: 210, y: 300 },
      scholarship: { x: 405, y: 450 },
      accounts: { x: 605, y: 450 },
      comp_lab_1: { x: 605, y: 300 },
      principal: { x: 405, y: 300 },
      toilet_boys: { x: 600, y: 140 },
      management: { x: 790, y: 450 },
      hod_staff: { x: 790, y: 300 },
      stairs: { x: 400, y: 140 }
    },
    main_1: {
      stairs: { x: 230, y: 135 },
      cse: { x: 460, y: 340 }
    },
    main_2: {
      stairs: { x: 210, y: 135 },
      etc: { x: 310, y: 330 },
      mba: { x: 685, y: 330 }
    },
    main_3: {
      stairs: { x: 230, y: 135 },
      aiml: { x: 460, y: 340 }
    },
    second_G: {
      sec_entrance: { x: 460, y: 520 },
      mech: { x: 280, y: 350 },
      elec: { x: 640, y: 350 },
      stairs: { x: 460, y: 125 }
    },
    second_1: {
      stairs: { x: 460, y: 125 },
      library: { x: 295, y: 350 },
      auditorium: { x: 625, y: 350 }
    },
    second_2: {
      stairs: { x: 460, y: 125 },
      aids: { x: 460, y: 350 }
    }
  };

  let points = [];
  if (state.currentView === 'campus') {
    const p1 = coordsTable.campus[start.id] || coordsTable.campus.parking;
    const p2 = coordsTable.campus[dest.id] || coordsTable.campus.admin;
    points = [p1, { x: (p1.x + p2.x) / 2, y: Math.max(p1.y, p2.y) - 30 }, p2];
  } else if (state.currentView === 'main') {
    const table = coordsTable[`main_${state.currentFloor}`];
    if (table) {
      if (state.currentFloor === 'G') {
        const startPt = table[start.id] || table.entrance_1;
        const destPt = table[dest.id] || table.stairs;
        points = [startPt, { x: startPt.x, y: 410 }, { x: destPt.x, y: 410 }, destPt];
      } else {
        const startPt = table[start.id] || table.stairs;
        const destPt = table[dest.id] || table.stairs;
        points = [startPt, { x: (startPt.x + destPt.x) / 2, y: 140 }, destPt];
      }
    }
  } else if (state.currentView === 'second') {
    const table = coordsTable[`second_${state.currentFloor}`];
    if (table) {
      const startPt = table[start.id] || table.sec_entrance || table.stairs;
      const destPt = table[dest.id] || table.stairs;
      points = [startPt, { x: (startPt.x + destPt.x) / 2, y: 220 }, destPt];
    }
  }
  return points;
}

function drawRouteOnMap(route) {
  let targetGroup = null;
  if (state.currentView === 'campus') targetGroup = document.getElementById('campusActivePathGroup');
  else if (state.currentView === 'main') targetGroup = document.getElementById('mainFloorActivePathGroup');
  else if (state.currentView === 'second') targetGroup = document.getElementById('secFloorActivePathGroup');

  if (!targetGroup) return;

  const points = getActivePathPoints(route);
  if (points.length < 2) return;

  const pathD = points.reduce((acc, pt, idx) => {
    return idx === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`;
  }, '');

  targetGroup.innerHTML = `
    <path d="${pathD}" class="navigation-path-glow"/>
    <path d="${pathD}" class="navigation-path"/>
    <g transform="translate(${points[0].x}, ${points[0].y})">
      <circle cx="0" cy="0" r="14" fill="#10b981" opacity="0.3" class="beacon-pulse"/>
      <circle cx="0" cy="0" r="7" fill="#10b981" stroke="#ffffff" stroke-width="2"/>
    </g>
    <g transform="translate(${points[points.length - 1].x}, ${points[points.length - 1].y})">
      <circle cx="0" cy="0" r="16" fill="#f43f5e" opacity="0.4" class="beacon-pulse"/>
      <circle cx="0" cy="0" r="8" fill="#f43f5e" stroke="#ffffff" stroke-width="2"/>
    </g>
  `;
}

/**
 * Animated Walking Avatar Simulation
 */
function startWalkingSimulation() {
  if (!state.activeRoute) return;
  sfx.playClick();

  const points = getActivePathPoints(state.activeRoute);
  if (points.length < 2) return;

  const avatarGroup = document.getElementById('simAvatarGroup');
  if (!avatarGroup) return;

  let progress = 0;
  let segment = 0;
  const speed = 0.015;

  if (state.simAnimationId) cancelAnimationFrame(state.simAnimationId);

  function stepSim() {
    progress += speed;
    if (progress >= 1) {
      progress = 0;
      segment++;
    }

    if (segment >= points.length - 1) {
      // Completed walk
      avatarGroup.innerHTML = '';
      if (state.sfxEnabled) sfx.playRouteFound();
      return;
    }

    const pA = points[segment];
    const pB = points[segment + 1];
    const curX = pA.x + (pB.x - pA.x) * progress;
    const curY = pA.y + (pB.y - pA.y) * progress;

    avatarGroup.innerHTML = `
      <g transform="translate(${curX}, ${curY})">
        <circle cx="0" cy="0" r="16" fill="rgba(56, 189, 248, 0.45)" class="beacon-pulse"/>
        <circle cx="0" cy="0" r="8" fill="#38bdf8" stroke="#ffffff" stroke-width="2.5"/>
        <text x="0" y="-12" font-size="11" font-weight="800" fill="#38bdf8" text-anchor="middle">YOU</text>
      </g>
    `;

    state.simAnimationId = requestAnimationFrame(stepSim);
  }

  state.simAnimationId = requestAnimationFrame(stepSim);
}

// ============================================================================
// ROUTE EXECUTION & SPEECH GUIDANCE
// ============================================================================

function executeRoutePlanning(startId, destId) {
  const route = calculateRoute(startId, destId);
  if (!route) return;

  state.activeRoute = route;
  sfx.playRouteFound();

  // Metrics update
  document.getElementById('routeEtaValue').textContent = route.time;
  document.getElementById('routeDistanceValue').textContent = route.distance;
  document.getElementById('routeElevationValue').textContent = `${CAMPUS_DATA.buildings[route.dest.building]?.code || 'CP'} • Fl ${route.dest.floor}`;

  // Render Steps Timeline
  const timeline = document.getElementById('stepsTimelineContainer');
  if (timeline) {
    timeline.innerHTML = route.steps.map((s, idx) => `
      <div class="timeline-item step-card ${idx === 0 ? 'active active-step' : ''} ${idx === route.steps.length - 1 ? 'dest dest-step' : ''}" data-step-idx="${idx}">
        <div class="step-marker step-indicator-col">
          <div class="step-badge-circle step-badge">${s.num}</div>
          ${idx < route.steps.length - 1 ? '<div class="step-connector step-trail-line"></div>' : ''}
        </div>
        <div class="step-info step-text-body">
          <div class="step-title step-instruction-text">${s.instruction}</div>
          <div class="step-desc step-hint-text">${s.detail}</div>
        </div>
      </div>
    `).join('');

    timeline.querySelectorAll('.timeline-item, .step-card').forEach(card => {
      card.addEventListener('click', () => {
        sfx.playClick();
        timeline.querySelectorAll('.timeline-item, .step-card').forEach(c => {
          c.classList.remove('active');
          c.classList.remove('active-step');
        });
        card.classList.add('active');
        card.classList.add('active-step');
      });
    });
  }

  // Switch to destination view
  if (route.dest.building === 'main') {
    switchView('main', route.dest.floor === 'Outdoor' ? 'G' : route.dest.floor);
  } else if (route.dest.building === 'second') {
    switchView('second', route.dest.floor);
  } else {
    switchView('campus');
  }

  if (state.voiceEnabled) {
    speakInstructions(route);
  }
}

function speakInstructions(route) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();

  const speechText = `Route planned from ${route.start.name} to ${route.dest.name}. Total distance ${route.distance}. First: ${route.steps[0].instruction}`;
  const utterance = new SpeechSynthesisUtterance(speechText);
  utterance.rate = 1.0;
  window.speechSynthesis.speak(utterance);
}

// ============================================================================
// DIRECTORY & COMMAND PALETTE (Ctrl+K)
// ============================================================================

function populateDirectory(filter = 'all') {
  const list = document.getElementById('directoryList');
  if (!list) return;
  let filtered = CAMPUS_DATA.locations;

  if (filter !== 'all') {
    filtered = CAMPUS_DATA.locations.filter(loc => loc.category === filter);
  }

  list.innerHTML = filtered.map(loc => `
    <div class="directory-row dir-entry-card" data-id="${loc.id}">
      <div class="dir-left dir-entry-left">
        <div class="dir-icon-box dir-entry-icon">${loc.icon || '📍'}</div>
        <div>
          <div class="dir-name dir-entry-name">${loc.name}</div>
          <div class="dir-sub dir-entry-loc">
            ${loc.code ? '<code>' + loc.code + '</code> • ' : ''}${loc.building === 'main' ? 'Main Academic Bldg' : loc.building === 'second' ? 'Second Academic Bldg' : 'Campus Grounds'} • Floor ${loc.floor}
          </div>
        </div>
      </div>
      <div class="dir-arrow dir-entry-nav-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
    </div>
  `).join('');

  list.querySelectorAll('.directory-row, .dir-entry-card').forEach(card => {
    card.addEventListener('click', () => {
      const locId = card.dataset.id;
      const loc = locationMap.get(locId);
      if (loc) {
        if (loc.building === 'main') switchView('main', loc.floor === 'Outdoor' ? 'G' : loc.floor);
        else if (loc.building === 'second') switchView('second', loc.floor);
        else switchView('campus');

        handleMapLocationClick(locId);
      }
    });
  });
}

function setupCommandPalette() {
  const overlay = document.getElementById('cmdPaletteOverlay');
  const input = document.getElementById('cmdInput');
  const results = document.getElementById('cmdResultsList');
  const triggerBtn = document.getElementById('searchTriggerBtn');

  function openCmd() {
    sfx.playClick();
    overlay.classList.remove('hidden');
    input.value = '';
    renderCmdResults('');
    setTimeout(() => input.focus(), 50);
  }

  function closeCmd() {
    overlay.classList.add('hidden');
  }

  triggerBtn.addEventListener('click', openCmd);

  // Keyboard shortcut Ctrl+K or /
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement !== input)) {
      e.preventDefault();
      openCmd();
    } else if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
      closeCmd();
    }
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeCmd();
  });

  input.addEventListener('input', (e) => {
    renderCmdResults(e.target.value.trim().toLowerCase());
  });

  function renderCmdResults(query) {
    let filtered = CAMPUS_DATA.locations;
    if (query) {
      filtered = CAMPUS_DATA.locations.filter(loc => 
        loc.name.toLowerCase().includes(query) ||
        (loc.code && loc.code.toLowerCase().includes(query)) ||
        (loc.desc && loc.desc.toLowerCase().includes(query))
      );
    }

    if (filtered.length === 0) {
      results.innerHTML = `
        <div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 0.86rem;">
          No matching departments, offices, or facilities found for "${query}".
        </div>
      `;
      return;
    }

    results.innerHTML = filtered.map((loc, idx) => `
      <div class="cmd-item ${idx === 0 ? 'selected' : ''}" data-id="${loc.id}">
        <div class="cmd-item-left">
          <span class="cmd-item-icon">${loc.icon || '📍'}</span>
          <div class="cmd-item-text">
            <strong>${loc.name}</strong>
            <span>${loc.building === 'main' ? 'Main Academic Building' : loc.building === 'second' ? 'Second Academic Building' : 'Campus'} • Floor ${loc.floor}</span>
          </div>
        </div>
        <span class="cmd-item-badge">${loc.code || 'LOCATION'}</span>
      </div>
    `).join('');

    results.querySelectorAll('.cmd-item').forEach(item => {
      item.addEventListener('click', () => {
        const locId = item.dataset.id;
        const loc = locationMap.get(locId);
        closeCmd();
        if (loc) {
          if (loc.building === 'main') switchView('main', loc.floor === 'Outdoor' ? 'G' : loc.floor);
          else if (loc.building === 'second') switchView('second', loc.floor);
          else switchView('campus');

          handleMapLocationClick(locId);
        }
      });
    });
  }
}

// ============================================================================
// MAP INTERACTIVITY (Pan, Zoom, Fullscreen)
// ============================================================================

function setupMapInteractions() {
  const wrapper = document.getElementById('mapCanvasWrapper');
  const zoomIn = document.getElementById('zoomInBtn');
  const zoomOut = document.getElementById('zoomOutBtn');
  const resetBtn = document.getElementById('resetMapBtn');
  const fsBtn = document.getElementById('fullscreenToggleBtn');

  zoomIn.addEventListener('click', () => {
    sfx.playClick();
    state.zoomLevel = Math.min(state.zoomLevel + 0.25, 2.5);
    applyMapTransform();
  });

  zoomOut.addEventListener('click', () => {
    sfx.playClick();
    state.zoomLevel = Math.max(state.zoomLevel - 0.25, 0.75);
    applyMapTransform();
  });

  resetBtn.addEventListener('click', () => {
    sfx.playClick();
    state.zoomLevel = 1.0;
    state.panX = 0;
    state.panY = 0;
    applyMapTransform();
  });

  fsBtn.addEventListener('click', () => {
    sfx.playClick();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  });

  wrapper.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY > 0 ? -0.1 : 0.1;
    state.zoomLevel = Math.min(Math.max(state.zoomLevel + zoomFactor, 0.7), 2.5);
    applyMapTransform();
  }, { passive: false });

  wrapper.addEventListener('mousedown', (e) => {
    if (e.target.closest('.room-unit') || e.target.closest('.map-pill-btn') || e.target.closest('button')) return;
    state.isPanning = true;
    state.panStartX = e.clientX - state.panX;
    state.panStartY = e.clientY - state.panY;
  });

  window.addEventListener('mousemove', (e) => {
    if (!state.isPanning) return;
    state.panX = e.clientX - state.panStartX;
    state.panY = e.clientY - state.panStartY;
    applyMapTransform();
  });

  window.addEventListener('mouseup', () => {
    state.isPanning = false;
  });
}

// ============================================================================
// APP LIFECYCLE INITIALIZER
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initial Map View
  renderActiveMap();

  // 2. Building Selector Buttons
  document.querySelectorAll('#buildingSelector .pill-btn, #buildingSelector .map-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchView(btn.dataset.view, 'G');
    });
  });

  // 3. Sidebar Navigation Tabs
  document.querySelectorAll('.sidebar-tabs .tab-btn, .sidebar-segmented-control .nav-segment-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      sfx.playClick();
      const tabId = btn.dataset.tab;
      document.querySelectorAll('.sidebar-tabs .tab-btn, .sidebar-segmented-control .nav-segment-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-pane, .sidebar-tab-content').forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(tabId);
      if (targetPane) targetPane.classList.add('active');
    });
  });

  // Mobile Bottom Navigation Bar Tabs
  document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      sfx.playClick();
      if (btn.dataset.action === 'toggleMobileMap') {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) sidebar.classList.toggle('mobile-hidden');
        return;
      }
      const tabId = btn.dataset.tab;
      if (tabId) {
        document.querySelectorAll('.mobile-nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const deskTab = document.querySelector(`.sidebar-tabs .tab-btn[data-tab="${tabId}"]`);
        if (deskTab) deskTab.click();
      }
    });
  });

  // 4. Route Inputs & Action
  const startSelect = document.getElementById('startLocationSelect');
  const destSelect = document.getElementById('destLocationSelect');
  const getDirectionsBtn = document.getElementById('getDirectionsBtn');
  const swapBtn = document.getElementById('swapLocationsBtn');
  const simWalkBtn = document.getElementById('simWalkBtn');
  const speakStepsBtn = document.getElementById('speakStepsBtn');

  if (getDirectionsBtn) {
    getDirectionsBtn.addEventListener('click', () => {
      if (startSelect && destSelect) {
        executeRoutePlanning(startSelect.value, destSelect.value);
      }
    });
  }

  if (swapBtn && startSelect && destSelect) {
    swapBtn.addEventListener('click', () => {
      sfx.playClick();
      const temp = startSelect.value;
      startSelect.value = destSelect.value;
      destSelect.value = temp;
      executeRoutePlanning(startSelect.value, destSelect.value);
    });
  }

  if (simWalkBtn) {
    simWalkBtn.addEventListener('click', startWalkingSimulation);
  }

  if (speakStepsBtn) {
    speakStepsBtn.addEventListener('click', () => {
      if (state.activeRoute) speakInstructions(state.activeRoute);
    });
  }

  // 5. Shortcuts
  document.querySelectorAll('.shortcut-card').forEach(card => {
    card.addEventListener('click', () => {
      sfx.playClick();
      const locId = card.dataset.loc;
      if (destSelect) destSelect.value = locId;
      executeRoutePlanning(startSelect ? startSelect.value : 'parking', locId);
    });
  });

  // 6. Directory filters
  document.querySelectorAll('.filter-btn, .dir-filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      sfx.playClick();
      document.querySelectorAll('.filter-btn, .dir-filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      populateDirectory(pill.dataset.filter);
    });
  });
  populateDirectory('all');

  // 7. Inspector Drawer Buttons
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeLocationDrawer);

  const drawerNavBtn = document.getElementById('drawerNavigateToBtn');
  if (drawerNavBtn) {
    drawerNavBtn.addEventListener('click', () => {
      if (state.selectedLocation) {
        if (destSelect) destSelect.value = state.selectedLocation.id;
        executeRoutePlanning(startSelect ? startSelect.value : 'parking', state.selectedLocation.id);
        closeLocationDrawer();
        const routeTab = document.querySelector('[data-tab="navRouteTab"]');
        if (routeTab) routeTab.click();
      }
    });
  }

  const drawerStartBtn = document.getElementById('drawerStartFromBtn');
  if (drawerStartBtn) {
    drawerStartBtn.addEventListener('click', () => {
      if (state.selectedLocation) {
        if (startSelect) startSelect.value = state.selectedLocation.id;
        closeLocationDrawer();
        const routeTab = document.querySelector('[data-tab="navRouteTab"]');
        if (routeTab) routeTab.click();
      }
    });
  }

  // 8. Audio Controls
  const sfxBtn = document.getElementById('sfxToggleBtn');
  const sfxOn = document.getElementById('sfxIconOn');
  const sfxOff = document.getElementById('sfxIconOff');
  if (sfxBtn) {
    sfxBtn.addEventListener('click', () => {
      state.sfxEnabled = !state.sfxEnabled;
      sfx.enabled = state.sfxEnabled;
      sfxBtn.classList.toggle('active', state.sfxEnabled);
      if (sfxOn) sfxOn.classList.toggle('hidden', !state.sfxEnabled);
      if (sfxOff) sfxOff.classList.toggle('hidden', state.sfxEnabled);
    });
  }

  const voiceBtn = document.getElementById('voiceToggleBtn');
  const voiceOn = document.getElementById('voiceIconOn');
  const voiceOff = document.getElementById('voiceIconOff');
  if (voiceBtn) {
    voiceBtn.addEventListener('click', () => {
      state.voiceEnabled = !state.voiceEnabled;
      voiceBtn.classList.toggle('active', state.voiceEnabled);
      if (voiceOn) voiceOn.classList.toggle('hidden', !state.voiceEnabled);
      if (voiceOff) voiceOff.classList.toggle('hidden', state.voiceEnabled);
      if (!state.voiceEnabled && 'speechSynthesis' in window) window.speechSynthesis.cancel();
    });
  }

  const themeBtn = document.getElementById('themeToggleBtn');
  const sunIcon = document.getElementById('themeIconSun');
  const moonIcon = document.getElementById('themeIconMoon');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      sfx.playClick();
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      document.body.classList.toggle('theme-light', state.theme === 'light');
      if (sunIcon) sunIcon.classList.toggle('hidden', state.theme === 'dark');
      if (moonIcon) moonIcon.classList.toggle('hidden', state.theme === 'light');
      renderActiveMap();
    });
  }

  // 9. Command Palette & Interactions
  setupCommandPalette();
  setupMapInteractions();

  // 10. Initial Route Demonstration
  executeRoutePlanning('parking', 'mba');

  // 11. PWA Service Worker & Install Prompt
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(err => console.log('SW registration error:', err));
  }

  let deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const installBtn = document.getElementById('pwaInstallBtn');
    if (installBtn) installBtn.classList.remove('hidden');
  });

  const installBtn = document.getElementById('pwaInstallBtn');
  if (installBtn) {
    installBtn.addEventListener('click', async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
          installBtn.classList.add('hidden');
        }
        deferredPrompt = null;
      }
    });
  }
});
