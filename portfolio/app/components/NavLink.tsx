'use client'

import Link from "next/link"
import { useState } from "react";

interface NavLinkProps {
    href: string;
    text: string;
    width: number;
}

export default function NavLink(props: NavLinkProps) {

    const [showAnimation, setShowAnimation] = useState(false);

    return (
        <div className="flex flex-col max-h-1 mb-5" onMouseEnter={() => setShowAnimation(true)} onMouseLeave={() => setShowAnimation(false)}>
            <Link href={props.href}>
                <span data-cy="user-name" className="hidden lg:block">{props.text}</span>
                <span className={showAnimation ? 'block' : 'hidden'}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 255 32.61" width={props.width}>
                        <path d="M5 14.11s54-8 125-9 120 5 120 5-200.5-5.5-239.5 17.5" className="stroke" fill="none"
                            strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" stroke='#fff'
                            style={{ strokeDasharray: '822', strokeDashoffset: '822' }} />
                    </svg>
                </span>
            </Link>
        </div>
    )
}