
'use client';
import Link from "next/link";

const Header = () => {

  return(
   
      <div>
        <Link href="/Page1" replace={false}>
          편지
        </Link>
        &nbsp;|&nbsp;
        <Link href="/Page2">
          선물
        </Link>
        &nbsp;|&nbsp;
        <Link href="/Page3">
          카메라
        </Link>
        <style jsx>{`
          .active {
            color: red;
          }
        `}</style>
      </div>
    
  )
}

export default Header