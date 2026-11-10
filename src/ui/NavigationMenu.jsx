import { NavigationMenu as NavMenu } from '@base-ui/react/navigation-menu';

import cn from '../utils/cn';

const NavigationMenu = ({
  links,
  closeLinkOnClick = 'false',

  triggerIcon,

  classNames = {},
  positionerProps = {},

  renderLinkAs,
}) => {
  // Navigation Menu Components 👇
  const {
    Root,
    List,
    Item,
    Trigger,
    Icon,
    Content,
    Link,
    Portal,
    Positioner,
    Popup,
    Arrow,
    Viewport,
  } = NavMenu;

  return (
    <Root className={classNames.root}>
      <List className={classNames.list}>
        {/* Iterating over array of links 👇 */}
        {links.map((navItem) =>
          Object.hasOwn(navItem, 'triggerLabel') ? (
            <Item key={navItem.triggerLabel}>
              <Trigger className={cn('flex', classNames.triggerLabel)}>
                {navItem.triggerLabel}
                <Icon className={classNames.icon}>{triggerIcon}</Icon>
              </Trigger>

              {/* Navigation menu contents 👇 */}
              <Content className={classNames.content}>
                {navItem.links.map((link) => (
                  <Link
                    key={link.label}
                    render={renderLinkAs}

                    to={link.to}

                    className={classNames.link}

                    closeOnClick={closeLinkOnClick}
                  >
                    {link.label}
                  </Link>
                ))}
              </Content>
            </Item>
          ) : (
            // Rendering direct links
            <Item key={navItem.label}>
              <Link
                to={navItem.to}
                className={classNames.link}
                render={renderLinkAs}
              >
                {navItem.label}
              </Link>
            </Item>
          ),
        )}
      </List>

      {/* Menu list overlay 👇 */}
      <Portal>
        <Positioner
          {...positionerProps}
          className={cn(positionerProps.className, classNames.positioner)}
        >
          <Popup className={classNames.popup}>
            <Arrow className={classNames.arrow} />
            <Viewport className={classNames.viewport} />
          </Popup>
        </Positioner>
      </Portal>
    </Root>
  );
};

export default NavigationMenu;
