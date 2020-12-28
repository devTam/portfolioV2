export const closeNavAnim = (
  closeMenu,
  linkRef4,
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
      [linkRef4.current, linkRef3.current, linkRef2.current, linkRef1.current],
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
    .to(dropdownRef.current, {
      duration: 1,
      css: { display: 'none' },
    });
};

export const openNavAnim = (
  openMenu,
  linkRef4,
  linkRef3,
  linkRef2,
  linkRef1,
  dropdownRef,
  iconsRef
) => {
  openMenu
    .to(dropdownRef.current, {
      duration: 0,
      css: { display: 'block' },
    })
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
      [linkRef1.current, linkRef2.current, linkRef3.current, linkRef4.current],
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