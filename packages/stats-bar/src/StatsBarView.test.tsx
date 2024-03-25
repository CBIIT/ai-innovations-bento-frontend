import React from 'react';
import { render } from "@testing-library/react";
import StatsBar from './StatsBarView';

describe('StatsBar Component', () => {
  it('renders correctly with the provided styles and stats', () => {
    const styles = {
      global: {
        top: '100px',
        background: '#FFFFFF',
        statTitleFirst: true,
      },
    };
    const stats = [
      {
        name: 'Stat 1',
        val: 10,
        statIconSrc: 'icon1.png',
        statIconAlt: 'Icon 1',
      },
      {
        name: 'Stat 2',
        val: 20,
        statIconSrc: 'icon2.png',
        statIconAlt: 'Icon 2',
      },
    ];
    const { getByText } = render(<StatsBar styles={styles} stats={stats} />);
    expect(getByText('Stat 1')).toBeInTheDocument();
    expect(getByText('10')).toBeInTheDocument();
    expect(getByText('Stat 2')).toBeInTheDocument();
    expect(getByText('20')).toBeInTheDocument();
  });

  it('truncates the list of stats to the maximum allowed number', () => {
    const styles = { global: {} };
    const stats = new Array(10).fill(0).map((_, index) => ({
      name: `Stat ${index + 1}`,
      val: index + 1,
      statIconSrc: `icon${index + 1}.png`,
      statIconAlt: `Icon ${index + 1}`,
    }));
    const { queryByText } = render(<StatsBar styles={styles} stats={stats} />);
    expect(queryByText('Stat 8')).not.toBeInTheDocument();
  });

  it('renders correctly when no stats are provided', () => {
    const styles = { global: {} };
    const stats = [];
    const { container } = render(<StatsBar styles={styles} stats={stats} />);
    expect(container.firstChild).toBeEmptyDOMElement();
  });

  it('truncates the list of stats to the maximum allowed number', () => {
    const styles = { global: {} };
    const stats = new Array(10).fill(0).map((_, index) => ({
      name: `Stat ${index + 1}`,
      val: index + 1,
      statIconSrc: `icon${index + 1}.png`,
      statIconAlt: `Icon ${index + 1}`,
    }));
    const { queryByText } = render(<StatsBar styles={styles} stats={stats} />);
    expect(queryByText('Stat 8')).not.toBeInTheDocument();
  });

  it('renders correctly when no stats are provided', () => {
    const styles = { global: {} };
    const stats = [];
    const { container } = render(<StatsBar styles={styles} stats={stats} />);
    expect(container.firstChild).toBeEmptyDOMElement();
  });

  it('renders with default styles when styles are empty', () => {
    const styles = { global: {} };
    const stats = [
      {
        name: 'Stat 1',
        val: 10,
        statIconSrc: 'icon1.png',
        statIconAlt: 'Icon 1',
      },
      {
        name: 'Stat 2',
        val: 20,
        statIconSrc: 'icon2.png',
        statIconAlt: 'Icon 2',
      },
    ];
    const { getByText } = render(<StatsBar styles={styles} stats={stats} />);
    expect(getByText('Stat 1')).toBeInTheDocument();
    expect(getByText('10')).toBeInTheDocument();
    expect(getByText('Stat 2')).toBeInTheDocument();
    expect(getByText('20')).toBeInTheDocument();
  });

  it('throws an error when top is negative in styles', () => {
    const styles = {
      global: {
        top: '-100px',
        background: '#FFFFFF',
        statTitleFirst: true,
      },
    };
    const stats = [
      {
        name: 'Stat 1',
        val: 10,
        statIconSrc: 'icon1.png',
        statIconAlt: 'Icon 1',
      },
      {
        name: 'Stat 2',
        val: 20,
        statIconSrc: 'icon2.png',
        statIconAlt: 'Icon 2',
      },
    ];
    expect(() => {
      render(<StatsBar styles={styles} stats={stats} />);
    }).toThrow();
  });

  it('renders correctly with blank value for stat without val property', () => {
    const styles = {
      global: {
        top: '100px',
        background: '#FFFFFF',
        statTitleFirst: true,
      },
    };
    const stats = [
      {
        name: 'Stat 1',
      },
      {
        name: 'Stat 2',
        val: 20,
        statIconSrc: 'icon2.png',
        statIconAlt: 'Icon 2',
      },
    ];
    const { getByText } = render(<StatsBar styles={styles} stats={stats} />);
    expect(getByText('Stat 1')).toBeInTheDocument();
    expect(getByText('')).toBeInTheDocument();
    expect(getByText('Stat 2')).toBeInTheDocument();
    expect(getByText('20')).toBeInTheDocument();
  });

  it('renders correctly without an icon for stat without statIconSrc property', () => {
    const styles = {
      global: {
        top: '100px',
        background: '#FFFFFF',
        statTitleFirst: true,
      },
    };
    const stats = [
      {
        name: 'Stat 1',
        val: 10,
        statIconAlt: 'Icon 1',
      },
      {
        name: 'Stat 2',
        val: 20,
        statIconSrc: 'icon2.png',
        statIconAlt: 'Icon 2',
      },
    ];
    const { getByText, queryByAltText } = render(<StatsBar styles={styles} stats={stats} />);
    expect(getByText('Stat 1')).toBeInTheDocument();
    expect(getByText('10')).toBeInTheDocument();
    expect(getByText('Stat 2')).toBeInTheDocument();
    expect(getByText('20')).toBeInTheDocument();
    expect(queryByAltText('Icon 1')).not.toBeInTheDocument();
  });
});
