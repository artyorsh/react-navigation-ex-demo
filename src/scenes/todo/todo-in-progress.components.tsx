import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import {
  Input,
  Layout,
  List,
  ListElement,
  ListItem,
  ListItemElement,
  Text,
  ThemedComponentProps,
  withStyles,
} from 'react-native-ui-kitten';
import { TodoInProgressScreenProps } from '../../navigation/todo.navigator';
import { AppRoute } from '../../navigation/app-routes';
import { ProgressBar } from '../../components/progress-bar.component';
import { SearchIcon } from '../../assets/icons';
import { Todo } from '../../data/todo.model';

const allTodos: Todo[] = [
  Todo.mocked0(),
  Todo.mocked1(),
  Todo.mocked2(),
  Todo.mocked0(),
  Todo.mocked1(),
  Todo.mocked2(),
  Todo.mocked0(),
  Todo.mocked1(),
  Todo.mocked2(),
];

const TodoInProgressScreenComponent = (props: TodoInProgressScreenProps & ThemedComponentProps): ListElement => {

  const [todos, setTodos] = React.useState<Todo[]>(allTodos);
  const [query, setQuery] = React.useState<string>('');

  const onChangeQuery = (query: string): void => {
    const nextTodos: Todo[] = allTodos.filter((todo: Todo): boolean => {
      return todo.title.toLowerCase().includes(query.toLowerCase());
    });

    setTodos(nextTodos);
    setQuery(query);
  };

  const navigateTodoDetails = (todoIndex: number): void => {
    const { [todoIndex]: todo } = todos;
    props.navigation.navigate(AppRoute.TODO_DETAILS, { todo });
  };

  const renderTodo = ({ item }: ListRenderItemInfo<Todo>): ListItemElement => (
    <ListItem
      style={props.themedStyle.item}
      onPress={navigateTodoDetails}>
      <Text category='s1'>
        {item.title}
      </Text>
      <Text
        appearance='hint'
        category='c1'>
        {item.description}
      </Text>
      <ProgressBar
        style={props.themedStyle.itemProgressBar}
        progress={item.progress}
        text={`${item.progress}%`}
      />
    </ListItem>
  );

  return (
    <Layout style={props.themedStyle.container}>
      <Input
        style={props.themedStyle.filterInput}
        placeholder='Search'
        value={query}
        icon={SearchIcon}
        onChangeText={onChangeQuery}
      />
      <List
        style={props.themedStyle.list}
        data={todos}
        renderItem={renderTodo}
      />
    </Layout>
  );
};

export const TodoInProgressScreen = withStyles(TodoInProgressScreenComponent, (theme) => ({
  container: {
    flex: 1,
  },
  filterInput: {
    marginTop: 16,
    marginHorizontal: 8,
  },
  list: {
    flex: 1,
    backgroundColor: theme['background-basic-color-1'],
  },
  item: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingHorizontal: 12,
  },
  itemProgressBar: {
    width: '50%',
    marginVertical: 12,
  },
}));


