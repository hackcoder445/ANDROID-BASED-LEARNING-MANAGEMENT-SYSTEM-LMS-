import React from 'react';
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Colors, Typography } from '@/constants/theme';
import { ErrorState } from './ErrorState';
import { EmptyState } from './EmptyState';
import { OfflineBanner } from './OfflineBanner';
import { SkeletonCard } from '@/components/loaders/Skeleton';
import { useAppStore } from '@/state/appStore';

type Props = {
  title: string;
  subtitle?: string;
  loading?: boolean;
  isEmpty?: boolean;
  error?: string | null;
  onRetry?: () => void;
  onRefresh?: () => void;
  children?: React.ReactNode;
};

export const FeatureScaffold = ({
  title,
  subtitle,
  loading,
  isEmpty,
  error,
  onRetry,
  onRefresh,
  children,
}: Props) => {
  const isOffline = useAppStore((s) => s.isOffline);

  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={styles.content}
      refreshControl={<RefreshControl refreshing={false} onRefresh={onRefresh ?? (() => undefined)} />}
    >
      {isOffline ? <OfflineBanner /> : null}
      <View>
        <Text style={styles.title}>{title}</Text>
        {!!subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>

      {loading ? (
        <>
          <SkeletonCard />
          <SkeletonCard />
        </>
      ) : error ? (
        <ErrorState message={error} onRetry={onRetry} />
      ) : isEmpty ? (
        <EmptyState title="No content yet" subtitle="This section will show items as soon as they are available." />
      ) : (
        children
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.background },
  content: { padding: 16, gap: 16, paddingBottom: 120 },
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 24 },
  subtitle: { color: Colors.textMuted, fontFamily: Typography.body, marginTop: 4 },
});
