import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Link from 'next/link';
import cn from 'classnames';
import debounce from 'lodash/debounce';
import Typography from '@mui/material/Typography';
import useGetPostTagChip from '@Hook/useGetPostTagChip';
import { POST_CARD_DIMENSION_RATIO } from '@Model/GeneralModels';
import { useColorScheme } from '@Theme/index';
import scopedStyles from './index.module.css';
import type { PostCardProps } from './types';

enum POST_CARD_CONTAINER_RATIO {
  DEFAULT = 'DEFAULT',
  RECTANGLE = 'RECTANGLE',
  SQUARE = 'SQUARE',
}

function PostCard(props: PostCardProps): React.ReactElement {
  /* States */
  const { coverImage, postTitle, postDate, postCategories, postUrl } = props;
  const [containerRatio, setContainerRatio] =
    useState<POST_CARD_CONTAINER_RATIO>(POST_CARD_CONTAINER_RATIO.DEFAULT);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const PostTagChips = useGetPostTagChip(postCategories);
  const { mode } = useColorScheme();

  /* Data */
  const containerStyle = useMemo(() => {
    switch (containerRatio) {
      case POST_CARD_CONTAINER_RATIO.RECTANGLE:
        return scopedStyles.rectangle;
      case POST_CARD_CONTAINER_RATIO.SQUARE:
        return scopedStyles.square;
      default:
        return '';
    }
  }, [containerRatio]);
  const cardBgColor = useMemo(() => {
    if (mode === 'dark') {
      return 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))';
    }
    if (mode === 'light') {
      return 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.4))';
    }
    return '';
  }, [mode]);

  /* Functions */
  const getContainerDimension = useCallback((): void => {
    const dimension = containerRef.current?.getBoundingClientRect();
    if (dimension) {
      const { width, height } = dimension;
      if (width / height >= POST_CARD_DIMENSION_RATIO) {
        setContainerRatio(POST_CARD_CONTAINER_RATIO.RECTANGLE);
      } else {
        setContainerRatio(POST_CARD_CONTAINER_RATIO.SQUARE);
      }
    }
  }, []);
  const getContainerDimensionDebounce = debounce(getContainerDimension, 100);

  /* Hooks */
  useEffect(() => {
    getContainerDimension();
    window.addEventListener('resize', getContainerDimensionDebounce);
    return () => window.removeEventListener('resize', getContainerDimension);
  }, []);

  /* Views */
  const FinalPostCard = useMemo(() => {
    switch (containerRatio) {
      case POST_CARD_CONTAINER_RATIO.RECTANGLE:
        return (
          <React.Fragment>
            <div
              className={cn(scopedStyles.post_image)}
              style={{ backgroundImage: coverImage }}
            />
            <div className={cn(scopedStyles.post_text)}>
              <Link href={postUrl}>
                <Typography variant="h3">{postTitle}</Typography>
              </Link>
              <Typography
                variant="body1"
                className={cn(scopedStyles.post_date)}
              >
                {postDate}
              </Typography>
              <div className={cn(scopedStyles.tag_container)}>
                {PostTagChips}
              </div>
            </div>
          </React.Fragment>
        );
      case POST_CARD_CONTAINER_RATIO.SQUARE:
        return (
          <div
            className={cn(scopedStyles.post_image)}
            style={{
              backgroundImage: `${cardBgColor}, ${coverImage}`,
            }}
          >
            <Link href={postUrl}>
              <Typography variant="h3">{postTitle}</Typography>
            </Link>
            <Typography variant="body1" className={cn(scopedStyles.post_date)}>
              {postDate}
            </Typography>
            <div className={cn(scopedStyles.tag_container)}>
              {PostTagChips}
            </div>
          </div>
        );
      default:
        return <React.Fragment />;
    }
  }, [containerRatio, coverImage, postTitle, postDate, postUrl, cardBgColor]);

  /* Main */
  return (
    <div
      ref={containerRef}
      className={cn(scopedStyles.container, containerStyle)}
    >
      {FinalPostCard}
    </div>
  );
}

export default memo(PostCard);
