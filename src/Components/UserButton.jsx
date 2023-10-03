function UserButton({onClick}) {
    return (
        <button onClick={onClick}>
        <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="14" height="14" fill="#1E1E1E"/>
        <g id="Main UI">
        <rect width="1432" height="752" transform="translate(-1206 -568)" fill="#343541"/>
        <g id="Input Field">
        <g id="Input Field_2" filter="url(#filter0_d_0_1)">
        <rect x="-741" y="-19" width="768" height="48" rx="4" fill="#40414E"/>
        <rect x="-740.5" y="-18.5" width="767" height="47" rx="3.5" stroke="#303139"/>
        </g>
        <path id="send" d="M13.517 7.78232C13.6622 7.70957 13.7842 7.59787 13.8695 7.45972C13.9548 7.32156 14 7.1624 14 7.00004C14 6.83767 13.9548 6.67851 13.8695 6.54036C13.7842 6.4022 13.6622 6.2905 13.517 6.21775L1.26652 0.0924925C1.11462 0.0164901 0.943888 -0.013663 0.775147 0.00571153C0.606407 0.025086 0.446953 0.0931506 0.316236 0.201602C0.185518 0.310054 0.0891905 0.454204 0.0390005 0.616468C-0.0111885 0.778733 -0.0130692 0.952096 0.0335884 1.11541L1.28402 5.4906C1.33632 5.67346 1.44678 5.8343 1.59867 5.94877C1.75056 6.06324 1.93561 6.12511 2.1258 6.125L6.1256 6.125C6.35767 6.125 6.58024 6.21719 6.74434 6.38129C6.90844 6.54539 7.00063 6.76796 7.00063 7.00004C7.00063 7.23211 6.90844 7.45468 6.74434 7.61878C6.58024 7.78288 6.35767 7.87507 6.1256 7.87507L2.1258 7.87507C1.93561 7.87497 1.75056 7.93683 1.59867 8.0513C1.44678 8.16577 1.33632 8.32661 1.28402 8.50948L0.0344624 12.8847C-0.0122877 13.0479 -0.0105196 13.2213 0.0395511 13.3835C0.0896219 13.5458 0.185831 13.69 0.316447 13.7986C0.447062 13.9071 0.606437 13.9753 0.775136 13.9948C0.943837 14.0143 1.11457 13.9843 1.26652 13.9085L13.517 7.7832L13.517 7.78232Z" fill="#8E8E9E"/>
        </g>
        </g>
        <defs>
        <filter id="filter0_d_0_1" x="-747" y="-25" width="780" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="3"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
        </filter>
        </defs>
        </svg>
        </button>
    )
}

export default UserButton