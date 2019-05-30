import React from 'react'

export const ArrowRightIcon = ({ fill = 'black' }) => (
  <svg width="35" height="7" viewBox="0 0 35 7" version="1.1">
    <g fill="none">
      <g>
        <path
          d="M 3.5 0L 6.53109 5.25L 0.468911 5.25L 3.5 0Z"
          transform="matrix(0 1 -1 0 35 0)"
          fill={fill}
        />
        <line
          y1="-0.5"
          x2="30"
          y2="-0.5"
          transform="translate(0 4)"
          stroke={fill}
        />
      </g>
    </g>
  </svg>
)

export const CheckIcon = ({ fill = 'white' }) => (
  <svg width="18" height="14" viewBox="0 0 18 14" version="1.1">
    <g fill="none">
      <g id="check">
        <path
          id="Shape"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 5.6 10.6L 1.4 6.4L 0 7.8L 5.6 13.4L 17.6 1.4L 16.2 0L 5.6 10.6Z"
          transform="translate(0.399902 0.600098)"
          fill={fill}
        />
      </g>
    </g>
  </svg>
)

export const ExIcon = ({ fill = 'black' }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" version="1.1">
    <g fill="none">
      <path
        id="Stroke 1"
        d="M 0 0L 24 0L 24 24L 0 24L 0 0Z"
        strokeWidth="0"
        stroke={fill}
        strokeOpacity="0.01"
      />
      <path
        id="Shape"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 14 1.4L 12.6 0L 7 5.6L 1.4 0L 0 1.4L 5.6 7L 0 12.6L 1.4 14L 7 8.4L 12.6 14L 14 12.6L 8.4 7L 14 1.4Z"
        transform="translate(5 5)"
        fill={fill}
      />
    </g>
  </svg>
)

export const ChevronDownIcon = ({ fill = '#73737D' }) => (
  <svg width="24" height="25" viewBox="0 0 24 25" version="1.1">
    <g fill="none">
      <g id="chevron-down-icon">
        <path
          id="Stroke 1"
          d="M 0 0L 24 0L 24 24L 0 24L 0 0Z"
          transform="translate(0 1)"
          stroke="black"
          strokeOpacity="0.01"
          strokeWidth="0"
        />
        <path
          id="&#239;&#132;&#135;"
          d="M 12.0034 0.998282C 12.0034 0.902062 11.9553 0.793814 11.8832 0.72165L 11.2818 0.120276C 11.2096 0.0481109 11.1014 0 11.0052 0C 10.9089 0 10.8007 0.0481109 10.7285 0.120276L 6.00172 4.84708L 1.27491 0.120276C 1.20275 0.0481109 1.0945 0 0.998282 0C 0.890034 0 0.793814 0.0481109 0.721649 0.120276L 0.120275 0.72165C 0.0481099 0.793814 0 0.902062 0 0.998282C 0 1.0945 0.0481099 1.20275 0.120275 1.27491L 5.72509 6.87973C 5.79725 6.95189 5.9055 7 6.00172 7C 6.09794 7 6.20619 6.95189 6.27835 6.87973L 11.8832 1.27491C 11.9553 1.20275 12.0034 1.0945 12.0034 0.998282Z"
          transform="translate(6 9)"
          fill="black"
        />
      </g>
    </g>
  </svg>
)

export const PencilIcon = ({ fill = '#73737D' }) => (
  <svg width="17" height="17" viewBox="0 0 17 17">
    <g fill="none">
      <path
        id="Vector"
        d="M 16.7 4C 17.1 3.6 17.1 3 16.7 2.6L 14.4 0.3C 14 -0.1 13.4 -0.1 13 0.3L 11 2.3L 14.7 6L 16.7 4ZM 13.7 7L 10 3.3L 0 13.3L 0 17L 3.7 17L 13.7 7Z"
        fill="black"
      />
    </g>
  </svg>
)

