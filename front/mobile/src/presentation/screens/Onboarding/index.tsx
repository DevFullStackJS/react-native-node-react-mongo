import React, {useEffect, useState, useRef} from 'react';
import {connect} from 'react-redux';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {Loader} from '../../components/Loader';
import {LayoutComponent} from '../../layout';

import {screenWidth} from '../../utils/dimensions.hook';

import mapDispatchToProps from '../../../services/redux/mapDispatchToProps';
import mapStateToProps from '../../../services/redux/mapStateToProps';

import styles from './styles';

export const Onboarding = connect(
  mapStateToProps,
  mapDispatchToProps,
)(({initialScreenUsers, guide: {list}}: any) => {
  const [loading, setLoading] = useState(true);
  const [entries, setEntries] = useState<any>([]);
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  const ref = useRef<any>(null);

  useEffect(() => {
    setEntries(list?.items || []);
    setLoading(false);
  }, [list]);

  const renderItem = ({item: {image, title, description}}: any) => {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{uri: image}}
          resizeMode="cover"
          style={styles.imageBackground}>
          <View style={styles.content}>
            <View style={styles.viewSkip}>
              <TouchableOpacity onPress={() => initialScreenUsers(false)}>
                <Text style={styles.skip}>Skip</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewTitle} />
            <View style={styles.viewDescription}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <LayoutComponent>
      <View style={styles.container}>
        <Carousel
          ref={ref}
          data={entries}
          renderItem={renderItem}
          sliderWidth={screenWidth}
          itemWidth={screenWidth}
          onSnapToItem={(nb: number) => setActiveDotIndex(nb)}
        />
        <View style={styles.footer}>
          <View>
            {activeDotIndex === 0 ? (
              <TouchableOpacity onPress={() => initialScreenUsers(false)}>
                <Text style={styles.skip}>Skip</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => ref.current.snapToPrev()}>
                <Text style={styles.next_prev}>Prev</Text>
              </TouchableOpacity>
            )}
          </View>
          <Pagination
            activeDotIndex={activeDotIndex}
            dotsLength={entries.length}
          />
          <View>
            {activeDotIndex === 2 ? (
              <TouchableOpacity onPress={() => initialScreenUsers(false)}>
                <Text style={styles.skip}>Skip</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => ref.current.snapToNext()}>
                <Text style={styles.next_prev}>Next</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </LayoutComponent>
  );
});
