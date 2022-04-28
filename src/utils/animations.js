// CLOSE NAVIGATION
export const closeNavAnim = (
  closeMenu,
  // linkRef4,
  linkRef3,
  linkRef2,
  linkRef1,
  dropdownRef,
  iconsRef
) => {
  closeMenu
    .to(
      iconsRef.current,
      {
        duration: 0.3,
        ease: 'power3.in',
        opacity: 0,
        y: 20,
      },
      '-=.2'
    )
    .to(
      [linkRef3.current, linkRef2.current, linkRef1.current],
      {
        y: 100,
        duration: 0.5,
        ease: 'circ.in',
        stagger: 0.1,
      }
    )
    .to(
      dropdownRef.current,
      {
        duration: 0.8,
        height: 0,
        ease: 'power3.inOut',
      },
      '-=.5'
    )
    
    
};

export const openNavAnim = (
  openMenu,
  // linkRef4,
  linkRef3,
  linkRef2,
  linkRef1,
  dropdownRef,
  iconsRef
) => {
  openMenu
    .to(dropdownRef.current, {
      duration: 0,
      opacity: 1,
      height: '100vh',
    })
    .from(dropdownRef.current, {
      duration: 0.8,
      height: 0,
      transformOrigin: 'right top',
      skewY: 2,
      ease: 'power3.inOut',
    })
    .fromTo(
      [linkRef1.current, linkRef2.current, linkRef3.current],
      {
        y: 100,
        duration: 0.5,
        ease: 'circ.out',
        stagger: 0.1,
      },
      {
        y: 0,
      },
      '-=.5'
    )
    .fromTo(
      iconsRef.current,
      {
        duration: 0.5,
        ease: 'circ.out',
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
      }
    );
};

// HOMEPAGE ANIMATION
export const homepageAnim = (tl, headerRef, subheaderRef, buttonsRef) => {
  tl.from(headerRef.current, {
    delay: 0.3,
    opacity: 0,
    y: 60,
    duration: 1,
    ease: 'power3.out',
  })
    .from(
      subheaderRef.current,
      {
        opacity: 0,
        y: 40,
        skewY: 7,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=.6'
    )
    .from(
      buttonsRef.current,
      {
        opacity: 0,
        duration: 0.8,
        ease: 'power3.inOut',
      },
      '-=.3'
    );
};

export const projectsAnim = (tl, headerRef, projectsRef) => {
  tl.from(headerRef.current, {
    y: 300,
    fontSize: '20vw',
    duration: 1,
    ease: 'power3.inOut',
  }).from(projectsRef.current, {
    opacity: 0,
  });
};