export const SubmittedCheckIcon = ({ fill = '#73737D' }) => (
  <svg
    width="90"
    height="90"
    viewBox="0 0 90 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.75"
      y="0.75"
      width="88.5"
      height="88.5"
      rx="14.25"
      stroke="black"
      strokeWidth="1.5"
    />
    <path
      d="M25.0713 47.4684L39.7878 60.4284L64.9284 29.5713"
      stroke="black"
      strokeWidth="1.5"
    />
  </svg>
)

export const CloseIcon = ({ fill = '#73737D' }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
      fill={fill}
    />
  </svg>
)

export const CreateIcon = ({ fill = '#479FFA' }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H4C4.55228 5 5 5.44772 5 6C5 6.55228 4.55228 7 4 7Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 6C12 5.44772 11.5523 5 11 5H8C7.44772 5 7 5.44772 7 6C7 6.55228 7.44772 7 8 7H11C11.5523 7 12 6.55228 12 6Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 11V8C7 7.44772 6.55228 7 6 7C5.44772 7 5 7.44772 5 8V11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 4V1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V4C5 4.55228 5.44772 5 6 5C6.55228 5 7 4.55228 7 4Z"
      fill={fill}
    />
  </svg>
)

export const GoToIcon = ({ fill = '#73737D' }) => (
  <svg
    width="10"
    height="7"
    viewBox="0 0 10 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.37273 0V2.625H0V4.375H6.37273V7L10 3.5L6.37273 0Z"
      fill={fill}
    />
  </svg>
)

export const MailIcon = ({ fill = '#73737D' }) => (
  <svg
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.7984 13.4977H4.54263C3.69066 13.4977 3 12.807 3 11.9551V5.78456C3 4.93259 3.69066 4.24194 4.54263 4.24194H14.3126C14.7741 4.21546 15.1966 4.50016 15.3453 4.93785C15.494 5.37555 15.3323 5.85867 14.9502 6.1188L10.1681 9.79539C9.58955 10.2401 8.77856 10.2187 8.22436 9.74397L5.25738 7.20378C5.11776 7.08437 5.05245 6.89954 5.08605 6.71892C5.11966 6.5383 5.24707 6.38933 5.42029 6.32812C5.59351 6.26692 5.78623 6.30277 5.92585 6.42218L8.89283 8.96237C9.08164 9.11554 9.35193 9.11554 9.54074 8.96237L14.3229 5.28578L4.54263 5.27035C4.25864 5.27035 4.02842 5.50057 4.02842 5.78456V11.9551C4.02842 12.2391 4.25864 12.4693 4.54263 12.4693H13.7984C14.0824 12.4693 14.3126 12.2391 14.3126 11.9551V7.8414C14.3126 7.55741 14.5428 7.32719 14.8268 7.32719C15.1108 7.32719 15.341 7.55741 15.341 7.8414V11.9551C15.341 12.807 14.6504 13.4977 13.7984 13.4977Z"
      fill={fill}
    />
  </svg>
)

export const BookIcon = ({ fill = '#73737D' }) => (
  <svg
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.96464 14.4401C8.77054 14.435 8.58193 14.3746 8.42088 14.2661C7.31496 13.5288 5.96151 13.2609 4.65808 13.5212C4.49539 13.5562 4.32563 13.5147 4.19736 13.4087C4.06908 13.3027 3.99642 13.1438 4.00014 12.9774V4.54376C4.00014 4.24345 4.24358 4 4.54389 4H6.07729C6.53891 3.99957 6.99894 4.05433 7.44756 4.16313C7.63502 4.21558 7.78027 4.36406 7.82858 4.55264C7.87689 4.74121 7.82092 4.94124 7.68176 5.07736C7.5426 5.21349 7.3414 5.26503 7.15393 5.21258C6.75675 5.11919 6.34923 5.07716 5.94135 5.08752H5.08765V12.3521C6.46062 12.2268 7.83539 12.572 8.98639 13.3309C10.1374 12.572 11.5122 12.2268 12.8851 12.3521V5.12014C11.7151 4.99024 10.5367 5.27713 9.55734 5.93034V11.2048C9.55734 11.5051 9.31389 11.7485 9.01358 11.7485C8.71327 11.7485 8.46982 11.5051 8.46982 11.2048V5.66934C8.46853 5.49914 8.54701 5.33815 8.68189 5.23433C10.0823 4.18805 11.864 3.79213 13.5757 4.14682C13.8286 4.20378 14.0062 4.43139 13.9998 4.69057V13.0155C14.0036 13.1819 13.9309 13.3408 13.8026 13.4468C13.6743 13.5528 13.5046 13.5942 13.3419 13.5593C12.0385 13.299 10.685 13.5669 9.57909 14.3042C9.39366 14.413 9.17866 14.4606 8.96464 14.4401V14.4401Z"
      fill={fill}
    />
  </svg>
)

