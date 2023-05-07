import * as React from 'react';
import { SafeAreaView, View,  Text, FlatList, StyleSheet, ScrollView, Image, Dimensions} from 'react-native';
import news_data from './src/news_data.json'
import NewsCard from './src/components/NewsCard/index';
import news_banner_data from './src/news_banner_data.json';

function App() {
  const renderNews = ({item}) => <NewsCard news = {item} />;
  return(
    <SafeAreaView style = {styles.container}>
    
        <Text style = {styles.headerText}> NEWS </Text>

        <FlatList
          ListHeaderComponent={() => 
            <ScrollView horizontal showsHorizontalScrollIndicator={false}> 
              {
                news_banner_data.map(bannerNews => <Image source = {{uri: bannerNews.imageUrl}} style = {styles.banner_image} />)
              }
            </ScrollView>}
          keyExtractor = {(item, index) => item.u_id.toString() }
          data={news_data}
          //renderItem={({item}) => <NewsCard news = {item}/>}
          renderItem = {renderNews} 
        />

    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1'
  },

  banner_image: {
    height: Dimensions.get('window') / 5,
    width: Dimensions.get('window') / 2
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center' 
  }
});
export default App;