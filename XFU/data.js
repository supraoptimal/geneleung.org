// Orthopaedic OPD Survival Guide — Structured Content Data
// Auto-generated from OPD_Survival_Guide_v6.docx

const GUIDE_DATA = {
  meta: {
    title: "XFU",
    subtitle: "Orthopaedic Clinic Survival Guide",
    description: "A Practical Reference for Junior Residents",
    revision: "",
    disclaimer: "This is a clinician-authored educational reference for junior orthopaedic residents. It is not a substitute for clinical judgement, senior supervision, or institutional guidelines. Content reflects general principles and may include local practice elements that require verification. When in doubt, discuss with a senior colleague.",
    footerDisclaimer: "Educational reference only. Not formal medical advice. Confirm local protocols before acting. Use clinical judgement. Discuss with a senior colleague when uncertain.",
    protocolCaveat: "These protocols are summaries for quick reference. Always confirm the surgeon's specific instructions and the documented rehabilitation plan before initiating treatment.",
    introText: [
      "This document serves as a practical guide for junior residents who are new to the practice of orthopaedic surgery in a public hospital in Hong Kong. It is intended to be a concise, accessible reference for use during outpatient clinic sessions.",
      "The first years of working in orthopaedics can be overwhelming. Patients present with a wide variety of conditions, many of which may not have been encountered during medical school or internship. Each doctor exercises a high degree of autonomy in the clinic and may face unanticipated situations requiring prompt decision-making.",
      "This guide introduces a general approach for managing common complaints in orthopaedic surgery, with an emphasis on non-operative management. It draws primarily from clinician experience and published literature, and references existing department guidelines where available.",
      "Each section is purposely kept to one to two pages for ease of reference. This guide is not intended to be either definitive or comprehensive. It is a starting point, not a substitute for clinical judgement, up-to-date literature, or senior guidance."
    ],
    contentDisclaimer: "Many of the recommendations in this guide reflect the personal opinion and practice of the author. While efforts have been made to ensure accuracy, the reader should exercise clinical judgement when applying these recommendations. Every patient is different and every condition, no matter how common, may entail subtleties that require individualised management. This document is not an official institutional protocol. It does not represent the formal policy of any specific department or hospital cluster. References are provided where available and a reference list is included at the end of this guide. No monetary benefits are gained from producing or distributing this document."
  },

  generalPrinciples: [
    "Establish or confirm the diagnosis through history, physical examination, and investigations.",
    "Assess disease severity and progression at each visit.",
    {
      text: "Examine patients with a chaperone (preferably one who is of the same sex as the patient).",
      sub: [
        "Especially when examining younger members of the opposite sex, sensitive body regions, and whenever the patient requests one."
      ]
    },
    "Determine whether surgical intervention is indicated. Surgery can be arranged if there is an indication, the patient understands his or her condition and the options available, and the patient is willing to proceed.",
    {
      text: "When referring a patient to a subspecialist clinic, consider whether the patient is a surgical candidate. Subspecialist consultation is not required to determine this.",
      sub: [
        "If the patient does not have a clear surgical indication or would not want surgery, the referral may add to the patient\u2019s waiting time without benefit."
      ]
    },
    "For post-operative cases or those discharged after admission, check whether a long-term plan or rehabilitation plan is documented. It may be found in the operative record or clinical notes.",
    {
      text: "If no further surgical intervention is indicated, decide whether continued orthopaedic specialist care is required.",
      sub: [
        "If not, close the case with or without referral to the general outpatient clinic (GOPC).",
        "If follow-up is required, decide on the appropriate follow-up interval based on the patient\u2019s condition, with consideration to the clinic quota."
      ]
    },
    "When in doubt, consult a senior colleague."
  ],

  categories: [
    {
      id: "common-complaints",
      title: "Common Complaints",
      description: "Approach to common presenting complaints in orthopaedic outpatient clinics",
      sections: [
        "fractures",
        "ulcers-wounds",
        "neck-back-pain",
        "hip-knee-pain",
        "shoulder-pain",
        "foot-ankle-pain",
        "hand-wrist-elbow",
        "tumours",
        "paediatric-conditions"
      ]
    },
    {
      id: "common-issues",
      title: "Common Issues",
      description: "Frequently encountered clinical and administrative issues",
      sections: [
        "fragility-fractures",
        "pain-medication",
        "implants",
        "mri",
        "sick-leave"
      ]
    },
    {
      id: "rehabilitation",
      title: "Rehabilitation",
      description: "Fracture rehabilitation and post-operative protocols",
      sections: [
        "fracture-rehab",
        "post-op-protocols"
      ]
    }
  ],

  sections: [
    // =========================================================================
    // PART I: COMMON COMPLAINTS
    // =========================================================================
    {
      id: "fractures",
      title: "Fractures",
      category: "common-complaints",
      tags: ["fracture", "alignment", "union", "cast", "brace", "K-wire", "weight-bearing", "mobilisation", "callus", "displacement", "follow-up"],
      note: "There is wide variability in fracture pattern and stability. This section excludes paediatric fractures and geriatric hip fractures, for which department-specific guidelines should be consulted.",
      blocks: [
        {
          type: "assessment",
          title: "The Initial Follow-Up (Alignment Check) ~1\u20132 Weeks Post-Injury",
          content: [
            "Assess soft tissue condition and distal neurovascular status.",
            "Check that fracture alignment has been maintained.",
            { text: "At this juncture, a soft callus has not yet formed, so the fracture remains amenable to surgical correction if displacement is significant.", sub: [] },
            "For non-operative cases, ensure compliance and the absence of cast or brace complications.",
            "For operated cases, inspect the wound and remove stitches (around D14) as appropriate."
          ]
        },
        {
          type: "assessment",
          title: "The Next Follow-Up (Confirming Union) ~6\u20138 Weeks Post-Injury",
          content: [
            "Radiological evidence of healing (e.g. callus formation) may be expected around this time.",
            "Casts and percutaneous K-wires are usually removed, and braces weaned off at this point, unless otherwise specified or unless there is concern for delayed union.",
            "For upper limb fractures, consider stepping up range and intensity of mobilisation.",
            "For lower limb fractures, consider advancing weight-bearing status."
          ]
        },
        {
          type: "callout-box",
          content: [
            "If there is particular concern for fracture alignment, brace/cast compliance or implants, it would be reasonable to arrange an additional follow-up between these two intervals."
          ]
        },
        {
          type: "assessment",
          title: "Subsequent Follow-Ups",
          content: [
            "Beyond 8 weeks post-injury, fracture consolidation may be expected and therapy can be intensified.",
            "Given no complicating factors, the fracture may undergo remodelling for up to 1\u20132 years post-injury. Follow-up can be arranged at successively longer intervals.",
            "The follow-up interval will also depend on other patient factors, such as whether sick leave needs to be continued.",
            "Refer to the Implants section for implant-related issues."
          ]
        },
        {
          type: "section-link",
          targetId: "fracture-rehab",
          label: "Fracture Rehabilitation"
        }
      ]
    },

    {
      id: "ulcers-wounds",
      title: "Ulcers & Wounds",
      category: "common-complaints",
      tags: ["ulcer", "wound", "dehiscence", "infection", "stitches", "staples", "osteomyelitis", "Marjolin", "antibiotics", "wound care", "diabetic foot"],
      note: "Please also refer to department guidelines on diabetic foot ulceration where available.",
      blocks: [
        {
          type: "assessment",
          title: "The Initial Follow-Up",
          content: [
            "Examine the wound and consider removing stitches or staples if the wound has healed (around day 14 for the limbs).",
            {
              text: "If dehiscence is a concern (such as amputation stumps), remove stitches at day 21.",
              sub: [
                "Optionally, remove alternate stitches at day 14 and the remainder at day 21."
              ]
            }
          ]
        },
        {
          type: "assessment",
          title: "The Next Follow-Up",
          content: [
            "Close the case if the wound has healed without sequelae.",
            {
              text: "If the wound has not healed, re-examine and consider the following:",
              sub: [
                "Assess for underlying conditions (venous, arterial, neuropathic, pressure). Refer to the appropriate specialty (vascular or medical) if indicated.",
                "Obtain a wound swab for culture.",
                "If early signs of infection are present, consider a course of empirical oral antibiotics, tailored according to sensitivities. Common first-line agents include co-amoxiclav, clindamycin, or ciprofloxacin (depending on the clinical context)."
              ]
            }
          ]
        },
        {
          type: "assessment",
          title: "Subsequent Follow-Ups",
          content: [
            "Close the case if the wound has healed without sequelae.",
            {
              text: "For persistent non-healing wounds:",
              sub: [
                "Refer to the wound nurse for larger or complicated wounds. Arrange early follow-up or follow-up in conjunction with the wound team.",
                "Consider an ulcer biopsy (4-corner) for long-standing ulcers with irregular edges worrisome of malignancy (Marjolin\u2019s ulcer).",
                "Obtain X-rays if there is suspicion of osteomyelitis. For florid infection, abscess formation, or systemic infection, consider admission for parenteral antibiotics.",
                "Book regional contrast CT if there are signs of a deeper collection."
              ]
            }
          ]
        },
        {
          type: "figure",
          title: "Figure 1",
          filename: "media/image1.jpg",
          caption: "Classification of chronic lower limb ulcers by aetiology.",
          attribution: "Singer AJ, Clark RAF. Cutaneous wound healing. N Engl J Med. 1999;341(10):738\u2013746. [ref:17]"
        }
      ]
    },

    {
      id: "neck-back-pain",
      title: "Neck & Back Pain",
      category: "common-complaints",
      tags: ["spine", "cervical", "lumbar", "radiculopathy", "myelopathy", "stenosis", "disc herniation", "scoliosis", "OPLL", "TFESI", "Waddell", "back pain", "neck pain"],
      blocks: [
        {
          type: "assessment",
          title: "Clinical Assessment",
          content: [
            "Establish a clinical diagnosis by history and physical examination.",
            "Look for red-flag signs and symptoms: sphincter disturbances, saddle anaesthesia, deteriorating neurology, fever, weight loss, history of malignancy.",
            "Distinguish between neurogenic and vascular claudication."
          ]
        },
        {
          type: "red-flags",
          title: "Red Flags",
          content: [
            "Sphincter disturbances",
            "Saddle anaesthesia",
            "Deteriorating neurology",
            "Fever",
            "Weight loss",
            "History of malignancy"
          ]
        },
        {
          type: "imaging",
          title: "Imaging",
          content: [
            "Dynamic X-rays to assess for segmental instability.",
            "Scoliosis lateral view (standing) to assess spino-pelvic alignment.",
            "Plain MRI to evaluate for neurological compression.",
            "Plain CT to look for OPLL if X-ray features are suspicious."
          ]
        },
        {
          type: "investigations",
          title: "Excluding Insidious Pathology",
          content: [
            "Blood tests: CBC, LRFT, CRP, ESR, SPE, RF, HLA-B27.",
            "Regional contrast MRI with whole spine sagittal screening.",
            "Bone scan or PET-CT."
          ]
        },
        {
          type: "assessment",
          title: "If Imaging Does Not Correlate with Clinical Findings",
          content: [
            "Consider an alternate diagnosis and look for Waddell signs.",
            "Trial of conservative treatment with or without TFESI, and repeat imaging.",
            "Refer to the pain clinic if no clear orthopaedic cause for symptoms is identifiable."
          ]
        },
        {
          type: "natural-history",
          title: "Natural History of Common Degenerative Conditions",
          content: [
            "Explaining the natural history of disease is important for shared decision-making:",
            "Cervical radiculopathy: 43% asymptomatic, 29% mild, 27% disabling pain, 0% myelopathy at follow-up. [ref:12]",
            "Cervical myelopathy: 75% stepwise deterioration, 20% slow, 5% rapid progression. [ref:3]",
            "Lumbar stenosis: 70% stable, 15% improved, 15% deteriorate. [ref:10]",
            "Herniated lumbar disc with radiculopathy: 25% cured, 36% improved; surgery superior at 1 year but not at 4 years. [ref:18]"
          ]
        },
        {
          type: "surgical-indications",
          title: "Surgical Indications",
          content: [
            "Surgery can be discussed when clinical signs and symptoms correlate with radiological evidence of compression or instability.",
            "If the patient is willing to proceed, contact the team senior for booking."
          ]
        },
        {
          type: "management",
          title: "Conservative Management",
          content: [
            "General advice: postural care, weight loss, regular exercise.",
            "Physiotherapy: core and back strengthening, nerve-gliding exercises.",
            "Pharmacological: refer to the [link:pain-medication|Pain Medication section]."
          ]
        },
        {
          type: "disposition",
          title: "Discharge",
          content: [
            "Consider whether continued specialist care is required. Otherwise, discharge to general out-patient clinic, or close the case."
          ]
        }
      ]
    },

    {
      id: "hip-knee-pain",
      title: "Hip & Knee Pain",
      category: "common-complaints",
      tags: ["hip", "knee", "arthritis", "meniscus", "cruciate", "ACL", "AVN", "SONK", "OCD", "arthroplasty", "groin pain", "claudication", "scannogram"],
      blocks: [
        {
          type: "assessment",
          title: "Clinical Assessment",
          content: [
            "Establish a clinical diagnosis by history and physical examination.",
            "Assess the patient\u2019s function (e.g. level-ground tolerance, stairs, self-hygiene).",
            "Differentiate hip pathology (groin pain) from spinal pathology (buttock pain).",
            "Differentiate lower limb pain from spinal or vascular claudication."
          ]
        },
        {
          type: "imaging",
          title: "Imaging",
          content: [
            "AP and lateral standing X-rays (of hip or knee as appropriate).",
            "Scannogram (lower limb length) for leg-length discrepancy or angular deformity.",
            "Skyline view for patellofemoral joint (PFJ) arthritis.",
            "Tunnel view for suspected loose bodies in the knee.",
            "Merchant or Laurin view for PFJ instability."
          ]
        },
        {
          type: "investigations",
          title: "Investigations",
          content: [
            "Exclude inflammatory and metabolic conditions: CRP, ESR, CaPO\u2084, urate, rheumatoid markers.",
            {
              text: "Arrange MRI in selected cases:",
              sub: [
                "Suspicion of acute traumatic soft tissue injury (meniscal tears, ligamentous injury, femoroacetabular impingement).",
                "Suspicion of insidious pathology (tumour, infection).",
                "Suspicion of vascular or cartilaginous pathology (AVN, SONK, OCD)."
              ]
            }
          ]
        },
        {
          type: "surgical-indications",
          title: "Surgical Indications",
          content: [
            "End-stage arthritis that has failed conservative treatment.",
            "Symptomatic cruciate instability and acute meniscal tears with locking."
          ]
        },
        {
          type: "management",
          title: "Conservative Management",
          content: [
            "General advice: weight control, appropriate exercises, activity modification.",
            "Orthotics: bracing.",
            "Physiotherapy: stretching and strengthening exercises; walking aids.",
            "Pharmacological: refer to the [link:pain-medication|Pain Medication section]."
          ]
        },
        {
          type: "disposition",
          title: "Discharge",
          content: [
            "Consider whether continued specialist care is required. Otherwise, discharge to general clinic, GOPC, or close the case."
          ]
        }
      ]
    },

    {
      id: "shoulder-pain",
      title: "Shoulder Pain",
      category: "common-complaints",
      tags: ["shoulder", "rotator cuff", "frozen shoulder", "instability", "ACJ", "Bankart", "Hill-Sachs", "impingement", "MUA", "capsular release", "labral", "MRA", "dislocation"],
      blocks: [
        {
          type: "assessment",
          title: "Clinical Assessment",
          content: [
            "Establish a clinical diagnosis by history and examination.",
            "Differentiate between cuff pathology, frozen shoulder, and ACJ arthritis (these can coexist).",
            "Differentiate shoulder pain from cervical spine pathology (can co-exist).",
            "Assess the effect on the patient\u2019s function (overhead activities, ADL)."
          ]
        },
        {
          type: "imaging",
          title: "Imaging",
          content: [
            "AP and scapular Y views: assess acromiohumeral interval, calcifications, cuff arthropathy, acromion morphology.",
            "Axillary lateral view: assess for dislocation.",
            "West-Point and Stryker Notch views: Bankart and Hill-Sachs lesions.",
            "Zanca and weight-bearing views: ACJ instability."
          ]
        },
        {
          type: "imaging",
          title: "Further Imaging",
          content: [
            {
              text: "Plain MRI or MR arthrogram for shoulder instability and rotator cuff tears.",
              sub: [
                "MRA remains the gold standard for labral tears, though 3.0-T MRI approaches comparable sensitivity. [ref:13]"
              ]
            },
            "USG: helpful to confirm rotator cuff tears; typically available earlier than MRI in public hospitals. Not sufficient for pre-operative planning."
          ]
        },
        {
          type: "investigations",
          title: "Investigations",
          content: [
            "Exclude inflammatory and metabolic conditions: CRP, ESR, CaPO\u2084, urate, rheumatoid markers."
          ]
        },
        {
          type: "natural-history",
          title: "Natural History",
          content: [
            "Frozen shoulder: MUA, capsular release, and structured physiotherapy show equivalent outcomes at 1 year. [ref:16]",
            "Traumatic anterior shoulder instability: Recurrence rates: 72% in ages 12\u201320, 56% in 20s, 27% in over 30s. [ref:8]"
          ]
        },
        {
          type: "surgical-indications",
          title: "Surgical Indications",
          content: [
            "End-stage arthritis that has failed conservative treatment.",
            "Recurrent or progressive instability.",
            "Symptomatic and progressive cuff tears affecting function."
          ]
        },
        {
          type: "management",
          title: "Conservative Management",
          content: [
            "General advice: activity modification.",
            "Physiotherapy: stretching and strengthening exercises.",
            "Pharmacological: corticosteroid injection, PRP, oral analgesia (refer to [link:pain-medication|Pain Medication section])."
          ]
        },
        {
          type: "disposition",
          title: "Discharge",
          content: [
            "Consider whether continued specialist care is required. Otherwise, discharge to general clinic, GOPC, or close the case."
          ]
        }
      ]
    },

    {
      id: "foot-ankle-pain",
      title: "Foot & Ankle Pain",
      category: "common-complaints",
      tags: ["foot", "ankle", "hallux valgus", "plantar fasciitis", "Achilles", "gout", "OCD", "pes planus", "bunion", "MTPJ", "ATFL", "sprain"],
      blocks: [
        {
          type: "assessment",
          title: "Clinical Assessment",
          content: [
            "Establish a clinical diagnosis by history and physical examination.",
            "Note walking aids and footwear.",
            "Assess foot hygiene (onychomycosis) and vascular status.",
            "Look for features of inflammatory conditions (RA, gout, pseudogout).",
            "Assess the effect on the patient\u2019s function and shoeability."
          ]
        },
        {
          type: "assessment",
          title: "Common Conditions to Consider",
          content: [
            "Forefoot: hallux valgus, MTPJ arthritis, lesser toe deformity, gout.",
            "Midfoot: pes planus (posterior tibial tendon dysfunction).",
            "Hindfoot: plantar fasciitis, retrocalcaneal bursitis, Achilles tendinopathy.",
            "Ankle: osteoarthritis, ankle sprain, osteochondral defect."
          ]
        },
        {
          type: "imaging",
          title: "Imaging",
          content: [
            "DP and DP oblique: hallux valgus angles, MTPJ condition, lesser toes.",
            "Ankle mortise/AP: tibiotalar osteoarthritis, syndesmosis, OCD.",
            "Lateral standing ankle: medial foot arch, Haglund\u2019s deformity, Achilles tendon calcification."
          ]
        },
        {
          type: "investigations",
          title: "Investigations",
          content: [
            "Exclude inflammatory and metabolic conditions if clinically suggestive: CRP, ESR, CaPO\u2084, urate, rheumatoid markers.",
            {
              text: "Arrange MRI in selected cases:",
              sub: [
                "Suspicion of ligamentous pathology (ATFL, CFL, PTFL, deltoid).",
                "Suspicion of tendinopathy (tibialis posterior, peroneal tendon).",
                "Suspicion of insidious pathology (tumour, infection).",
                "Suspicion of vascular or cartilaginous pathology (OCD, AVN, metatarsal infarction)."
              ]
            }
          ]
        },
        {
          type: "surgical-indications",
          title: "Surgical Indications",
          content: [
            "Failed conservative treatment.",
            "Increasing pain and progressive deformity.",
            "Complications arising from deformity (ulceration, impaired function or mobility)."
          ]
        },
        {
          type: "management",
          title: "Conservative Management",
          content: [
            "General advice: weight control, shoe modification, foot hygiene.",
            "Orthotics: insoles, arch support, toe spacers and splints.",
            "Physiotherapy: stretching, strengthening, walking aids.",
            "Podiatry: pathological toenail management.",
            "Pharmacological: refer to the [link:pain-medication|Pain Medication section]."
          ]
        },
        {
          type: "disposition",
          title: "Discharge",
          content: [
            "Consider whether continued specialist care is required. Otherwise, discharge to general clinic, GOPC, or close the case."
          ]
        }
      ]
    },

    {
      id: "hand-wrist-elbow",
      title: "Hand, Wrist & Elbow Problems",
      category: "common-complaints",
      tags: ["hand", "wrist", "elbow", "carpal tunnel", "cubital tunnel", "trigger finger", "CMCJ", "TFCC", "tennis elbow", "epicondylitis", "tendinitis", "NCS", "EMG", "splint"],
      blocks: [
        {
          type: "assessment",
          title: "Clinical Assessment",
          content: [
            "Establish a clinical diagnosis by history and physical examination.",
            "Assess the effect on the patient\u2019s function (feeding, self-hygiene, writing, work).",
            "Look for features of inflammatory conditions (RA, gout, pseudogout).",
            "Distinguish upper limb deficits from cervical pathology (can co-exist)."
          ]
        },
        {
          type: "imaging",
          title: "Imaging",
          content: [
            "PA and lateral wrist, or AP and lateral elbow.",
            "Robert\u2019s view for first CMCJ.",
            "Compare X-rays with the opposite side in case of doubt."
          ]
        },
        {
          type: "imaging",
          title: "Further Imaging",
          content: [
            "USG: confirms tendinopathies and tendon ruptures; demonstrates compressive neuropathy and establishes structural continuity.",
            "MRI: delineation of ligamentous pathology (TFCC); suspicion of insidious pathology (tumour, infection); suspicion of vascular or cartilaginous pathology (AVN, OCD)."
          ]
        },
        {
          type: "investigations",
          title: "Investigations",
          content: [
            "Exclude inflammatory and metabolic conditions if clinically suggestive: CRP, ESR, CaPO\u2084, urate, rheumatoid markers.",
            "Order nerve conduction studies (EMG and NCS) when neuropathies are suspected, prior to surgical management (e.g. carpal tunnel syndrome, cubital tunnel syndrome, post-nerve injury)."
          ]
        },
        {
          type: "surgical-indications",
          title: "Surgical Indications",
          content: [
            "Failed conservative treatment.",
            "Worsening pain, dysfunction, or progressive deformity."
          ]
        },
        {
          type: "management",
          title: "Conservative Management",
          content: [
            "General advice: activity modification.",
            "Physiotherapy and occupational therapy.",
            {
              text: "Splintage:",
              sub: [
                "Thumb spica splint for CMCJ osteoarthritis.",
                "Sugar tong splint for TFCC sprains.",
                "Nocturnal splint for carpal and cubital tunnel syndrome.",
                "Counter-force brace for lateral epicondylitis (tennis elbow)."
              ]
            },
            "Upper limb rehabilitation, including hypertrophic scar management.",
            {
              text: "Pharmacological: refer to [link:pain-medication|Pain Medication section].",
              sub: [
                "Corticosteroid injections for trigger fingers or tendinitis (up to 3 injections; risk of tendon attrition and rupture with repeated injections)."
              ]
            }
          ]
        },
        {
          type: "disposition",
          title: "Discharge",
          content: [
            "Consider whether continued specialist care is required. Otherwise, discharge to general clinic, GOPC, or close the case."
          ]
        }
      ]
    },

    {
      id: "tumours",
      title: "Tumours (Including Lumps & Bumps)",
      category: "common-complaints",
      tags: ["tumour", "tumor", "lump", "sarcoma", "biopsy", "malignancy", "lipoma", "ganglion", "staging", "oncology", "PET-CT", "bone scan"],
      blocks: [
        {
          type: "assessment",
          title: "Clinical Assessment",
          content: [
            "Consider age, family history, and past medical history (malignancy, immunocompromised status).",
            "Lesion history: duration, rate of growth, number, pain.",
            "Examination: site, size, consistency, skin changes, mobility, pulsatility, tenderness, Tinel\u2019s sign."
          ]
        },
        {
          type: "red-flags",
          title: "Concerning Features",
          content: [
            ">5 cm",
            "Deep to fascia",
            "Growing in size",
            "Painful. [ref:7]"
          ]
        },
        {
          type: "imaging",
          title: "Imaging for Diagnosis and Local Staging",
          content: [
            "Contrast MRI: investigation of choice for larger and deeper lesions.",
            "USG: usually suffices for superficial or subcutaneous lesions.",
            "X-ray: deeper lesions with suspected bony involvement.",
            "Skeletal survey: suspected polyostotic lesions.",
            "Plain CT: if there is significant bony involvement."
          ]
        },
        {
          type: "investigations",
          title: "Systemic Staging",
          content: [
            "PET-CT or bone scan.",
            "Chest X-ray (for SCC, BCC, melanoma, aggressive primary bone tumours).",
            "Blood tests including tumour and inflammatory markers."
          ]
        },
        {
          type: "surgical-indications",
          title: "Surgical Indications",
          content: [
            "Excisional biopsy under LA for smaller, superficial lesions without suspicious features.",
            "Excisional biopsy under GA for larger or deeper lesions without suspicious features (seek senior opinion)."
          ]
        },
        {
          type: "note",
          title: "Tumour Principle",
          content: [
            "The biopsy should ideally be performed by the surgeon who will carry out the definitive surgery."
          ]
        },
        {
          type: "escalation",
          title: "Extra-Departmental Referral",
          content: [
            "Oncology: if features are suggestive of an aggressive tumour, especially primary tumours.",
            "Tertiary tumour centre: if features are worrisome for aggressive primary tumour or isolated secondary amenable to resection (seek senior opinion)."
          ]
        },
        {
          type: "management",
          title: "Conservative Management",
          content: [
            {
              text: "Clinical and radiological monitoring at longer intervals for:",
              sub: [
                "Clinically and radiologically non-aggressive lesions.",
                "Clinically or radiologically suspicious lesions for which the patient declines biopsy."
              ]
            },
            {
              text: "Case close or discharge to GOPC for:",
              sub: [
                "Histologically confirmed benign tumour with no symptoms or recurrence.",
                "Clinically benign superficial tumour which has spontaneously resolved."
              ]
            }
          ]
        }
      ]
    },

    {
      id: "paediatric-conditions",
      title: "Paediatric (Non-Traumatic) Conditions",
      category: "common-complaints",
      tags: ["paediatric", "pediatric", "DDH", "scoliosis", "Perthes", "SCFE", "in-toe", "pes planus", "pes cavus", "Pavlik", "Cobb angle", "Risser", "developmental", "children"],
      blocks: [
        {
          type: "assessment",
          title: "Clinical Assessment",
          content: [
            "Pain is an uncommon complaint in children and warrants further investigation.",
            "Physiological growing pains of the knee are a diagnosis of exclusion.",
            "Examine the joint above and below for referred pain.",
            "Note family history, perinatal history, developmental history, and milestones.",
            {
              text: "Associated conditions may point to syndromal or systemic pathology:",
              sub: [
                "DDH: torticollis, metatarsus adductus.",
                "Scoliosis: caf\u00e9 au-lait spots, tuft of hair at midline, pes cavovarus."
              ]
            }
          ]
        },
        {
          type: "assessment",
          title: "Key Examination Points",
          content: [
            "Gait: limping, pelvic tilt, asymmetry, in-toeing.",
            "Hip: Barlow\u2019s and Ortolani\u2019s tests.",
            "Lower limbs: foot progression angle, leg-length discrepancy, hip ROM, femoral anteversion (Craig\u2019s test), tibial intorsion (thigh-foot angle), metatarsal adductus (heel bisector line).",
            "Foot: prominent navicular (accessory navicular), medial arch collapse, heel valgus on standing, Achilles tendon tightness."
          ]
        },
        {
          type: "imaging",
          title: "Imaging",
          content: [
            "X-ray foot (DP, lateral standing): for rigid deformities (tarsal coalition, congenital vertical talus). Note that accessory navicular is present in ~10% of the population.",
            "USG bilateral hips (within 4 weeks): clinical suspicion of DDH in infants <3 months.",
            "X-ray AP pelvis: done at 6 months if initial USG excludes DDH.",
            "Scoliosis films: note curve type and document Cobb\u2019s angle; look for vertebral and rib anomalies.",
            "Skeletal maturity: Risser staging.",
            "MRI whole spine: if there is back pain, neurology, syndromal features, or atypical curve patterns."
          ]
        },
        {
          type: "investigations",
          title: "Investigations",
          content: [
            "Exclude infective and rheumatoid conditions (JIA) if features are suggestive: inflammatory markers and rheumatoid markers."
          ]
        },
        {
          type: "escalation",
          title: "Surgical Indications and Referral",
          content: [
            "Determine if surgical intervention is indicated and contact the team senior to decide whether referral to a tertiary paediatric orthopaedic centre is required.",
            "Conditions that typically warrant referral: confirmed DDH, Perthes disease, SCFE, progressive idiopathic or non-idiopathic scoliosis, tumorous conditions."
          ]
        },
        {
          type: "management",
          title: "Conservative Management",
          content: [
            "DDH: Pavlik harnesses can be initiated prior to USG confirmation if there is clinical suspicion.",
            "Scoliosis: Follow-up with X-rays more regularly (every 6 months) during peak growth. Follow-up intervals can increase as the child approaches skeletal maturity.",
            "Symmetrical in-toe gait: Most commonly due to excessive femoral anteversion. Usually improves spontaneously by age 8. Conservative treatment with yearly follow-up until resolution.",
            "Flexible pes planus: Medial arch support if there is pain or fatigue with walking. Orthoses do not correct deformity. Long-term follow-up is usually not required.",
            "Pes cavus: Custom orthoses to realign hindfoot and offload lateral foot. Gastrocnemius stretching programmes. Note that pharmacological agents (botox, baclofen) have not been shown to decrease deformity progression. [ref:2]"
          ]
        },
        {
          type: "quick-ref",
          title: "Useful Parameters: Scoliosis Assessment",
          columns: ["Cobb\u2019s Angle", "Risser Staging"],
          rows: [
            { label: "Method", cells: [
              "1. Find apical vertebra (most horizontally displaced but least tilted). 2. Determine most cranial tilted vertebra. 3. Determine most caudal tilted vertebra. 4. Obtain the angle subtended between the endplates of cranial and caudal vertebrae.",
              "Ossification of the iliac apophyses progresses from lateral to medial. Divided into 5 stages (0\u20135)."
            ]},
            { label: "Interpretation", cells: [
              "Scoliosis defined as >10\u00b0. Interobserver variability: 3\u20135\u00b0.",
              "The higher the stage, the less growth potential and the lower the risk of curve progression."
            ]},
            { label: "Reference", cells: [
              "Mayet Z. SA Orthop J. 2010. [ref:14]",
              "Huang JY. Medicine. 2007. [ref:9]"
            ]}
          ]
        }
      ]
    },

    // =========================================================================
    // PART II: COMMON ISSUES
    // =========================================================================
    {
      id: "pain-medication",
      title: "Pain Medication (Often Used)",
      category: "common-issues",
      tags: ["pain", "analgesia", "paracetamol", "tramadol", "NSAID", "gabapentin", "pregabalin", "amitriptyline", "neuropathic", "opioid", "medication", "drugs", "WHO ladder"],
      blocks: [
        {
          type: "note",
          title: "General Rule",
          content: [
            "By the mouth, by the clock, by the WHO analgesic ladder."
          ]
        },
        {
          type: "drug-info",
          title: "Paracetamol (Acetaminophen)",
          content: [
            "Generally safe within recommended maximum dosages (4 g/day in adults).",
            "Long-term use can derange liver function; periodic monitoring may be warranted."
          ]
        },
        {
          type: "drug-info",
          title: "Tramadol",
          content: [
            "A centrally-acting analgesic with \u00b5-opioid receptor agonist activity and monoamine reuptake inhibition.",
            "More potent than paracetamol but carries addiction potential.",
            "Contraindication: Best not be taken with SSRIs or MAO inhibitors due to the risk of serotonin syndrome."
          ]
        },
        {
          type: "drug-info",
          title: "NSAIDs",
          content: [
            "Long-term NSAID prescription for fracture pain is generally avoided due to gastrointestinal, renal, and cardiovascular side effects, and a theoretical concern that COX inhibition may impair fracture healing.",
            "Check for contraindications (renal impairment, allergies, asthma) before prescribing.",
            "For patients requiring longer courses, prescribe a gastroprotective agent (H2RA or PPI) and advise use for the shortest duration necessary.",
            "A fixed course of indomethacin may be prescribed as prophylaxis against heterotopic ossification in at-risk patients (e.g. elbow fractures, head injury).",
            "Consider monitoring renal function before the next visit if long-term NSAIDs are necessary."
          ]
        },
        {
          type: "drug-info",
          title: "Neuropathic Pain Agents \u2014 Amitriptyline",
          content: [
            "Tricyclic antidepressant used off-label for neuropathic pain.",
            "Cardiotoxic \u2014 avoid in patients with cardiac conditions."
          ]
        },
        {
          type: "drug-info",
          title: "Neuropathic Pain Agents \u2014 Gabapentin",
          content: [
            "Non-linear pharmacokinetics resulting in a longer titration period.",
            "A trial of treatment may take 2 months or longer to assess efficacy. [ref:4]",
            "Reduce dose in patients with renal impairment."
          ]
        },
        {
          type: "drug-info",
          title: "Neuropathic Pain Agents \u2014 Pregabalin (Lyrica)",
          content: [
            "Gabapentinoid with linear pharmacokinetics, requiring less time to titrate to the maximum dose.",
            "Reduce dose in patients with renal impairment."
          ]
        },
        {
          type: "note",
          title: "Drug Identification",
          content: [
            "A comprehensive list of drug interactions and side effects can be accessed in your institution's pharmacy information system. Patients often cannot recall drug names but may be able to describe their appearance. Refer to the drug appearance chart below."
          ]
        },
        {
          type: "figure",
          title: "Figure 2",
          filename: "media/image4.jpg",
          caption: "Common orthopaedic medications: visual identification chart.",
          attribution: ""
        }
      ]
    },

    {
      id: "implants",
      title: "Implants",
      category: "common-issues",
      tags: ["implant", "removal", "hardware", "plate", "screw", "nail", "K-wire", "syndesmosis", "airport", "metal detector", "MRI safety"],
      blocks: [
        {
          type: "management",
          title: "Removal of Implants",
          content: [
            "Unless there are implant complications (breakage, loosening, skin impingement) or unless specified in the rehabilitation plan, there is no absolute indication to remove implants, with a few exceptions:",
            "Syndesmosis screws for ankle fractures should be arranged for removal under LA before the patient begins to weight-bear.",
            "Protection wiring (e.g. partial patellectomies) is removed under RA/SA/GA at around 3 months post-operatively.",
            "Spinal burst fractures (fixed without fusion) are removed under GA at around 1 year post-operatively.",
            {
              text: "If patients opt to remove implants, this can be arranged when the fracture has fully consolidated, generally not before:",
              sub: [
                "1 year post-operatively for upper limb fractures.",
                "1.5 years post-operatively for lower limb fractures."
              ]
            },
            "If the patient has several implants in the same region (e.g. fibular plate and medial malleolar screws in ankle fractures), confirm whether the patient wishes to have all or some implants removed.",
            "Removal of stable implants that have been in situ for many years is more technically demanding and poses greater operative risks, including re-fracture, implant retention, increased bleeding, and longer operative time."
          ]
        },
        {
          type: "quick-ref",
          title: "Airport Security and Metallic Implants",
          content: [
            "There are no travel restrictions for individuals with orthopaedic implants.",
            "Over 90% of total joint prostheses will trigger walk-through metal detectors. Smaller hardware (plates, screws, wires) is less reliably detected.",
            "Detection likelihood varies by alloy: cobalt-chromium > titanium > stainless steel.",
            "Most modern airports also use advanced imaging technology (millimetre-wave or backscatter scanners), which can identify implants as anomalies without necessarily triggering a prolonged delay.",
            "Patients should inform security officers of their implant before screening begins. A simple verbal explanation usually suffices.",
            "An implant identification card or medical letter are not mandatory and will not exempt them from screening.",
            "Studies indicate that the majority of patients with implants are allowed through security without significant delay after a brief body search and verbal explanation. [ref:1]"
          ]
        },
        {
          type: "note",
          title: "Note",
          content: [
            "There is no universally standardised protocol for screening individuals with orthopaedic implants. Experiences may vary between airports and countries. Patients should be advised to allow an extra 15 minutes at security."
          ]
        }
      ]
    },

    {
      id: "mri",
      title: "Magnetic Resonance Imaging",
      category: "common-issues",
      tags: ["MRI", "imaging", "gadolinium", "contrast", "MR arthrogram", "claustrophobia", "implant safety", "CT myelogram", "ultrasound"],
      blocks: [
        {
          type: "quick-ref",
          title: "Booking",
          content: [
            "MRI appointments in public hospitals can involve long waiting times. Private referrals can be offered to patients willing to bear the cost.",
            "Plain MRI is usually sufficient for degenerative or traumatic conditions.",
            "Contrast MRI is preferable for tumorous or infective conditions, and failed back syndrome.",
            "MR arthrogram is traditionally more sensitive for certain shoulder and hip labral conditions. Modern 3.0-T plain MRI often approaches comparable sensitivity.",
            "General risks include claustrophobia, implant heating, and implant displacement.",
            "Gadolinium contrast risks include allergy, renal impairment, and nephrogenic systemic fibrosis (in patients with severe renal insufficiency)."
          ]
        },
        {
          type: "callout-box",
          content: [
            "Most modern orthopaedic implants are non-ferromagnetic and therefore MRI-conditional or MRI-safe."
          ]
        },
        {
          type: "quick-ref",
          title: "Metallic Implants and MRI Safety",
          content: [
            "The presence of an implant is not always a contraindication to MRI but should be documented on the order form.",
            "Implant manufacturers may have MRI safety data available online or upon request.",
            "Non-orthopaedic medical implants (pacemakers, deep brain stimulators, ICDs) may or may not be MRI-safe. Compatibility must be confirmed with the appropriate specialty and/or the manufacturer."
          ]
        },
        {
          type: "quick-ref",
          title: "Alternative Imaging",
          content: [
            "If MRI is contraindicated for the limbs, contrast CT is often the next-best option.",
            "If MRI is contraindicated for the spine, consider CT myelogram (rarely done). Note that anticoagulation or deranged clotting may preclude CT myelogram.",
            "Ultrasound is sufficient to diagnose smaller, superficial tumours likely to be benign (ganglions, subcutaneous lipomas).",
            "Ultrasound is also sufficient to confirm rotator cuff tears in patients who are less likely to require surgery."
          ]
        }
      ]
    },

    {
      id: "sick-leave",
      title: "Sick Leave & Injury on Duty",
      category: "common-issues",
      tags: ["sick leave", "IOD", "injury on duty", "compensation", "OAB", "MMI", "work capacity", "employment ordinance", "employees compensation"],
      note: "The guidance below may reflect practices specific to a particular institution or time period. Verify current arrangements with your department.",
      blocks: [
        {
          type: "quick-ref",
          title: "General Principles",
          content: [
            "Sick leave is often requested by employees to maintain employment status with their employer at a reduced pay rate.",
            "Sick leave may also be requested for insurance or compensation purposes (e.g. road traffic accidents).",
            "Sick leave is typically granted for a maximum of 6\u20139 weeks per visit.",
            "Sick leave is seldom prescribed beyond 2 years after date of IOD."
          ]
        },
        {
          type: "quick-ref",
          title: "Regulatory Context",
          content: [
            "Medical Council requirements: The Code of Professional Conduct requires doctors to issue certificates only on the basis that the truth of their contents can be accepted without question. Doctors must not include statements they have not taken appropriate steps to verify. Issuing misleading or false certificates constitutes professional misconduct and has led to removal from the register. [ref:15]",
            "Employment Ordinance (Cap. 57): Paid sick leave accrues at 2 days per month in the first year and 4 days per month thereafter, up to a maximum of 120 days. Medical certificates must specify the number of days and the nature of the sickness or injury. [ref:6]",
            "Employees\u2019 Compensation Ordinance (Cap. 282): For injury on duty (IOD), an employee is entitled to periodical payments during temporary incapacity for up to 24 months. Beyond 24 months, the employee may apply to the Court for an extension of up to an additional 12 months. This statutory cap is the primary reason sick leave for IOD cases is seldom prescribed beyond 2 years. [ref:5]"
          ]
        },
        {
          type: "management",
          title: "Practical Guidance",
          content: [
            "When physiotherapy comments indicate slow or plateaued progress, or is planning to discharge the patient, refer the patient to occupational therapy for Work Capacity Evaluation and Work Rehabilitation.",
            "When static progress or maximal medical improvement (MMI) is reached, refer the patient to the Ordinary Assessment Board (OAB).",
            "In cases of IOD, sick leave is no longer valid after the day of the OAB assessment, unless the patient appeals the OAB decision.",
            "Referring the patient to OAB does not prevent the patient from returning to work. Some patients may be able and willing to discontinue sick leave and resume work before the OAB appointment.",
            {
              text: "Be cautious of:",
              sub: [
                "Issuing retrospective sick leave.",
                "Issuing sick leave when you have not attended the patient.",
                "Issuing sick leave on a day patient had defaulted e.g. T8/Black rainstorm.",
                "Initiating longer periods of sick leave in a patient who was previously not on sick leave.",
                "Issuing sick leave beyond 2 years after date of IOD (see Employees\u2019 Compensation Ordinance, above). After 2 years, it is prudent to have the patient provide documentation to justify any further sick leave."
              ]
            }
          ]
        }
      ]
    },

    {
      id: "fracture-rehab",
      title: "Fracture Rehabilitation",
      category: "rehabilitation",
      tags: ["rehabilitation", "weight-bearing", "ROM", "mobilisation", "fracture healing", "upper limb", "lower limb", "spine", "orthosis", "brace", "TLSO", "collar"],
      children: ["fracture-rehab-upper", "fracture-rehab-lower", "fracture-rehab-spine"],
      blocks: [
        {
          type: "note",
          title: "General Principles",
          defaultOpen: true,
          content: [
            { text: "Rehabilitation progression should not be based on timing alone.", highlight: true },
            {
              text: "Assess the following at each review:",
              sub: [
                "Injury factors \u2013 fracture pattern, location, displacement, treatment method (cast vs. fixation)",
                "Patient factors \u2013 age, compliance, comorbidities",
                "Clinical progress \u2013 pain, tenderness, swelling, functional improvement",
                "Radiological progress \u2013 alignment maintained, implant position, evidence of union"
              ]
            }
          ]
        }
      ]
    },
    {
      id: "fracture-rehab-upper",
      title: "Upper Limb Fractures",
      category: "rehabilitation",
      parent: "fracture-rehab",
      tags: ["upper limb", "shoulder", "elbow", "wrist", "humerus", "radius", "ROM", "stiffness"],
      blocks: [
        {
          type: "management",
          title: "Overview",
          content: [
            "Goal: Avoid stiffness while protecting fracture healing and fixation.",
            "Key Concerns: Too little motion \u2192 stiffness (especially shoulder and elbow). Too much too early \u2192 displacement, fixation failure, delayed healing."
          ]
        },
        {
          type: "rehab-timeline",
          title: "Example Progression (Proximal Humerus \u2013 Non-operative)",
          columns: ["Activity", "Purpose"],
          rows: [
            { label: "0\u20132 weeks", cells: ["Immobilisation / protection with collar & cuff", "Initiate callus formation; mobilise adjacent joints"] },
            { label: "1\u20134 weeks", cells: ["Passive ROM", "Reduce stiffness without deforming forces (no muscle activation). e.g. pendulum exercises \u2013 movement by body sway and gravity"] },
            { label: "3\u20136 weeks", cells: ["Assisted active ROM", "Muscle recruitment with limited load"] },
            { label: "6\u20138 weeks", cells: ["Active ROM", "Independent movement"] },
            { label: "8\u201312 weeks", cells: ["Strengthening", "Restore function"] }
          ],
          source: "AO Foundation Reference. [ref:21]"
        },
        {
          type: "rehab-timeline",
          title: "Example Progression (Distal Radius \u2013 Non-operative)",
          columns: ["Activity", "Notes"],
          rows: [
            { label: "0\u20136 weeks", cells: ["Immobilisation / protection in short arm cast", "Mobilise adjacent joints"] },
            { label: "6+ weeks", cells: ["Passive & Active ROM", "Flexion/Extension; Supination/Pronation"] },
            { label: "8+ weeks", cells: ["Strengthening exercises", "Weight-bearing on surface and Free Weights"] },
            { label: "12+ weeks", cells: ["No restrictions", "Return to contact sports. Mild ongoing swelling normal. Morning stiffness and occasional aches with heavy activity."] }
          ],
          source: "Oxford University Hospitals & University Hospitals Sussex, NHS Foundation Trust. [ref:22]"
        }
      ]
    },
    {
      id: "fracture-rehab-lower",
      title: "Lower Limb Fractures",
      category: "rehabilitation",
      parent: "fracture-rehab",
      tags: ["lower limb", "hip", "knee", "ankle", "weight-bearing", "NWB", "FWB", "ambulation"],
      blocks: [
        {
          type: "management",
          title: "Overview",
          content: [
            "Goal: Early ambulation while protecting fracture healing and fixation.",
            "Key Concerns: Frail/elderly patients often cannot maintain non-weight-bearing \u2192 wheelchair dependence. Prolonged immobilisation \u2192 sarcopenia, deconditioning, loss of independence."
          ]
        },
        {
          type: "note",
          title: "Caution",
          content: [
            "\u26a0 Young hip fractures: touch-down weight-bearing initially to reduce AVN risk."
          ]
        },
        {
          type: "rehab-timeline",
          title: "Weight-Bearing as Tolerated (Immediate)",
          columns: ["Notes"],
          rows: [
            { label: "Isolated pubic rami", cells: ["Stable injury"] },
            { label: "Geriatric hip fractures (post fixation/replacement)", cells: ["Early mobilisation critical for survival"] },
            { label: "Isolated greater trochanter fracture", cells: [""] },
            { label: "Femoral/tibial shaft fractures after nailing", cells: ["IM nail provides immediate axial stability"] },
            { label: "Tibial shaft in functional brace", cells: [""] },
            { label: "Isolated fibular fractures", cells: ["Non-weight-bearing bone"] },
            { label: "Patella fractures (fixed or cylinder cast/hinged brace)", cells: ["Non-weight-bearing bone"] },
            { label: "Weber A (fibular tip avulsion)", cells: ["Walking boot"] }
          ]
        },
        {
          type: "rehab-timeline",
          title: "Non-Weight-Bearing Initially (Articular Fractures)",
          columns: ["Notes"],
          rows: [
            { label: "Ankle fractures (Weber B/C) \u2013 fixed or casted", cells: ["Articular congruence must be protected"] },
            { label: "Tibial plateau / distal femur \u2013 fixed or casted", cells: ["Articular fracture \u2013 early ROM, delayed WB"] },
            { label: "Talar / calcaneal / tarsal fractures \u2013 fixed or casted", cells: [""] }
          ]
        },
        {
          type: "rehab-timeline",
          title: "Off-Loading Strategies",
          columns: ["Method"],
          rows: [
            { label: "2nd\u20134th metatarsal / 5th MT proximal tubercle / toe fractures", cells: ["Heel-walking sandal"] },
            { label: "", cells: ["Walking boot / Aircast boot (\u2018rocker\u2019 design redistributes load)"] },
            { label: "Calcaneal fractures \u2013 fixed or not", cells: ["I-walker or weight-relieving caliper"] }
          ]
        },
        {
          type: "rehab-timeline",
          title: "NWB \u2192 FWB Progression",
          columns: ["Conservative", "Faster"],
          rows: [
            { label: "0\u20136 weeks", cells: ["Non-weight-bearing", "Non-weight-bearing / touch-down WB"] },
            { label: "6\u201312 weeks", cells: ["Partial weight-bearing", "Full weight-bearing"] },
            { label: "12+ weeks", cells: ["Full weight-bearing", "\u2013"] }
          ]
        }
      ]
    },
    {
      id: "fracture-rehab-spine",
      title: "Spinal Fractures",
      category: "rehabilitation",
      parent: "fracture-rehab",
      tags: ["spine", "spinal", "cervical", "thoracic", "lumbar", "TLSO", "collar", "brace", "orthosis"],
      blocks: [
        {
          type: "management",
          title: "Overview",
          content: [
            "Goal: Mobilise early without causing mechanical instability or neurological deterioration.",
            "Key Concerns: Spinal orthoses are imperfect \u2013 true immobilisation is difficult to achieve externally. Fracture displacement can cause instability and neurological deterioration.",
            "In principle: stable fractures \u2192 brace; unstable fractures \u2192 surgical fixation."
          ]
        },
        {
          type: "rehab-timeline",
          title: "Spinal Orthoses by Level",
          columns: ["Spinal Level", "Notes"],
          rows: [
            { label: "Rigid cervical collar (Philadelphia / Miami J)", cells: ["C1\u2013C7", ""] },
            { label: "SOMI (Sternal-Occipital-Mandibular Immobiliser)", cells: ["C1\u2013T3", "Less rigid than halo; Better rotational control than collar"] },
            { label: "TLSO with cervical extension", cells: ["T1\u2013T7", ""] },
            { label: "Rigid TLSO", cells: ["T9\u2013L4", ""] },
            { label: "Jewett brace (hyperextension)", cells: ["T10\u2013L2", "Specifically for burst fractures"] }
          ]
        },
        {
          type: "management",
          title: "Brace Regimen",
          content: [
            {
              text: "Rigid brace for 6\u20138 weeks, then either discontinue directly or wean gradually:",
              sub: [
                "Wean option: daytime/outdoor use only,",
                "or transition to soft brace for 4\u20136 weeks.",
                "Soft braces provide comfort only (no meaningful mechanical support)."
              ]
            },
            "After brace removal: begin ROM, core and back muscle strengthening."
          ]
        },
        {
          type: "note",
          title: "Extended Bracing",
          content: [
            "Consider extended rigid bracing (10\u201312 weeks) if concern for delayed healing."
          ]
        },
        {
          type: "assessment",
          title: "Factors Influencing Progression",
          content: [
            {
              text: "Disease:",
              sub: [
                "Precarious blood supply (e.g. C2 waist),",
                "Instability (high-energy, burst, chance, Hangman\u2019s, pathological)",
                "Fixation (osteoporotic bone, short instrumentation, screw purchase, cage position)"
              ]
            },
            "Patient: age, compliance, smoking",
            "Clinical: pain, tenderness, function, neurological status",
            "Radiological: alignment, implant position, evidence of union"
          ]
        }
      ]
    },

    {
      id: "fragility-fractures",
      title: "Fragility Fractures & Osteoporosis",
      category: "common-issues",
      tags: ["osteoporosis", "fragility", "DEXA", "bisphosphonate", "alendronate", "denosumab", "teriparatide", "BMD", "secondary prevention", "ONJ", "AFF"],
      blocks: [
        {
          type: "quick-ref",
          title: "Key Definitions",
          content: [
            "**Fragility fracture**: fracture from low-energy trauma (e.g. fall from standing height). Common sites: vertebra, hip, distal radius.",
            "**Osteoporosis diagnosis**: presence of a fragility fracture is sufficient to diagnose osteoporosis, regardless of BMD.",
            { text: "Goal: secondary fracture prevention \u2013 preventing the next fracture.", highlight: true }
          ]
        },
        {
          type: "subsection-header",
          title: "Initial Follow-Up"
        },
        {
          type: "management",
          title: "Work-Up",
          content: [
            {
              text: "Rule out secondary causes of osteoporosis (history and bloods).",
              sub: [
                "Consider referral to endocrinology if secondary cause suspected."
              ]
            },
            "DEXA scan to establish a baseline BMD for monitoring treatment response."
          ],
          callout: {
            type: "info",
            items: [
              "There is no routine DEXA screening for osteoporosis in patients without a history of fragility fracture.",
              "A DEXA scan is not needed to establish a diagnosis of osteoporosis in the presence of a fragility fracture \u2013 the fracture itself is diagnostic."
            ]
          }
        },
        {
          type: "subsection-header",
          title: "Discuss Treatment Options"
        },
        {
          type: "management",
          title: "Lifestyle Measures",
          content: [
            "Weight-bearing and resistance exercise.",
            "Adequate dietary calcium intake.",
            "Sun exposure for vitamin D (consider supplementation if insufficient).",
            "Avoid excess alcohol; stop smoking."
          ]
        },
        {
          type: "drug-cards",
          title: "Pharmacological Treatment",
          drugs: [
            {
              name: "Alendronate (Fosamax)",
              class: "Bisphosphonate",
              route: "PO weekly",
              duration: "3\u20135 years, then drug holiday",
              indication: "1st-line for all fragility fracture patients unless contraindicated (e.g. renal impairment, oesophageal disorders)."
            },
            {
              name: "Denosumab (Prolia)",
              class: "Anti-RANKL monoclonal antibody",
              route: "SC 6-monthly",
              duration: "Indefinite (rebound risk on cessation)",
              indication: "Age \u226488 with \u22652 fragility fractures, \u22651 of which was operated. Also if bisphosphonate contraindicated or not tolerated."
            },
            {
              name: "Teriparatide (Forteo)",
              class: "PTH analogue (anabolic)",
              route: "SC daily",
              duration: "1\u20132 years, then sequential bisphosphonate or denosumab",
              indication: "3rd-line: severe osteoporosis that has failed other drugs. Also used to prevent pedicle screw loosening in spinal fixation."
            }
          ],
          source: "Fung et al. 2017 (PMID 29694412) [ref:19]; OSHK 2024 Guideline for Clinical Management of Postmenopausal Osteoporosis in HK. [ref:20]"
        },
        {
          type: "rehab-timeline",
          title: "Important Side Effects",
          columns: ["Drug(s)", "Notes"],
          rows: [
            { label: "GI reflux / oesophageal irritation", cells: ["Alendronate", "Take upright with full glass of water; stay upright 30 min"] },
            { label: "Osteonecrosis of the jaw (ONJ)", cells: ["Alendronate, Denosumab", "Alendronate: ~0.3\u20132.2%"] },
            { label: "Atypical femoral fracture (AFF)", cells: ["Alendronate, Denosumab", "~1/100,000 to 5/10,000; risk rises with duration"] },
            { label: "Transient hypercalcaemia", cells: ["Teriparatide", "Usually mild and self-limiting"] },
            { label: "Osteosarcoma (theoretical)", cells: ["Teriparatide", "Seen in rats at high doses; avoid in Paget\u2019s disease"] }
          ]
        },
        {
          type: "management",
          title: "Subsequent Follow-Up: If on Anti-Osteoporotic Therapy",
          content: [
            {
              text: "Monitor compliance and side effects at each visit.",
              sub: [
                "Ask specifically about jaw pain (ONJ) and thigh/groin pain (AFF).",
                "If AFF suspected: X-ray the entire femur (bilateral)."
              ]
            }
          ]
        },
        {
          type: "management",
          title: "Discharge Planning",
          content: [
            "Once the fracture has healed and no implant-related complications are anticipated:",
            "Consider discharge from orthopaedics.",
            "Refer to internal medicine, geriatrics, endocrinology, or family medicine for ongoing anti-osteoporotic prescribing and monitoring."
          ]
        }
      ]
    },

    // =========================================================================
    // PART III: POST-OP PROTOCOLS
    // =========================================================================
    {
      id: "post-op-protocols",
      title: "Post-Op Protocols",
      category: "rehabilitation",
      tags: ["post-operative", "protocol", "rehabilitation", "surgery"],
      children: ["acl-reconstruction", "meniscal-repair", "reverse-shoulder", "rotator-cuff-repair", "bankart-repair", "achilles-rupture"],
      blocks: []
    },
    {
      id: "acl-reconstruction",
      title: "ACL Reconstruction",
      category: "rehabilitation",
      tags: ["ACL", "anterior cruciate ligament", "knee", "graft", "reconstruction", "rehabilitation", "sport"],
      blocks: [
        {
          type: "rehab-timeline",
          title: "ACL Reconstruction Protocol",
          columns: ["Phase I: 0\u20132 weeks", "Phase II: 3\u201312 weeks", "Phase III: 3\u20136 months", "Phase IV: 6\u20139 months"],
          rows: [
            { label: "Goals", cells: [
              "Protect graft fixation. Control pain & swelling. Full extension & 90\u00b0 flexion.",
              "Walk unaided by 3\u20134 wks. Mobility & endurance. Avoid graft overload.",
              "Unrestricted activities. Cardiopulmonary fitness.",
              "Prepare for sport. Limb power >80% on isokinetic test."
            ]},
            { label: "Protection", cells: [
              "WB with 2 crutches. No open-chain quads. No jogging/hopping. No swimming.",
              "",
              "",
              ""
            ]},
            { label: "Key exercises", cells: [
              "Ankle pumps, static quads. Multi-angle isometrics. Patellar mobilisation. SLR 4 planes.",
              "Hamstring curls. Calf raises (bilat \u2192 unilat). Leg press, semi-squat 0\u201330\u00b0. Stationary bike. Rocker board. Terminal knee ext after 6 wks.",
              "Semi-squat 0\u201360\u00b0. Lunges, cross-cut. Jogging, stepper. Hopping/box jump. Swimming (no breaststroke).",
              "Cutting & reaction drills. Agility & sport-specific. Return to sport at 9 months."
            ]}
          ]
        },
        {
          type: "note",
          title: "Note",
          content: [
            "Progression is criteria-based, not time-based."
          ]
        }
      ]
    },

    {
      id: "meniscal-repair",
      title: "Meniscal Repair",
      category: "rehabilitation",
      tags: ["meniscus", "meniscal", "knee", "repair", "rehabilitation", "weight-bearing"],
      blocks: [
        {
          type: "rehab-timeline",
          title: "Meniscal Repair Protocol",
          columns: ["Phase I: 0\u20133 weeks", "Phase II: 3\u20136 weeks", "Phase III: 6\u201312 weeks", "Phase IV: 3\u20136 months"],
          rows: [
            { label: "Goals", cells: [
              "Protect repair. Swelling control. Focus on extension.",
              "",
              "Full ROM. Normalise gait. Avoid post-exercise swelling.",
              "Sport-specific training."
            ]},
            { label: "Weight bearing", cells: [
              "PWB.",
              "Continue PWB (unless surgeon directs otherwise).",
              "FWB once adequate quad control & normalised gait.",
              ""
            ]},
            { label: "ROM", cells: [
              "Full extension. Flexion <90\u00b0.",
              "Full extension. Flexion <90\u00b0.",
              "Full ROM.",
              ""
            ]},
            { label: "Exercise", cells: [
              "Ankle/toe exercises. Free active knee flex/ext. Static quad / SLR. Prone hamstring curl. Patellar mobilisation.",
              "Patellar mobilisation. Gentle knee strengthening. VMO exercise. Standing hamstring curl. Fitball semi-squat 30\u00b0.",
              "Cycling. Knee strengthening. Proprioception training. Jogging (if good control).",
              "Agility & plyometrics. Unrestricted sport at 6 months."
            ]}
          ]
        },
        {
          type: "note",
          title: "Note",
          content: [
            "NWB for 6 weeks for meniscal root repair. Consider more conservative approach for complex tears. Avoid open-chain quads & increase hamstring work if ACL-deficient."
          ]
        }
      ]
    },

    {
      id: "reverse-shoulder",
      title: "Reverse Shoulder Arthroplasty (Deltopectoral Approach)",
      category: "rehabilitation",
      tags: ["reverse shoulder", "arthroplasty", "RSA", "deltopectoral", "shoulder", "replacement", "dislocation precautions"],
      blocks: [
        {
          type: "rehab-timeline",
          title: "Reverse Shoulder Arthroplasty Protocol",
          columns: ["Wk 1\u20134", "Wk 4\u20136", "Wk 6\u20138", "Wk 8\u201312", "Wk 12\u201316"],
          rows: [
            { label: "Protection", cells: [
              "Abd pillow 30\u00b0. No body-weight support. No ext + add + IR.",
              "Abd pillow 30\u00b0 (4 wk isolated; up to 6 wk if tendon transfer/subscap repair). No ext + add + IR.",
              "Off pillow. No ext + add + IR.",
              "No ext + add + IR. No lifting >10 lbs.",
              "No lifting >15 lbs. Dislocation precautions."
            ]},
            { label: "PROM", cells: [
              "ER in scapular plane to tolerance. FF \u2264120\u00b0. Abd \u226490\u00b0. Pendulum.",
              "Supine FF/elev to 120\u00b0. ER 20\u201330\u00b0 scapular plane. No ext or IR.",
              "Full all planes. IR <50\u00b0 scapular plane.",
              "Full all planes.",
              ""
            ]},
            { label: "AROM", cells: [
              "No AAROM/AROM shoulder. Elbow, wrist & hand only.",
              "AAROM: shoulder flexion. AROM: supine flexion. Sub-max deltoid & periscapular isometrics.",
              "Seated scaption & flexion. Supine FF with elastic to 90\u00b0. Scapulothoracic rhythmic stab. Gentle ER/IR isometrics.",
              "Sub-max deltoid isotonic. Elevation 90\u2013125\u00b0.",
              "Full all planes."
            ]},
            { label: "Strengthening", cells: [
              "",
              "Gentle resisted elbow/wrist/hand. Peri-scapular strengthening.",
              "Deltoid strengthening. Progress AROM sit/stand. Gentle IR/ER isotonic. Sidelying with light theraband.",
              "Improve strength & endurance.",
              "Strengthen repaired cuff / tendon transfer."
            ]}
          ]
        },
        {
          type: "note",
          title: "Note",
          content: [
            "For RSA performed for proximal humerus fracture, the rehabilitation protocol must be confirmed by the surgeon."
          ]
        }
      ]
    },

    {
      id: "rotator-cuff-repair",
      title: "Rotator Cuff Repair",
      category: "rehabilitation",
      tags: ["rotator cuff", "shoulder", "repair", "cuff tear", "rehabilitation", "ROM"],
      blocks: [
        {
          type: "rehab-timeline",
          title: "Rotator Cuff Repair Protocol",
          columns: ["Wk 0\u20134", "Wk 5\u20136", "Wk 7\u201312", "Wk 13\u201316", "Wk 17\u201320", "> Wk 20"],
          rows: [
            { label: "Protection", cells: [
              "Abd pillow 30\u00b0.",
              "Abd pillow 30\u00b0.",
              "Off sling.",
              "",
              "",
              ""
            ]},
            { label: "PROM", cells: [
              "Scapular plane to 130\u00b0. ER <45\u00b0 in 45\u00b0 abd. IR to chest.",
              "Full FF & abd. ER <45\u00b0 in 45\u00b0 abd. IR to chest.",
              "",
              "Full ROM.",
              "",
              ""
            ]},
            { label: "AAROM", cells: [
              "",
              "Self-assisted flex supine.",
              "Self-assisted flex supine. Bamboo exercise.",
              "Full ROM.",
              "",
              ""
            ]},
            { label: "AROM", cells: [
              "Finger, wrist & elbow. Scapular sets.",
              "Finger, wrist & elbow. Scapular sets.",
              "Free active shoulder mob.",
              "Full ROM.",
              "",
              ""
            ]},
            { label: "Strengthening", cells: [
              "",
              "",
              "Gentle RC isometrics. Scapular stabilisation.",
              "Bamboo + weight. Wall push-up. Theraband RC. UL cycling.",
              "Full can in scapular plane. Increase loading. Functional & dynamic control.",
              "Empty can exercise. Throwing & plyometrics (if good ROM & pain-free)."
            ]}
          ]
        }
      ]
    },

    {
      id: "bankart-repair",
      title: "Arthroscopic Bankart Repair",
      category: "rehabilitation",
      tags: ["Bankart", "shoulder", "instability", "labral", "repair", "arthroscopic", "dislocation"],
      blocks: [
        {
          type: "rehab-timeline",
          title: "Arthroscopic Bankart Repair Protocol",
          columns: ["Wk 0\u20132", "Wk 2\u20135", "Wk 5\u20138", "Wk 8\u201312", "Wk 12\u201324", "> Wk 24"],
          rows: [
            { label: "Sling", cells: [
              "Wear at all times.",
              "Wean off.",
              "N/A",
              "N/A",
              "N/A",
              "N/A"
            ]},
            { label: "ROM", cells: [
              "PROM flex 90\u00b0. No ER past neutral. No extension.",
              "PROM/AAROM flex 140\u00b0. ER \u226430\u00b0. No extension.",
              "AROM flex 160\u00b0. ER 45\u00b0.",
              "Progress to full.",
              "Gradually stretch to full.",
              "Full ROM."
            ]},
            { label: "Exercise", cells: [
              "Pendulum. Isometrics at 0\u00b0 abd. Scapular retraction.",
              "Assisted FF supine. Scapular stabilisation.",
              "Free active shoulder mob. Stretch HBB & horiz add.",
              "Wall slide, side-lying ER. Theraband. Wall push-up plus.",
              "Weight training. Throwing. Plyometrics. Isokinetic test/training.",
              "Return to contact sport."
            ]}
          ]
        }
      ]
    },

    {
      id: "achilles-rupture",
      title: "Achilles Tendon Rupture",
      category: "rehabilitation",
      tags: ["Achilles", "tendon", "rupture", "ankle", "plantar flexion", "boot", "heel wedge", "rehabilitation"],
      blocks: [
        {
          type: "note",
          title: "Protocol Selection",
          content: [
            "Two protocols exist. The surgeon indicates the chosen track under \u201cRemarks\u201d in the operation record."
          ]
        },
        {
          type: "rehab-timeline",
          title: "Accelerated Rehabilitation",
          columns: ["Period", "Protection / Orthosis", "Exercise & Weight Bearing"],
          rows: [
            { label: "0\u20132 wks", cells: ["0\u20132 wks", "Cast in natural plantar flexion (window for wound inspection)", "NWB walking. SLR & knee mobilisation."] },
            { label: "End of wk 2", cells: ["End of wk 2", "Off cast; inspect wound & remove sutures", ""] },
            { label: "3\u20136 wks", cells: ["3\u20136 wks", "Walking boot + 4 heel-lift wedges. Lower 1 wedge/week \u2192 plantigrade by wk 6.", "WBAT in boot. Active ankle ROM out of boot (avoid passing plantigrade)."] },
            { label: "7\u201323 wks", cells: ["7\u201323 wks", "Off boot (end of wk 7); normal shoes.", "Stretching & strengthening as tolerated."] },
            { label: "\u226524 wks", cells: ["\u226524 wks", "", "Allow participation in sports."] }
          ]
        },
        {
          type: "rehab-timeline",
          title: "Conservative Rehabilitation",
          columns: ["Period", "Protection / Orthosis", "Exercise & Weight Bearing"],
          rows: [
            { label: "0\u20132 wks", cells: ["0\u20132 wks", "Cast in natural plantar flexion.", "NWB walking. SLR & knee mobilisation."] },
            { label: "End of wk 2", cells: ["End of wk 2", "Change cast; inspect wound & remove sutures.", "Continue NWB."] },
            { label: "3\u20136 wks", cells: ["3\u20136 wks", "Continue cast in plantar flexion.", "Continue NWB."] },
            { label: "7\u201312 wks", cells: ["7\u201312 wks", "Off cast \u2192 walking boot + 4 heel-lift wedges. Lower wedges at wk 8, 10, 11, 12 \u2192 plantigrade by wk 12.", "WBAT in boot. Active ankle ROM out of boot (avoid passing plantigrade)."] },
            { label: "13\u201331 wks", cells: ["13\u201331 wks", "Off boot (end of wk 13); normal shoes.", "Stretching & strengthening as tolerated."] },
            { label: "\u226532 wks", cells: ["\u226532 wks", "", "Allow participation in sports."] }
          ]
        },
        {
          type: "note",
          title: "Note",
          content: [
            "Used when the repair may not be secure (residual gapping, tendinosis, questionable compliance). This protocol also applies to non-operative (conservative) management of Achilles tendon rupture.",
            "Key difference: the conservative track delays boot transition by ~5 weeks and sport return by ~8 weeks compared with accelerated."
          ]
        }
      ]
    }
  ],

  accessibleResources: [
    "Available via your institution's intranet: Hospital Authority SOPD Operation Manual.",
    "Available via your institution's intranet: Departmental Orthopaedics & Traumatology guidelines (EDMS).",
    "Available via your institution's intranet: UpToDate clinical decision support.",
    "Available via your institution's intranet: Departmental GOPC/family medicine pharmacy search.",
    "Patient education pamphlets on knee, shoulder, back, and neck care are readily available in the outpatient clinic and can be offered in addition to, or instead of, a physiotherapy referral.",
    "Regularly check Hospital Authority webmail from consultants regarding the latest GA/LA booking arrangements, which may be subject to changes."
  ],

  references: [
    "Abbassian A, Datla B, Brooks RA. Detection of orthopaedic implants by airport metal detectors. Ann R Coll Surg Engl. 2007;89(3):285\u2013287.",
    "Burns J, Scheinberg A, Ryan MM, Rose KJ, Ouvrier RA. Randomized trial of botulinum toxin to prevent pes cavus progression in pediatric Charcot-Marie-Tooth disease type 1A. Muscle Nerve. 2010;42(2):210\u2013217.",
    "Clarke E, Robinson PK. Cervical myelopathy: a complication of cervical spondylosis. Brain. 1956;79(3):483\u2013510.",
    "Dworkin RH, O\u2019Connor AB, Kent J, et al. Interventional management of neuropathic pain: NeuPSIG recommendations. Mayo Clin Proc. 2010;85(3 Suppl):S3\u2013S14.",
    "Employees\u2019 Compensation Ordinance (Cap. 282), Laws of Hong Kong.",
    "Employment Ordinance (Cap. 57), Laws of Hong Kong.",
    "Grimer RJ. Size matters for sarcomas! Ann R Coll Surg Engl. 2006;88(6):519\u2013524.",
    "Hovelius L, Olofsson A, Sandstr\u00f6m B, et al. Nonoperative treatment of primary anterior shoulder dislocation in patients forty years of age and younger: a prospective twenty-five-year follow-up. J Bone Joint Surg Am. 2008;90(5):945\u2013952.",
    "Huang JY. Risser staging and skeletal maturity. Medicine. 2007.",
    "Johnsson KE, Ros\u00e9n I, Ud\u00e9n A. The natural course of lumbar spinal stenosis. Clin Orthop Relat Res. 1992;(279):82\u201386.",
    "Kamineni S, Legge S, Ware H. Metallic orthopaedic implants and airport metal detectors. J Arthroplasty. 2002;17(3):395\u2013397.",
    "Lees F, Turner JWA. Natural history and prognosis of cervical spondylosis. BMJ. 1963;2(5373):1607\u20131610.",
    "Magee T, Williams D. 3.0-T MRI of the shoulder: comparison with 1.5-T MRI. AJR Am J Roentgenol. 2009;192(6):W307\u2013W313.",
    "Mayet Z. Cobb angle measurement in scoliosis. SA Orthop J. 2010.",
    "Medical Council of Hong Kong. Code of Professional Conduct for the Guidance of Registered Medical Practitioners. Revised October 2022.",
    "Rangan A, Hanchard N, McDaid C, et al. Management of adults with primary frozen shoulder in secondary care (UK FROST): a multicentre, pragmatic, three-arm, superiority randomised clinical trial. Lancet. 2020;396(10256):977\u2013989.",
    "Singer AJ, Clark RAF. Cutaneous wound healing. N Engl J Med. 1999;341(10):738\u2013746.",
    "Weber H. Lumbar disc herniation: a controlled, prospective study with ten years of observation. Spine. 1983;8(2):131\u2013140.",
    "Fung PL, Cheung HN, Chung M, et al. Medication-related osteonecrosis of the jaw associated with bisphosphonates and denosumab. J Oral Maxillofac Surg. 2017;76(5):e23.",
    "Osteoporosis Society of Hong Kong (OSHK). Guideline for Clinical Management of Postmenopausal Osteoporosis in Hong Kong. 2024.",
    "AO Foundation. AO Surgery Reference \u2013 Fracture rehabilitation principles. Available at: https://surgeryreference.aofoundation.org/",
    "Oxford University Hospitals & University Hospitals Sussex, NHS Foundation Trust. Patient information \u2013 Distal radius fracture rehabilitation."
  ]
};