export const LightbulbIcon = ({ fill = '#73737D' }) => (
  <svg
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.97993 11.9689C9.67396 11.9689 9.42592 11.7208 9.42592 11.4149C9.42592 11.1089 9.67396 10.8608 9.97993 10.8608C10.0945 10.8608 10.2044 10.8153 10.2855 10.7343C10.3665 10.6532 10.4121 10.5433 10.4121 10.4287V10.3401C10.3957 9.42739 10.6908 8.53637 11.2486 7.8138C11.9997 6.87787 12.0947 5.57534 11.4874 4.54033C10.8801 3.50531 9.6967 2.95289 8.51331 3.15199C7.32992 3.3511 6.39244 4.26035 6.15727 5.43711C5.99751 6.25633 6.19949 7.10462 6.71128 7.76394C7.27863 8.50292 7.58631 9.40843 7.58661 10.3401V10.4287C7.58661 10.6674 7.78008 10.8608 8.01874 10.8608C8.32471 10.8608 8.57275 11.1089 8.57275 11.4149C8.57275 11.7208 8.32471 11.9689 8.01874 11.9689C7.16814 11.9689 6.4786 11.2793 6.4786 10.4287V10.3401C6.47788 9.65254 6.25001 8.9845 5.83041 8.43983C4.55719 6.78582 4.76985 4.43084 6.31879 3.03169C7.86773 1.63253 10.2321 1.65963 11.7486 3.09393C13.265 4.52823 13.4237 6.88747 12.1129 8.51185C11.7162 9.03741 11.5092 9.68183 11.5256 10.3401V10.4287C11.5256 10.8382 11.3626 11.2307 11.0726 11.5197C10.7825 11.8087 10.3894 11.9703 9.97993 11.9689ZM10.655 13.0771C10.655 12.7712 10.4069 12.5231 10.101 12.5231H7.88494C7.57897 12.5231 7.33094 12.7712 7.33094 13.0771C7.33094 13.3831 7.57897 13.6312 7.88494 13.6312H10.101C10.4069 13.6312 10.655 13.3831 10.655 13.0771ZM10.1024 14.7376C10.1024 14.4316 9.85433 14.1836 9.54836 14.1836H8.44034C8.13437 14.1836 7.88633 14.4316 7.88633 14.7376C7.88633 15.0436 8.13437 15.2916 8.44034 15.2916H9.54836C9.85433 15.2916 10.1024 15.0436 10.1024 14.7376Z"
      fill={fill}
    />
  </svg>
)

export const LaptopIcon = ({ fill = '#73737D' }) => (
  <svg
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.6925 13.4299H3.80861C3.50234 13.4299 3.22234 13.2568 3.08537 12.9829C2.9484 12.7089 2.97796 12.3811 3.16173 12.1361L4.23987 10.6968C4.30986 10.6035 4.34769 10.49 4.34769 10.3733V5.88284C4.34769 4.98968 5.07174 4.26562 5.96491 4.26562H12.4338C13.3269 4.26562 14.051 4.98968 14.051 5.88284V9.65635C14.051 10.5495 13.3269 11.2736 12.4338 11.2736H7.04305C6.74533 11.2736 6.50398 11.0322 6.50398 10.7345C6.50398 10.4368 6.74533 10.1954 7.04305 10.1954H12.4338C12.7315 10.1954 12.9729 9.95408 12.9729 9.65635V5.88284C12.9729 5.58512 12.7315 5.34377 12.4338 5.34377H5.96491C5.66718 5.34377 5.42583 5.58512 5.42583 5.88284V10.3733C5.42583 10.7232 5.31234 11.0637 5.10239 11.3437L4.34769 12.3517H14.2558L14.1049 12.0552C13.9833 11.7906 14.094 11.4772 14.3548 11.3475C14.6156 11.2178 14.9322 11.3188 15.0698 11.5755L15.4149 12.2655C15.5399 12.5159 15.5265 12.8133 15.3794 13.0515C15.2323 13.2897 14.9725 13.4349 14.6925 13.4353V13.4299Z"
      fill={fill}
    />
  </svg>
)

