/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
  useState,
  useContext,
  useEffect,
  useMemo,
  memo,
  useRef,
  useCallback,
} from 'react';
import { ThemeContext } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import debounce from 'lodash.debounce';

import plusIconDark from '~/assets/images/Icon-Plus-dark-2px.svg';
import plusIconLight from '~/assets/images/Icon-Plus-2px.svg';
import closeIconDark from '~/assets/images/Icon-Close-dark-2px.svg';
import closeIconLight from '~/assets/images/Icon-Close-2px.svg';
import api from '~/services/api';
import {
  Input,
  TextArea,
  Button,
  Switch,
  Modal,
  Card,
  Info,
} from '~/components';

import {
  Container,
  Content,
  NavbarContainer,
  LeftContainer,
  Scrollbar,
  NoTools,
} from './styles';
import ToolsItem from './ToolsItem';

function Home({ changeTheme }) {
  const [onlyTags, setOnlyTags] = useState(false);
  const [tools, setTools] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [loading, setLoading] = useState(false);
  const removeRef = useRef(null);
  const theme = useContext(ThemeContext);

  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);

  const plusIcon = useMemo(() => {
    return theme.name === 'dark' ? plusIconLight : plusIconDark;
  }, [theme]);

  const closeIcon = useMemo(() => {
    return theme.name === 'dark' ? closeIconLight : closeIconDark;
  }, [theme]);

  const toolDeleteName = useMemo(() => {
    const tool = tools.find((t) => t.id === deleteId);

    return tool ? tool.title : '';
  }, [deleteId, tools]);

  const empty = useMemo(() => {
    return tools.length === 0;
  }, [tools]);

  const handleChangeTheme = useCallback(
    (value) => {
      localStorage.setItem('@vuttr:theme:selected', value);
      changeTheme(value);
    },
    [changeTheme]
  );

  const loadTools = useCallback(async (searchText = '') => {
    try {
      const { data: response } = await api.get('/tools', {
        params: {
          q: searchText,
        },
      });

      setTools(response);
    } catch (error) {
      toast.error(`Internel server error`);
    }
  }, []);

  const handleToggleSearch = useCallback((value) => {
    setOnlyTags(value);
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);

      try {
        const toolExists = tools.find(t => t.title === title);

        if (toolExists) {
          throw new Error();
        }

        const { data: response } = await api.post('/tools', {
          title,
          link,
          description,
          tags: tags.split(' '),
        });

        setTools([...tools, response]);
        setTitle('');
        setLink('');
        setDescription('');
        setTags([]);
        setShowForm(false);
        toast.success(`${title} tool successfully added`);
      } catch (error) {
        toast.error(`Error adding ${title} tool`);
      }

      setLoading(false);
    },
    [description, link, tags, title, tools]
  );

  const handleSearch = useCallback(
    async (text) => {
      if (onlyTags) {
        const { data: response } = await api.get('/tools', {
          params: {
            tags_like: text,
          },
        });

        setTools(response);
      } else {
        loadTools(text);
      }
    },
    [loadTools, onlyTags]
  );

  const handleDelete = useCallback(async () => {
    setLoading(true);

    try {
      await api.delete(`/tools/${deleteId}`);
      setTools(tools.filter((t) => t.id !== deleteId));

      if (removeRef.current) {
        removeRef.current.click();
      }
    } catch (error) {
      toast.error(`Error deleting ${toolDeleteName} tool`);
    }

    setLoading(false);
  }, [deleteId, toolDeleteName, tools]);

  const handleShowDeleteModal = useCallback((id) => {
    setDeleteId(id);
    setShowDelete(true);
  }, []);

  const handleCancel = useCallback(() => {
    if (removeRef.current) {
      removeRef.current.click();
    }

    setDeleteId(null);
  }, []);

  const resetAddForm = useCallback(() => {
    setShowForm(false);
    setTitle('');
    setLink('');
    setDescription('');
    setTags([]);
  }, []);

  const onSearch = useCallback(debounce(handleSearch, 700), [onlyTags]);

  useEffect(() => {
    loadTools();
  }, [loadTools]);

  return (
    <Container>
      {showForm && (
        <Modal onClose={resetAddForm}>
          <h4 className="form-title">
            {/* <MdAdd size={30} color={theme.colors.ink} /> Add new tool */}
            <img className="add-title-icon" src={plusIcon} alt="Add Icon" />
            &nbsp; Add new tool
          </h4>
          <form className="form-add-tool" onSubmit={handleSubmit}>
            <label htmlFor="title">
              Tool Name:
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Tool Name"
                id="name"
                required
              />
            </label>
            <label htmlFor="link">
              Tool Link:
              <Input
                value={link}
                onChange={(e) => setLink(e.target.value)}
                type="text"
                placeholder="Tool Link"
                id="link"
                required
              />
            </label>
            <label htmlFor="description">
              Tool Description:
              <TextArea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="Tool Description"
                id="description"
                required
              />
            </label>
            <label htmlFor="tags">
              Tool Tags:
              <Input
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                type="text"
                placeholder="Tool Tags"
                id="tags"
                required
              />
              <Info>*insert tags separated by space</Info>
            </label>
            <Button type="submit" loading={loading} title="Add Tool">
              Add Tool
            </Button>
          </form>
        </Modal>
      )}
      {showDelete && (
        <Modal ref={removeRef} onClose={() => setShowDelete(false)}>
          <h4 className="form-title">
            {/* <MdAdd size={30} color={theme.colors.ink} /> Add new tool */}
            <img className="add-title-icon" src={closeIcon} alt="Add Icon" />
            &nbsp; Remove tool
          </h4>
          <p className="question">
            Are you sure you want to remove <b>{toolDeleteName}</b>?
          </p>
          <div className="home__button-container">
            <Button variant="primary" onClick={handleCancel} title="Cancel">
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDelete} title="Confirm remove">
              Yes, remove
            </Button>
          </div>
        </Modal>
      )}
      <Content>
        <header className="header-container">
          <h1>VUTTR</h1>
          <Switch
            onChangeValue={handleChangeTheme}
            value={theme.name}
            unCheckedValue="light"
            checkedValue="dark"
            active={theme.name === 'dark'}
            variant="primary"
          />
        </header>
        <h4>Very Useful Tools to Remember</h4>

        <NavbarContainer>
          <LeftContainer>
            <form onSubmit={() => {}}>
              <Input
                placeholder="Search tool"
                onChange={(e) => onSearch(e.target.value)}
              />
            </form>
            <Switch
              active={onlyTags}
              value={onlyTags}
              onChangeValue={handleToggleSearch}
            />
            <span>search in tags only</span>
          </LeftContainer>
          <Button type="button" onClick={() => setShowForm(true)} title="Add new Tool">
            <>
              <MdAdd size={30} color={theme.colors.white} /> Add
            </>
          </Button>
        </NavbarContainer>

        {!empty ? (
          <Scrollbar>
            {tools.map((tool) => (
              <ToolsItem
                tool={tool}
                key={String(tool.id)}
                handleDelete={handleShowDeleteModal}
              />
            ))}
          </Scrollbar>
        ) : (
          <Card className="mt-2">
            <NoTools>
              <h2>No tools for this moment :(</h2>
            </NoTools>
          </Card>
        )}
      </Content>
    </Container>
  );
}

Home.propTypes = {
  changeTheme: PropTypes.func.isRequired,
};

export default memo(Home);
