// Generated by CodiumAI

describe('DialogTitle', () => {

  // Renders the DialogTitle component with children and other props
  it('should render the DialogTitle component with children and other props', () => {
    // Arrange
    const props = {
      children: 'Test Title',
      classes: {},
      onClose: jest.fn(),
      otherProp: 'test',
    };

    // Act
    const wrapper = shallow(<DialogTitle {...props} />);

    // Assert
    expect(wrapper.find(MuiDialogTitle)).toHaveLength(1);
    expect(wrapper.find(Typography)).toHaveLength(1);
    expect(wrapper.find(Typography).prop('variant')).toBe('h6');
    expect(wrapper.find(Typography).text()).toBe('Test Title');
    expect(wrapper.find(IconButton)).toHaveLength(1);
    expect(wrapper.find(IconButton).prop('aria-label')).toBe('close');
    expect(wrapper.find(IconButton).prop('onClick')).toBe(props.onClose);
    expect(wrapper.find(CloseIcon)).toHaveLength(1);
  });

  // onClose is not a function
  it('should render the DialogTitle component without the close button', () => {
    // Arrange
    const props = {
      children: 'Test Title',
      classes: {},
      onClose: null,
      otherProp: 'test',
    };

    // Act
    const wrapper = shallow(<DialogTitle {...props} />);

    // Assert
    expect(wrapper.find(MuiDialogTitle)).toHaveLength(1);
    expect(wrapper.find(Typography)).toHaveLength(1);
    expect(wrapper.find(Typography).prop('variant')).toBe('h6');
    expect(wrapper.find(Typography).text()).toBe('Test Title');
    expect(wrapper.find(IconButton)).toHaveLength(0);
  });
});