export const ViewIcon = ({ fill = '#73737D' }) => (
  <svg
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.99136 13.0848C6.1989 13.0238 3.61876 11.5809 2.10487 9.23368C2.03687 9.13626 2.00028 9.02039 2 8.90159C2 8.77732 2.03646 8.65577 2.10487 8.55202C3.57466 6.15808 6.18223 4.69922 8.99136 4.69922C11.8005 4.69922 14.4081 6.15808 15.8778 8.55202C16.0098 8.72224 16.0371 8.95138 15.9488 9.14782C15.8605 9.34427 15.671 9.47598 15.4561 9.49029C15.2412 9.50461 15.0359 9.3992 14.9224 9.2162C13.6238 7.18449 11.4018 5.92943 8.99136 5.86617C6.72187 5.91991 4.61132 7.04323 3.29923 8.89576C4.61132 10.7483 6.72187 11.8716 8.99136 11.9254C10.5615 11.9135 12.079 11.3575 13.2852 10.3523C13.5356 10.1687 13.886 10.2137 14.0819 10.4546C14.2777 10.6955 14.2502 11.0477 14.0193 11.2553C12.6054 12.4284 10.8285 13.0749 8.99136 13.0848ZM10.7388 8.78103C10.7388 7.81573 9.95631 7.03319 8.991 7.03319C8.66924 7.03319 8.40839 7.29404 8.40839 7.61581C8.40839 7.93758 8.66924 8.19842 8.991 8.19842C9.31277 8.19842 9.57362 8.45927 9.57362 8.78103C9.57362 9.1028 9.31277 9.36365 8.991 9.36365C8.66924 9.36365 8.40839 9.1028 8.40839 8.78103C8.40839 8.45927 8.14755 8.19842 7.82578 8.19842C7.50401 8.19842 7.24316 8.45927 7.24316 8.78103C7.24316 9.74634 8.0257 10.5289 8.991 10.5289C9.95631 10.5289 10.7388 9.74634 10.7388 8.78103Z"
      fill={fill}
    />
  </svg>
)

export const SlashIcon = ({ fill = '#73737D' }) => (
  <svg
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.7228 15.2053C13.8755 15.3125 14.0752 15.3258 14.2407 15.2398C14.4063 15.1538 14.5102 14.9827 14.5102 14.7961V10.9985C14.5102 10.8352 14.4305 10.6823 14.2967 10.5887L4.28649 3.59022C4.13374 3.48342 3.93426 3.47045 3.76897 3.55658C3.60367 3.6427 3.5 3.81361 3.5 4V7.76488C3.5 7.92775 3.57933 8.08042 3.71261 8.17403L13.7228 15.2053Z"
      stroke={fill}
      stroke-linejoin="round"
    />
  </svg>
)

export const FeyIcon = ({ fill = '#73737D' }) => (
  <svg
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.6539 13.4962C11.7637 13.6063 11.851 13.7378 11.9105 13.8829C11.9701 14.028 12.0008 14.1838 12.0008 14.3411C12.0008 14.4985 11.9701 14.6543 11.9105 14.7994C11.851 14.9445 11.7637 15.0759 11.6539 15.1861L10.858 15.9989L10.049 15.1692C9.60491 14.7137 9.3421 14.1055 9.31158 13.4629C9.28107 12.8202 9.48504 12.1888 9.88387 11.6914L11.6539 13.4962Z"
      fill={fill}
    />
    <path
      d="M11.6582 7.17029C11.8785 7.39342 12.0022 7.69583 12.0022 8.01114C12.0022 8.32645 11.8785 8.62887 11.6582 8.85199L9.59733 10.9367C9.30309 11.2325 9.06989 11.5845 8.91128 11.9722C8.75266 12.3599 8.67178 12.7756 8.67335 13.1952C8.67385 13.4141 8.69629 13.6324 8.74033 13.8467L7.92798 13.0024C7.43381 12.5017 7.15625 11.8232 7.15625 11.1157C7.15625 10.4082 7.43381 9.72963 7.92798 9.22898L10.8167 6.30859L11.6582 7.17029Z"
      fill={fill}
    />
    <path
      d="M11.6499 2.86403C11.8739 3.08979 11.9997 3.39583 11.9997 3.71491C11.9997 4.034 11.8739 4.34004 11.6499 4.5658L7.49459 8.7545C7.11843 9.13269 6.84186 9.59933 6.68989 10.1122C6.53791 10.6251 6.51533 11.168 6.62419 11.6919L5.78338 10.8436C5.53505 10.594 5.33803 10.2976 5.20361 9.97135C5.06919 9.64506 5 9.29528 5 8.94203C5 8.58879 5.06919 8.23901 5.20361 7.91271C5.33803 7.58642 5.53505 7.29002 5.78338 7.04047L10.7899 2L11.6499 2.86403Z"
      fill={fill}
    />
  </svg>
)

export const ShiftIcon = () => (
  <svg
    width="10"
    height="9"
    viewBox="0 0 10 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 4.94125L2.45 4.94125L2.45 8C2.45 8.24853 2.65147 8.45 2.9 8.45L6.7 8.45C6.81935 8.45 6.93381 8.40259 7.0182 8.3182C7.10259 8.23381 7.15 8.11935 7.15 8L7.15 4.94125L8.6 4.94125C8.78548 4.94125 8.95196 4.82745 9.0193 4.65462C9.08663 4.4818 9.04104 4.28536 8.90445 4.15987L5.10445 0.668625C4.9323 0.510459 4.6677 0.510459 4.49555 0.668625L0.695549 4.15987C0.558964 4.28536 0.513365 4.4818 0.580703 4.65462C0.648042 4.82745 0.81452 4.94125 1 4.94125Z"
      stroke="#08080B"
      stroke-width="0.9"
      stroke-linejoin="round"
    />
  </svg>
)

export const TwitterIcon = ({ fill = '#73737D' }) => (
  <svg
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.5673 5.09157C12.1227 4.72214 11.5479 4.5 10.9234 4.5C9.55465 4.5 8.426 5.56856 8.37362 6.92127C7.05043 6.71364 5.8907 6.0282 5.08124 5.05077C4.97744 4.92544 4.81914 4.85846 4.65691 4.87123C4.49467 4.884 4.34881 4.97492 4.2659 5.11496C4.04507 5.48794 3.91838 5.9225 3.91838 6.38502C3.91838 6.7438 3.99429 7.08478 4.13074 7.39327C3.99104 7.48338 3.90479 7.63752 3.90188 7.80474C3.90166 7.81759 3.90166 7.82983 3.90166 7.83767L3.90166 7.8388C3.90166 8.54665 4.19637 9.18346 4.66895 9.6398C4.61508 9.75363 4.6054 9.88542 4.64542 10.0084C4.83622 10.5949 5.23776 11.0858 5.76047 11.3966C5.36515 11.5416 4.937 11.6208 4.48941 11.6208C4.34305 11.6208 4.199 11.6124 4.05772 11.596C3.82586 11.5691 3.60621 11.7061 3.52851 11.9262C3.45082 12.1463 3.53575 12.3909 3.73314 12.5155C4.71832 13.1373 5.88884 13.5 7.14496 13.5C11.2453 13.5 13.4822 10.1453 13.4822 7.25376C13.4822 7.24805 13.4822 7.24234 13.4822 7.23663C13.841 6.94849 14.1558 6.60763 14.4136 6.22794C14.5387 6.04372 14.5269 5.79897 14.3847 5.62763C14.3191 5.5486 14.233 5.49398 14.1393 5.46681C14.1611 5.41286 14.1811 5.35796 14.1993 5.30217C14.2634 5.10488 14.199 4.88851 14.0374 4.75836C13.8759 4.62821 13.6508 4.61131 13.4716 4.7159C13.1922 4.87904 12.8886 5.0064 12.5673 5.09157Z"
      stroke={fill}
      stroke-linejoin="round"
    />
  </svg>
)

export const LinkedInIcon = ({ fill = '#73737D' }) => (
  <svg
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.68731 13.2695H4.73307V6.98649H6.68731V13.2695ZM5.72066 6.12491C5.41246 6.12491 5.14629 6.01284 4.92215 5.78869C4.69801 5.56455 4.58594 5.29838 4.58594 4.99019C4.58594 4.68199 4.69801 4.41582 4.92215 4.19168C5.14629 3.96754 5.41246 3.85547 5.72066 3.85547C6.02885 3.85547 6.29502 3.96754 6.51916 4.19168C6.74331 4.41582 6.85538 4.68199 6.85538 4.99019C6.85538 5.29838 6.74331 5.56455 6.51916 5.78869C6.29502 6.01284 6.02885 6.12491 5.72066 6.12491ZM14.0729 13.4511H12.1186V10.3831C12.1186 9.87882 12.0766 9.51459 11.9925 9.29045C11.8384 8.91221 11.5372 8.72309 11.089 8.72309C10.6407 8.72309 10.3255 8.8912 10.1434 9.22741C10.0033 9.47957 9.93323 9.85081 9.93323 10.3411V13.4511H8V7.16811H9.87019V8.02965H9.8912C10.0313 7.74948 10.2554 7.51833 10.5636 7.33621C10.8998 7.11207 11.2921 7 11.7404 7C12.6509 7 13.2884 7.28718 13.6526 7.86155C13.9328 8.32384 14.0729 9.03829 14.0729 10.0049V13.4511Z"
      fill={fill}
    />
  </svg>
)

export const InstagramIcon = ({ fill = '#73737D' }) => (
  <svg
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.46094 6.91446C4.46094 5.30485 5.76578 4 7.37539 4H11.0855C12.6952 4 14 5.30485 14 6.91446V10.6246C14 12.2342 12.6952 13.5391 11.0855 13.5391H7.37539C5.76579 13.5391 4.46094 12.2342 4.46094 10.6246V6.91446ZM7.37539 4.94015C6.28501 4.94015 5.40108 5.82408 5.40108 6.91446V10.6246C5.40108 11.715 6.28501 12.5989 7.37539 12.5989H11.0855C12.1759 12.5989 13.0599 11.715 13.0599 10.6246V6.91446C13.0599 5.82408 12.1759 4.94015 11.0855 4.94015H7.37539Z"
      fill={fill}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.7168 8.80738C6.7168 7.40836 7.84504 6.26953 9.24259 6.26953C10.6401 6.26953 11.7684 7.40836 11.7684 8.80738C11.7684 10.2064 10.6401 11.3452 9.24259 11.3452C7.84504 11.3452 6.7168 10.2064 6.7168 8.80738ZM9.24259 7.20968C8.36945 7.20968 7.65694 7.9224 7.65694 8.80738C7.65694 9.69236 8.36945 10.4051 9.24259 10.4051C10.1157 10.4051 10.8282 9.69236 10.8282 8.80738C10.8282 7.9224 10.1157 7.20968 9.24259 7.20968Z"
      fill={fill}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.7618 6.83931C12.0941 6.83931 12.3635 6.56835 12.3635 6.23411C12.3635 5.89986 12.0941 5.62891 11.7618 5.62891C11.4295 5.62891 11.1602 5.89986 11.1602 6.23411C11.1602 6.56835 11.4295 6.83931 11.7618 6.83931Z"
      fill={fill}
    />
  </svg>
)
